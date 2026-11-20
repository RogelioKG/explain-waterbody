explainer.fig('depth-buffer-nonlinear-range', /* html */ `
<svg viewBox="0 0 840 150" aria-label="depth buffer 的數值範圍：near 0.3 m、far 1000 m 時，0.3 到 1 m 就佔了 70%，5 m 以外只剩 6%">
  <rect class="box c1" x="40" y="70" width="532.2" height="26" />
  <rect class="box c2" x="572.2" y="70" width="227.8" height="26" />
  <text class="t-s" x="306.1" y="87" text-anchor="middle">0.3 到 1 公尺：佔 70%</text>
  <text class="t-s" x="686.1" y="87" text-anchor="middle">1 到 1000 公尺：30%</text>
  <path class="ln" d="M686.2,70 L686.2,52" />
  <text class="t-m" x="686.2" y="48" text-anchor="middle">2 m</text>
  <path class="ln" d="M754.6,70 L754.6,52" />
  <text class="t-m" x="754.6" y="48" text-anchor="middle">5 m</text>
  <path class="ln" d="M777.4,70 L777.4,36" />
  <text class="t-m" x="777.4" y="32" text-anchor="middle">10 m</text>
  <path class="ln" d="M797.9,70 L797.9,20" />
  <text class="t-m" x="797.9" y="16" text-anchor="middle">100 m</text>
  <path class="ln" d="M572.2,96 L572.2,106" />
  <text class="t-m" x="572.2" y="120" text-anchor="middle">1 m</text>
  <text class="t-m" x="40" y="120">near 0.3 m</text>
  <text class="t-m" x="800" y="120" text-anchor="end">far 1000 m</text>
  <text class="t-s" x="750" y="140" text-anchor="end">5 m 以外全擠在最後 6%</text>
</svg>`)
