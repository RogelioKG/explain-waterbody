using UnityEngine;
using UnityEngine.Rendering.Universal;

namespace Water
{
    // 加在 Universal Renderer 上。每台攝影機每一幀判斷：攝影機在某片湖的水面下時，
    // 把那片湖設定資產的顏色與清澈度寫進霧的材質，再加入 UnderwaterFogPass。
    // 整個關掉：Renderer 的 Inspector 裡，這個 feature 標題列的勾選框。
    public class UnderwaterFogFeature : ScriptableRendererFeature
    {
        static readonly int ShallowColorId = Shader.PropertyToID("_ShallowColor");
        static readonly int DeepColorId = Shader.PropertyToID("_DeepColor");
        static readonly int ClarityId = Shader.PropertyToID("_Clarity");

        [SerializeField] Material fogMaterial;   // M_UnderwaterFog

        UnderwaterFogPass pass;

        // 載入、啟用、在 Inspector 改值時呼叫
        public override void Create()
        {
            pass = new UnderwaterFogPass();
        }

        // 每台攝影機每一幀呼叫一次；不在水下就不加 pass，不付全螢幕的成本
        public override void AddRenderPasses(ScriptableRenderer renderer, ref RenderingData renderingData)
        {
            if (fogMaterial == null)
            {
                return;
            }
            // 材質預覽與 Reflection Probe 烘焙用的攝影機不加霧；Scene 視窗的攝影機要加
            CameraType cameraType = renderingData.cameraData.cameraType;
            if (cameraType == CameraType.Preview || cameraType == CameraType.Reflection)
            {
                return;
            }

            Vector3 eye = renderingData.cameraData.camera.transform.position;
            if (!WaterBody.TryFind(eye, out WaterBody body) || body.Settings == null)
            {
                return;
            }
            if (eye.y >= body.GetSurfaceHeight(eye))
            {
                return;
            }

            // 參數的唯一來源是攝影機所在那片湖的設定資產；直接改材質上的值會被蓋回
            // 顏色用 SetColor：和 WaterBody 寫水面材質的方式相同
            WaterSettings settings = body.Settings;
            fogMaterial.SetColor(ShallowColorId, settings.shallowColor);
            fogMaterial.SetColor(DeepColorId, settings.deepColor);
            fogMaterial.SetFloat(ClarityId, settings.Clarity);

            pass.Setup(fogMaterial);
            renderer.EnqueuePass(pass);
        }
    }
}
