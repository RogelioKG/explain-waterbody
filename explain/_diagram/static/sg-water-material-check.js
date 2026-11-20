explainer.fig('sg-water-material-check', /* html */ `
<svg viewBox="0 0 780 205" aria-label="換上 SG_Water 之後從側面看：預期是 opaque 的藍色水面，兩種常見錯誤是灰色與洋紅色">
  <path class="band" style="stroke-dasharray:none" d="M20,68 L35.7,68 L43.6,80 L75,98 L106.4,140 L153.6,140 L185,98 L216.4,80 L224.3,68 L240,68 L240,158 L20,158 Z" />
  <ellipse class="box c3" cx="137.9" cy="104" rx="6" ry="4" />
  <rect class="box c1" x="43.6" y="76" width="172.8" height="8" />
  <text class="t-b" x="130" y="28" text-anchor="middle">預期</text>
  <text class="t-s" x="130" y="176" text-anchor="middle">opaque 的藍色水面</text>
  <text class="t-s" x="130" y="192" text-anchor="middle">看不到水下的魚和沉底的石頭</text>
  <path class="band" style="stroke-dasharray:none" d="M280,68 L295.7,68 L303.6,80 L335,98 L366.4,140 L413.6,140 L445,98 L476.4,80 L484.3,68 L500,68 L500,158 L280,158 Z" />
  <ellipse class="box c3" cx="397.9" cy="104" rx="6" ry="4" />
  <rect class="box band" style="stroke-dasharray:none" x="303.6" y="76" width="172.8" height="8" />
  <text class="t-cost" x="390" y="28" text-anchor="middle">錯誤：還是灰色</text>
  <text class="t-s" x="390" y="176" text-anchor="middle">Base Color 沒接到 Property</text>
  <text class="t-s" x="390" y="192" text-anchor="middle">或改完 graph 沒按 Save Asset</text>
  <path class="band" style="stroke-dasharray:none" d="M540,68 L555.7,68 L563.6,80 L595,98 L626.4,140 L673.6,140 L705,98 L736.4,80 L744.3,68 L760,68 L760,158 L540,158 Z" />
  <ellipse class="box c3" cx="657.9" cy="104" rx="6" ry="4" />
  <rect class="box cost" x="563.6" y="76" width="172.8" height="8" />
  <text class="t-cost" x="650" y="28" text-anchor="middle">錯誤：洋紅色</text>
  <text class="t-s" x="650" y="176" text-anchor="middle">graph 沒有編譯成功</text>
  <text class="t-s" x="650" y="192" text-anchor="middle">看 Console 的第一行紅字</text>
</svg>`)
