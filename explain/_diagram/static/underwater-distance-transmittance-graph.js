explainer.fig('underwater-distance-transmittance-graph', /* html */ `
<svg viewBox="0 0 660 216" aria-label="第二步的 graph 前半：Position (World) 與攝影機位置的距離 d 接進 SSG_Absorption 的 Thickness，Clarity 接進 Clarity，Transmittance 輸出透光率 τ，Opacity 輸出 1 − τ">
<path class="ln" d="M128,57 C150,57 138,67 160,67" />
<path class="ln" d="M128,121 C150,121 138,83 160,83" />
<path class="ln" d="M260,67 C282,67 282,107 304,107" />
<path class="ln" d="M128,197 C216,197 216,123 304,123" />
<path class="ln arrow" d="M504,107 H600" />
<text class="t-b" x="606" y="111">τ</text>
<path class="ln arrow" d="M504,123 C528,123 532,163 556,163 H600" />
<text class="t-b" x="606" y="167">1 − τ</text>
<text class="t-s" x="520" y="99">接到下圖</text>
<rect class="box" x="8" y="10" width="120" height="56" rx="4" />
<text class="t-b" x="15" y="25">Position</text>
<text class="t-s" x="15" y="40">Space：World</text>
<text class="t-m" x="121" y="61" text-anchor="end">Out</text>
<rect class="box" x="8" y="74" width="120" height="56" rx="4" />
<text class="t-b" x="15" y="89">Camera</text>
<text class="t-m" x="121" y="125" text-anchor="end">Position</text>
<rect class="box c3" x="8" y="150" width="120" height="56" rx="4" />
<text class="t-b" x="15" y="165">Clarity</text>
<text class="t-s" x="15" y="180">Property：D</text>
<text class="t-m" x="121" y="201" text-anchor="end">Out</text>
<rect class="box" x="160" y="20" width="100" height="72" rx="4" />
<text class="t-b" x="167" y="35">Distance</text>
<text class="t-s" x="167" y="50">d</text>
<text class="t-m" x="167" y="71">A</text>
<text class="t-m" x="167" y="87">B</text>
<text class="t-m" x="253" y="71" text-anchor="end">Out</text>
<rect class="box c1" x="304" y="60" width="200" height="76" rx="4" />
<text class="t-b" x="311" y="75">SSG_Absorption</text>
<text class="t-s" x="311" y="90">Sub Graph</text>
<text class="t-m" x="311" y="111">Thickness</text>
<text class="t-m" x="311" y="127">Clarity</text>
<text class="t-m" x="497" y="111" text-anchor="end">Transmittance</text>
<text class="t-m" x="497" y="127" text-anchor="end">Opacity</text>
</svg>`)
