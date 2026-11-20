explainer.fig('ripple-two-layer-blend-graph', /* html */ `
<svg viewBox="0 0 840 342" aria-label="第四步的 graph：複製出第二層接 Ripple1，兩層的 Normal Strength 輸出用 Normal Blend 混合，再經 Normal Strength (Strength 接 RippleStrength) 接到 Normal (Tangent Space)">
<path class="ln" d="M148,83 C170,83 174,53 196,53" />
<path class="ln" d="M148,163 C170,163 174,69 196,69" />
<g class="is-new">
<path class="ln" d="M148,83 C170,83 174,193 196,193" />
</g>
<g class="is-new">
<path class="ln" d="M148,163 C170,163 174,209 196,209" />
</g>
<g class="is-new">
<path class="ln" d="M148,243 C170,243 174,225 196,225" />
</g>
<g class="is-new">
<path class="ln" d="M148,323 C170,323 174,241 196,241" />
</g>
<g class="is-new">
<path class="ln" d="M428,53 C450,53 448,113 470,113" />
</g>
<g class="is-new">
<path class="ln" d="M428,193 C450,193 448,129 470,129" />
</g>
<g class="is-new">
<path class="ln" d="M588,113 C610,113 590,119 612,119" />
</g>
<g class="is-new">
<path class="ln" d="M588,253 C610,253 590,135 612,135" />
</g>
<g class="is-new">
<path class="ln" d="M736,119 C758,119 732,125 754,125" />
</g>
<rect class="box" x="8" y="40" width="140" height="56" rx="4" />
<text class="t-b" x="15" y="55">Position → Swizzle</text>
<text class="t-s" x="15" y="70">xz (第二步的)</text>
<text class="t-m" x="141" y="87" text-anchor="end">Out</text>
<rect class="box c3" x="8" y="120" width="140" height="56" rx="4" />
<text class="t-b" x="15" y="135">WaterTime</text>
<text class="t-s" x="15" y="150">Property (已有)</text>
<text class="t-m" x="141" y="167" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box c3" x="8" y="200" width="140" height="56" rx="4" />
<text class="t-b" x="15" y="215">Ripple1</text>
<text class="t-s" x="15" y="230">Property</text>
<text class="t-m" x="141" y="247" text-anchor="end">Out</text>
</g>
<rect class="box c3" x="8" y="280" width="140" height="56" rx="4" />
<text class="t-b" x="15" y="295">RippleNormalTex</text>
<text class="t-s" x="15" y="310">Property (已有)</text>
<text class="t-m" x="141" y="327" text-anchor="end">Out</text>
<rect class="box" x="196" y="10" width="232" height="72" rx="4" />
<text class="t-b" x="203" y="25">第一層 (第二步那串)</text>
<text class="t-s" x="203" y="40">Ripple0 → … → Normal Strength</text>
<text class="t-m" x="203" y="57">(x, z)</text>
<text class="t-m" x="203" y="73">WaterTime</text>
<text class="t-m" x="421" y="57" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box" x="196" y="150" width="232" height="104" rx="4" />
<text class="t-b" x="203" y="165">第二層 (複製第一層)</text>
<text class="t-s" x="203" y="180">Ripple1 → … → Normal Strength</text>
<text class="t-m" x="203" y="197">(x, z)</text>
<text class="t-m" x="203" y="213">WaterTime</text>
<text class="t-m" x="203" y="229">Ripple1</text>
<text class="t-m" x="203" y="245">Texture</text>
<text class="t-m" x="421" y="197" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="470" y="70" width="118" height="72" rx="4" />
<text class="t-b" x="477" y="85">Normal Blend</text>
<text class="t-s" x="477" y="100">Mode: Default</text>
<text class="t-m" x="477" y="117">A</text>
<text class="t-m" x="477" y="133">B</text>
<text class="t-m" x="581" y="117" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box c3" x="470" y="210" width="118" height="56" rx="4" />
<text class="t-b" x="477" y="225">RippleStrength</text>
<text class="t-s" x="477" y="240">Property</text>
<text class="t-m" x="581" y="257" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="612" y="90" width="124" height="58" rx="4" />
<text class="t-b" x="619" y="105">Normal Strength</text>
<text class="t-m" x="619" y="123">In</text>
<text class="t-m" x="619" y="139">Strength</text>
<text class="t-m" x="729" y="123" text-anchor="end">Out</text>
</g>
<rect class="box c2" x="754" y="96" width="80" height="42" rx="4" />
<text class="t-b" x="761" y="111">Fragment</text>
<text class="t-m" x="761" y="129">Normal</text>
</svg>`)
