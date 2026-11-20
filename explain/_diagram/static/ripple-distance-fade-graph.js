explainer.fig('ripple-distance-fade-graph', /* html */ `
<svg viewBox="0 0 840 200" aria-label="第五步的 graph：攝影機到這一點的距離 d 經 Smoothstep 與 One Minus 得到 F，乘上 RippleStrength 後接到 Normal Strength 的 Strength">
<g class="is-new">
<path class="ln" d="M112,39 C134.4,39 145.6,73 168,73" />
</g>
<g class="is-new">
<path class="ln" d="M142,113 C164,113 146,89 168,89" />
</g>
<g class="is-new">
<path class="ln" d="M260,73 C289.6,73 304.4,101 334,101" />
</g>
<g class="is-new">
<path class="ln" d="M308,173 C330,173 312,85 334,85" />
</g>
<g class="is-new">
<path class="ln" d="M452,69 C474,69 454,91 476,91" />
</g>
<g class="is-new">
<path class="ln" d="M594,183 C616,183 578,99 600,99" />
</g>
<g class="is-new">
<path class="ln" d="M568,91 C590,91 578,115 600,115" />
</g>
<g class="is-new">
<path class="ln" d="M684,99 C706,99 690,69 712,69" />
</g>
<g class="is-new">
<rect class="box" x="8" y="10" width="104" height="42" rx="4" />
<text class="t-b" x="15" y="25">Camera</text>
<text class="t-m" x="105" y="43" text-anchor="end">Position</text>
</g>
<rect class="box" x="8" y="70" width="134" height="56" rx="4" />
<text class="t-b" x="15" y="85">Position</text>
<text class="t-s" x="15" y="100">Space: World (已有)</text>
<text class="t-m" x="135" y="117" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box" x="168" y="30" width="92" height="72" rx="4" />
<text class="t-b" x="175" y="45">Distance</text>
<text class="t-s" x="175" y="60">d</text>
<text class="t-m" x="175" y="77">A</text>
<text class="t-m" x="175" y="93">B</text>
<text class="t-m" x="253" y="77" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box c3" x="168" y="130" width="140" height="56" rx="4" />
<text class="t-b" x="175" y="145">RippleFadeDistance</text>
<text class="t-s" x="175" y="160">Property</text>
<text class="t-m" x="301" y="177" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="334" y="40" width="118" height="74" rx="4" />
<text class="t-b" x="341" y="55">Smoothstep</text>
<text class="t-m" x="341" y="73">Edge1 = 0</text>
<text class="t-m" x="341" y="89">Edge2</text>
<text class="t-m" x="341" y="105">In</text>
<text class="t-m" x="445" y="73" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="476" y="48" width="92" height="56" rx="4" />
<text class="t-b" x="483" y="63">One Minus</text>
<text class="t-s" x="483" y="78">F</text>
<text class="t-m" x="483" y="95">In</text>
<text class="t-m" x="561" y="95" text-anchor="end">Out</text>
</g>
<rect class="box c3" x="476" y="140" width="118" height="56" rx="4" />
<text class="t-b" x="483" y="155">RippleStrength</text>
<text class="t-s" x="483" y="170">Property (已有)</text>
<text class="t-m" x="587" y="187" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box" x="600" y="70" width="84" height="58" rx="4" />
<text class="t-b" x="607" y="85">Multiply</text>
<text class="t-m" x="607" y="103">A</text>
<text class="t-m" x="607" y="119">B</text>
<text class="t-m" x="677" y="103" text-anchor="end">Out</text>
</g>
<rect class="box" x="712" y="10" width="120" height="72" rx="4" />
<text class="t-b" x="719" y="25">Normal Strength</text>
<text class="t-s" x="719" y="40">第四步的</text>
<text class="t-m" x="719" y="57">In</text>
<text class="t-m" x="719" y="73">Strength</text>
<text class="t-m" x="825" y="57" text-anchor="end">Out</text>
</svg>`)
