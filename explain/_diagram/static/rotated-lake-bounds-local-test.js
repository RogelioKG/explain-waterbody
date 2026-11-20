explainer.fig('rotated-lake-bounds-local-test', /* html */ `
<svg viewBox="0 0 840 320" aria-label="湖 B 轉了 30 度，它的 Renderer.bounds 比湖大；把位置轉回湖的 local 座標再比 x、z，才分得出點在不在湖裡">
  <text class="t-b" x="237.2" y="24" text-anchor="middle">從上往下看 (world)</text>
  <rect class="c1" x="45.8" y="88" width="174" height="174" />
  <text class="t-s" x="132.8" y="280" text-anchor="middle">湖 A (Y = 0)</text>
  <rect class="band" x="287.7" y="103.7" width="142.6" height="142.6" />
  <path class="c1" d="M339.9,246.3 L430.3,194.1 L378.1,103.7 L287.7,155.9 Z" />
  <text class="t-s" x="359" y="179" text-anchor="middle">湖 B (Y = 2)</text>
  <text class="t-s" x="359" y="264.3" text-anchor="middle">虛線：B 的 Renderer.bounds</text>
  <circle class="c2" cx="103.8" cy="146" r="5" />
  <text class="t-s" x="112.8" y="150">在 A 裡</text>
  <circle class="c2" cx="347.4" cy="209.8" r="5" />
  <text class="t-s" x="338.4" y="213.8" text-anchor="end">在 B 裡</text>
  <circle class="c2" cx="418.2" cy="120.8" r="5" />
  <text class="t-cost" x="430.3" y="93.7" text-anchor="end">在盒子裡、不在湖裡</text>
  <text class="t-b" x="690" y="24" text-anchor="middle">B 的 local 座標</text>
  <rect class="c1" x="630.6" y="115.6" width="118.8" height="118.8" />
  <path class="ln arrow" d="M630.6,248.4 h28" />
  <path class="ln arrow" d="M616.6,234.4 v-28" />
  <text class="t-s" x="664.6" y="252.4">x</text>
  <text class="t-s" x="616.6" y="200.4" text-anchor="middle">z</text>
  <circle class="c2" cx="658.8" cy="202.7" r="5" />
  <circle class="c2" cx="779.2" cy="155.2" r="5" />
  <text class="t-s" x="667.8" y="206.7">在湖裡</text>
  <text class="t-cost" x="779.2" y="145.2" text-anchor="middle">x 超出 18</text>
  <text class="t-s" x="690" y="270.4" text-anchor="middle">mesh.bounds：−18~18</text>
  <path class="ln arrow" d="M442.3,101.6 L624.6,101.6" />
  <text class="t-m" x="533.5" y="93.6" text-anchor="middle">InverseTransformPoint</text>
</svg>`)
