explainer.fig('refraction-uv-offset-graph', /* html */ `
<svg viewBox="0 0 840 230" aria-label="第三步的 graph：細波紋 normal 的 xy 乘上 RefractionStrength 與 saturate(h) 得到 offset，加到 Screen Position 後接 Scene Color 的 UV">
<g class="is-new">
<path class="ln" d="M158,53 C180,53 168,53 190,53" />
</g>
<g class="is-new">
<path class="ln" d="M158,143 C180,143 168,129 190,129" />
</g>
<g class="is-new">
<path class="ln" d="M158,213 C221.2,213 252.8,149 316,149" />
</g>
<g class="is-new">
<path class="ln" d="M286,129 C308,129 294,165 316,165" />
</g>
<g class="is-new">
<path class="ln" d="M286,53 C345.2,53 374.8,73 434,73" />
</g>
<g class="is-new">
<path class="ln" d="M406,149 C428,149 412,89 434,89" />
</g>
<g class="is-new">
<path class="ln" d="M574,173 C596,173 582,89 604,89" />
</g>
<g class="is-new">
<path class="ln" d="M530,73 C559.6,73 574.4,105 604,105" />
</g>
<g class="is-new">
<path class="ln" d="M684,89 C706,89 692,89 714,89" />
</g>
<rect class="box" x="8" y="10" width="150" height="56" rx="4" />
<text class="t-b" x="15" y="25">Normal Strength</text>
<text class="t-s" x="15" y="40">細波紋 (已有)</text>
<text class="t-m" x="151" y="57" text-anchor="end">Out</text>
<rect class="box c1" x="8" y="100" width="150" height="56" rx="4" />
<text class="t-b" x="15" y="115">SSG_Thickness</text>
<text class="t-s" x="15" y="130">Sub Graph (已有)</text>
<text class="t-m" x="151" y="147" text-anchor="end">Thickness</text>
<g class="is-new">
<rect class="box c3" x="8" y="170" width="150" height="56" rx="4" />
<text class="t-b" x="15" y="185">RefractionStrength</text>
<text class="t-s" x="15" y="200">Property</text>
<text class="t-m" x="151" y="217" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="190" y="10" width="96" height="56" rx="4" />
<text class="t-b" x="197" y="25">Swizzle</text>
<text class="t-s" x="197" y="40">Mask: xy</text>
<text class="t-m" x="197" y="57">In</text>
<text class="t-m" x="279" y="57" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="190" y="100" width="96" height="42" rx="4" />
<text class="t-b" x="197" y="115">Saturate</text>
<text class="t-m" x="197" y="133">In</text>
<text class="t-m" x="279" y="133" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="316" y="120" width="90" height="58" rx="4" />
<text class="t-b" x="323" y="135">Multiply</text>
<text class="t-m" x="323" y="153">A</text>
<text class="t-m" x="323" y="169">B</text>
<text class="t-m" x="399" y="153" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="434" y="30" width="96" height="72" rx="4" />
<text class="t-b" x="441" y="45">Multiply</text>
<text class="t-s" x="441" y="60">offset o</text>
<text class="t-m" x="441" y="77">A</text>
<text class="t-m" x="441" y="93">B</text>
<text class="t-m" x="523" y="77" text-anchor="end">Out</text>
</g>
<rect class="box" x="434" y="130" width="140" height="56" rx="4" />
<text class="t-b" x="441" y="145">Screen Position</text>
<text class="t-s" x="441" y="160">Default (第一步的)</text>
<text class="t-m" x="567" y="177" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box" x="604" y="60" width="80" height="58" rx="4" />
<text class="t-b" x="611" y="75">Add</text>
<text class="t-m" x="611" y="93">A</text>
<text class="t-m" x="611" y="109">B</text>
<text class="t-m" x="677" y="93" text-anchor="end">Out</text>
</g>
<rect class="box" x="714" y="60" width="110" height="42" rx="4" />
<text class="t-b" x="721" y="75">Scene Color</text>
<text class="t-m" x="721" y="93">UV</text>
<text class="t-m" x="817" y="93" text-anchor="end">Out</text>
</svg>`)
