explainer.fig('lake-terrain-side-view-check', /* html */ `
<svg viewBox="0 0 780 200" aria-label="挖好的湖從側面看應該是什麼形狀，以及兩種常見的錯誤">
  <path class="band" style="stroke-dasharray:none" d="M20,68 L35.7,68 L43.6,80 L75,98 L106.4,140 L153.6,140 L185,98 L216.4,80 L224.3,68 L240,68 L240,158 L20,158 Z" />
  <path class="c1" d="M43.6,80 L75,98 L106.4,140 L153.6,140 L185,98 L216.4,80 Z" />
  <text class="t-b" x="130" y="28" text-anchor="middle">預期</text>
  <text class="t-s" x="130" y="176" text-anchor="middle">岸 Y = 1，水邊 Y = 0</text>
  <text class="t-s" x="130" y="192" text-anchor="middle">有一圈緩坡，中央深 5 m</text>
  <path class="cost" style="stroke-dasharray:none" d="M280,68 L500,68 L500,158 L280,158 Z" />
  <text class="t-cost" x="390" y="28" text-anchor="middle">錯誤：挖不下去</text>
  <text class="t-s" x="390" y="176" text-anchor="middle">地形還在 Y = 0 就開始挖</text>
  <text class="t-s" x="390" y="192" text-anchor="middle">或沒有先整塊抬高</text>
  <path class="cost" style="stroke-dasharray:none" d="M540,68 L584,68 L587.1,140 L712.9,140 L716,68 L760,68 L760,158 L540,158 Z" />
  <path class="c1" d="M586.8,80 L587.1,140 L712.9,140 L713.2,80 Z" />
  <text class="t-cost" x="650" y="28" text-anchor="middle">錯誤：直上直下的坑</text>
  <text class="t-s" x="650" y="176" text-anchor="middle">坑壁太陡，沒有淺水帶</text>
  <text class="t-s" x="650" y="192" text-anchor="middle">之後看不出由淺到深的漸層</text>
</svg>`)
