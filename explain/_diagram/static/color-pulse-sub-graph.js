explainer.fig('color-pulse-sub-graph', /* html */ `
<svg viewBox="0 0 760 250" aria-label="換成 Sub Graph 之後：SG_ColorPulse 裡只剩一個 SSG_Pulse node；打開 SSG_Pulse，裡面是原本的五個 node，結果交給 Output node">
  <path class="ln is-new" d="M104,79 C124.0,79 104.0,79 124,79" />
  <path class="ln is-new" d="M220,79 C240.0,79 220.0,165 240,165" />
  <path class="ln" d="M104,147 C158.4,147 185.6,133 240,133" />
  <path class="ln" d="M104,213 C158.4,213 185.6,149 240,149" />
  <path class="ln" d="M320,133 C340.0,133 320.0,147 340,147" />
  <path class="ln" d="M552,65 C572.0,65 548.0,65 568,65" />
  <path class="ln" d="M552,135 C572.0,135 548.0,81 568,81" />
  <path class="ln" d="M648,65 C668,65 548,141 568,141" />
  <path class="ln" d="M648,141 C668,141 548,199 568,199" />
  <path class="ln" d="M648,199 C668.0,199 644.0,65 664,65" />
  <path class="ln" d="M744,65 C764,65 644,141 664,141" />
  <text class="t-b" x="8" y="20">SG_ColorPulse 裡</text>
  <rect class="box c3" x="8" y="36" width="96" height="56" rx="4" />
  <text class="t-b" x="15" y="51">Speed</text>
  <text class="t-s" x="15" y="66">Property</text>
  <text class="t-m" x="97" y="83" text-anchor="end">Out</text>
  <rect class="box c3" x="8" y="104" width="96" height="56" rx="4" />
  <text class="t-b" x="15" y="119">ColorA</text>
  <text class="t-s" x="15" y="134">Property</text>
  <text class="t-m" x="97" y="151" text-anchor="end">Out</text>
  <rect class="box c3" x="8" y="170" width="96" height="56" rx="4" />
  <text class="t-b" x="15" y="185">ColorB</text>
  <text class="t-s" x="15" y="200">Property</text>
  <text class="t-m" x="97" y="217" text-anchor="end">Out</text>
  <rect class="box c1 is-new" x="124" y="36" width="96" height="56" rx="4" />
  <text class="t-b" x="131" y="51">SSG_Pulse</text>
  <text class="t-s" x="131" y="66">Sub Graph</text>
  <text class="t-m" x="131" y="83">Speed</text>
  <text class="t-m" x="213" y="83" text-anchor="end">Pulse</text>
  <rect class="box" x="240" y="104" width="80" height="74" rx="4" />
  <text class="t-b" x="247" y="119">Lerp</text>
  <text class="t-m" x="247" y="137">A</text>
  <text class="t-m" x="247" y="153">B</text>
  <text class="t-m" x="247" y="169">T</text>
  <text class="t-m" x="313" y="137" text-anchor="end">Out</text>
  <rect class="box c2" x="340" y="104" width="96" height="56" rx="4" />
  <text class="t-b" x="347" y="119">Fragment</text>
  <text class="t-s" x="347" y="134">Master Stack</text>
  <text class="t-m" x="347" y="151">Base Color</text>
  <path class="ln" stroke-dasharray="4 4" d="M456,10 V250" />
  <text class="t-b" x="472" y="20">SSG_Pulse 裡面</text>
  <rect class="box" x="472" y="36" width="80" height="42" rx="4" />
  <text class="t-b" x="479" y="51">Time</text>
  <text class="t-m" x="545" y="69" text-anchor="end">Time</text>
  <rect class="box c3" x="472" y="92" width="80" height="56" rx="4" />
  <text class="t-b" x="479" y="107">Speed</text>
  <text class="t-s" x="479" y="122">輸入</text>
  <text class="t-m" x="545" y="139" text-anchor="end">Out</text>
  <rect class="box" x="568" y="36" width="80" height="58" rx="4" />
  <text class="t-b" x="575" y="51">Multiply</text>
  <text class="t-m" x="575" y="69">A</text>
  <text class="t-m" x="575" y="85">B</text>
  <text class="t-m" x="641" y="69" text-anchor="end">Out</text>
  <rect class="box" x="568" y="112" width="80" height="42" rx="4" />
  <text class="t-b" x="575" y="127">Sine</text>
  <text class="t-m" x="575" y="145">In</text>
  <text class="t-m" x="641" y="145" text-anchor="end">Out</text>
  <rect class="box" x="568" y="170" width="80" height="58" rx="4" />
  <text class="t-b" x="575" y="185">Multiply</text>
  <text class="t-m" x="575" y="203">A</text>
  <text class="t-m" x="575" y="219">B = 0.5</text>
  <text class="t-m" x="641" y="203" text-anchor="end">Out</text>
  <rect class="box" x="664" y="36" width="80" height="58" rx="4" />
  <text class="t-b" x="671" y="51">Add</text>
  <text class="t-m" x="671" y="69">A</text>
  <text class="t-m" x="671" y="85">B = 0.5</text>
  <text class="t-m" x="737" y="69" text-anchor="end">Out</text>
  <rect class="box c1" x="664" y="112" width="80" height="42" rx="4" />
  <text class="t-b" x="671" y="127">Output</text>
  <text class="t-m" x="671" y="145">Pulse</text>
</svg>`)
