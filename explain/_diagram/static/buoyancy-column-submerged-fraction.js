explainer.fig('buoyancy-column-submerged-fraction', /* html */ `
<svg viewBox="0 0 840 310" aria-label="浮點代表一根柱子：柱子泡進水裡的比例越大，浮力越大；泡進一半時浮力剛好等於重量">
  <path class="c1" d="M30,170 H810 V290 H30 Z" />
  <path class="ln c1" style="fill:none;stroke-width:2" d="M30,170 H810" />
  <text class="t-s" x="805" y="162" text-anchor="end">水面</text>
  <rect class="box c2" x="100.0" y="50" width="100" height="100" />
  <circle class="c2" cx="150" cy="100.0" r="5" />
  <path class="ln arrow" d="M214.0,100.0 v60" />
  <text class="t-s" x="220.0" y="148.0">重力</text>
  <text class="t-b" x="150" y="24" text-anchor="middle">沒碰到水</text>
  <rect class="box c2" x="370.0" y="120.0" width="100" height="100" />
  <rect class="c1" x="370.0" y="170" width="100" height="50.0" style="opacity:0.55" />
  <circle class="c2" cx="420" cy="170.0" r="5" />
  <path class="ln arrow" d="M484.0,170.0 v60" />
  <text class="t-s" x="490.0" y="218.0">重力</text>
  <path class="ln arrow c3" d="M356.0,170.0 v-60.0" />
  <text class="t-s" x="350.0" y="126.0" text-anchor="end">浮力</text>
  <text class="t-b" x="420" y="24" text-anchor="middle">泡進一半</text>
  <rect class="box c2" x="640.0" y="170.0" width="100" height="100" />
  <rect class="c1" x="640.0" y="170.0" width="100" height="100.0" style="opacity:0.55" />
  <circle class="c2" cx="690" cy="220.0" r="5" />
  <path class="ln arrow" d="M754.0,220.0 v60" />
  <text class="t-s" x="760.0" y="268.0">重力</text>
  <path class="ln arrow c3" d="M626.0,220.0 v-120.0" />
  <text class="t-s" x="620.0" y="116.0" text-anchor="end">浮力</text>
  <text class="t-b" x="690" y="24" text-anchor="middle">整個泡進去</text>
  <path class="ln" d="M86.0,50 v100 M82.0,50 h8 M82.0,150 h8" />
  <text class="t-s" x="80.0" y="104.0" text-anchor="end">柱高</text>
  <text class="t-s" x="80.0" y="154" text-anchor="end">柱底</text>
  <text class="t-s" x="142" y="90.0" text-anchor="end">浮點</text>
  <text class="t-s" x="150" y="210" text-anchor="middle">浮力 0</text>
  <text class="t-s" x="420" y="270.0" text-anchor="middle">浮力 = 重量</text>
  <text class="t-s" x="690" y="300" text-anchor="middle">浮力 = 2 倍重量</text>
</svg>`)
