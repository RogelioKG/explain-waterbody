explainer.fig('buoyancy-one-vs-four-points-tilt', /* html */ `
<svg viewBox="0 0 840 300" aria-label="水面傾斜時：一個浮點的力穿過重心，方塊不會轉；四個浮點泡的深淺不同，推力不同，方塊轉向和水面平行">
  <path class="c1" d="M50,114.8 L370,185.2 L370,285 L50,285 Z" />
  <path class="ln c1" style="fill:none;stroke-width:2" d="M50,114.8 L370,185.2" />
  <rect class="box c2" x="150.0" y="90.0" width="120" height="120" />
  <path class="c1" style="opacity:0.55" d="M150.0,136.8 L270.0,163.2 L270.0,210.0 L150.0,210.0 Z" />
  <text class="t-b" x="210" y="24" text-anchor="middle">一個浮點 (第二步)</text>
  <circle class="c2" cx="210" cy="150" r="5" />
  <path class="ln arrow c3" d="M210,150 v-70" />
  <text class="t-s" x="218" y="78">一個力穿過重心</text>
  <text class="t-cost" x="210" y="250.0" text-anchor="middle">不會轉：一直保持水平</text>
  <path class="c1" d="M470,114.8 L790,185.2 L790,285 L470,285 Z" />
  <path class="ln c1" style="fill:none;stroke-width:2" d="M470,114.8 L790,185.2" />
  <rect class="box c2" x="570.0" y="90.0" width="120" height="120" />
  <path class="c1" style="opacity:0.55" d="M570.0,136.8 L690.0,163.2 L690.0,210.0 L570.0,210.0 Z" />
  <text class="t-b" x="630" y="24" text-anchor="middle">四個浮點 (從側面看到兩個)</text>
  <circle class="c2" cx="570.0" cy="150" r="5" />
  <circle class="c2" cx="690.0" cy="150" r="5" />
  <path class="ln arrow c3" d="M570.0,150 v-79.3" />
  <path class="ln arrow c3" d="M690.0,150 v-50.7" />
  <text class="t-s" x="562.0" y="82.7" text-anchor="end">泡得深：推力大</text>
  <text class="t-s" x="698.0" y="111.3">泡得淺：推力小</text>
  <path class="ln arrow" d="M596,154 A34,34 0 0 1 653.8,130.2" />
  <text class="t" x="630" y="250.0" text-anchor="middle">轉向和水面平行</text>
</svg>`)
