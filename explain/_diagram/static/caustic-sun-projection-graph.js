explainer.fig('caustic-sun-projection-graph', /* html */ `
<svg viewBox="0 0 840 356" aria-label="第四步的 graph：水面物件的 y 減去湖底那一點的 y 得到水深 H；除以 max(−ℓy, 0.1) 得到 hsun；湖底那一點減去 hsun ℓ 得到 ps，改接到第二步的 Swizzle (xz)">
<g class="is-new">
<path class="ln" d="M168,65 C190,65 178,65 200,65" />
</g>
<g class="is-new">
<path class="ln" d="M168,165 C190,165 178,165 200,165" />
</g>
<g class="is-new">
<path class="ln" d="M168,265 C190,265 178,265 200,265" />
</g>
<g class="is-new">
<path class="ln" d="M260,81 C282,81 256,123 278,123" />
</g>
<g class="is-new">
<path class="ln" d="M260,181 C282,181 256,139 278,139" />
</g>
<g class="is-new">
<path class="ln" d="M260,281 C282,281 256,281 278,281" />
</g>
<g class="is-new">
<path class="ln" d="M348,281 C370,281 344,281 366,281" />
</g>
<g class="is-new">
<path class="ln" d="M362,123 C406.1,123 415.9,240 460,240" />
</g>
<g class="is-new">
<path class="ln" d="M442,281 C464,281 438,256 460,256" />
</g>
<g class="is-new">
<path class="ln" d="M552,240 C574,240 564,240 586,240" />
</g>
<g class="is-new">
<path class="ln" d="M658,224 C680,224 658,224 680,224" />
</g>
<g class="is-new">
<path class="ln" d="M752,208 C774,208 746,208 768,208" />
</g>
<g class="is-new">
<path class="ln" d="M168,165 C190,165 178,20 200,20 L626,20 C656,20 650,208 680,208" />
</g>
<g class="is-new">
<path class="ln" d="M168,265 C190,265 178,342 200,342 L558,342 Q568,342 568,332 L568,234 Q568,224 578,224 L586,224" />
</g>
<g class="is-new">
<rect class="box" x="8" y="22" width="160" height="56" rx="4" />
<text class="t-b" x="15" y="37">Object</text>
<text class="t-s" x="15" y="52">y0</text>
<text class="t-m" x="161" y="69" text-anchor="end">Position</text>
</g>
<rect class="box" x="8" y="122" width="160" height="56" rx="4" />
<text class="t-b" x="15" y="137">Add</text>
<text class="t-s" x="15" y="152">pbed (第一步的)</text>
<text class="t-m" x="161" y="169" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box" x="200" y="36" width="60" height="90" rx="4" />
<text class="t-b" x="207" y="51">Split</text>
<text class="t-m" x="207" y="69">In</text>
<text class="t-m" x="253" y="69" text-anchor="end">R</text>
<text class="t-m" x="253" y="85" text-anchor="end">G</text>
<text class="t-m" x="253" y="101" text-anchor="end">B</text>
<text class="t-m" x="253" y="117" text-anchor="end">A</text>
</g>
<g class="is-new">
<rect class="box" x="200" y="136" width="60" height="90" rx="4" />
<text class="t-b" x="207" y="151">Split</text>
<text class="t-m" x="207" y="169">In</text>
<text class="t-m" x="253" y="169" text-anchor="end">R</text>
<text class="t-m" x="253" y="185" text-anchor="end">G</text>
<text class="t-m" x="253" y="201" text-anchor="end">B</text>
<text class="t-m" x="253" y="217" text-anchor="end">A</text>
</g>
<g class="is-new">
<rect class="box" x="200" y="236" width="60" height="90" rx="4" />
<text class="t-b" x="207" y="251">Split</text>
<text class="t-m" x="207" y="269">In</text>
<text class="t-m" x="253" y="269" text-anchor="end">R</text>
<text class="t-m" x="253" y="285" text-anchor="end">G</text>
<text class="t-m" x="253" y="301" text-anchor="end">B</text>
<text class="t-m" x="253" y="317" text-anchor="end">A</text>
</g>
<g class="is-new">
<rect class="box" x="8" y="222" width="160" height="56" rx="4" />
<text class="t-b" x="15" y="237">Main Light Direction</text>
<text class="t-s" x="15" y="252">ℓ</text>
<text class="t-m" x="161" y="269" text-anchor="end">Direction</text>
</g>
<g class="is-new">
<rect class="box" x="278" y="80" width="84" height="72" rx="4" />
<text class="t-b" x="285" y="95">Subtract</text>
<text class="t-s" x="285" y="110">水深 H</text>
<text class="t-m" x="285" y="127">A</text>
<text class="t-m" x="355" y="127" text-anchor="end">Out</text>
<text class="t-m" x="285" y="143">B</text>
</g>
<g class="is-new">
<rect class="box" x="278" y="238" width="70" height="56" rx="4" />
<text class="t-b" x="285" y="253">Negate</text>
<text class="t-s" x="285" y="268">−ℓy</text>
<text class="t-m" x="285" y="285">In</text>
<text class="t-m" x="341" y="285" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="366" y="252" width="76" height="58" rx="4" />
<text class="t-b" x="373" y="267">Maximum</text>
<text class="t-m" x="373" y="285">A</text>
<text class="t-m" x="435" y="285" text-anchor="end">Out</text>
<text class="t-m" x="373" y="301">B = 0.1</text>
</g>
<g class="is-new">
<rect class="box" x="460" y="197" width="92" height="72" rx="4" />
<text class="t-b" x="467" y="212">Divide</text>
<text class="t-s" x="467" y="227">陽光的路 hsun</text>
<text class="t-m" x="467" y="244">A</text>
<text class="t-m" x="545" y="244" text-anchor="end">Out</text>
<text class="t-m" x="467" y="260">B</text>
</g>
<g class="is-new">
<rect class="box" x="586" y="181" width="72" height="72" rx="4" />
<text class="t-b" x="593" y="196">Multiply</text>
<text class="t-s" x="593" y="211">hsun ℓ</text>
<text class="t-m" x="593" y="228">A</text>
<text class="t-m" x="651" y="228" text-anchor="end">Out</text>
<text class="t-m" x="593" y="244">B</text>
</g>
<g class="is-new">
<rect class="box" x="680" y="165" width="72" height="72" rx="4" />
<text class="t-b" x="687" y="180">Subtract</text>
<text class="t-s" x="687" y="195">ps</text>
<text class="t-m" x="687" y="212">A</text>
<text class="t-m" x="745" y="212" text-anchor="end">Out</text>
<text class="t-m" x="687" y="228">B</text>
</g>
<rect class="box" x="768" y="165" width="70" height="56" rx="4" />
<text class="t-b" x="775" y="180">Swizzle</text>
<text class="t-s" x="775" y="195">xz (已有)</text>
<text class="t-m" x="775" y="212">In</text>
<text class="t-m" x="831" y="212" text-anchor="end">Out</text>
<text class="t-s" x="838" y="237" text-anchor="end">Out → 兩層的</text>
<text class="t-s" x="838" y="252" text-anchor="end">Subtract (不變)</text>
</svg>`)
