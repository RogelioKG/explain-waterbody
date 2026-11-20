explainer.fig('fragment-barycentric-interpolation', /* html */ `
<svg viewBox="0 0 430 270" aria-label="三角形蓋住的像素，與其中一個 fragment 的值怎麼由三個 vertex 依 weight 算出">
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="92" y="38" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="92" y="62" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="116" y="62" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="140" y="62" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="92" y="86" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="116" y="86" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="140" y="86" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="164" y="86" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="92" y="110" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="116" y="110" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="140" y="110" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="164" y="110" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="188" y="110" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="212" y="110" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="68" y="134" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="92" y="134" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="116" y="134" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="140" y="134" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="164" y="134" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="188" y="134" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="212" y="134" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="236" y="134" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="260" y="134" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="68" y="158" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="92" y="158" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="116" y="158" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="140" y="158" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="164" y="158" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="188" y="158" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="212" y="158" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="236" y="158" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="260" y="158" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="284" y="158" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="68" y="182" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="92" y="182" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="116" y="182" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="140" y="182" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="164" y="182" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="188" y="182" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="212" y="182" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="236" y="182" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="260" y="182" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="284" y="182" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="308" y="182" width="24" height="24" />
  <rect style="fill:var(--f1);fill-opacity:.35;stroke:none" x="332" y="182" width="24" height="24" />
  <path class="ln" style="stroke:var(--f1);stroke-width:1.6;fill:none" d="M62,215 L104,44 L380,206 Z" />
  <circle class="band" style="stroke-dasharray:none" cx="32" cy="26" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="200" cy="26" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="224" cy="26" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="248" cy="26" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="272" cy="26" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="296" cy="26" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="320" cy="26" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="344" cy="26" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="368" cy="26" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="392" cy="26" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="32" cy="50" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="56" cy="50" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="80" cy="50" r="1.4" />
  <circle style="fill:var(--f1);stroke:none" cx="104" cy="50" r="2" />
  <circle class="band" style="stroke-dasharray:none" cx="128" cy="50" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="152" cy="50" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="176" cy="50" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="200" cy="50" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="224" cy="50" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="248" cy="50" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="272" cy="50" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="296" cy="50" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="320" cy="50" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="344" cy="50" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="368" cy="50" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="392" cy="50" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="32" cy="74" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="56" cy="74" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="80" cy="74" r="1.4" />
  <circle style="fill:var(--f1);stroke:none" cx="104" cy="74" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="128" cy="74" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="152" cy="74" r="2" />
  <circle class="band" style="stroke-dasharray:none" cx="176" cy="74" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="200" cy="74" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="224" cy="74" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="248" cy="74" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="272" cy="74" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="296" cy="74" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="320" cy="74" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="344" cy="74" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="368" cy="74" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="392" cy="74" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="32" cy="98" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="56" cy="98" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="80" cy="98" r="1.4" />
  <circle style="fill:var(--f1);stroke:none" cx="104" cy="98" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="128" cy="98" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="152" cy="98" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="176" cy="98" r="2" />
  <circle class="band" style="stroke-dasharray:none" cx="200" cy="98" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="224" cy="98" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="248" cy="98" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="272" cy="98" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="296" cy="98" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="320" cy="98" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="344" cy="98" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="368" cy="98" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="392" cy="98" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="32" cy="122" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="56" cy="122" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="80" cy="122" r="1.4" />
  <circle style="fill:var(--f1);stroke:none" cx="104" cy="122" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="128" cy="122" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="152" cy="122" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="176" cy="122" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="200" cy="122" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="224" cy="122" r="2" />
  <circle class="band" style="stroke-dasharray:none" cx="248" cy="122" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="272" cy="122" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="296" cy="122" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="320" cy="122" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="344" cy="122" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="368" cy="122" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="392" cy="122" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="32" cy="146" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="56" cy="146" r="1.4" />
  <circle style="fill:var(--f1);stroke:none" cx="80" cy="146" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="104" cy="146" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="128" cy="146" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="152" cy="146" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="176" cy="146" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="200" cy="146" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="224" cy="146" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="248" cy="146" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="272" cy="146" r="2" />
  <circle class="band" style="stroke-dasharray:none" cx="296" cy="146" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="320" cy="146" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="344" cy="146" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="368" cy="146" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="392" cy="146" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="32" cy="170" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="56" cy="170" r="1.4" />
  <circle style="fill:var(--f1);stroke:none" cx="80" cy="170" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="104" cy="170" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="128" cy="170" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="152" cy="170" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="176" cy="170" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="200" cy="170" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="224" cy="170" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="248" cy="170" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="272" cy="170" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="296" cy="170" r="2" />
  <circle class="band" style="stroke-dasharray:none" cx="320" cy="170" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="344" cy="170" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="368" cy="170" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="392" cy="170" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="32" cy="194" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="56" cy="194" r="1.4" />
  <circle style="fill:var(--f1);stroke:none" cx="80" cy="194" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="104" cy="194" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="128" cy="194" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="152" cy="194" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="176" cy="194" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="200" cy="194" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="224" cy="194" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="248" cy="194" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="272" cy="194" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="296" cy="194" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="320" cy="194" r="2" />
  <circle style="fill:var(--f1);stroke:none" cx="344" cy="194" r="2" />
  <circle class="band" style="stroke-dasharray:none" cx="368" cy="194" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="392" cy="194" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="32" cy="218" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="56" cy="218" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="80" cy="218" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="104" cy="218" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="128" cy="218" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="152" cy="218" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="176" cy="218" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="200" cy="218" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="224" cy="218" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="248" cy="218" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="272" cy="218" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="296" cy="218" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="320" cy="218" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="344" cy="218" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="368" cy="218" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="392" cy="218" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="32" cy="242" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="56" cy="242" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="80" cy="242" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="104" cy="242" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="128" cy="242" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="152" cy="242" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="176" cy="242" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="200" cy="242" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="224" cy="242" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="248" cy="242" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="272" cy="242" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="296" cy="242" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="320" cy="242" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="344" cy="242" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="368" cy="242" r="1.4" />
  <circle class="band" style="stroke-dasharray:none" cx="392" cy="242" r="1.4" />
  <g v-if="on(3)" class="ex-in" :class="{ 'is-new': fresh(3) }">
    <path class="ln" stroke-dasharray="4 3" d="M152,170 L62,215 M152,170 L104,44 M152,170 L380,206" />
    <circle class="box" cx="152" cy="170" r="7" />
    <text class="t-m" x="94" y="238">× 0.5</text>
    <text class="t-m" x="120" y="34">× 0.25</text>
    <text class="t-m" x="330" y="238" text-anchor="end">× 0.25</text>
  </g>
  <circle class="box c3" cx="62" cy="215" r="5" />
  <circle class="box c3" cx="104" cy="44" r="5" />
  <circle class="box c3" cx="380" cy="206" r="5" />
  <text class="t-m" x="62" y="238" text-anchor="middle">4120</text>
  <text class="t-m" x="96" y="34" text-anchor="end">4321</text>
  <text class="t-m" x="380" y="238" text-anchor="middle">4121</text>
</svg>`)
