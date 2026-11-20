explainer.fig('refraction-depth-test-graph', /* html */ `
<svg viewBox="0 0 840 230" aria-label="第四步的 graph：在 offset 後的 UV 再取一次 Scene Depth，和水面的 depth 比較；比較小 (在水面前方) 時 Branch 選原本的 screen position，否則選 offset 後的 UV，接 Scene Color">
<g class="is-new">
<path class="ln" d="M138,53 C160,53 158,53 180,53" />
</g>
<g class="is-new">
<path class="ln" d="M320,53 C342,53 338,83 360,83" />
</g>
<g class="is-new">
<path class="ln" d="M138,143 C226.8,143 271.2,99 360,99" />
</g>
<g class="is-new">
<path class="ln" d="M470,83 C492,83 498,113 520,113" />
</g>
<g class="is-new">
<path class="ln" d="M138,213 C290.8,213 367.2,129 520,129" />
</g>
<g class="is-new">
<path class="ln" d="M138,53 C290.8,53 367.2,145 520,145" />
</g>
<g class="is-new">
<path class="ln" d="M630,113 C652,113 658,109 680,109" />
</g>
<rect class="box" x="8" y="10" width="130" height="56" rx="4" />
<text class="t-b" x="15" y="25">Add</text>
<text class="t-s" x="15" y="40">UV1 (第三步的)</text>
<text class="t-m" x="131" y="57" text-anchor="end">Out</text>
<rect class="box" x="8" y="170" width="130" height="56" rx="4" />
<text class="t-b" x="15" y="185">Screen Position</text>
<text class="t-s" x="15" y="200">Default (第一步的)</text>
<text class="t-m" x="131" y="217" text-anchor="end">Out</text>
<rect class="box" x="8" y="100" width="130" height="56" rx="4" />
<text class="t-b" x="15" y="115">Split</text>
<text class="t-s" x="15" y="130">A = dw (已有)</text>
<text class="t-m" x="131" y="147" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box" x="180" y="10" width="140" height="56" rx="4" />
<text class="t-b" x="187" y="25">Scene Depth</text>
<text class="t-s" x="187" y="40">Sampling Mode: Eye</text>
<text class="t-m" x="187" y="57">UV</text>
<text class="t-m" x="313" y="57" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="360" y="40" width="110" height="72" rx="4" />
<text class="t-b" x="367" y="55">Comparison</text>
<text class="t-s" x="367" y="70">Less</text>
<text class="t-m" x="367" y="87">A</text>
<text class="t-m" x="367" y="103">B</text>
<text class="t-m" x="463" y="87" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="520" y="70" width="110" height="88" rx="4" />
<text class="t-b" x="527" y="85">Branch</text>
<text class="t-s" x="527" y="100">UV</text>
<text class="t-m" x="527" y="117">Predicate</text>
<text class="t-m" x="527" y="133">True</text>
<text class="t-m" x="527" y="149">False</text>
<text class="t-m" x="623" y="117" text-anchor="end">Out</text>
</g>
<rect class="box" x="680" y="80" width="110" height="42" rx="4" />
<text class="t-b" x="687" y="95">Scene Color</text>
<text class="t-m" x="687" y="113">UV</text>
<text class="t-m" x="783" y="113" text-anchor="end">Out</text>
</svg>`)
