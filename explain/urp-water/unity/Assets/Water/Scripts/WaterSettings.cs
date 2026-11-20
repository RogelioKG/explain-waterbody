using UnityEngine;

namespace Water
{
    // 一片水一份的設定資產：波浪、深淺的顏色與清澈度、泡沫、細波紋與高光、折射、反射、焦散、入水的漣漪。
    // 水面的 shader 經由 WaterBody 寫進材質讀到這些值；C# 端也讀同一份。
    [CreateAssetMenu(fileName = "SO_WaterSettings", menuName = "Water/Water Settings")]
    public class WaterSettings : ScriptableObject
    {
        public const int WaveCount = 4;
        public const float MinWavelength = 0.5f;
        public const float MinClarity = 0.1f;
        public const float MinFoamWidth = 0.01f;
        public const int RippleLayerCount = 2;
        public const float MinRippleFadeDistance = 1f;
        public const float MinFresnelPower = 1f;
        public const int CausticLayerCount = 2;
        public const float MinCausticPower = 1f;
        public const float MinImpactRippleLifetime = 0.1f;
        public const float MinImpactRippleWidth = 0.01f;

        [System.Serializable]
        public struct Wave
        {
            public Vector2 direction;   // 前進方向 (世界的 X、Z)；長度不重要，shader 會把它變成長度 1
            public float steepness;     // 陡度，0 到 1
            public float wavelength;    // 波長，公尺
        }

        [System.Serializable]
        public struct RippleLayer
        {
            public Vector2 velocity;    // 花紋漂移的速度 (世界的 X、Z)，公尺 / 秒
            public float scale;         // 貼圖每公尺重複幾次，越大波紋越細
            public float strength;      // 這一層 normal 的強度 (Normal Strength)：0 是平的，1 是貼圖原樣
        }

        [System.Serializable]
        public struct CausticLayer
        {
            public Vector2 velocity;    // Voronoi 花紋漂移的速度 (世界的 X、Z)，公尺 / 秒
            public float density;       // 每公尺幾格，越大網眼越小
            public float angleOffset;   // Voronoi 的 AngleOffset：格子裡的點怎麼分布
        }

        public float heightScale = 1f;  // 浪高總控：乘在所有波的振幅上

        public Wave[] waves =
        {
            new Wave { direction = new Vector2(1f, 0.3f), steepness = 0.16f, wavelength = 9f },
            new Wave { direction = new Vector2(-0.4f, 1f), steepness = 0.12f, wavelength = 6f },
            new Wave { direction = new Vector2(0.7f, -0.6f), steepness = 0.10f, wavelength = 4f },
            new Wave { direction = new Vector2(-0.9f, -0.5f), steepness = 0.07f, wavelength = 2.7f },
        };

        [ColorUsage(false)]
        public Color shallowColor = new Color(0.302f, 0.769f, 0.710f);  // 淺水的顏色 (4DC4B5)
        [ColorUsage(false)]
        public Color deepColor = new Color(0.043f, 0.204f, 0.251f);     // 深水的顏色 (0B3440)
        public float clarity = 5f;          // 清澈度：看進去幾公尺之後幾乎看不到底
        [ColorUsage(false)]
        public Color foamColor = Color.white;
        public float foamWidth = 0.6f;      // 水的厚度在幾公尺以內的地方有泡沫
        public float foamNoiseScale = 0.4f; // 泡沫貼圖每公尺重複幾次，越大越細碎

        public RippleLayer[] rippleLayers =
        {
            new RippleLayer { velocity = new Vector2(0.3f, 0.1f), scale = 0.1f, strength = 0.35f },
            new RippleLayer { velocity = new Vector2(-0.15f, 0.25f), scale = 0.25f, strength = 0.35f },
        };
        public float rippleStrength = 1f;       // 細波紋的整體強度：0 是平的，1 是原樣
        public float rippleFadeDistance = 60f;  // 離攝影機多遠之後細波紋完全消失，公尺
        public float smoothness = 0.9f;         // 0 到 1，越大高光越小、越銳利
        public float refractionStrength = 0.25f; // 折射的強度：水下的畫面跟著水面的傾斜偏移多少，0 是不扭曲
        public float fresnelPower = 4f;         // 越小，越靠近腳邊就開始像鏡子；4 和 URP Lit 的反射一致
        public CausticLayer[] causticLayers =
        {
            new CausticLayer { velocity = new Vector2(0.3f, 0.1f), density = 0.7f, angleOffset = 2f },
            new CausticLayer { velocity = new Vector2(-0.15f, 0.25f), density = 1.1f, angleOffset = 2f },
        };
        public float causticPower = 3f;         // 越大，Voronoi 亮紋越細、越集中在網上
        public float causticStrength = 3f;      // Voronoi 亮紋的強度：0 是沒有焦散
        public float causticDistortion = 0.25f; // 水面的傾斜推動 Voronoi 花紋的比例：0 是不扭動，0.25 對應小角度的折射

        public float impactRippleSpeed = 0.8f;     // 入水的漣漪往外擴散的速度，公尺 / 秒
        public float impactRippleLifetime = 2.5f;  // 漣漪幾秒後完全消失
        public float impactRippleWidth = 0.3f;     // 環的半寬：環的中線往內、往外各幾公尺有起伏
        public float impactRippleSlope = 0.4f;     // 強度 1 的環最陡處沿半徑方向的斜率 (0.4 約 22 度)
        public float impactFoamWidth = 0.1f;       // 強度 1 時白色環帶的半寬，公尺；0 是沒有白環

        // 第 index 個波排成 shader 要的 Vector4：(方向 x, 方向 z, 陡度, 波長)。
        // 不合理的值在這裡修正，shader 和 C# 端拿到的一定是同一組合理的值。
        public Vector4 GetPackedWave(int index)
        {
            Wave w = (waves != null && index < waves.Length) ? waves[index] : default;
            Vector2 d = w.direction;
            if (d == Vector2.zero)
            {
                d = Vector2.right;  // 方向是 0 時 shader 無法把它變成長度 1
            }
            return new Vector4(d.x, d.y, Mathf.Clamp01(w.steepness), Mathf.Max(w.wavelength, MinWavelength));
        }

        // 第 index 層細波紋排成 shader 要的 Vector4：(速度 x, 速度 z, Scale, 強度)。
        public Vector4 GetPackedRipple(int index)
        {
            RippleLayer r = (rippleLayers != null && index < rippleLayers.Length) ? rippleLayers[index] : default;
            return new Vector4(r.velocity.x, r.velocity.y, Mathf.Max(r.scale, 0f), Mathf.Max(r.strength, 0f));
        }

        // 第 index 層焦散排成 shader 要的 Vector4：(速度 x, 速度 z, 每公尺幾格, AngleOffset)。
        public Vector4 GetPackedCaustic(int index)
        {
            CausticLayer c = (causticLayers != null && index < causticLayers.Length) ? causticLayers[index] : default;
            return new Vector4(c.velocity.x, c.velocity.y, Mathf.Max(c.density, 0f), c.angleOffset);
        }

        // 入水的漣漪排成 shader 要的 Vector4：(擴散速度, 壽命, 半寬, 最陡處沿半徑方向的斜率)。
        // graph 裡會除以壽命與半寬，不能是 0；速度、沿半徑方向的斜率是負數沒有意義，當成 0。
        public Vector4 GetPackedImpactRipple()
        {
            return new Vector4(
                Mathf.Max(impactRippleSpeed, 0f),
                Mathf.Max(impactRippleLifetime, MinImpactRippleLifetime),
                Mathf.Max(impactRippleWidth, MinImpactRippleWidth),
                Mathf.Max(impactRippleSlope, 0f));
        }

        public float HeightScale => Mathf.Max(heightScale, 0f);

        // 讀取用的值都修正過：graph 裡會算 4.605 ÷ Clarity 與 h ÷ FoamWidth，不能是 0。
        public float Clarity => Mathf.Max(clarity, MinClarity);
        public float FoamWidth => Mathf.Max(foamWidth, MinFoamWidth);
        public float FoamNoiseScale => Mathf.Max(foamNoiseScale, 0f);

        // graph 裡 smoothstep(0, RippleFadeDistance, d)：距離不能是 0。Smoothness block 只用 0 到 1。
        public float RippleStrength => Mathf.Max(rippleStrength, 0f);
        public float RippleFadeDistance => Mathf.Max(rippleFadeDistance, MinRippleFadeDistance);
        public float Smoothness => Mathf.Clamp01(smoothness);

        // 負數會讓偏移反向，沒有意義，當成 0。
        public float RefractionStrength => Mathf.Max(refractionStrength, 0f);

        // graph 裡算 pow(1 − cosθ, FresnelPower)：0 時結果沒有定義，小於 1 也沒有用處，下限 1。
        public float FresnelPower => Mathf.Max(fresnelPower, MinFresnelPower);

        // graph 裡算 pow(Out, CausticPower)：1 時亮度和距離成正比，看不出網；0 時整片一樣亮。下限 1。
        public float CausticPower => Mathf.Max(causticPower, MinCausticPower);

        public float CausticStrength => Mathf.Max(causticStrength, 0f);

        public float CausticDistortion => Mathf.Max(causticDistortion, 0f);

        public float ImpactFoamWidth => Mathf.Max(impactFoamWidth, 0f);

        // 頂點最多被推離原位多遠 (公尺)：所有波的振幅加總，再乘上浪高總控。
        // 振幅 A = 陡度 ÷ k = 陡度 × 波長 ÷ 2π。
        public float MaxDisplacement()
        {
            float sum = 0f;
            for (int i = 0; i < WaveCount; i++)
            {
                Vector4 p = GetPackedWave(i);
                sum += p.z * p.w / (2f * Mathf.PI);
            }
            return sum * HeightScale;
        }

        // 實際的陡度加總 (含浪高總控)。超過 1 時，波峰可能打結。
        public float TotalSteepness()
        {
            float sum = 0f;
            for (int i = 0; i < WaveCount; i++)
            {
                sum += GetPackedWave(i).z;
            }
            return sum * HeightScale;
        }
    }
}
