explainer.fig('triangle-winding-backface-cull', /* html */ `
<svg viewBox="0 0 840 290" aria-label="同一個三角形，岸上的攝影機看是順時針的正面、留下；水下的攝影機看是逆時針的背面、被 cull">
  <rect class="c1" style="stroke:none" x="20" y="150" width="240" height="110" />
  <path class="ln" d="M20,150 H260" />
  <path class="ln" style="stroke:var(--f1);stroke-width:4" d="M100,150 H160" />
  <text class="t-s" x="26" y="142">水面</text>
  <text class="t-s" x="170" y="142">同一個三角形</text>
  <rect class="box" x="117" y="50" width="26" height="16" rx="3" />
  <path class="box" d="M130,66 L122,76 H138 Z" />
  <path class="ln arrow" d="M130,84 V144" />
  <text class="t-s" x="152" y="62">岸上的攝影機</text>
  <rect class="box" x="117" y="238" width="26" height="16" rx="3" />
  <path class="box" d="M130,238 L122,228 H138 Z" />
  <path class="ln arrow" d="M130,220 V156" />
  <text class="t-s" x="152" y="250">水下的攝影機</text>
  <rect class="box" x="290" y="44" width="260" height="170" rx="6" />
  <rect class="box" x="570" y="44" width="260" height="170" rx="6" />
  <text class="t-b" x="420" y="34" text-anchor="middle">岸上的攝影機看到</text>
  <text class="t-b" x="700" y="34" text-anchor="middle">水下的攝影機看到</text>
  <path class="c1" style="fill:var(--f1);fill-opacity:.4" d="M325,181 L350,78 L516,175 Z" />
  <path class="ln" style="stroke:#fff;stroke-width:3;fill:none" d="M381,144.667 A16,16 0 1 1 399,160.667" />
  <path style="fill:#fff" d="M390,160.667 L399,155 L399,166.333 Z" />
  <path class="ln cost-ln" stroke-dasharray="5 4" style="fill:none;opacity:.7" d="M795,181 L770,78 L604,175 Z" />
  <circle class="ln cost-ln" style="fill:none;stroke-width:1.8" cx="592" cy="66" r="9" />
  <path class="ln cost-ln" style="stroke-width:1.8" d="M587,61 L597,71 M597,61 L587,71" />
  <path class="ln arrow cost-ln" d="M739,144.667 A16,16 0 1 0 723,160.667" />
  <circle class="box c3" cx="325" cy="181" r="5" />
  <circle class="box c3" cx="350" cy="78" r="5" />
  <circle class="box c3" cx="516" cy="175" r="5" />
  <circle class="box c3" cx="795" cy="181" r="5" style="opacity:.6" />
  <circle class="box c3" cx="770" cy="78" r="5" style="opacity:.6" />
  <circle class="box c3" cx="604" cy="175" r="5" style="opacity:.6" />
  <text class="t-m" x="325" y="203" text-anchor="middle">1 4120</text>
  <text class="t-m" x="350" y="66" text-anchor="middle">2 4321</text>
  <text class="t-m" x="516" y="197" text-anchor="middle">3 4121</text>
  <text class="t-m" x="795" y="203" text-anchor="middle">1 4120</text>
  <text class="t-m" x="770" y="66" text-anchor="middle">2 4321</text>
  <text class="t-m" x="604" y="197" text-anchor="middle">3 4121</text>
  <text class="t" x="420" y="242" text-anchor="middle">順時針：正面，留下</text>
  <text class="t-cost" x="700" y="242" text-anchor="middle">逆時針：背面，cull</text>
  <text class="t-s" x="560" y="274" text-anchor="middle">GPU 看三個 vertex 在畫面上的順序</text>
</svg>`)
