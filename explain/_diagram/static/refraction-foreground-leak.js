explainer.fig('refraction-foreground-leak', /* html */ `
<svg viewBox="0 0 640 240" aria-label="P 旁邊的 sample point offset 後落在露出水面的石頭上；石頭的 depth d1 比水面的 depth dw 小，表示它在水面前方">
<path class="ln" style="stroke-width:2" d="M30,130 H610" />
<text class="t-s" x="610" y="122" text-anchor="end">水面</text>
<path class="ln" style="stroke-dasharray:4 3" d="M30,210 H610" />
<text class="t-s" x="610" y="226" text-anchor="end">湖底</text>
<path d="M262,210 C258,160 264,104 300,100 C336,104 342,160 338,210 Z" style="fill:var(--ink);fill-opacity:0.3;stroke:var(--ink);stroke-opacity:0.5" />
<text class="t-s" x="300" y="202" text-anchor="middle">石頭</text>
<circle cx="40" cy="40" r="5" style="fill:var(--f1);stroke:none" />
<text class="t-s" x="50" y="34">攝影機</text>
<path class="ln arrow" style="stroke-width:1.6" d="M40,40 L457.9,130" />
<circle cx="457.9" cy="130" r="3.5" style="fill:var(--ink);stroke:none" />
<text class="t-b" x="463.9" y="122">P (水面)</text>
<path class="ln arrow cost-ln" style="stroke-width:1.6;stroke-dasharray:5 3" d="M40,40 L270,116" />
<circle cx="270" cy="116" r="3.5" style="fill:var(--cost);stroke:none" />
<text class="t-cost" x="256" y="144" text-anchor="end">Q (石頭露出水面的部分)</text>
<text class="t-s" x="30" y="232">實線：P 這個像素的視線，水面的 depth dw　虛線：P 讀取的 u1 那格拍到的 Q，depth d1 &lt; dw</text>
</svg>`)
