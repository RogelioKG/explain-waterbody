explainer.fig('gerstner-custom-function-graph', /* html */ `
<svg viewBox="0 0 800 210" aria-label="第四步：四個輸入接進 Custom Function，兩個輸出各經過一個 Transform 接到 Position 與 Normal block">
  <path class="ln is-new" d="M112,51 C151.6,51 160.4,83 200,83" />
  <path class="ln is-new" d="M112,93 C151.6,93 160.4,99 200,99" />
  <path class="ln is-new" d="M112,147 C151.6,147 160.4,115 200,115" />
  <path class="ln is-new" d="M112,203 C151.6,203 160.4,131 200,131" />
  <path class="ln is-new" d="M400,83 C431.5,83 438.5,63 470,63" />
  <path class="ln is-new" d="M400,99 C431.5,99 438.5,153 470,153" />
  <path class="ln" d="M582,63 C619.8,63 628.2,93 666,93" />
  <path class="ln" d="M582,153 C619.8,153 628.2,109 666,109" />
  <rect class="box" x="8" y="8" width="104" height="56" rx="4" />
  <text class="t-b" x="15" y="23">Position</text>
  <text class="t-s" x="15" y="38">Space: World</text>
  <text class="t-m" x="105" y="55" text-anchor="end">Out</text>
  <rect class="box" x="8" y="64" width="104" height="42" rx="4" />
  <text class="t-b" x="15" y="79">Time</text>
  <text class="t-m" x="105" y="97" text-anchor="end">Time</text>
  <rect class="box c3" x="8" y="104" width="104" height="56" rx="4" />
  <text class="t-b" x="15" y="119">Steepness</text>
  <text class="t-s" x="15" y="134">Property</text>
  <text class="t-m" x="105" y="151" text-anchor="end">Out</text>
  <rect class="box c3" x="8" y="160" width="104" height="56" rx="4" />
  <text class="t-b" x="15" y="175">Wavelength</text>
  <text class="t-s" x="15" y="190">Property</text>
  <text class="t-m" x="105" y="207" text-anchor="end">Out</text>
  <rect class="box c4 is-new" x="200" y="40" width="200" height="104" rx="4" />
  <text class="t-b" x="207" y="55">GerstnerWaves</text>
  <text class="t-s" x="207" y="70">Custom Function</text>
  <text class="t-m" x="207" y="87">PositionWS</text>
  <text class="t-m" x="207" y="103">WaveTime</text>
  <text class="t-m" x="207" y="119">Steepness</text>
  <text class="t-m" x="207" y="135">Wavelength</text>
  <text class="t-m" x="393" y="87" text-anchor="end">PositionOut</text>
  <text class="t-m" x="393" y="103" text-anchor="end">NormalOut</text>
  <rect class="box" x="470" y="20" width="112" height="56" rx="4" />
  <text class="t-b" x="477" y="35">Transform</text>
  <text class="t-s" x="477" y="50">World → Object</text>
  <text class="t-m" x="477" y="67">In</text>
  <text class="t-m" x="575" y="67" text-anchor="end">Out</text>
  <rect class="box" x="470" y="110" width="112" height="56" rx="4" />
  <text class="t-b" x="477" y="125">Transform</text>
  <text class="t-s" x="477" y="140">World → Object</text>
  <text class="t-m" x="477" y="157">In</text>
  <text class="t-m" x="575" y="157" text-anchor="end">Out</text>
  <rect class="box c2" x="666" y="50" width="96" height="88" rx="4" />
  <text class="t-b" x="673" y="65">Vertex</text>
  <text class="t-s" x="673" y="80">Master Stack</text>
  <text class="t-m" x="673" y="97">Position</text>
  <text class="t-m" x="673" y="113">Normal</text>
  <text class="t-m" x="673" y="129">Tangent</text>
  <text class="t-s" x="476" y="96">Type: Position</text>
  <text class="t-s" x="476" y="186">Type: Normal</text>
</svg>`)
