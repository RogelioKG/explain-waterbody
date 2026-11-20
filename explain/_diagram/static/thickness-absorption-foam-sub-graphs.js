explainer.fig('thickness-absorption-foam-sub-graphs', /* html */ `
<svg viewBox="0 0 840 550" aria-label="收成 Sub Graph 之後的主 graph：Scene Depth 與 Split 接進 SSG_Thickness，它的 Thickness 接到 SSG_Absorption 與 SSG_Foam，Opacity 與 Foam 接到三個 Lerp，再接到 Base Color 與 Alpha">
<path class="ln" d="M128,139 C166,139 186,153 224,153" />
<path class="ln" d="M128,209 C135,209 133,209 140,209" />
<path class="ln" d="M212,209 C219,209 217,169 224,169" />
<path class="ln" d="M384,153 C391,153 389,183 396,183" />
<path class="ln" d="M384,153 C391,153 389,313 396,313" />
<path class="ln" d="M212,261 C286,261 322,199 396,199" />
<path class="ln" d="M128,329 C135,329 133,329 140,329" />
<path class="ln" d="M212,329 C286,329 322,329 396,329" />
<path class="ln" d="M128,385 C235,385 289,345 396,345" />
<path class="ln" d="M128,433 C235,433 289,361 396,361" />
<path class="ln" d="M128,481 C235,481 289,377 396,377" />
<path class="ln" d="M128,529 C235,529 289,393 396,393" />
<path class="ln" d="M506,39 C532,39 546,103 572,103" />
<path class="ln" d="M506,87 C532,87 546,119 572,119" />
<path class="ln" d="M560,183 C567,183 565,135 572,135" />
<path class="ln" d="M652,103 C659,103 659,113 666,113" />
<path class="ln" d="M652,39 C659,39 659,129 666,129" />
<path class="ln" d="M560,183 C602,183 624,263 666,263" />
<path class="ln" d="M736,113 C743,113 741,153 748,153" />
<path class="ln" d="M736,263 C743,263 741,185 748,185" />
<path class="ln" d="M560,313 L651,313 C659,313 659,313 659,305 L659,153 C659,145 659,145 666,145" />
<path class="ln" d="M659,305 L659,303 C659,295 659,295 666,295" />
<rect class="box" x="8" y="96" width="120" height="56" rx="4" />
<text class="t-b" x="15" y="111">Scene Depth</text>
<text class="t-s" x="15" y="126">Eye</text>
<text class="t-m" x="121" y="143" text-anchor="end">Out</text>
<rect class="box" x="8" y="166" width="120" height="56" rx="4" />
<text class="t-b" x="15" y="181">Screen Position</text>
<text class="t-s" x="15" y="196">Raw</text>
<text class="t-m" x="121" y="213" text-anchor="end">Out</text>
<rect class="box" x="140" y="166" width="72" height="56" rx="4" />
<text class="t-b" x="147" y="181">Split</text>
<text class="t-s" x="147" y="196">A = d_w</text>
<text class="t-m" x="147" y="213">In</text>
<text class="t-m" x="205" y="213" text-anchor="end">A</text>
<rect class="box c3" x="140" y="232" width="72" height="42" rx="4" />
<text class="t-b" x="147" y="247">Clarity</text>
<text class="t-m" x="205" y="265" text-anchor="end">Out</text>
<rect class="box" x="8" y="286" width="120" height="56" rx="4" />
<text class="t-b" x="15" y="301">Position</text>
<text class="t-s" x="15" y="316">World</text>
<text class="t-m" x="121" y="333" text-anchor="end">Out</text>
<rect class="box" x="140" y="286" width="72" height="56" rx="4" />
<text class="t-b" x="147" y="301">Swizzle</text>
<text class="t-s" x="147" y="316">xz</text>
<text class="t-m" x="147" y="333">In</text>
<text class="t-m" x="205" y="333" text-anchor="end">Out</text>
<rect class="box c3" x="8" y="356" width="120" height="42" rx="4" />
<text class="t-b" x="15" y="371">WaterTime</text>
<text class="t-m" x="121" y="389" text-anchor="end">Out</text>
<rect class="box c3" x="8" y="404" width="120" height="42" rx="4" />
<text class="t-b" x="15" y="419">FoamWidth</text>
<text class="t-m" x="121" y="437" text-anchor="end">Out</text>
<rect class="box c3" x="8" y="452" width="120" height="42" rx="4" />
<text class="t-b" x="15" y="467">FoamNoiseScale</text>
<text class="t-m" x="121" y="485" text-anchor="end">Out</text>
<rect class="box c3" x="8" y="500" width="120" height="42" rx="4" />
<text class="t-b" x="15" y="515">FoamNoiseTex</text>
<text class="t-m" x="121" y="533" text-anchor="end">Out</text>
<rect class="box c1" x="224" y="110" width="160" height="72" rx="4" />
<text class="t-b" x="231" y="125">SSG_Thickness</text>
<text class="t-s" x="231" y="140">Sub Graph</text>
<text class="t-m" x="231" y="157">SceneDepth</text>
<text class="t-m" x="231" y="173">SurfaceDepth</text>
<text class="t-m" x="377" y="157" text-anchor="end">Thickness</text>
<rect class="box c3" x="396" y="10" width="110" height="42" rx="4" />
<text class="t-b" x="403" y="25">ShallowColor</text>
<text class="t-m" x="499" y="43" text-anchor="end">Out</text>
<rect class="box c3" x="396" y="58" width="110" height="42" rx="4" />
<text class="t-b" x="403" y="73">DeepColor</text>
<text class="t-m" x="499" y="91" text-anchor="end">Out</text>
<rect class="box c1" x="396" y="140" width="164" height="72" rx="4" />
<text class="t-b" x="403" y="155">SSG_Absorption</text>
<text class="t-s" x="403" y="170">Sub Graph</text>
<text class="t-m" x="403" y="187">Thickness</text>
<text class="t-m" x="403" y="203">Clarity</text>
<text class="t-m" x="553" y="187" text-anchor="end">Opacity</text>
<text class="t-m" x="553" y="203" text-anchor="end">Transmittance</text>
<rect class="box c1" x="396" y="270" width="164" height="136" rx="4" />
<text class="t-b" x="403" y="285">SSG_Foam</text>
<text class="t-s" x="403" y="300">Sub Graph</text>
<text class="t-m" x="403" y="317">Thickness</text>
<text class="t-m" x="403" y="333">PositionXZ</text>
<text class="t-m" x="403" y="349">ElapsedTime</text>
<text class="t-m" x="403" y="365">Width</text>
<text class="t-m" x="403" y="381">NoiseScale</text>
<text class="t-m" x="403" y="397">NoiseTex</text>
<text class="t-m" x="553" y="317" text-anchor="end">Foam</text>
<rect class="box" x="572" y="60" width="80" height="88" rx="4" />
<text class="t-b" x="579" y="75">Lerp</text>
<text class="t-s" x="579" y="90">水色</text>
<text class="t-m" x="579" y="107">A</text>
<text class="t-m" x="579" y="123">B</text>
<text class="t-m" x="579" y="139">T</text>
<text class="t-m" x="645" y="107" text-anchor="end">Out</text>
<rect class="box c3" x="572" y="10" width="80" height="42" rx="4" />
<text class="t-b" x="579" y="25">FoamColor</text>
<text class="t-m" x="645" y="43" text-anchor="end">Out</text>
<rect class="box" x="666" y="70" width="70" height="88" rx="4" />
<text class="t-b" x="673" y="85">Lerp</text>
<text class="t-s" x="673" y="100">泡沫色</text>
<text class="t-m" x="673" y="117">A</text>
<text class="t-m" x="673" y="133">B</text>
<text class="t-m" x="673" y="149">T</text>
<text class="t-m" x="729" y="117" text-anchor="end">Out</text>
<rect class="box" x="666" y="220" width="70" height="88" rx="4" />
<text class="t-b" x="673" y="235">Lerp</text>
<text class="t-s" x="673" y="250">泡沫 Alpha</text>
<text class="t-m" x="673" y="267">A</text>
<text class="t-m" x="673" y="283">B = 1</text>
<text class="t-m" x="673" y="299">T</text>
<text class="t-m" x="729" y="267" text-anchor="end">Out</text>
<rect class="box c2" x="748" y="110" width="84" height="88" rx="4" />
<text class="t-b" x="755" y="125">Fragment</text>
<text class="t-s" x="755" y="140">Master Stack</text>
<text class="t-m" x="755" y="157">Base Color</text>
<text class="t-m" x="755" y="173">…</text>
<text class="t-m" x="755" y="189">Alpha</text>
</svg>`)
