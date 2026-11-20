explainer.fig('ripple-layer-sub-graphs', /* html */ `
<svg viewBox="0 0 840 356" aria-label="第七步的 graph：第一層收成 SSG_Ripple_Layer，第二層換成同一個 Sub Graph 的第二個 node。兩個分別接 Ripple0、Ripple1，共用 Position → Swizzle (xz)、WaterTime、RippleNormalTex，NormalTS 接到 Normal Blend 的 A、B">
<path class="ln is-new" d="M148,53 C190,53 198,63 240,63" />
<path class="ln is-new" d="M148,123 C190,123 198,79 240,79" />
<path class="ln is-new" d="M148,193 C190,193 198,95 240,95" />
<path class="ln is-new" d="M148,263 C190,263 198,111 240,111" />
<path class="ln is-new" d="M148,123 C190,123 198,279 240,279" />
<path class="ln is-new" d="M148,193 C190,193 198,295 240,295" />
<path class="ln is-new" d="M148,263 C190,263 198,311 240,311" />
<path class="ln is-new" d="M148,333 C190,333 198,263 240,263" />
<path class="ln is-new" d="M390,63 C432,63 398,153 440,153" />
<path class="ln is-new" d="M390,263 C432,263 398,169 440,169" />
<path class="ln" d="M558,153 C600,153 548,153 590,153" />
<path class="ln" d="M730,153 C772,153 712,153 754,153" />
<rect class="box c3" x="8" y="10" width="140" height="56" rx="4" />
<text class="t-b" x="15" y="25">Ripple0</text>
<text class="t-s" x="15" y="40">Property</text>
<text class="t-m" x="141" y="57" text-anchor="end">Out</text>
<rect class="box" x="8" y="80" width="140" height="56" rx="4" />
<text class="t-b" x="15" y="95">Position → Swizzle</text>
<text class="t-s" x="15" y="110">xz (第二步的)</text>
<text class="t-m" x="141" y="127" text-anchor="end">Out</text>
<rect class="box c3" x="8" y="150" width="140" height="56" rx="4" />
<text class="t-b" x="15" y="165">WaterTime</text>
<text class="t-s" x="15" y="180">Property</text>
<text class="t-m" x="141" y="197" text-anchor="end">Out</text>
<rect class="box c3" x="8" y="220" width="140" height="56" rx="4" />
<text class="t-b" x="15" y="235">RippleNormalTex</text>
<text class="t-s" x="15" y="250">Property</text>
<text class="t-m" x="141" y="267" text-anchor="end">Out</text>
<rect class="box c3" x="8" y="290" width="140" height="56" rx="4" />
<text class="t-b" x="15" y="305">Ripple1</text>
<text class="t-s" x="15" y="320">Property</text>
<text class="t-m" x="141" y="337" text-anchor="end">Out</text>
<rect class="box c1 is-new" x="240" y="20" width="150" height="104" rx="4" />
<text class="t-b" x="247" y="35">SSG_Ripple_Layer</text>
<text class="t-s" x="247" y="50">Sub Graph</text>
<text class="t-m" x="247" y="67">Ripple</text>
<text class="t-m" x="247" y="83">PositionXZ</text>
<text class="t-m" x="247" y="99">ElapsedTime</text>
<text class="t-m" x="247" y="115">NormalTex</text>
<text class="t-m" x="383" y="67" text-anchor="end">NormalTS</text>
<rect class="box c1 is-new" x="240" y="220" width="150" height="104" rx="4" />
<text class="t-b" x="247" y="235">SSG_Ripple_Layer</text>
<text class="t-s" x="247" y="250">Sub Graph</text>
<text class="t-m" x="247" y="267">Ripple</text>
<text class="t-m" x="247" y="283">PositionXZ</text>
<text class="t-m" x="247" y="299">ElapsedTime</text>
<text class="t-m" x="247" y="315">NormalTex</text>
<text class="t-m" x="383" y="267" text-anchor="end">NormalTS</text>
<rect class="box" x="440" y="110" width="118" height="72" rx="4" />
<text class="t-b" x="447" y="125">Normal Blend</text>
<text class="t-s" x="447" y="140">Mode: Default</text>
<text class="t-m" x="447" y="157">A</text>
<text class="t-m" x="447" y="173">B</text>
<text class="t-m" x="551" y="157" text-anchor="end">Out</text>
<rect class="box" x="590" y="110" width="140" height="72" rx="4" />
<text class="t-b" x="597" y="125">Normal Strength</text>
<text class="t-s" x="597" y="140">整體</text>
<text class="t-m" x="597" y="157">In</text>
<text class="t-m" x="597" y="173">Strength ← 淡出</text>
<text class="t-m" x="723" y="157" text-anchor="end">Out</text>
<rect class="box c2" x="754" y="124" width="80" height="42" rx="4" />
<text class="t-b" x="761" y="139">Fragment</text>
<text class="t-m" x="761" y="157">Normal</text>
</svg>`)
