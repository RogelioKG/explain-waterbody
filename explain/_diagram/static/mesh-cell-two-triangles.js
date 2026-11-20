explainer.fig('mesh-cell-two-triangles', /* html */ `
<svg viewBox="0 0 560 250" aria-label="一格由四個 vertex 組成，切成兩個三角形，從上方看 vertex 順序都是順時針">
  <rect class="box c1" x="70" y="50" width="180" height="160" />
  <path class="ln" d="M70,50 L250,210" />
  <circle class="box" cx="70" cy="210" r="5" />
  <circle class="box" cx="250" cy="210" r="5" />
  <circle class="box" cx="70" cy="50" r="5" />
  <circle class="box" cx="250" cy="50" r="5" />
  <g text-anchor="middle">
    <text class="t-m" x="70" y="236">bottomLeft = 0</text>
    <text class="t-m" x="250" y="236">bottomRight = 1</text>
    <text class="t-m" x="70" y="34">topLeft = 201</text>
    <text class="t-m" x="250" y="34">topRight = 202</text>
    <text class="t-b" x="130" y="161.7">1</text>
    <text class="t-b" x="190" y="108.3">2</text>
  </g>
  <text class="t" x="300" y="100">三角形 1：0 → 201 → 1</text>
  <text class="t" x="300" y="126">三角形 2：1 → 201 → 202</text>
  <text class="t-s" x="300" y="158">從上方往下看 (X 往右、Z 往上)</text>
  <text class="t-s" x="300" y="176">兩個都是順時針</text>
</svg>`)
