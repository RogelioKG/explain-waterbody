explainer.fig('refraction-uv-select-sub-graphs', /* html */ `
<svg viewBox="0 0 922 424" aria-label="收成 Sub Graph 之後的主 graph：Transform 的輸出接 SSG_Refraction_UV 的 NormalWS；SSG_Refraction_UV 算出 offset 後的位置，接進 SSG_Refraction_Select 和第四步的 Scene Depth；Scene Depth 的 d1 也接進 SSG_Refraction_Select；它的 FinalUV 接 Scene Color 的 UV，FinalDepth 接第五步的 SSG_Thickness；同一個 Split 的 A 拉到 SSG_Refraction_Select 與 SSG_Thickness；UV 不接的 Scene Depth 也接 SSG_Refraction_UV 的 SceneDepth">
<g class="is-new">
<path class="ln" d="M148,53 C170,53 166,63 188,63" />
</g>
<g class="is-new">
<path class="ln" d="M148,123 C170,123 166,79 188,79" />
</g>
<g class="is-new">
<path class="ln" d="M148,193 C170,193 166,95 188,95" />
</g>
<g class="is-new">
<path class="ln" d="M148,263 C170,263 166,111 188,111" />
</g>
<g class="is-new">
<path class="ln" d="M148,333 C170,333 166,127 188,127" />
</g>
<g class="is-new">
<path class="ln" d="M368,63 L392,63" />
</g>
<g class="is-new">
<path class="ln" d="M368,63 C380,63 380,193 392,193 L526,193" />
</g>
<g class="is-new">
<path class="ln" d="M502,63 C514,63 514,209 526,209" />
</g>
<g class="is-new">
<path class="ln" d="M148,263 C299.2,263 374.8,225 526,225" />
</g>
<g class="is-new">
<path class="ln" d="M148,333 C299.2,333 374.8,241 526,241" />
</g>
<g class="is-new">
<path class="ln" d="M148,403 C299.2,403 374.8,257 526,257" />
</g>
<g class="is-new">
<path class="ln" d="M722,193 C736,193 736,63 750,63" />
</g>
<g class="is-new">
<path class="ln" d="M722,209 C736,209 736,263 750,263" />
</g>
<path class="ln" d="M148,403 C388,403 510,279 750,279" />
<rect class="box" x="8" y="10" width="140" height="56" rx="4" />
<text class="t-b" x="15" y="25">Transform</text>
<text class="t-s" x="15" y="40">Tangent → World</text>
<text class="t-m" x="141" y="57" text-anchor="end">Out</text>
<rect class="box c1" x="8" y="80" width="140" height="56" rx="4" />
<text class="t-b" x="15" y="95">SSG_Thickness</text>
<text class="t-s" x="15" y="110">原本的 (已有)</text>
<text class="t-m" x="141" y="127" text-anchor="end">Thickness</text>
<rect class="box c3" x="8" y="150" width="140" height="56" rx="4" />
<text class="t-b" x="15" y="165">RefractionStrength</text>
<text class="t-s" x="15" y="180">Property</text>
<text class="t-m" x="141" y="197" text-anchor="end">Out</text>
<rect class="box" x="8" y="220" width="140" height="56" rx="4" />
<text class="t-b" x="15" y="235">Screen Position</text>
<text class="t-s" x="15" y="250">Default (u0)</text>
<text class="t-m" x="141" y="267" text-anchor="end">Out</text>
<rect class="box" x="8" y="290" width="140" height="56" rx="4" />
<text class="t-b" x="15" y="305">Scene Depth</text>
<text class="t-s" x="15" y="320">UV 不接 (ds)</text>
<text class="t-m" x="141" y="337" text-anchor="end">Out</text>
<rect class="box" x="8" y="360" width="140" height="56" rx="4" />
<text class="t-b" x="15" y="375">Split</text>
<text class="t-s" x="15" y="390">A = dw</text>
<text class="t-m" x="141" y="407" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box c1" x="188" y="20" width="180" height="120" rx="4" />
<text class="t-b" x="195" y="35">SSG_Refraction_UV</text>
<text class="t-s" x="195" y="50">Sub Graph</text>
<text class="t-m" x="195" y="67">NormalWS</text>
<text class="t-m" x="195" y="83">Thickness</text>
<text class="t-m" x="195" y="99">Strength</text>
<text class="t-m" x="195" y="115">ScreenPosition</text>
<text class="t-m" x="195" y="131">SceneDepth</text>
<text class="t-m" x="361" y="67" text-anchor="end">RefractedUV</text>
</g>
<rect class="box" x="392" y="20" width="110" height="56" rx="4" />
<text class="t-b" x="399" y="35">Scene Depth</text>
<text class="t-s" x="399" y="50">第四步的 (d1)</text>
<text class="t-m" x="399" y="67">UV</text>
<text class="t-m" x="495" y="67" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box c1" x="526" y="150" width="196" height="120" rx="4" />
<text class="t-b" x="533" y="165">SSG_Refraction_Select</text>
<text class="t-s" x="533" y="180">Sub Graph</text>
<text class="t-m" x="533" y="197">RefractedUV</text>
<text class="t-m" x="533" y="213">RefractedDepth</text>
<text class="t-m" x="533" y="229">ScreenPosition</text>
<text class="t-m" x="533" y="245">SceneDepth</text>
<text class="t-m" x="533" y="261">SurfaceDepth</text>
<text class="t-m" x="715" y="197" text-anchor="end">FinalUV</text>
<text class="t-m" x="715" y="213" text-anchor="end">FinalDepth</text>
</g>
<rect class="box" x="750" y="20" width="110" height="56" rx="4" />
<text class="t-b" x="757" y="35">Scene Color</text>
<text class="t-s" x="757" y="50">已有</text>
<text class="t-m" x="757" y="67">UV</text>
<text class="t-m" x="853" y="67" text-anchor="end">Out</text>
<text class="t-s" x="757" y="95">→ Multiply「背景 τ」的 A</text>
<rect class="box c1" x="750" y="220" width="164" height="72" rx="4" />
<text class="t-b" x="757" y="235">SSG_Thickness</text>
<text class="t-s" x="757" y="250">第五步的 (已有)</text>
<text class="t-m" x="757" y="267">SceneDepth</text>
<text class="t-m" x="757" y="283">SurfaceDepth</text>
<text class="t-m" x="907" y="267" text-anchor="end">Thickness</text>
<text class="t-s" x="757" y="320">Thickness → SSG_Absorption</text>
</svg>`)
