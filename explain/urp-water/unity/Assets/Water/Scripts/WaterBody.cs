using System.Collections.Generic;
using UnityEngine;
#if UNITY_EDITOR
using UnityEditor;
#endif

namespace Water
{
    // 一片水一個，掛在水面物件上 (和 WaterMesh 同一個物件)。
    // 1. 把設定資產的參數 (波浪、顏色、泡沫、細波紋、高光、折射、反射、焦散、入水的漣漪) 寫進這片水的材質
    // 2. 把共用的時間傳給所有水面 shader
    // 3. 依浪高放大 bounds，避免頂點被 shader 抬高後整片水被剔除
    // 4. 讓 C# 查詢任一點的水面高度 (TryFind 找出所在的湖，GetSurfaceHeight 算出高度)
    // 水面高度來自物件的位置：shader 用頂點的 world position 計算，物件的 Y 就是靜止時的水面高度。
    // 假設：水面物件的 Scale 是 (1, 1, 1)，大小由 WaterMesh 的 Size 決定。
    [ExecuteAlways]
    [RequireComponent(typeof(MeshFilter), typeof(MeshRenderer))]
    public class WaterBody : MonoBehaviour
    {
        static readonly int WaterTimeId = Shader.PropertyToID("_WaterTime");
        static readonly int WaveHeightScaleId = Shader.PropertyToID("_WaveHeightScale");
        static readonly int ShallowColorId = Shader.PropertyToID("_ShallowColor");
        static readonly int DeepColorId = Shader.PropertyToID("_DeepColor");
        static readonly int ClarityId = Shader.PropertyToID("_Clarity");
        static readonly int FoamColorId = Shader.PropertyToID("_FoamColor");
        static readonly int FoamWidthId = Shader.PropertyToID("_FoamWidth");
        static readonly int FoamNoiseScaleId = Shader.PropertyToID("_FoamNoiseScale");
        static readonly int RippleStrengthId = Shader.PropertyToID("_RippleStrength");
        static readonly int RippleFadeDistanceId = Shader.PropertyToID("_RippleFadeDistance");
        static readonly int SmoothnessId = Shader.PropertyToID("_Smoothness");
        static readonly int RefractionStrengthId = Shader.PropertyToID("_RefractionStrength");
        static readonly int FresnelPowerId = Shader.PropertyToID("_FresnelPower");
        static readonly int CausticPowerId = Shader.PropertyToID("_CausticPower");
        static readonly int CausticStrengthId = Shader.PropertyToID("_CausticStrength");
        static readonly int CausticDistortionId = Shader.PropertyToID("_CausticDistortion");
        static readonly int ImpactRippleId = Shader.PropertyToID("_ImpactRipple");
        static readonly int ImpactFoamWidthId = Shader.PropertyToID("_ImpactFoamWidth");
        static readonly int[] RippleIds =
        {
            Shader.PropertyToID("_Ripple0"),
            Shader.PropertyToID("_Ripple1"),
        };
        static readonly int[] CausticIds =
        {
            Shader.PropertyToID("_Caustic0"),
            Shader.PropertyToID("_Caustic1"),
        };
        static readonly int[] WaveIds =
        {
            Shader.PropertyToID("_Wave0"),
            Shader.PropertyToID("_Wave1"),
            Shader.PropertyToID("_Wave2"),
            Shader.PropertyToID("_Wave3"),
        };

        const int SolveIterations = 4;   // 反推原始位置的次數，固定為常數，成本可預估

        // 所有啟用中的水面：OnEnable 加入、OnDisable 移除，兩者一定成對呼叫，所以不需要另外清空。
        // 湖彼此不重疊，所以依位置找湖時取第一個符合的即可。
        static readonly List<WaterBody> active = new List<WaterBody>();

        [SerializeField] WaterSettings settings;
        [SerializeField] bool animateInEditMode = true;   // 不按 Play 時也讓水面動

        MeshFilter meshFilter;
        MeshRenderer meshRenderer;
        bool warnedSteepness;

        public WaterSettings Settings => settings;

        void OnEnable()
        {
            meshFilter = GetComponent<MeshFilter>();
            meshRenderer = GetComponent<MeshRenderer>();
            if (!active.Contains(this))
            {
                active.Add(this);
            }
        }

        void OnDisable()
        {
            active.Remove(this);
            if (meshRenderer != null)
            {
                meshRenderer.ResetLocalBounds();
            }
        }

        void Update()
        {
            Shader.SetGlobalFloat(WaterTimeId, CurrentTime());

            if (settings != null)
            {
                WriteMaterial();
                UpdateBounds();
                CheckSteepness();
            }

#if UNITY_EDITOR
            if (animateInEditMode && !Application.IsPlaying(gameObject))
            {
                EditorApplication.QueuePlayerLoopUpdate();
            }
#endif
        }

        // 找出 worldPosition 所在的湖 (只看 x、z)。不在任何一片湖的範圍內時回傳 false。
        public static bool TryFind(Vector3 worldPosition, out WaterBody body)
        {
            for (int i = 0; i < active.Count; i++)
            {
                WaterBody candidate = active[i];
                // 保險：已被 Destroy 的元件和 null 比較會是 true，跳過它
                if (candidate != null && candidate.Covers(worldPosition))
                {
                    body = candidate;
                    return true;
                }
            }
            body = null;
            return false;
        }

        // 位置轉回水面的 local 座標，和平面網格的範圍比 x、z。
        // 不用 Renderer.bounds：它是 world 的軸對齊盒子，水面旋轉時比實際大，而且被 UpdateBounds 放大過。
        bool Covers(Vector3 worldPosition)
        {
            if (meshFilter == null || meshFilter.sharedMesh == null)
            {
                return false;
            }
            Vector3 local = transform.InverseTransformPoint(worldPosition);
            Bounds flat = meshFilter.sharedMesh.bounds;
            return local.x >= flat.min.x && local.x <= flat.max.x
                && local.z >= flat.min.z && local.z <= flat.max.z;
        }

        // worldPosition 正上方 (或正下方) 的水面在世界中的 Y。只看 x、z，輸入的 y 不影響結果。
        public float GetSurfaceHeight(Vector3 worldPosition)
        {
            float restHeight = transform.position.y;
            if (settings == null)
            {
                return restHeight;
            }
            float time = CurrentTime();
            Vector2 target = new Vector2(worldPosition.x, worldPosition.z);

            // 找出「被推到 target 的那個 vertex」原本在哪：p + 水平位移(p) = target。
            // 沒有公式能直接解出 p，用定點迭代：每次把猜測的位移扣回去。陡度加總小於 1 時一定收斂。
            Vector2 p = target;
            for (int i = 0; i < SolveIterations; i++)
            {
                Vector3 guessOffset = WaveOffset(p, time);
                p = target - new Vector2(guessOffset.x, guessOffset.z);
            }
            return restHeight + WaveOffset(p, time).y;
        }

        // 原本在水平位置 positionXZ 的 vertex 被 4 個波推了多少 (世界座標，公尺)。
        // 逐行照抄 GerstnerWaves.hlsl 的位移部分，參數和寫進 Material 的值同一個來源。
        Vector3 WaveOffset(Vector2 positionXZ, float time)
        {
            float heightScale = settings.HeightScale;
            Vector3 offset = Vector3.zero;
            for (int i = 0; i < WaterSettings.WaveCount; i++)
            {
                Vector4 wave = settings.GetPackedWave(i);
                Vector2 d = new Vector2(wave.x, wave.y).normalized;
                float steepness = wave.z * heightScale;
                float k = 6.28318530f / wave.w;
                float omega = Mathf.Sqrt(9.81f * k);
                float phi = k * Vector2.Dot(d, positionXZ) - omega * time;
                float a = steepness / k;
                float s = Mathf.Sin(phi);
                float c = Mathf.Cos(phi);

                offset += new Vector3(d.x * a * c, a * s, d.y * a * c);
            }
            return offset;
        }

        float CurrentTime()
        {
#if UNITY_EDITOR
            if (!Application.IsPlaying(gameObject))
            {
                return (float)EditorApplication.timeSinceStartup;
            }
#endif
            return Time.time;
        }

        // 設定資產是唯一的來源：每一格都把值寫進材質，直接改材質上的值會被蓋回去。
        void WriteMaterial()
        {
            Material material = meshRenderer.sharedMaterial;
            if (material == null)
            {
                return;
            }
            for (int i = 0; i < WaterSettings.WaveCount; i++)
            {
                material.SetVector(WaveIds[i], settings.GetPackedWave(i));
            }
            material.SetFloat(WaveHeightScaleId, settings.HeightScale);

            // 顏色用 SetColor：線性色彩空間下它會把 sRGB 轉成線性，和材質上直接選的顏色一致。
            material.SetColor(ShallowColorId, settings.shallowColor);
            material.SetColor(DeepColorId, settings.deepColor);
            material.SetFloat(ClarityId, settings.Clarity);
            material.SetColor(FoamColorId, settings.foamColor);
            material.SetFloat(FoamWidthId, settings.FoamWidth);
            material.SetFloat(FoamNoiseScaleId, settings.FoamNoiseScale);

            for (int i = 0; i < WaterSettings.RippleLayerCount; i++)
            {
                material.SetVector(RippleIds[i], settings.GetPackedRipple(i));
            }
            material.SetFloat(RippleStrengthId, settings.RippleStrength);
            material.SetFloat(RippleFadeDistanceId, settings.RippleFadeDistance);
            material.SetFloat(SmoothnessId, settings.Smoothness);
            material.SetFloat(RefractionStrengthId, settings.RefractionStrength);
            material.SetFloat(FresnelPowerId, settings.FresnelPower);
            for (int i = 0; i < WaterSettings.CausticLayerCount; i++)
            {
                material.SetVector(CausticIds[i], settings.GetPackedCaustic(i));
            }
            material.SetFloat(CausticDistortionId, settings.CausticDistortion);
            material.SetFloat(CausticPowerId, settings.CausticPower);
            material.SetFloat(CausticStrengthId, settings.CausticStrength);
            material.SetVector(ImpactRippleId, settings.GetPackedImpactRipple());
            material.SetFloat(ImpactFoamWidthId, settings.ImpactFoamWidth);
        }

        // 平面的 bounds 往六個方向各放大「頂點最多被推離多遠」。
        void UpdateBounds()
        {
            Mesh mesh = meshFilter.sharedMesh;
            if (mesh == null)
            {
                return;
            }
            Bounds flat = mesh.bounds;
            float reach = settings.MaxDisplacement();
            Vector3 size = flat.size + new Vector3(2f * reach, 2f * reach, 2f * reach);
            meshRenderer.localBounds = new Bounds(flat.center, size);
        }

        // 選取水面時在 Scene 視窗畫出 UpdateBounds 設的盒子 (黃色線框)，跟著水面旋轉。只在 Editor 畫。
        void OnDrawGizmosSelected()
        {
            if (meshRenderer == null)
            {
                return;
            }
            Gizmos.color = Color.yellow;
            Gizmos.matrix = transform.localToWorldMatrix;
            Bounds box = meshRenderer.localBounds;
            Gizmos.DrawWireCube(box.center, box.size);
        }

        // 陡度加總 (含浪高總控) 超過 1 時警告一次，回到 1 以下再超過時再警告。
        void CheckSteepness()
        {
            bool over = settings.TotalSteepness() > 1f;
            if (over && !warnedSteepness)
            {
                Debug.LogWarning($"WaterBody: total steepness {settings.TotalSteepness():0.00} > 1, wave crests may fold over", this);
            }
            warnedSteepness = over;
        }
    }
}
