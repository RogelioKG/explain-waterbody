explainer.fig('bed-position-similar-triangles', /* html */ `
<svg viewBox="0 0 700 390" aria-label="同一條視線上，湖底那一點的 eye depth 是水面那一點的幾倍，它離攝影機就是幾倍遠">
<path d="M134.0,214.0 L670.0,358.9 V214.0 Z" style="fill:var(--f4);fill-opacity:0.15;stroke:none" />
<path class="ln" d="M134.0,214.0 H670.0" />
<text class="t-s" x="670.0" y="208.0" text-anchor="end">水面</text>
<path class="ln" style="stroke-width:2" d="M14.0,182.0 L134.0,214.0 L670.0,358.9" />
<text class="t-s" x="666.0" y="376.9" text-anchor="end">湖底</text>
<path class="ln" style="stroke-dasharray:6 4" d="M110.0,54.0 L531.1,207.2" />
<text class="t-s" x="537.1" y="211.2">攝影機正前方</text>
<path class="ln" style="stroke-dasharray:2 3" d="M323.3,214.0 L349.9,141.3" />
<path class="ln" style="stroke-dasharray:2 3" d="M430.0,294.0 L469.9,184.9" />
<path class="ln c1" style="stroke-width:1.6" d="M116.0,37.5 L356.0,124.8" />
<text class="t-m c1" x="362.0" y="128.8">d<tspan font-size="70%" dy="3">w</tspan><tspan dy="-3"> = 3.19</tspan></text>
<path class="ln c2" style="stroke-width:1.6" d="M123.7,16.4 L483.6,147.3" />
<text class="t-m c2" x="489.6" y="151.3">d<tspan font-size="70%" dy="3">u</tspan><tspan dy="-3"> = 4.79</tspan></text>
<path class="ln arrow" style="stroke-width:2" d="M110.0,54.0 L430.0,294.0" />
<circle cx="110.0" cy="54.0" r="5" style="fill:var(--ink);stroke:none" />
<text class="t-b" x="100.0" y="59.0" text-anchor="end">攝影機 p<tspan font-size="70%" dy="3">cam</tspan><tspan dy="-3"></tspan></text>
<circle cx="323.3" cy="214.0" r="4" style="fill:var(--f1);stroke:none" />
<text class="t-b" x="315.3" y="234.0" text-anchor="end">p<tspan font-size="70%" dy="3">w</tspan><tspan dy="-3"> 水面這一點</tspan></text>
<circle cx="430.0" cy="294.0" r="4" style="fill:var(--f2);stroke:none" />
<text class="t-b" x="420.0" y="314.0" text-anchor="end">p<tspan font-size="70%" dy="3">bed</tspan><tspan dy="-3"> 湖底那一點</tspan></text>
</svg>`)
