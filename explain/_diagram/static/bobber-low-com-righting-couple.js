explainer.fig('bobber-low-com-righting-couple', /* html */ `
<svg viewBox="0 0 840 300" aria-label="浮標斜 30 度：重心在中心時，浮力和重力在同一條線上，不產生轉正的力；重心壓低後兩者錯開，把浮標轉回直立">
  <path class="c1" d="M20,165 H400 V295 H20 Z" />
  <path class="ln c1" style="fill:none;stroke-width:2" d="M20,165 H400" />
  <path class="box c2" d="M152.7,105.7 L232.7,244.3 A20,20 0 0 0 267.3,224.3 L187.3,85.7 A20,20 0 0 0 152.7,105.7 Z" />
  <text class="t-b" x="210" y="20" text-anchor="middle">重心在中心</text>
  <text class="t-cost" x="240" y="62">同一條線：不轉</text>
  <path class="ln arrow c3" d="M210,165 v-90" />
  <path class="ln arrow c4" d="M210.0,165.0 v90" />
  <circle class="c3" cx="210" cy="165" r="5" />
  <circle class="c4" cx="210.0" cy="165.0" r="5" />
  <text class="t-s" x="220" y="85">浮力 (浮點的高度)</text>
  <text class="t-s" x="198.0" y="249.0" text-anchor="end">重力 (重心)</text>
  <path class="c1" d="M440,165 H820 V295 H440 Z" />
  <path class="ln c1" style="fill:none;stroke-width:2" d="M440,165 H820" />
  <path class="box c2" d="M572.7,105.7 L652.7,244.3 A20,20 0 0 0 687.3,224.3 L607.3,85.7 A20,20 0 0 0 572.7,105.7 Z" />
  <text class="t-b" x="630" y="20" text-anchor="middle">重心壓低 0.1 m</text>
  <path class="ln" style="stroke-dasharray:4 3" d="M630,183 V229.6 M650.0,207.6 V229.6 H630" />
  <text class="t-s" x="622" y="233.6" text-anchor="end">錯開 0.05 m</text>
  <path class="ln arrow" d="M560,66 A80,80 0 0 1 640,52" />
  <text class="t" x="650" y="62">轉回直立</text>
  <path class="ln arrow c3" d="M630,165 v-90" />
  <path class="ln arrow c4" d="M650.0,199.6 v90" />
  <circle class="c3" cx="630" cy="165" r="5" />
  <circle class="c4" cx="650.0" cy="199.6" r="5" />
  <text class="t-s" x="640" y="85">浮力 (浮點的高度)</text>
  <text class="t-s" x="638.0" y="283.6" text-anchor="end">重力 (重心)</text>
</svg>`)
