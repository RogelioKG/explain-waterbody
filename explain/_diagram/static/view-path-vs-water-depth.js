explainer.fig('view-path-vs-water-depth', /* html */ `
<svg viewBox="0 0 840 230" aria-label="攝影機從岸上往下 30 度看，視線在水裡走 7 公尺才到湖底，但那裡的水深只有 3.5 公尺">
  <polygon class="c1" points="150,90 800,90 780,120 700,210 420,210 320.2,174 220,126" style="fill-opacity:0.6" />
  <path class="ln" style="fill:none;stroke-width:2" d="M0,66 L110,66 L150,90 L220,126 L320.2,174 L420,210 L700,210 L780,120 L800,90 L820,66 L840,66" />
  <path class="ln arrow" d="M50,18 L174.7,90" />
  <path class="ln arrow cost-ln" style="stroke-width:2" d="M174.7,90 L320.2,174" />
  <path class="ln c2" stroke-dasharray="4 3" style="stroke-width:2" d="M320.2,174 L320.2,90" />
  <rect class="box" x="41" y="11" width="18" height="14" rx="2" />
  <circle class="box" cx="174.7" cy="90" r="3.5" />
  <circle class="box" cx="320.2" cy="174" r="3.5" />
  <text class="t-s" x="66" y="22">攝影機 (岸上，高 3 m)</text>
  <text class="t-s" x="182.7" y="84">水面的像素</text>
  <text class="t-cost" x="328.2" y="112">視線在水裡走 7 m</text>
  <text class="t-m" x="328.2" y="140">水深 3.5 m</text>
  <text class="t-m" x="312.2" y="192" text-anchor="end">湖底的點：Y = −3.5</text>
  <text class="t-m" x="790" y="84" text-anchor="end">水面 Y = 0</text>
</svg>`)
