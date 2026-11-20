explainer.fig('caustic-sub-graphs', /* html */ `
<svg viewBox="0 0 840 574" aria-label="收成 Sub Graph 之後的主 graph：SSG_Bed_Position 算出湖底那一點，SSG_Sun_Path 接陽光方向、靜止水面高度、Refraction 的 Transform 輸出與 CausticDistortion，回推到水面再依水面的傾斜推開，並給出水深與陽光的路，兩個 SSG_Caustic_Layer 接 Caustic0、Caustic1；之後的合成留在主 graph">
<g class="is-new">
<path class="ln" d="M178,53 C200,53 174,63 196,63" />
</g>
<g class="is-new">
<path class="ln" d="M178,123 C200,123 174,79 196,79" />
</g>
<g class="is-new">
<path class="ln" d="M178,193 C200,193 174,95 196,95" />
</g>
<g class="is-new">
<path class="ln" d="M178,263 C200,263 174,111 196,111" />
</g>
<g class="is-new">
<path class="ln" d="M392,63 C414,63 388,63 410,63" />
</g>
<g class="is-new">
<path class="ln" d="M392,161 C414,161 388,79 410,79" />
</g>
<g class="is-new">
<path class="ln" d="M274,209 L290,209" />
</g>
<g class="is-new">
<path class="ln" d="M392,209 C414,209 388,95 410,95" />
</g>
<g class="is-new">
<path class="ln" d="M610,79 C632,79 602,53 624,53" />
</g>
<g class="is-new">
<path class="ln" d="M610,95 C632,95 602,135 624,135" />
</g>
<g class="is-new">
<path class="ln" d="M610,63 C632,63 602,227 624,227" />
</g>
<g class="is-new">
<path class="ln" d="M610,63 C632,63 602,327 624,327" />
</g>
<g class="is-new">
<path class="ln" d="M316,273 C439.2,273 500.8,211 624,211" />
</g>
<g class="is-new">
<path class="ln" d="M316,343 C439.2,343 500.8,311 624,311" />
</g>
<g class="is-new">
<path class="ln" d="M316,413 C439.2,413 500.8,243 624,243" />
</g>
<g class="is-new">
<path class="ln" d="M316,413 C439.2,413 500.8,343 624,343" />
</g>
<g class="is-new">
<path class="ln" d="M346,483 H398 V111 H410" />
</g>
<g class="is-new">
<path class="ln" d="M346,553 H404 V127 H410" />
</g>
<g class="is-new">
<path class="ln" d="M760,211 C782,211 750,265 772,265" />
</g>
<g class="is-new">
<path class="ln" d="M760,311 C782,311 750,281 772,281" />
</g>
<rect class="box" x="8" y="10" width="170" height="56" rx="4" />
<text class="t-b" x="15" y="25">Position</text>
<text class="t-s" x="15" y="40">Space: World</text>
<text class="t-m" x="171" y="57" text-anchor="end">Out</text>
<rect class="box" x="8" y="80" width="170" height="56" rx="4" />
<text class="t-b" x="15" y="95">Camera</text>
<text class="t-s" x="15" y="110">遠處淡出用的</text>
<text class="t-m" x="171" y="127" text-anchor="end">Position</text>
<rect class="box c1" x="8" y="150" width="170" height="56" rx="4" />
<text class="t-b" x="15" y="165">SSG_Refraction_Select</text>
<text class="t-s" x="15" y="180">Sub Graph (已有)</text>
<text class="t-m" x="171" y="197" text-anchor="end">FinalDepth</text>
<rect class="box" x="8" y="220" width="170" height="56" rx="4" />
<text class="t-b" x="15" y="235">Split</text>
<text class="t-s" x="15" y="250">A = dw</text>
<text class="t-m" x="171" y="267" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box c1" x="196" y="20" width="196" height="104" rx="4" />
<text class="t-b" x="203" y="35">SSG_Bed_Position</text>
<text class="t-s" x="203" y="50">Sub Graph</text>
<text class="t-m" x="203" y="67">PositionWS</text>
<text class="t-m" x="203" y="83">CameraPositionWS</text>
<text class="t-m" x="203" y="99">SceneDepth</text>
<text class="t-m" x="203" y="115">SurfaceDepth</text>
<text class="t-m" x="385" y="67" text-anchor="end">BedPositionWS</text>
</g>
<rect class="box" x="196" y="134" width="196" height="40" rx="4" />
<text class="t-b" x="203" y="149">Main Light Direction</text>
<text class="t-m" x="385" y="165" text-anchor="end">Direction</text>
<rect class="box" x="196" y="182" width="78" height="40" rx="4" />
<text class="t-b" x="203" y="197">Object</text>
<text class="t-m" x="267" y="213" text-anchor="end">Position</text>
<rect class="box" x="290" y="182" width="102" height="40" rx="4" />
<text class="t-b" x="297" y="197">Split</text>
<text class="t-m" x="297" y="213">In</text>
<text class="t-m" x="385" y="213" text-anchor="end">G = y0</text>
<rect class="box c3" x="196" y="230" width="120" height="56" rx="4" />
<text class="t-b" x="203" y="245">Caustic0</text>
<text class="t-s" x="203" y="260">Property</text>
<text class="t-m" x="309" y="277" text-anchor="end">Out</text>
<rect class="box c3" x="196" y="300" width="120" height="56" rx="4" />
<text class="t-b" x="203" y="315">Caustic1</text>
<text class="t-s" x="203" y="330">Property</text>
<text class="t-m" x="309" y="347" text-anchor="end">Out</text>
<rect class="box c3" x="196" y="370" width="120" height="56" rx="4" />
<text class="t-b" x="203" y="385">WaterTime</text>
<text class="t-s" x="203" y="400">Property</text>
<text class="t-m" x="309" y="417" text-anchor="end">Out</text>
<rect class="box" x="196" y="440" width="150" height="56" rx="4" />
<text class="t-b" x="203" y="455">Transform</text>
<text class="t-s" x="203" y="470">Refraction 的 (已有)</text>
<text class="t-m" x="339" y="487" text-anchor="end">Out</text>
<rect class="box c3" x="196" y="510" width="150" height="56" rx="4" />
<text class="t-b" x="203" y="525">CausticDistortion</text>
<text class="t-s" x="203" y="540">Property</text>
<text class="t-m" x="339" y="557" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box c1" x="410" y="20" width="200" height="120" rx="4" />
<text class="t-b" x="417" y="35">SSG_Sun_Path</text>
<text class="t-s" x="417" y="50">Sub Graph</text>
<text class="t-m" x="417" y="67">BedPositionWS</text>
<text class="t-m" x="417" y="83">LightDirectionWS</text>
<text class="t-m" x="417" y="99">RestHeight</text>
<text class="t-m" x="417" y="115">NormalWS</text>
<text class="t-m" x="417" y="131">Distortion</text>
<text class="t-m" x="603" y="67" text-anchor="end">ProjectedXZ</text>
<text class="t-m" x="603" y="83" text-anchor="end">Depth</text>
<text class="t-m" x="603" y="99" text-anchor="end">SunPathLength</text>
</g>
<rect class="box" x="624" y="10" width="122" height="72" rx="4" />
<text class="t-b" x="631" y="25">Step</text>
<text class="t-s" x="631" y="40">已有</text>
<text class="t-m" x="631" y="57">In</text>
<text class="t-m" x="631" y="73">Edge = 0</text>
<rect class="box c1" x="624" y="92" width="122" height="56" rx="4" />
<text class="t-b" x="631" y="107">SSG_Absorption</text>
<text class="t-s" x="631" y="122">第五步的 (已有)</text>
<text class="t-m" x="631" y="139">Thickness</text>
<g class="is-new">
<rect class="box c1" x="624" y="168" width="136" height="88" rx="4" />
<text class="t-b" x="631" y="183">SSG_Caustic_Layer</text>
<text class="t-s" x="631" y="198">Sub Graph</text>
<text class="t-m" x="631" y="215">Layer</text>
<text class="t-m" x="631" y="231">PositionXZ</text>
<text class="t-m" x="631" y="247">ElapsedTime</text>
<text class="t-m" x="753" y="215" text-anchor="end">Pattern</text>
</g>
<g class="is-new">
<rect class="box c1" x="624" y="268" width="136" height="88" rx="4" />
<text class="t-b" x="631" y="283">SSG_Caustic_Layer</text>
<text class="t-s" x="631" y="298">Sub Graph</text>
<text class="t-m" x="631" y="315">Layer</text>
<text class="t-m" x="631" y="331">PositionXZ</text>
<text class="t-m" x="631" y="347">ElapsedTime</text>
<text class="t-m" x="753" y="315" text-anchor="end">Pattern</text>
</g>
<rect class="box" x="772" y="236" width="66" height="58" rx="4" />
<text class="t-b" x="779" y="251">Minimum</text>
<text class="t-m" x="779" y="269">A</text>
<text class="t-m" x="779" y="285">B</text>
</svg>`)
