explainer.fig('texture-point-vs-bilinear', /* html */ `
<svg viewBox="0 0 780 330" aria-label="兩個 texel 的一維例子：fragment 的 UV 落在兩個 texel 中心之間，Point 取最近的一個 texel、放大後是方塊，Bilinear 依到兩個中心的距離混合、放大後是漸層">
  <defs>
    <linearGradient id="filter-grad" gradientUnits="userSpaceOnUse" x1="160" y1="0" x2="360" y2="0">
      <stop offset="0" stop-color="#111" />
      <stop offset="1" stop-color="#f5f5f5" />
    </linearGradient>
  </defs>
  <text class="t-b" x="60" y="12">texture 的兩個 texel (放大)</text>
  <rect x="60" y="40" width="200" height="50" style="fill:#111;stroke:var(--line-strong)" />
  <rect x="260" y="40" width="200" height="50" style="fill:#f5f5f5;stroke:var(--line-strong)" />
  <text class="t-s" x="70" y="80" style="fill:#f5f5f5">黑</text>
  <text class="t-s" x="450" y="80" text-anchor="end" style="fill:#111">白</text>
  <circle class="box c3" cx="160" cy="65" r="4.5" />
  <circle class="box c3" cx="360" cy="65" r="4.5" />
  <text class="t-s" x="160" y="36" text-anchor="middle">中心 u = 0.125</text>
  <text class="t-s" x="360" y="36" text-anchor="middle">中心 u = 0.375</text>
  <path class="ln" d="M260,40 V90" style="stroke:var(--accent-mark);stroke-dasharray:3 3" />
  <path class="ln" d="M80,98 V108" /><path class="ln" d="M100,98 V108" /><path class="ln" d="M120,98 V108" /><path class="ln" d="M140,98 V108" /><path class="ln" d="M160,98 V108" /><path class="ln" d="M180,98 V108" /><path class="ln" d="M200,98 V108" /><path class="ln" d="M240,98 V108" /><path class="ln" d="M260,98 V108" /><path class="ln" d="M280,98 V108" /><path class="ln" d="M320,98 V108" /><path class="ln" d="M340,98 V108" /><path class="ln" d="M360,98 V108" /><path class="ln" d="M380,98 V108" /><path class="ln" d="M400,98 V108" /><path class="ln" d="M420,98 V108" /><path class="ln" d="M440,98 V108" />
  <path class="ln" style="stroke:var(--accent-mark);stroke-width:2.5" d="M220,96 V110 M300,96 V110" />
  <text class="t-s" x="480" y="108">每一小格是一個 fragment</text>
  <text class="t-b" x="220" y="126" text-anchor="middle">A：u = 0.2</text>
  <text class="t-b" x="300" y="126" text-anchor="middle">B：u = 0.3</text>
  <path class="ln" style="stroke:var(--accent-mark);stroke-dasharray:3 3" d="M220,130 V200 M300,130 V200 M220,224 V292 M300,224 V292" />
  <text class="t-b" x="60" y="150">Point：取最近的一個</text>
  <rect x="60" y="158" width="200" height="40" style="fill:#111;stroke:var(--line-strong)" />
  <rect x="260" y="158" width="200" height="40" style="fill:#f5f5f5;stroke:var(--line-strong)" />
  <text class="t-b" x="220" y="216" text-anchor="middle">A：黑</text>
  <text class="t-b" x="300" y="216" text-anchor="middle">B：白</text>
  <text class="t" x="480" y="183">放大後：一格一格的方塊</text>
  <text class="t-b" x="60" y="244">Bilinear：依距離混合</text>
  <rect x="60" y="252" width="400" height="40" style="fill:url(#filter-grad);stroke:var(--line-strong)" />
  <text class="t-b" x="220" y="310" text-anchor="middle">A：30% 白</text>
  <text class="t-b" x="300" y="310" text-anchor="middle">B：70% 白</text>
  <text class="t" x="480" y="277">放大後：平滑的漸層</text>
</svg>`)
