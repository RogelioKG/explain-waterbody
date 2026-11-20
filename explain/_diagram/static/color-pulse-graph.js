explainer.fig('color-pulse-graph', /* html */ `
<svg viewBox="0 0 808 290" aria-label="練習用的 graph：Time 乘上 Speed，經過 Sine、乘 0.5、加 0.5 變成 0 到 1，當作 Lerp 的 T 混合 ColorA 與 ColorB，接到 Base Color">
  <path class="ln" d="M104,39 C124.0,39 104.0,53 124,53" />
  <path class="ln" d="M104,105 C124.0,105 104.0,69 124,69" />
  <path class="ln" d="M220,53 C240.0,53 220.0,53 240,53" />
  <path class="ln" d="M336,53 C356.0,53 336.0,53 356,53" />
  <path class="ln" d="M452,53 C472.0,53 452.0,53 472,53" />
  <path class="ln" d="M568,53 C588.0,53 568.0,225 588,225" />
  <path class="ln" d="M104,193 C297.6,193 394.4,193 588,193" />
  <path class="ln" d="M104,259 C297.6,259 394.4,209 588,209" />
  <path class="ln" d="M684,193 C704.0,193 684.0,193 704,193" />
  <rect class="box" x="8" y="10" width="96" height="42" rx="4" />
  <text class="t-b" x="15" y="25">Time</text>
  <text class="t-m" x="97" y="43" text-anchor="end">Time</text>
  <rect class="box c3" x="8" y="62" width="96" height="56" rx="4" />
  <text class="t-b" x="15" y="77">Speed</text>
  <text class="t-s" x="15" y="92">Property</text>
  <text class="t-m" x="97" y="109" text-anchor="end">Out</text>
  <rect class="box c3" x="8" y="150" width="96" height="56" rx="4" />
  <text class="t-b" x="15" y="165">ColorA</text>
  <text class="t-s" x="15" y="180">Property</text>
  <text class="t-m" x="97" y="197" text-anchor="end">Out</text>
  <rect class="box c3" x="8" y="216" width="96" height="56" rx="4" />
  <text class="t-b" x="15" y="231">ColorB</text>
  <text class="t-s" x="15" y="246">Property</text>
  <text class="t-m" x="97" y="263" text-anchor="end">Out</text>
  <rect class="box" x="124" y="10" width="96" height="72" rx="4" />
  <text class="t-b" x="131" y="25">Multiply</text>
  <text class="t-s" x="131" y="40">秒數 × Speed</text>
  <text class="t-m" x="131" y="57">A</text>
  <text class="t-m" x="131" y="73">B</text>
  <text class="t-m" x="213" y="57" text-anchor="end">Out</text>
  <rect class="box" x="240" y="10" width="96" height="56" rx="4" />
  <text class="t-b" x="247" y="25">Sine</text>
  <text class="t-s" x="247" y="40">−1 到 1</text>
  <text class="t-m" x="247" y="57">In</text>
  <text class="t-m" x="329" y="57" text-anchor="end">Out</text>
  <rect class="box" x="356" y="10" width="96" height="72" rx="4" />
  <text class="t-b" x="363" y="25">Multiply</text>
  <text class="t-s" x="363" y="40">−0.5 到 0.5</text>
  <text class="t-m" x="363" y="57">A</text>
  <text class="t-m" x="363" y="73">B = 0.5</text>
  <text class="t-m" x="445" y="57" text-anchor="end">Out</text>
  <rect class="box" x="472" y="10" width="96" height="72" rx="4" />
  <text class="t-b" x="479" y="25">Add</text>
  <text class="t-s" x="479" y="40">0 到 1</text>
  <text class="t-m" x="479" y="57">A</text>
  <text class="t-m" x="479" y="73">B = 0.5</text>
  <text class="t-m" x="561" y="57" text-anchor="end">Out</text>
  <rect class="box" x="588" y="150" width="96" height="88" rx="4" />
  <text class="t-b" x="595" y="165">Lerp</text>
  <text class="t-s" x="595" y="180">混合兩色</text>
  <text class="t-m" x="595" y="197">A</text>
  <text class="t-m" x="595" y="213">B</text>
  <text class="t-m" x="595" y="229">T</text>
  <text class="t-m" x="677" y="197" text-anchor="end">Out</text>
  <rect class="box c2" x="704" y="150" width="96" height="56" rx="4" />
  <text class="t-b" x="711" y="165">Fragment</text>
  <text class="t-s" x="711" y="180">Master Stack</text>
  <text class="t-m" x="711" y="197">Base Color</text>
</svg>`)
