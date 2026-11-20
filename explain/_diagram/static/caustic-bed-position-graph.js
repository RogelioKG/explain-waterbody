explainer.fig('caustic-bed-position-graph', /* html */ `
<svg viewBox="0 0 840 284" aria-label="第一步的 graph：水面這一點的 Position 減去已有的 Camera 的 Position，乘上 FinalDepth ÷ dw，再加回 Camera 的 Position 得到湖底那一點；暫時取 xz 的小數接到 Emission">
<g class="is-new">
<path class="ln" d="M178,53 C200,53 178,63 200,63" />
</g>
<g class="is-new">
<path class="ln" d="M178,123 C200,123 178,79 200,79" />
</g>
<g class="is-new">
<path class="ln" d="M178,193 C200,193 178,213 200,213" />
</g>
<g class="is-new">
<path class="ln" d="M178,263 C200,263 178,229 200,229" />
</g>
<g class="is-new">
<path class="ln" d="M296,63 C318,63 294,119 316,119" />
</g>
<g class="is-new">
<path class="ln" d="M296,213 C318,213 294,135 316,135" />
</g>
<g class="is-new">
<path class="ln" d="M178,123 C274,123 322,83 418,83" />
</g>
<g class="is-new">
<path class="ln" d="M398,119 C420,119 396,99 418,99" />
</g>
<g class="is-new">
<path class="ln" d="M490,83 C512,83 488,83 510,83" />
</g>
<g class="is-new">
<path class="ln" d="M606,83 C628,83 604,83 626,83" />
</g>
<g class="is-new">
<path class="ln" d="M708,83 C730,83 708,83 730,83" />
</g>
<rect class="box" x="8" y="10" width="170" height="56" rx="4" />
<text class="t-b" x="15" y="25">Position</text>
<text class="t-s" x="15" y="40">Space: World (已有)</text>
<text class="t-m" x="171" y="57" text-anchor="end">Out</text>
<rect class="box" x="8" y="80" width="170" height="56" rx="4" />
<text class="t-b" x="15" y="95">Camera</text>
<text class="t-s" x="15" y="110">遠處淡出用的 (已有)</text>
<text class="t-m" x="171" y="127" text-anchor="end">Position</text>
<rect class="box c1" x="8" y="150" width="170" height="56" rx="4" />
<text class="t-b" x="15" y="165">SSG_Refraction_Select</text>
<text class="t-s" x="15" y="180">Sub Graph (已有)</text>
<text class="t-m" x="171" y="197" text-anchor="end">FinalDepth</text>
<rect class="box" x="8" y="220" width="170" height="56" rx="4" />
<text class="t-b" x="15" y="235">Split</text>
<text class="t-s" x="15" y="250">A = dw (已有)</text>
<text class="t-m" x="171" y="267" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box" x="200" y="20" width="96" height="72" rx="4" />
<text class="t-b" x="207" y="35">Subtract</text>
<text class="t-s" x="207" y="50">pw − pcam</text>
<text class="t-m" x="207" y="67">A</text>
<text class="t-m" x="207" y="83">B</text>
<text class="t-m" x="289" y="67" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="200" y="170" width="96" height="72" rx="4" />
<text class="t-b" x="207" y="185">Divide</text>
<text class="t-s" x="207" y="200">du / dw</text>
<text class="t-m" x="207" y="217">A</text>
<text class="t-m" x="207" y="233">B</text>
<text class="t-m" x="289" y="217" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="316" y="90" width="82" height="58" rx="4" />
<text class="t-b" x="323" y="105">Multiply</text>
<text class="t-m" x="323" y="123">A</text>
<text class="t-m" x="323" y="139">B</text>
<text class="t-m" x="391" y="123" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="418" y="40" width="72" height="72" rx="4" />
<text class="t-b" x="425" y="55">Add</text>
<text class="t-s" x="425" y="70">pbed</text>
<text class="t-m" x="425" y="87">A</text>
<text class="t-m" x="425" y="103">B</text>
<text class="t-m" x="483" y="87" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="510" y="40" width="96" height="56" rx="4" />
<text class="t-b" x="517" y="55">Swizzle</text>
<text class="t-s" x="517" y="70">暫時 Mask: xz</text>
<text class="t-m" x="517" y="87">In</text>
<text class="t-m" x="599" y="87" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="626" y="40" width="82" height="56" rx="4" />
<text class="t-b" x="633" y="55">Fraction</text>
<text class="t-s" x="633" y="70">暫時</text>
<text class="t-m" x="633" y="87">In</text>
<text class="t-m" x="701" y="87" text-anchor="end">Out</text>
</g>
<rect class="box c2" x="730" y="54" width="100" height="42" rx="4" />
<text class="t-b" x="737" y="69">Fragment</text>
<text class="t-m" x="737" y="87">Emission</text>
<text class="t-s" x="730" y="116">暫時取代原本的線</text>
</svg>`)
