explainer.fig('caustic-voronoi-pattern-graph', /* html */ `
<svg viewBox="0 0 840 368" aria-label="第二步前半的 graph：湖底那一點的 xz 減去 Caustic0 的速度乘時間當 UV，Voronoi 的 AngleOffset、CellDensity 取 Caustic0 的 w、z，Out 取 CausticPower 次方">
<g class="is-new">
<path class="ln" d="M132,53 C154,53 132,53 154,53" />
</g>
<g class="is-new">
<path class="ln" d="M132,133 C154,133 132,133 154,133" />
</g>
<g class="is-new">
<path class="ln" d="M132,133 C154,133 132,299 154,299" />
</g>
<g class="is-new">
<path class="ln" d="M238,133 C260,133 238,153 260,153" />
</g>
<g class="is-new">
<path class="ln" d="M250,213 C255,213 255,169 260,169" />
</g>
<g class="is-new">
<path class="ln" d="M238,53 C287.6,53 312.4,63 362,63" />
</g>
<g class="is-new">
<path class="ln" d="M340,153 C362,153 340,79 362,79" />
</g>
<g class="is-new">
<path class="ln" d="M452,63 C474,63 452,83 474,83" />
</g>
<g class="is-new">
<path class="ln" d="M238,347 C332.4,347 379.6,99 474,99" />
</g>
<g class="is-new">
<path class="ln" d="M238,331 C332.4,331 379.6,115 474,115" />
</g>
<g class="is-new">
<path class="ln" d="M624,83 C646,83 624,83 646,83" />
</g>
<g class="is-new">
<path class="ln" d="M624,193 C646,193 624,99 646,99" />
</g>
<rect class="box" x="8" y="10" width="124" height="56" rx="4" />
<text class="t-b" x="15" y="25">Add</text>
<text class="t-s" x="15" y="40">pbed (第一步的)</text>
<text class="t-m" x="125" y="57" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box c3" x="8" y="90" width="124" height="56" rx="4" />
<text class="t-b" x="15" y="105">Caustic0</text>
<text class="t-s" x="15" y="120">Property</text>
<text class="t-m" x="125" y="137" text-anchor="end">Out</text>
</g>
<rect class="box c3" x="154" y="170" width="96" height="56" rx="4" />
<text class="t-b" x="161" y="185">WaterTime</text>
<text class="t-s" x="161" y="200">Property (已有)</text>
<text class="t-m" x="243" y="217" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box" x="154" y="10" width="84" height="56" rx="4" />
<text class="t-b" x="161" y="25">Swizzle</text>
<text class="t-s" x="161" y="40">Mask: xz</text>
<text class="t-m" x="161" y="57">In</text>
<text class="t-m" x="231" y="57" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="154" y="90" width="84" height="56" rx="4" />
<text class="t-b" x="161" y="105">Swizzle</text>
<text class="t-s" x="161" y="120">Mask: xy　v</text>
<text class="t-m" x="161" y="137">In</text>
<text class="t-m" x="231" y="137" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="154" y="270" width="84" height="90" rx="4" />
<text class="t-b" x="161" y="285">Split</text>
<text class="t-m" x="161" y="303">In</text>
<text class="t-m" x="231" y="303" text-anchor="end">R</text>
<text class="t-m" x="231" y="319" text-anchor="end">G</text>
<text class="t-m" x="231" y="335" text-anchor="end">B　sc</text>
<text class="t-m" x="231" y="351" text-anchor="end">A</text>
</g>
<g class="is-new">
<rect class="box" x="260" y="110" width="80" height="72" rx="4" />
<text class="t-b" x="267" y="125">Multiply</text>
<text class="t-s" x="267" y="140">v t</text>
<text class="t-m" x="267" y="157">A</text>
<text class="t-m" x="267" y="173">B</text>
<text class="t-m" x="333" y="157" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="362" y="20" width="90" height="72" rx="4" />
<text class="t-b" x="369" y="35">Subtract</text>
<text class="t-s" x="369" y="50">uc</text>
<text class="t-m" x="369" y="67">A</text>
<text class="t-m" x="369" y="83">B</text>
<text class="t-m" x="445" y="67" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="474" y="40" width="150" height="88" rx="4" />
<text class="t-b" x="481" y="55">Voronoi</text>
<text class="t-s" x="481" y="70">Hash: Deterministic</text>
<text class="t-m" x="481" y="87">UV</text>
<text class="t-m" x="481" y="103">AngleOffset</text>
<text class="t-m" x="481" y="119">CellDensity</text>
<text class="t-m" x="617" y="87" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="646" y="40" width="80" height="72" rx="4" />
<text class="t-b" x="653" y="55">Power</text>
<text class="t-s" x="653" y="70">c</text>
<text class="t-m" x="653" y="87">A</text>
<text class="t-m" x="653" y="103">B</text>
<text class="t-m" x="719" y="87" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box c3" x="474" y="150" width="150" height="56" rx="4" />
<text class="t-b" x="481" y="165">CausticPower</text>
<text class="t-s" x="481" y="180">Property</text>
<text class="t-m" x="617" y="197" text-anchor="end">Out</text>
</g>
<text class="t-s" x="646" y="132">Out → 後半的 Multiply</text>
</svg>`)
