explainer.fig('caustic-scene-color-gain-graph', /* html */ `
<svg viewBox="0 0 840 284" aria-label="第二步後半的 graph：Power 乘上 CausticStrength 再加 1，乘在 Scene Color 上，取代原本接進 Multiply「背景 τ」的 Scene Color">
<g class="is-new">
<path class="ln" d="M178,53 C200,53 178,63 200,63" />
</g>
<g class="is-new">
<path class="ln" d="M178,123 C200,123 178,79 200,79" />
</g>
<g class="is-new">
<path class="ln" d="M290,63 C312,63 290,63 312,63" />
</g>
<g class="is-new">
<path class="ln" d="M178,193 C276.4,193 325.6,153 424,153" />
</g>
<g class="is-new">
<path class="ln" d="M402,63 C424,63 402,169 424,169" />
</g>
<g class="is-new">
<path class="ln" d="M524,153 C546,153 524,203 546,203" />
</g>
<path class="ln" d="M178,263 C325.2,263 398.8,219 546,219" />
<rect class="box" x="8" y="10" width="170" height="56" rx="4" />
<text class="t-b" x="15" y="25">Power</text>
<text class="t-s" x="15" y="40">c (前半的)</text>
<text class="t-m" x="171" y="57" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box c3" x="8" y="80" width="170" height="56" rx="4" />
<text class="t-b" x="15" y="95">CausticStrength</text>
<text class="t-s" x="15" y="110">Property</text>
<text class="t-m" x="171" y="127" text-anchor="end">Out</text>
</g>
<rect class="box" x="8" y="150" width="170" height="56" rx="4" />
<text class="t-b" x="15" y="165">Scene Color</text>
<text class="t-s" x="15" y="180">UV ← FinalUV (已有)</text>
<text class="t-m" x="171" y="197" text-anchor="end">Out</text>
<rect class="box c1" x="8" y="220" width="170" height="56" rx="4" />
<text class="t-b" x="15" y="235">SSG_Absorption</text>
<text class="t-s" x="15" y="250">Sub Graph (已有)</text>
<text class="t-m" x="171" y="267" text-anchor="end">Transmittance</text>
<g class="is-new">
<rect class="box" x="200" y="20" width="90" height="72" rx="4" />
<text class="t-b" x="207" y="35">Multiply</text>
<text class="t-s" x="207" y="50">I c</text>
<text class="t-m" x="207" y="67">A</text>
<text class="t-m" x="207" y="83">B</text>
<text class="t-m" x="283" y="67" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="312" y="20" width="90" height="72" rx="4" />
<text class="t-b" x="319" y="35">Add</text>
<text class="t-s" x="319" y="50">1 + η</text>
<text class="t-m" x="319" y="67">A</text>
<text class="t-m" x="319" y="83">B = 1</text>
<text class="t-m" x="395" y="67" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="424" y="110" width="100" height="72" rx="4" />
<text class="t-b" x="431" y="125">Multiply</text>
<text class="t-s" x="431" y="140">焦散 Ccaus</text>
<text class="t-m" x="431" y="157">A</text>
<text class="t-m" x="431" y="173">B</text>
<text class="t-m" x="517" y="157" text-anchor="end">Out</text>
</g>
<rect class="box" x="546" y="160" width="110" height="72" rx="4" />
<text class="t-b" x="553" y="175">Multiply</text>
<text class="t-s" x="553" y="190">背景 τ (已有)</text>
<text class="t-m" x="553" y="207">A</text>
<text class="t-m" x="553" y="223">B</text>
<text class="t-m" x="649" y="207" text-anchor="end">Out</text>
<text class="t-s" x="546" y="252">Out → Multiply「背景染色」(不變)</text>
</svg>`)
