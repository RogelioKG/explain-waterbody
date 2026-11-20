explainer.fig('water-mesh-object-space-grid', /* html */ `
<svg viewBox="0 0 780 340" aria-label="60 m 見方的水面 mesh：object space 座標的軸與範圍、vertex index 方式，與放大的那一格三個 vertex 的座標">
  <rect class="box" style="fill:none" x="70" y="40" width="240" height="240" />
  <path class="ln" style="opacity:.55" d="M110,40 V236 M150,40 V236 M230,40 V280 M270,40 V280 M70,80 H310 M70,120 H310 M70,200 H310" />
  <path class="ln arrow" d="M70,160 H312" />
  <path class="ln arrow" d="M190,280 V38" />
  <text class="t-b" x="318" y="164">x</text>
  <text class="t-b" x="190" y="30" text-anchor="middle">z</text>
  <text class="t-s" x="74" y="176">−30</text>
  <text class="t-s" x="306" y="176" text-anchor="end">30</text>
  <text class="t-s" x="196" y="54">30</text>
  <text class="t-s" x="184" y="274" text-anchor="end">−30</text>
  <text class="t-s" x="196" y="176">原點</text>
  <text class="t-m" x="64" y="284" text-anchor="end">0</text>
  <text class="t-m" x="316" y="284">200</text>
  <text class="t-m" x="64" y="46" text-anchor="end">40200</text>
  <text class="t-m" x="316" y="46">40400</text>
  <path class="ln arrow" d="M70,300 H310" />
  <text class="t-s" x="190" y="320" text-anchor="middle">每列 201 個，由左往右</text>
  <rect class="band" style="stroke-dasharray:4 3" x="410" y="56" width="280" height="264" rx="6" />
  <path class="ln" stroke-dasharray="4 3" d="M193,253 L410,56 M193,259 L410,320" />
  <path class="c1" style="fill:var(--f1);fill-opacity:.4" d="M470,270 L470,110 L630,270 Z" />
  <path class="ln" d="M470,110 H630 V270 H470 Z" />
  <circle class="box c3" cx="190" cy="256" r="5" />
  <text class="t-s" x="182" y="254" text-anchor="end">第 20 列第 100 個</text>
  <circle class="box c3" cx="470" cy="270" r="5" />
  <circle class="box c3" cx="470" cy="110" r="5" />
  <circle class="box c3" cx="630" cy="270" r="5" />
  <text class="t-m" x="470" y="80" text-anchor="middle">4321</text>
  <text class="t-s" x="470" y="96" text-anchor="middle">(0, 0, −23.7)</text>
  <text class="t-m" x="470" y="296" text-anchor="middle">4120</text>
  <text class="t-s" x="470" y="312" text-anchor="middle">(0, 0, −24)</text>
  <text class="t-m" x="630" y="296" text-anchor="middle">4121</text>
  <text class="t-s" x="630" y="312" text-anchor="middle">(0.3, 0, −24)</text>
  <text class="t-s" x="462" y="194" text-anchor="end">0.3 m</text>
  <text class="t-s" x="550" y="286" text-anchor="middle">0.3 m</text>
</svg>`)
