explainer.fig('water-draw-order-mistakes', /* html */ `
<svg viewBox="0 0 620 220" aria-label="水最後畫時，水裡那段石頭染上水色；水先畫、石頭後畫時，水裡那段石頭像沒泡在水裡">
  <rect class="box" x="20" y="40" width="260" height="150" />
  <rect class="c1" style="stroke:none" x="20" y="110" width="260" height="80" />
  <ellipse class="box" cx="150" cy="132" rx="48" ry="50" />
  <ellipse class="box c2" style="stroke-width:1.75" cx="150" cy="132" rx="48" ry="50" />
  <path class="c1" style="fill-opacity:.85;stroke:none" d="M106.9,110 A48,50 0 1 0 193.1,110 Z" />
  <ellipse class="c2" style="fill:none;stroke-width:1.75" cx="150" cy="132" rx="48" ry="50" />
  <path class="ln" d="M20,110 H280" />
  <text class="t-b" x="150.0" y="26" text-anchor="middle">水最後畫</text>
  <text class="t" x="150.0" y="212" text-anchor="middle">水裡那一段透出水色</text>
  <rect class="box" x="340" y="40" width="260" height="150" />
  <rect class="c1" style="stroke:none" x="340" y="110" width="260" height="80" />
  <ellipse class="box" cx="470" cy="132" rx="48" ry="50" />
  <ellipse class="box c2" style="stroke-width:1.75" cx="470" cy="132" rx="48" ry="50" />
  <path class="ln cost-ln" stroke-dasharray="5 4" style="stroke-width:2" d="M420.9,114 A54,56 0 1 0 519.1,114" />
  <path class="ln" d="M340,110 H600" />
  <text class="t-b" x="470.0" y="26" text-anchor="middle">水先畫、石頭後畫</text>
  <text class="t-cost" x="470.0" y="212" text-anchor="middle">水裡那一段像沒泡在水裡</text>
</svg>`)
