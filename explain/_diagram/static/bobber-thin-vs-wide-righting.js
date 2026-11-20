explainer.fig('bobber-thin-vs-wide-righting', /* html */ `
<svg viewBox="0 0 840 385" aria-label="同樣斜 30 度、中心在水面：方塊兩側推力差 0.5 倍重量、相距 0.87 m；浮標只差 0.1 倍重量、相距 0.09 m，轉正力矩小約 50 倍">
  <path class="c1" d="M20,170 H400 V330 H20 Z" />
  <path class="ln c1" style="fill:none;stroke-width:2" d="M20,170 H400" />
  <path class="box c2" d="M73.4,133.4 L246.6,33.4 L346.6,206.6 L173.4,306.6 Z" />
  <text class="t-b" x="210" y="24" text-anchor="middle">方塊 1 m 見方</text>
  <path class="ln arrow c3" d="M123.4,220.0 v-75" />
  <path class="ln arrow c3" d="M296.6,120.0 v-25" />
  <circle class="c2" cx="123.4" cy="220.0" r="4" />
  <circle class="c2" cx="296.6" cy="120.0" r="4" />
  <text class="t-s" x="113.4" y="244.0" text-anchor="end">0.75 倍重量</text>
  <text class="t-s" x="304.6" y="99.0">0.25 倍重量</text>
  <text class="t-s" x="210" y="352" text-anchor="middle">兩側相距 0.87 m</text>
  <text class="t" x="210" y="374" text-anchor="middle">轉正力矩 2.1 N·m</text>
  <path class="c1" d="M440,170 H820 V330 H440 Z" />
  <path class="ln c1" style="fill:none;stroke-width:2" d="M440,170 H820" />
  <path class="box c2" d="M601.3,140.4 L641.3,209.6 A10,10 0 0 0 658.7,199.6 L618.7,130.4 A10,10 0 0 0 601.3,140.4 Z" />
  <text class="t-b" x="630" y="24" text-anchor="middle">浮標 0.5 m × 0.1 m</text>
  <path class="ln arrow c3" d="M621.3,175.0 v-55" />
  <path class="ln arrow c3" d="M638.7,165.0 v-45" />
  <circle class="c2" cx="621.3" cy="175.0" r="4" />
  <circle class="c2" cx="638.7" cy="165.0" r="4" />
  <text class="t-s" x="611.3" y="199.0" text-anchor="end">0.55 倍重量</text>
  <text class="t-s" x="646.7" y="124.0">0.45 倍重量</text>
  <text class="t-s" x="630" y="352" text-anchor="middle">兩側相距 0.09 m</text>
  <text class="t-cost" x="630" y="374" text-anchor="middle">轉正力矩 0.042 N·m</text>
</svg>`)
