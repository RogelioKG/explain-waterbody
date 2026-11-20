using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.Rendering.RenderGraphModule;
using UnityEngine.Rendering.RenderGraphModule.Util;
using UnityEngine.Rendering.Universal;

namespace Water
{
    // 水下霧的全螢幕 pass：把目前的畫面經過霧的材質畫到一張新的貼圖，之後的 pass 改用這張。
    // 由 UnderwaterFogFeature 在攝影機位於水面下時加入。
    public class UnderwaterFogPass : ScriptableRenderPass
    {
        const string PassName = "Underwater Fog";

        Material material;

        public UnderwaterFogPass()
        {
            // 不透明物體與天空已經畫完、深度貼圖已經複製；透明物件 (水面) 還沒畫
            renderPassEvent = RenderPassEvent.BeforeRenderingTransparents;
        }

        // 每一幀加入之前由 feature 呼叫
        public void Setup(Material fogMaterial)
        {
            material = fogMaterial;
            // 要讀目前的畫面，畫面必須是一張中介貼圖 (不能直接讀 back buffer)
            requiresIntermediateTexture = true;
            // Fullscreen graph 的 Position 由深度貼圖還原
            ConfigureInput(ScriptableRenderPassInput.Depth);
        }

        public override void RecordRenderGraph(RenderGraph renderGraph, ContextContainer frameData)
        {
            UniversalResourceData resourceData = frameData.Get<UniversalResourceData>();
            // requiresIntermediateTexture 為 true 時不會發生，保險
            if (resourceData.isActiveTargetBackBuffer)
            {
                return;
            }

            // 來源是目前的畫面；目的地是同樣大小、同樣格式的新貼圖 (同一張不能同時讀和寫)
            TextureHandle source = resourceData.activeColorTexture;
            TextureDesc desc = renderGraph.GetTextureDesc(source);
            desc.name = "CameraColor-UnderwaterFog";
            desc.clearBuffer = false;
            TextureHandle destination = renderGraph.CreateTexture(desc);

            // 用材質的第 0 個 pass 畫滿 destination；source 綁到 shader 的 _BlitTexture
            RenderGraphUtils.BlitMaterialParameters blit =
                new RenderGraphUtils.BlitMaterialParameters(source, destination, material, 0);
            renderGraph.AddBlitPass(blit, passName: PassName);

            // 之後的 pass (透明物件、後處理) 改畫在加了霧的這張上，不必再複製回去
            resourceData.cameraColor = destination;
        }
    }
}
