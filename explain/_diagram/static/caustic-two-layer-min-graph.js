explainer.fig('caustic-two-layer-min-graph', /* html */ `
<svg viewBox="0 0 840 328" aria-label="第三步的 graph：複製出第二層 (Caustic1 的速度與格子)，兩層 Voronoi 的 Out 取 Minimum 再接 Power">
<g class="is-new">
<path class="ln" d="M158,133 C172,133 158,133 172,133" />
</g>
<g class="is-new">
<path class="ln" d="M158,133 C172,133 158,259 172,259" />
</g>
<g class="is-new">
<path class="ln" d="M268,133 C286,133 268,153 286,153" />
</g>
<g class="is-new">
<path class="ln" d="M268,203 C286,203 268,169 286,169" />
</g>
<g class="is-new">
<path class="ln" d="M158,53 C250,53 296,63 388,63" />
</g>
<g class="is-new">
<path class="ln" d="M366,153 C388,153 366,79 388,79" />
</g>
<g class="is-new">
<path class="ln" d="M478,63 C500,63 478,133 500,133" />
</g>
<g class="is-new">
<path class="ln" d="M268,307 C362,307 406,149 500,149" />
</g>
<g class="is-new">
<path class="ln" d="M268,291 C362,291 406,165 500,165" />
</g>
<g class="is-new">
<path class="ln" d="M650,53 C672,53 650,83 672,83" />
</g>
<g class="is-new">
<path class="ln" d="M650,133 C672,133 650,99 672,99" />
</g>
<g class="is-new">
<path class="ln" d="M752,83 C774,83 750,103 772,103" />
</g>
<rect class="box" x="8" y="10" width="150" height="56" rx="4" />
<text class="t-b" x="15" y="25">Swizzle</text>
<text class="t-s" x="15" y="40">Mask: xz (第二步的)</text>
<text class="t-m" x="151" y="57" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box c3" x="8" y="90" width="150" height="56" rx="4" />
<text class="t-b" x="15" y="105">Caustic1</text>
<text class="t-s" x="15" y="120">Property</text>
<text class="t-m" x="151" y="137" text-anchor="end">Out</text>
</g>
<rect class="box c3" x="172" y="160" width="96" height="56" rx="4" />
<text class="t-b" x="179" y="175">WaterTime</text>
<text class="t-s" x="179" y="190">Property (已有)</text>
<text class="t-m" x="261" y="207" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box" x="172" y="90" width="96" height="56" rx="4" />
<text class="t-b" x="179" y="105">Swizzle</text>
<text class="t-s" x="179" y="120">Mask: xy　v</text>
<text class="t-m" x="179" y="137">In</text>
<text class="t-m" x="261" y="137" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="172" y="230" width="96" height="90" rx="4" />
<text class="t-b" x="179" y="245">Split</text>
<text class="t-m" x="179" y="263">In</text>
<text class="t-m" x="261" y="263" text-anchor="end">R</text>
<text class="t-m" x="261" y="279" text-anchor="end">G</text>
<text class="t-m" x="261" y="295" text-anchor="end">B　sc</text>
<text class="t-m" x="261" y="311" text-anchor="end">A</text>
</g>
<g class="is-new">
<rect class="box" x="286" y="110" width="80" height="72" rx="4" />
<text class="t-b" x="293" y="125">Multiply</text>
<text class="t-s" x="293" y="140">v t</text>
<text class="t-m" x="293" y="157">A</text>
<text class="t-m" x="293" y="173">B</text>
<text class="t-m" x="359" y="157" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="388" y="20" width="90" height="72" rx="4" />
<text class="t-b" x="395" y="35">Subtract</text>
<text class="t-s" x="395" y="50">uc</text>
<text class="t-m" x="395" y="67">A</text>
<text class="t-m" x="395" y="83">B</text>
<text class="t-m" x="471" y="67" text-anchor="end">Out</text>
</g>
<rect class="box" x="500" y="10" width="150" height="56" rx="4" />
<text class="t-b" x="507" y="25">Voronoi</text>
<text class="t-s" x="507" y="40">第一層 (已有)</text>
<text class="t-m" x="643" y="57" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box" x="500" y="90" width="150" height="88" rx="4" />
<text class="t-b" x="507" y="105">Voronoi</text>
<text class="t-s" x="507" y="120">第二層</text>
<text class="t-m" x="507" y="137">UV</text>
<text class="t-m" x="507" y="153">AngleOffset</text>
<text class="t-m" x="507" y="169">CellDensity</text>
<text class="t-m" x="643" y="137" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="672" y="40" width="80" height="72" rx="4" />
<text class="t-b" x="679" y="55">Minimum</text>
<text class="t-s" x="679" y="70">δ</text>
<text class="t-m" x="679" y="87">A</text>
<text class="t-m" x="679" y="103">B</text>
<text class="t-m" x="745" y="87" text-anchor="end">Out</text>
</g>
<rect class="box" x="772" y="60" width="62" height="56" rx="4" />
<text class="t-b" x="779" y="75">Power</text>
<text class="t-s" x="779" y="90">已有</text>
<text class="t-m" x="779" y="107">A</text>
</svg>`)
