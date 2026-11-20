explainer.fig('water-mesh-side-view-check', /* html */ `
<svg viewBox="0 0 780 210" aria-label="水面蓋上之後，從側面看應該是什麼樣子，以及兩種常見的錯誤">
  <path class="band" style="stroke-dasharray:none" d="M20,68 L35.7,68 L43.6,80 L75,98 L106.4,140 L153.6,140 L185,98 L216.4,80 L224.3,68 L240,68 L240,158 L20,158 Z" />
  <path class="c1" d="M43.6,80 L75,98 L106.4,140 L153.6,140 L185,98 L216.4,80 Z" />
  <ellipse class="box c2" cx="63.2" cy="82.4" rx="7" ry="14" />
  <ellipse class="box c3" cx="137.9" cy="104" rx="6" ry="4" />
  <text class="t-b" x="130" y="28" text-anchor="middle">預期</text>
  <text class="t-s" x="130" y="176" text-anchor="middle">水面切過半泡的石頭</text>
  <text class="t-s" x="130" y="192" text-anchor="middle">透過水面看得到魚</text>
  <path class="band" style="stroke-dasharray:none" d="M280,68 L295.7,68 L303.6,80 L335,98 L366.4,140 L413.6,140 L445,98 L476.4,80 L484.3,68 L500,68 L500,158 L280,158 Z" />
  <path class="cost" d="M280,60.8 H500 V68 L484.3,68 L476.4,80 L445,98 L413.6,140 L366.4,140 L335,98 L303.6,80 L295.7,68 L280,68 Z" />
  <text class="t-cost" x="390" y="28" text-anchor="middle">錯誤：水面太高</text>
  <text class="t-s" x="390" y="176" text-anchor="middle">岸上也是一片水</text>
  <text class="t-s" x="390" y="192" text-anchor="middle">WaterSurface 的世界 Y 不是 0</text>
  <path class="band" style="stroke-dasharray:none" d="M540,68 L555.7,68 L563.6,80 L595,98 L626.4,140 L673.6,140 L705,98 L736.4,80 L744.3,68 L760,68 L760,158 L540,158 Z" />
  <path class="ln cost-ln" stroke-dasharray="5 4" d="M563.6,80 H736.4" />
  <text class="t-cost" x="650" y="28" text-anchor="middle">錯誤：從上面看是空的</text>
  <text class="t-s" x="650" y="176" text-anchor="middle">看得到湖底，水面不見了</text>
  <text class="t-s" x="650" y="192" text-anchor="middle">或水面是一片粉紅色</text>
</svg>`)
