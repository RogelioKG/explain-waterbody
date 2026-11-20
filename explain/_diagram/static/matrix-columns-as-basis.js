explainer.fig('matrix-columns-as-basis', /* html */ `
<svg viewBox="0 0 840 245" aria-label="石頭的 X、Z 軸被轉動與拉長後的落點，就是矩陣的兩行；p 沿新的軸走同樣的步數">
  <polygon class="c1" points="110,215 180,215 180,145 110,145" style="fill-opacity:0.5" />
  <polygon class="c1" points="600,215 684,103 600,40 516,152" style="fill-opacity:0.5" />
  <path class="ln" stroke-dasharray="3 3" d="M145,180 L145,215" />
  <path class="ln" stroke-dasharray="3 3" d="M145,180 L110,180" />
  <path class="ln" stroke-dasharray="3 3" d="M600,127.5 L642,159" />
  <path class="ln" stroke-dasharray="3 3" d="M600,127.5 L558,183.5" />
  <path class="ln arrow" style="stroke-width:2" d="M110,215 L180,215" />
  <path class="ln arrow" style="stroke-width:2" d="M110,215 L110,145" />
  <path class="ln arrow" style="stroke-width:2" d="M600,215 L684,103" />
  <path class="ln arrow" style="stroke-width:2" d="M600,215 L516,152" />
  <path class="ln arrow" d="M300,140 L420,140" />
  <text class="t-s" x="360" y="130" text-anchor="middle">乘上矩陣</text>
  <circle class="box" cx="110" cy="215" r="3" />
  <circle class="box" cx="600" cy="215" r="3" />
  <circle class="box" cx="145" cy="215" r="2.5" />
  <circle class="box" cx="110" cy="180" r="2.5" />
  <circle class="box" cx="642" cy="159" r="2.5" />
  <circle class="box" cx="558" cy="183.5" r="2.5" />
  <circle class="box" cx="145" cy="180" r="4" />
  <circle class="box" cx="600" cy="127.5" r="4" />
  <text class="t-m" x="152" y="175">p</text>
  <text class="t-m" x="607" y="122">p′</text>
  <text class="t-s" x="145" y="232" text-anchor="middle">0.5</text>
  <text class="t-s" x="102" y="184" text-anchor="end">0.5</text>
  <text class="t-s" x="650" y="172">0.5</text>
  <text class="t-s" x="552" y="198" text-anchor="end">0.5</text>
  <text class="t-m" x="188" y="219">X</text>
  <text class="t-m" x="110" y="137" text-anchor="middle">Z</text>
  <text class="t-m" x="692" y="107">X′</text>
  <text class="t-m" x="508" y="156" text-anchor="end">Z′</text>
  <text class="t-b" x="145" y="20" text-anchor="middle">object space</text>
  <text class="t-b" x="600" y="20" text-anchor="middle">world space</text>
</svg>`)
