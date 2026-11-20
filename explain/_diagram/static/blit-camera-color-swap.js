explainer.fig('blit-camera-color-swap', /* html */ `
<svg viewBox="0 0 840 190" aria-label="blit：目前的畫面經過霧的材質畫進一張新的貼圖，cameraColor 改指新的這張，之後的透明物件與後處理畫在它上面">
<path class="ln arrow" d="M202,62 H317" />
<text class="t-m" x="260.0" y="54" text-anchor="middle">_BlitTexture</text>
<path class="ln arrow" d="M512,62 H627" />
<text class="t-s" x="570.0" y="54" text-anchor="middle">畫滿每個像素</text>
<path class="ln" stroke-dasharray="3 3" d="M110,150 V98" style="opacity:.5" />
<text class="t-s" x="110" y="168" text-anchor="middle">原本的 cameraColor</text>
<path class="ln arrow" d="M725,146 V99" />
<text class="t-m" x="725" y="162" text-anchor="middle">cameraColor = destination</text>
<text class="t-s" x="725" y="180" text-anchor="middle">之後的 pass 畫在這張</text>
<rect class="box " x="20" y="30" width="180" height="64" rx="5" />
<text class="t-b" x="110.0" y="57" text-anchor="middle">目前的畫面</text>
<text class="t-s" x="110.0" y="75" text-anchor="middle">source</text>
<rect class="box c4" x="320" y="30" width="190" height="64" rx="5" />
<text class="t-b" x="415.0" y="57" text-anchor="middle">M_UnderwaterFog</text>
<text class="t-s" x="415.0" y="75" text-anchor="middle">SG_UnderwaterFog</text>
<rect class="box " x="630" y="30" width="190" height="64" rx="5" />
<text class="t-b" x="725.0" y="57" text-anchor="middle">新的貼圖</text>
<text class="t-s" x="725.0" y="75" text-anchor="middle">destination</text>
</svg>`)
