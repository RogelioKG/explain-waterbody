explainer.fig('fresnel-reflection-graph', /* html */ `
<svg viewBox="0 0 840 400" aria-label="這一章的 graph：Refraction 已有的 Transform 輸出 (world space 的 normal) 接 Fresnel Effect，Power 接 FresnelPower；One Minus 得到 1 − F_r，分別乘上原本的 Emission 與 α C_deep，前者接 Emission，後者進泡沫色的 Lerp">
<path class="ln" d="M148,53 C170,53 156,53 178,53" />
<g class="is-new">
<path class="ln" d="M348,53 C370,53 356,73 378,73" />
</g>
<g class="is-new">
<path class="ln" d="M148,143 C240,143 286,105 378,105" />
</g>
<g class="is-new">
<path class="ln" d="M498,73 C520,73 356,193 378,193" />
</g>
<g class="is-new">
<path class="ln" d="M178,233 C322.8,233 395.2,153 540,153" />
</g>
<g class="is-new">
<path class="ln" d="M498,193 C520,193 518,169 540,169" />
</g>
<g class="is-new">
<path class="ln" d="M178,313 C322.8,313 395.2,239 540,239" />
</g>
<g class="is-new">
<path class="ln" d="M498,193 C520,193 518,255 540,255" />
</g>
<g class="is-new">
<path class="ln" d="M670,239 C692,239 518,323 540,323" />
</g>
<g class="is-new">
<path class="ln" d="M670,153 C690,153 690,195 710,195" />
</g>
<path class="ln" d="M670,323 C692,323 688,179 710,179" />
<rect class="box" x="8" y="10" width="140" height="56" rx="4" />
<text class="t-b" x="15" y="25">Normal Strength</text>
<text class="t-s" x="15" y="40">細波紋 (已有)</text>
<text class="t-m" x="141" y="57" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box c3" x="8" y="100" width="140" height="56" rx="4" />
<text class="t-b" x="15" y="115">FresnelPower</text>
<text class="t-s" x="15" y="130">Property</text>
<text class="t-m" x="141" y="147" text-anchor="end">Out</text>
</g>
<rect class="box" x="178" y="10" width="170" height="56" rx="4" />
<text class="t-b" x="185" y="25">Transform</text>
<text class="t-s" x="185" y="40">Refraction 的 (已有)</text>
<text class="t-m" x="185" y="57">In</text>
<text class="t-m" x="341" y="57" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box" x="378" y="30" width="120" height="88" rx="4" />
<text class="t-b" x="385" y="45">Fresnel Effect</text>
<text class="t-s" x="385" y="60">F<tspan font-size="70%" dy="3">r</tspan></text>
<text class="t-m" x="385" y="77">Normal</text>
<text class="t-m" x="385" y="93">View Dir</text>
<text class="t-m" x="385" y="109">Power</text>
<text class="t-m" x="491" y="77" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="378" y="150" width="120" height="56" rx="4" />
<text class="t-b" x="385" y="165">One Minus</text>
<text class="t-s" x="385" y="180">1 − F<tspan font-size="70%" dy="3">r</tspan></text>
<text class="t-m" x="385" y="197">In</text>
<text class="t-m" x="491" y="197" text-anchor="end">Out</text>
</g>
<rect class="box" x="8" y="190" width="170" height="56" rx="4" />
<text class="t-b" x="15" y="205">Multiply「Emission」</text>
<text class="t-s" x="15" y="220">已有</text>
<text class="t-m" x="171" y="237" text-anchor="end">Out</text>
<rect class="box" x="8" y="270" width="170" height="56" rx="4" />
<text class="t-b" x="15" y="285">Multiply「水自身」</text>
<text class="t-s" x="15" y="300">α C_deep (已有)</text>
<text class="t-m" x="171" y="317" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box" x="540" y="110" width="130" height="74" rx="4" />
<text class="t-b" x="547" y="125">Multiply</text>
<text class="t-s" x="547" y="140">Emission × (1 − F<tspan font-size="70%" dy="3">r</tspan><tspan dy="-3">)</tspan></text>
<text class="t-m" x="547" y="157">A</text>
<text class="t-m" x="547" y="173">B</text>
<text class="t-m" x="663" y="157" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="540" y="196" width="130" height="74" rx="4" />
<text class="t-b" x="547" y="211">Multiply</text>
<text class="t-s" x="547" y="226">水自身 × (1 − F<tspan font-size="70%" dy="3">r</tspan><tspan dy="-3">)</tspan></text>
<text class="t-m" x="547" y="243">A</text>
<text class="t-m" x="547" y="259">B</text>
<text class="t-m" x="663" y="243" text-anchor="end">Out</text>
</g>
<rect class="box" x="540" y="280" width="130" height="88" rx="4" />
<text class="t-b" x="547" y="295">Lerp「泡沫色」</text>
<text class="t-s" x="547" y="310">A 改接 (已有)</text>
<text class="t-m" x="547" y="327">A</text>
<text class="t-m" x="547" y="343">B</text>
<text class="t-m" x="547" y="359">T</text>
<text class="t-m" x="663" y="327" text-anchor="end">Out</text>
<rect class="box c2" x="710" y="150" width="110" height="58" rx="4" />
<text class="t-b" x="717" y="165">Fragment</text>
<text class="t-m" x="717" y="183">Base Color</text>
<text class="t-m" x="717" y="199">Emission</text>
<text class="t-s" x="540" y="392">Lerp「泡沫色」的 B、T 不變</text>
</svg>`)
