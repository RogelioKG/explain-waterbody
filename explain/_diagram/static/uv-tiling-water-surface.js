explainer.fig('uv-tiling-water-surface', /* html */ `
<svg viewBox="0 0 780 330" aria-label="UV 直接用時一張 texture 鋪滿整片水面；乘上 Tiling 10 時每 6 m 重複一次，我們的 fragment 落在哪一點">
  <rect class="c1" x="70" y="40" width="220" height="220" />
  <rect class="c1" x="420" y="40" width="220" height="220" />
  <rect class="box c1" style="stroke-width:2" x="530" y="216" width="22" height="22" />
  <path class="ln" style="opacity:.55" d="M442,40 V260 M464,40 V260 M486,40 V260 M508,40 V260 M530,40 V260 M552,40 V260 M574,40 V260 M596,40 V260 M618,40 V260 M420,62 H640 M420,84 H640 M420,106 H640 M420,128 H640 M420,150 H640 M420,172 H640 M420,194 H640 M420,216 H640 M420,238 H640" />
  <circle class="box c3" cx="180.3" cy="237.7" r="4.5" />
  <circle class="box c3" cx="530.3" cy="237.7" r="4.5" />
  <text class="t-m" x="64" y="276" text-anchor="end">(0, 0)</text>
  <text class="t-m" x="296" y="34">(1, 1)</text>
  <text class="t-s" x="180.0" y="278" text-anchor="middle">60 m</text>
  <text class="t-m" x="414" y="276" text-anchor="end">(0, 0)</text>
  <text class="t-m" x="646" y="34">(10, 10)</text>
  <text class="t-s" x="530.0" y="278" text-anchor="middle">60 m</text>
  <text class="t-b" x="180.0" y="24" text-anchor="middle">UV 直接用：鋪一次</text>
  <text class="t-b" x="530.0" y="24" text-anchor="middle">Tiling 10：每 6 m 重複</text>
  <text class="t-s" x="180.0" y="300" text-anchor="middle">一個 texel 約 12 cm</text>
  <text class="t-s" x="530.0" y="300" text-anchor="middle">一個 texel 約 1.2 cm</text>
  <text class="t-s" x="180.3" y="225.7" text-anchor="middle">UV (0.50125, 0.10125)</text>
  <text class="t-s" x="650" y="226">這一格裡的</text>
  <text class="t-s" x="650" y="242">(0.0125, 0.0125)</text>
  <path class="ln arrow" d="M646,230 H556" />
</svg>`)
