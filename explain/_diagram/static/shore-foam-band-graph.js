explainer.fig('shore-foam-band-graph', /* html */ `
<svg viewBox="0 0 840 310" aria-label="第四步前半的 graph：h ÷ FoamWidth 夾到 0 到 1 再 One Minus 得到泡沫帶 m；m 同時決定泡沫色與不透明度">
<g class="is-new">
<path class="ln" d="M112,53 C134,53 112,61 134,61" />
</g>
<g class="is-new">
<path class="ln" d="M112,117 C134,117 112,77 134,77" />
</g>
<g class="is-new">
<path class="ln" d="M224,61 C246,61 224,55 246,55" />
</g>
<g class="is-new">
<path class="ln" d="M336,55 C358,55 336,69 358,69" />
</g>
<g class="is-new">
<path class="ln" d="M454,69 C480.4,69 493.6,165 520,165" />
</g>
<g class="is-new">
<path class="ln" d="M454,69 C480.4,69 493.6,271 520,271" />
</g>
<g class="is-new">
<path class="ln" d="M462,163 C485.2,163 496.8,133 520,133" />
</g>
<g class="is-new">
<path class="ln" d="M462,291 C485.2,291 496.8,149 520,149" />
</g>
<g class="is-new">
<path class="ln" d="M462,227 C485.2,227 496.8,239 520,239" />
</g>
<g class="is-new">
<path class="ln" d="M616,133 C645.6,133 660.4,163 690,163" />
</g>
<g class="is-new">
<path class="ln" d="M616,239 C645.6,239 660.4,195 690,195" />
</g>
<rect class="box" x="8" y="10" width="104" height="56" rx="4" />
<text class="t-b" x="15" y="25">Maximum</text>
<text class="t-s" x="15" y="40">第二步的 h</text>
<text class="t-m" x="105" y="57" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box c3" x="8" y="74" width="104" height="56" rx="4" />
<text class="t-b" x="15" y="89">FoamWidth</text>
<text class="t-s" x="15" y="104">Property</text>
<text class="t-m" x="105" y="121" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="134" y="18" width="90" height="72" rx="4" />
<text class="t-b" x="141" y="33">Divide</text>
<text class="t-s" x="141" y="48">h ÷ W</text>
<text class="t-m" x="141" y="65">A</text>
<text class="t-m" x="141" y="81">B</text>
<text class="t-m" x="217" y="65" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="246" y="26" width="90" height="42" rx="4" />
<text class="t-b" x="253" y="41">Saturate</text>
<text class="t-m" x="253" y="59">In</text>
<text class="t-m" x="329" y="59" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="358" y="26" width="96" height="56" rx="4" />
<text class="t-b" x="365" y="41">One Minus</text>
<text class="t-s" x="365" y="56">m</text>
<text class="t-m" x="365" y="73">In</text>
<text class="t-m" x="447" y="73" text-anchor="end">Out</text>
</g>
<rect class="box" x="358" y="120" width="104" height="56" rx="4" />
<text class="t-b" x="365" y="135">Lerp</text>
<text class="t-s" x="365" y="150">第三步的水色</text>
<text class="t-m" x="455" y="167" text-anchor="end">Out</text>
<rect class="box" x="358" y="184" width="104" height="56" rx="4" />
<text class="t-b" x="365" y="199">Saturate</text>
<text class="t-s" x="365" y="214">第三步的 α</text>
<text class="t-m" x="455" y="231" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box c3" x="358" y="248" width="104" height="56" rx="4" />
<text class="t-b" x="365" y="263">FoamColor</text>
<text class="t-s" x="365" y="278">Property</text>
<text class="t-m" x="455" y="295" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="520" y="90" width="96" height="88" rx="4" />
<text class="t-b" x="527" y="105">Lerp</text>
<text class="t-s" x="527" y="120">加上泡沫色</text>
<text class="t-m" x="527" y="137">A</text>
<text class="t-m" x="527" y="153">B</text>
<text class="t-m" x="527" y="169">T</text>
<text class="t-m" x="609" y="137" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="520" y="196" width="96" height="88" rx="4" />
<text class="t-b" x="527" y="211">Lerp</text>
<text class="t-s" x="527" y="226">泡沫不透明</text>
<text class="t-m" x="527" y="243">A</text>
<text class="t-m" x="527" y="259">B = 1</text>
<text class="t-m" x="527" y="275">T</text>
<text class="t-m" x="609" y="243" text-anchor="end">Out</text>
</g>
<rect class="box c2" x="690" y="120" width="100" height="88" rx="4" />
<text class="t-b" x="697" y="135">Fragment</text>
<text class="t-s" x="697" y="150">Master Stack</text>
<text class="t-m" x="697" y="167">Base Color</text>
<text class="t-m" x="697" y="183">…</text>
<text class="t-m" x="697" y="199">Alpha</text>
</svg>`)
