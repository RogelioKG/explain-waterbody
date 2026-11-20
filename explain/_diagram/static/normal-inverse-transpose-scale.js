explainer.fig('normal-inverse-transpose-scale', /* html */ `
<svg viewBox="0 0 840 310" aria-label="球被沿 x 拉長兩倍後，normal 直接乘 M 會歪掉，用 inverse transpose 矩陣才保持垂直於表面">
  <circle class="c1" cx="130" cy="170" r="100" style="fill-opacity:0.5" />
  <ellipse class="c1" cx="530" cy="170" rx="200" ry="100" style="fill-opacity:0.5" />
  <path class="ln" stroke-dasharray="3 3" d="M257.3,155.9 L144.1,42.7" />
  <path class="ln arrow c2" style="stroke-width:2" d="M200.7,99.3 L257.3,42.7" />
  <circle class="box" cx="200.7" cy="99.3" r="3.5" />
  <text class="t-m" x="262.7" y="41.3">n</text>
  <text class="t-s" x="140.7" y="37.3" text-anchor="middle">表面的方向 t</text>
  <path class="ln" stroke-dasharray="3 3" d="M760.8,144 L582,54.6" />
  <path class="ln arrow cost-ln" style="stroke-width:2" d="M671.4,99.3 L742.9,63.5" />
  <path class="ln arrow c2" style="stroke-width:2" d="M671.4,99.3 L707.2,27.8" />
  <circle class="box" cx="671.4" cy="99.3" r="3.5" />
  <text class="t-cost" x="748.9" y="67.5">直接乘 M</text>
  <text class="t-m" x="713.2" y="29.8">inverse transpose</text>
  <text class="t-s" x="578" y="48.6" text-anchor="end">表面的方向 Mt</text>
  <path class="ln arrow" d="M245,170 L318,170" />
  <text class="t-s" x="281" y="160" text-anchor="middle">x 乘 2</text>
  <text class="t-s" x="130" y="296" text-anchor="middle">原本的球：n 垂直於表面</text>
  <text class="t-s" x="530" y="296" text-anchor="middle">Scale X 2、Y 1 之後：只有 inverse transpose 仍垂直</text>
</svg>`)
