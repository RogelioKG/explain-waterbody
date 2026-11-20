explainer.fig('scene-color-transmittance-graph', /* html */ `
<svg viewBox="0 0 760 170" aria-label="第一步的 graph：Screen Position (Default) 接 Scene Color 的 UV，Scene Color 乘上 SSG_Absorption 的 Transmittance (τ) 接到 Emission">
<g class="is-new">
<path class="ln" d="M138,63 C160,63 148,63 170,63" />
</g>
<g class="is-new">
<path class="ln" d="M286,63 C308,63 308,79 330,79" />
</g>
<g class="is-new">
<path class="ln" d="M286,153 C308,153 308,95 330,95" />
</g>
<g class="is-new">
<path class="ln" d="M426,79 C448,79 448,85 470,85" />
</g>
<g class="is-new">
<rect class="box" x="8" y="20" width="130" height="56" rx="4" />
<text class="t-b" x="15" y="35">Screen Position</text>
<text class="t-s" x="15" y="50">Mode: Default</text>
<text class="t-m" x="131" y="67" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="170" y="20" width="116" height="56" rx="4" />
<text class="t-b" x="177" y="35">Scene Color</text>
<text class="t-s" x="177" y="50">C_scene</text>
<text class="t-m" x="177" y="67">UV</text>
<text class="t-m" x="279" y="67" text-anchor="end">Out</text>
</g>
<rect class="box c1" x="146" y="110" width="140" height="56" rx="4" />
<text class="t-b" x="153" y="125">SSG_Absorption</text>
<text class="t-s" x="153" y="140">Sub Graph (已有)</text>
<text class="t-m" x="279" y="157" text-anchor="end">Transmittance</text>
<g class="is-new">
<rect class="box" x="330" y="50" width="96" height="58" rx="4" />
<text class="t-b" x="337" y="65">Multiply</text>
<text class="t-m" x="337" y="83">A</text>
<text class="t-m" x="337" y="99">B</text>
<text class="t-m" x="419" y="83" text-anchor="end">Out</text>
</g>
<rect class="box c2" x="470" y="40" width="120" height="74" rx="4" />
<text class="t-b" x="477" y="55">Fragment</text>
<text class="t-m" x="477" y="73">Base Color</text>
<text class="t-m" x="477" y="89">Emission</text>
<text class="t-m" x="477" y="105">Alpha</text>
<text class="t-s" x="600" y="64">Base Color、Alpha 不變</text>
</svg>`)
