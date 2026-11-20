explainer.fig('ripple-normal-scroll-graph', /* html */ `
<svg viewBox="0 0 840 362" aria-label="第二步的 graph：world position 的 xz 減去 v t，乘上 Ripple0 的 z 當 UV；Sample Texture 2D (Type Normal) 讀 RippleNormalTex，經 Normal Strength (Strength 取 Ripple0 的 w) 接到 Normal (Tangent Space)">
<path class="ln" d="M106,131 C128,131 96,131 118,131" />
<path class="ln" d="M106,213 C128,213 96,213 118,213" />
<path class="ln" d="M254,343 C276,343 268,259 290,259" />
<path class="ln" d="M194,213 C216,213 184,213 206,213" />
<path class="ln" d="M106,293 C146,293 166,229 206,229" />
<path class="ln" d="M194,131 C232.4,131 251.6,131 290,131" />
<path class="ln" d="M278,213 C300,213 268,147 290,147" />
<path class="ln" d="M376,131 C398,131 366,139 388,139" />
<path class="ln" d="M362,291 C384,291 366,155 388,155" />
<path class="ln" d="M442,53 C464,53 450,83 472,83" />
<path class="ln" d="M460,139 C482,139 450,99 472,99" />
<path class="ln" d="M606,83 C628,83 596,113 618,113" />
<path class="ln" d="M362,307 C464.4,307 515.6,129 618,129" />
<path class="ln" d="M740,113 C762,113 728,159 750,159" />
<rect class="box c3" x="318" y="10" width="124" height="56" rx="4" />
<text class="t-b" x="325" y="25">RippleNormalTex</text>
<text class="t-s" x="325" y="40">Property</text>
<text class="t-m" x="435" y="57" text-anchor="end">Out</text>
<rect class="box" x="6" y="88" width="100" height="56" rx="4" />
<text class="t-b" x="13" y="103">Position</text>
<text class="t-s" x="13" y="118">Space: World</text>
<text class="t-m" x="99" y="135" text-anchor="end">Out</text>
<rect class="box" x="118" y="88" width="76" height="56" rx="4" />
<text class="t-b" x="125" y="103">Swizzle</text>
<text class="t-s" x="125" y="118">Mask: xz</text>
<text class="t-m" x="125" y="135">In</text>
<text class="t-m" x="187" y="135" text-anchor="end">Out</text>
<rect class="box c3" x="6" y="170" width="100" height="56" rx="4" />
<text class="t-b" x="13" y="185">Ripple0</text>
<text class="t-s" x="13" y="200">Property</text>
<text class="t-m" x="99" y="217" text-anchor="end">Out</text>
<rect class="box" x="118" y="170" width="76" height="56" rx="4" />
<text class="t-b" x="125" y="185">Swizzle</text>
<text class="t-s" x="125" y="200">Mask: xy　v</text>
<text class="t-m" x="125" y="217">In</text>
<text class="t-m" x="187" y="217" text-anchor="end">Out</text>
<rect class="box c3" x="6" y="250" width="100" height="56" rx="4" />
<text class="t-b" x="13" y="265">WaterTime</text>
<text class="t-s" x="13" y="280">Property (已有)</text>
<text class="t-m" x="99" y="297" text-anchor="end">Out</text>
<rect class="box" x="206" y="170" width="72" height="72" rx="4" />
<text class="t-b" x="213" y="185">Multiply</text>
<text class="t-s" x="213" y="200">v t</text>
<text class="t-m" x="213" y="217">A</text>
<text class="t-m" x="213" y="233">B</text>
<text class="t-m" x="271" y="217" text-anchor="end">Out</text>
<rect class="box" x="290" y="88" width="86" height="72" rx="4" />
<text class="t-b" x="297" y="103">Subtract</text>
<text class="t-s" x="297" y="118">(x, z) − v t</text>
<text class="t-m" x="297" y="135">A</text>
<text class="t-m" x="297" y="151">B</text>
<text class="t-m" x="369" y="135" text-anchor="end">Out</text>
<rect class="box c3" x="148" y="300" width="106" height="56" rx="4" />
<text class="t-b" x="155" y="315">Ripple0</text>
<text class="t-s" x="155" y="330">(再拖一個)</text>
<text class="t-m" x="247" y="347" text-anchor="end">Out</text>
<rect class="box" x="290" y="230" width="72" height="90" rx="4" />
<text class="t-b" x="297" y="245">Split</text>
<text class="t-m" x="297" y="263">In</text>
<text class="t-m" x="355" y="263" text-anchor="end">R</text>
<text class="t-m" x="355" y="279" text-anchor="end">G</text>
<text class="t-m" x="355" y="295" text-anchor="end">B　s</text>
<text class="t-m" x="355" y="311" text-anchor="end">A　k</text>
<rect class="box" x="388" y="96" width="72" height="72" rx="4" />
<text class="t-b" x="395" y="111">Multiply</text>
<text class="t-s" x="395" y="126">u</text>
<text class="t-m" x="395" y="143">A</text>
<text class="t-m" x="395" y="159">B</text>
<text class="t-m" x="453" y="143" text-anchor="end">Out</text>
<rect class="box" x="472" y="40" width="134" height="72" rx="4" />
<text class="t-b" x="479" y="55">Sample Texture 2D</text>
<text class="t-s" x="479" y="70">Type: Normal</text>
<text class="t-m" x="479" y="87">Texture</text>
<text class="t-m" x="479" y="103">UV</text>
<text class="t-m" x="599" y="87" text-anchor="end">RGBA</text>
<rect class="box" x="618" y="70" width="122" height="72" rx="4" />
<text class="t-b" x="625" y="85">Normal Strength</text>
<text class="t-s" x="625" y="100">k</text>
<text class="t-m" x="625" y="117">In</text>
<text class="t-m" x="625" y="133">Strength</text>
<text class="t-m" x="733" y="117" text-anchor="end">Out</text>
<rect class="box c2" x="750" y="130" width="86" height="42" rx="4" />
<text class="t-b" x="757" y="145">Fragment</text>
<text class="t-m" x="757" y="163">Normal (TS)</text>
</svg>`)
