explainer.fig('caustic-surface-tilt-offset-graph', /* html */ `
<svg viewBox="0 0 840 314" aria-label="第六步的 graph：Refraction 的 Transform 輸出取 xz 得到水面的傾斜，乘上 CausticDistortion 與陽光的路 hsun，加到第二步的 Swizzle (xz) 上，改接兩層 Voronoi 的 Subtract 的 A">
<g class="is-new">
<path class="ln" d="M158,53 C174,53 174,53 190,53" />
</g>
<g class="is-new">
<path class="ln" d="M158,133 C174,133 174,149 190,149" />
</g>
<g class="is-new">
<path class="ln" d="M158,213 C174,213 174,165 190,165" />
</g>
<g class="is-new">
<path class="ln" d="M286,53 C301,53 301,73 316,73" />
</g>
<g class="is-new">
<path class="ln" d="M286,149 C301,149 301,89 316,89" />
</g>
<g class="is-new">
<path class="ln" d="M412,73 C427,73 427,119 442,119" />
</g>
<g class="is-new">
<path class="ln" d="M158,293 C300,293 300,103 442,103" />
</g>
<g class="is-new">
<path class="ln" d="M538,103 C569,103 569,63 600,63" />
</g>
<g class="is-new">
<path class="ln" d="M538,103 C569,103 569,153 600,153" />
</g>
<rect class="box" x="8" y="10" width="150" height="56" rx="4" />
<text class="t-b" x="15" y="25">Transform</text>
<text class="t-s" x="15" y="40">Refraction 的 (已有)</text>
<text class="t-m" x="151" y="57" text-anchor="end">Out</text>
<rect class="box" x="8" y="90" width="150" height="56" rx="4" />
<text class="t-b" x="15" y="105">Divide</text>
<text class="t-s" x="15" y="120">陽光的路 hsun (已有)</text>
<text class="t-m" x="151" y="137" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box c3" x="8" y="170" width="150" height="56" rx="4" />
<text class="t-b" x="15" y="185">CausticDistortion</text>
<text class="t-s" x="15" y="200">Property</text>
<text class="t-m" x="151" y="217" text-anchor="end">Out</text>
</g>
<rect class="box" x="8" y="250" width="150" height="56" rx="4" />
<text class="t-b" x="15" y="265">Swizzle</text>
<text class="t-s" x="15" y="280">xz：ps (第二步的)</text>
<text class="t-m" x="151" y="297" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box" x="190" y="10" width="96" height="56" rx="4" />
<text class="t-b" x="197" y="25">Swizzle</text>
<text class="t-s" x="197" y="40">傾斜，Mask: xz</text>
<text class="t-m" x="197" y="57">In</text>
<text class="t-m" x="279" y="57" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="190" y="120" width="96" height="58" rx="4" />
<text class="t-b" x="197" y="135">Multiply</text>
<text class="t-m" x="197" y="153">A</text>
<text class="t-m" x="197" y="169">B</text>
<text class="t-m" x="279" y="153" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="316" y="30" width="96" height="72" rx="4" />
<text class="t-b" x="323" y="45">Multiply</text>
<text class="t-s" x="323" y="60">偏移</text>
<text class="t-m" x="323" y="77">A</text>
<text class="t-m" x="323" y="93">B</text>
<text class="t-m" x="405" y="77" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="442" y="60" width="96" height="72" rx="4" />
<text class="t-b" x="449" y="75">Add</text>
<text class="t-s" x="449" y="90">扭動</text>
<text class="t-m" x="449" y="107">A</text>
<text class="t-m" x="449" y="123">B</text>
<text class="t-m" x="531" y="107" text-anchor="end">Out</text>
</g>
<rect class="box" x="600" y="20" width="130" height="56" rx="4" />
<text class="t-b" x="607" y="35">Subtract</text>
<text class="t-s" x="607" y="50">第一層 (已有)</text>
<text class="t-m" x="607" y="67">A</text>
<rect class="box" x="600" y="110" width="130" height="56" rx="4" />
<text class="t-b" x="607" y="125">Subtract</text>
<text class="t-s" x="607" y="140">第二層 (已有)</text>
<text class="t-m" x="607" y="157">A</text>
</svg>`)
