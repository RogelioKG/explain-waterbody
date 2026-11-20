explainer.fig('perspective-height-vs-distance', /* html */ `
<svg viewBox="0 0 840 250" aria-label="兩顆一樣高的石頭，距離加倍時在畫面上的高度減半">
  <path class="ln" stroke-dasharray="3 3" d="M50,170 L800,170" />
  <path class="ln" style="stroke-width:2" d="M130,60 L130,200" />
  <path class="ln" d="M50,170 L350,110" />
  <path class="ln" d="M50,170 L650,110" />
  <rect class="box c3" x="340" y="110" width="20" height="60" rx="6" />
  <text class="t-s" x="366" y="124">石頭 A</text>
  <rect class="box c3" x="640" y="110" width="20" height="60" rx="6" />
  <text class="t-s" x="666" y="124">石頭 B</text>
  <path class="ln c1" style="stroke-width:4" d="M124,170 L124,154" />
  <path class="ln c2" style="stroke-width:4" d="M136,170 L136,162" />
  <circle class="box" cx="50" cy="170" r="6" />
  <text class="t-s" x="50" y="192" text-anchor="middle">攝影機</text>
  <text class="t-s" x="130" y="50" text-anchor="middle">畫面</text>
  <text class="t-m" x="118" y="150" text-anchor="end">A</text>
  <text class="t-s" x="142" y="190">畫面上 B 只有 A 的一半高</text>
  <path class="ln arrow" d="M50,214 L350,214" />
  <path class="ln arrow" d="M50,234 L650,234" />
  <text class="t-m" x="358" y="218">10 m</text>
  <text class="t-m" x="658" y="238">20 m</text>
</svg>`)
