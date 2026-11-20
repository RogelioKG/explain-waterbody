explainer.fig('scene-color-tint-emission-graph', /* html */ `
<svg viewBox="0 0 840 350" aria-label="第二步的 graph：Lerp 改成白色到 ShallowColor 的染色；DeepColor 乘 α 進泡沫色的 Lerp 再接 Base Color；染色再乘第一步的乘積與 1 − f 接到 Emission；Alpha 填 1">
<g class="is-new">
<path class="ln" d="M134,123 C140,123 134,69 156,69" />
</g>
<path class="ln" d="M134,53 C140,53 134,85 156,85" />
<g class="is-new">
<path class="ln" d="M134,193 C140,193 134,173 156,173" />
</g>
<g class="is-new">
<path class="ln" d="M134,53 C140,53 134,189 156,189" />
</g>
<g class="is-new">
<path class="ln" d="M266,173 C288,173 294,233 316,233" />
</g>
<path class="ln" d="M134,263 C197.2,263 236.8,249 316,249" />
<path class="ln" d="M134,333 C197.2,333 236.8,265 316,265" />
<g class="is-new">
<path class="ln" d="M416,154 C436,154 436,75 456,75" />
</g>
<g class="is-new">
<path class="ln" d="M296,53 C360,53 392,59 456,59" />
</g>
<g class="is-new">
<path class="ln" d="M134,333 C253.2,333 320.8,333 456,333" />
</g>
<g class="is-new">
<path class="ln" d="M546,59 C568,59 566,139 588,139" />
</g>
<g class="is-new">
<path class="ln" d="M552,333 C574,333 566,155 588,155" />
</g>
<path class="ln" d="M440,233 C550.4,233 605.6,209 716,209" />
<g class="is-new">
<path class="ln" d="M678,139 C700,139 694,225 716,225" />
</g>
<rect class="box c1" x="8" y="10" width="126" height="56" rx="4" />
<text class="t-b" x="15" y="25">SSG_Absorption</text>
<text class="t-s" x="15" y="40">Sub Graph (已有)</text>
<text class="t-m" x="127" y="57" text-anchor="end">Opacity</text>
<rect class="box c3" x="8" y="80" width="126" height="56" rx="4" />
<text class="t-b" x="15" y="95">ShallowColor</text>
<text class="t-s" x="15" y="110">Property</text>
<text class="t-m" x="127" y="127" text-anchor="end">Out</text>
<rect class="box c3" x="8" y="150" width="126" height="56" rx="4" />
<text class="t-b" x="15" y="165">DeepColor</text>
<text class="t-s" x="15" y="180">Property</text>
<text class="t-m" x="127" y="197" text-anchor="end">Out</text>
<rect class="box c3" x="8" y="220" width="126" height="56" rx="4" />
<text class="t-b" x="15" y="235">FoamColor</text>
<text class="t-s" x="15" y="250">Property</text>
<text class="t-m" x="127" y="267" text-anchor="end">Out</text>
<rect class="box c1" x="8" y="290" width="126" height="56" rx="4" />
<text class="t-b" x="15" y="305">SSG_Foam</text>
<text class="t-s" x="15" y="320">Sub Graph (已有)</text>
<text class="t-m" x="127" y="337" text-anchor="end">Foam</text>
<g class="is-new">
<rect class="box" x="156" y="10" width="140" height="88" rx="4" />
<text class="t-b" x="163" y="25">Lerp「染色」</text>
<text class="t-s" x="163" y="40">改接</text>
<text class="t-m" x="163" y="57">A = 1, 1, 1, 1</text>
<text class="t-m" x="163" y="73">B</text>
<text class="t-m" x="163" y="89">T</text>
<text class="t-m" x="289" y="57" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="156" y="130" width="110" height="72" rx="4" />
<text class="t-b" x="163" y="145">Multiply</text>
<text class="t-s" x="163" y="160">α C_deep</text>
<text class="t-m" x="163" y="177">A</text>
<text class="t-m" x="163" y="193">B</text>
<text class="t-m" x="259" y="177" text-anchor="end">Out</text>
</g>
<rect class="box" x="316" y="190" width="124" height="88" rx="4" />
<text class="t-b" x="323" y="205">Lerp「泡沫色」</text>
<text class="t-s" x="323" y="220">已有</text>
<text class="t-m" x="323" y="237">A</text>
<text class="t-m" x="323" y="253">B</text>
<text class="t-m" x="323" y="269">T</text>
<text class="t-m" x="433" y="237" text-anchor="end">Out</text>
<rect class="box" x="316" y="95" width="100" height="72" rx="4" />
<text class="t-b" x="323" y="110">Multiply</text>
<text class="t-s" x="323" y="125">第一步的</text>
<text class="t-s" x="323" y="140">τ C_scene</text>
<text class="t-m" x="409" y="158" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box" x="456" y="30" width="90" height="58" rx="4" />
<text class="t-b" x="463" y="45">Multiply</text>
<text class="t-m" x="463" y="63">A</text>
<text class="t-m" x="463" y="79">B</text>
<text class="t-m" x="539" y="63" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="456" y="290" width="96" height="56" rx="4" />
<text class="t-b" x="463" y="305">One Minus</text>
<text class="t-s" x="463" y="320">1 − f</text>
<text class="t-m" x="463" y="337">In</text>
<text class="t-m" x="545" y="337" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="588" y="110" width="90" height="58" rx="4" />
<text class="t-b" x="595" y="125">Multiply</text>
<text class="t-m" x="595" y="143">A</text>
<text class="t-m" x="595" y="159">B</text>
<text class="t-m" x="671" y="143" text-anchor="end">Out</text>
</g>
<rect class="box c2" x="716" y="180" width="116" height="74" rx="4" />
<text class="t-b" x="723" y="195">Fragment</text>
<text class="t-m" x="723" y="213">Base Color</text>
<text class="t-m" x="723" y="229">Emission</text>
<text class="t-m" x="723" y="245">Alpha = 1</text>
</svg>`)
