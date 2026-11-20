explainer.fig('gerstner-horizontal-offset-steepness-graph', /* html */ `
<svg viewBox="0 0 820 250" aria-label="第二步：加上 Cosine 那一支做水平位移；再把 Amplitude 換成由陡度算出的振幅">
  <path class="ln" d="M112,53 C136,53 106,39 130,39" />
  <path class="ln is-new" d="M112,53 C136,53 106,91 130,91" />
  <path class="ln" d="M234,39 C258,39 228,53 252,53" />
  <path class="ln is-new" d="M234,91 C258,91 228,135 252,135" />
  <g v-if="!on(2)">
    <path class="ln" d="M112,163 C175,163 189,69 252,69" />
  </g>
  <g v-if="!on(2)">
    <path class="ln is-new" d="M112,163 C175,163 189,151 252,151" />
  </g>
  <g v-if="on(2)">
    <path class="ln is-new" d="M112,163 C136,163 106,193 130,193" />
  </g>
  <g v-if="on(2)">
    <path class="ln is-new" d="M112,225 C136,225 106,209 130,209" />
  </g>
  <g v-if="on(2)">
    <path class="ln is-new" d="M234,193 C258,193 228,69 252,69" />
  </g>
  <g v-if="on(2)">
    <path class="ln is-new" d="M234,193 C258,193 228,151 252,151" />
  </g>
  <path class="ln" d="M356,53 C380,53 350,85 374,85" />
  <path class="ln is-new" d="M356,135 C380,135 350,69 374,69" />
  <path class="ln" d="M478,69 C502,69 472,111 496,111" />
  <rect class="box" x="8" y="10" width="104" height="56" rx="4" />
  <text class="t-b" x="15" y="25">Subtract</text>
  <text class="t-s" x="15" y="40">第一步的 φ</text>
  <text class="t-m" x="105" y="57" text-anchor="end">Out</text>
  <g v-if="!on(2)">
    <rect class="box c3" x="8" y="120" width="104" height="56" rx="4" />
    <text class="t-b" x="15" y="135">Amplitude</text>
    <text class="t-s" x="15" y="150">Property</text>
    <text class="t-m" x="105" y="167" text-anchor="end">Out</text>
  </g>
  <g v-if="on(2)">
    <rect class="box c3 is-new" x="8" y="120" width="104" height="56" rx="4" />
    <text class="t-b" x="15" y="135">Steepness</text>
    <text class="t-s" x="15" y="150">Property (陡度)</text>
    <text class="t-m" x="105" y="167" text-anchor="end">Out</text>
  </g>
  <rect class="box" x="8" y="182" width="104" height="56" rx="4" />
  <text class="t-b" x="15" y="197">Divide</text>
  <text class="t-s" x="15" y="212">第一步的 k</text>
  <text class="t-m" x="105" y="229" text-anchor="end">Out</text>
  <rect class="box" x="130" y="10" width="104" height="42" rx="4" />
  <text class="t-b" x="137" y="25">Sine</text>
  <text class="t-m" x="137" y="43">In</text>
  <text class="t-m" x="227" y="43" text-anchor="end">Out</text>
  <rect class="box is-new" x="130" y="62" width="104" height="42" rx="4" />
  <text class="t-b" x="137" y="77">Cosine</text>
  <text class="t-m" x="137" y="95">In</text>
  <text class="t-m" x="227" y="95" text-anchor="end">Out</text>
  <g v-if="on(2)">
    <rect class="box is-new" x="130" y="150" width="104" height="72" rx="4" />
    <text class="t-b" x="137" y="165">Divide</text>
    <text class="t-s" x="137" y="180">a = S ÷ k</text>
    <text class="t-m" x="137" y="197">A</text>
    <text class="t-m" x="137" y="213">B</text>
    <text class="t-m" x="227" y="197" text-anchor="end">Out</text>
  </g>
  <rect class="box" x="252" y="10" width="104" height="72" rx="4" />
  <text class="t-b" x="259" y="25">Multiply</text>
  <text class="t-s" x="259" y="40">a sin φ</text>
  <text class="t-m" x="259" y="57">A</text>
  <text class="t-m" x="259" y="73">B</text>
  <text class="t-m" x="349" y="57" text-anchor="end">Out</text>
  <rect class="box is-new" x="252" y="92" width="104" height="72" rx="4" />
  <text class="t-b" x="259" y="107">Multiply</text>
  <text class="t-s" x="259" y="122">a cos φ</text>
  <text class="t-m" x="259" y="139">A</text>
  <text class="t-m" x="259" y="155">B</text>
  <text class="t-m" x="349" y="139" text-anchor="end">Out</text>
  <rect class="box" x="374" y="40" width="104" height="74" rx="4" />
  <text class="t-b" x="381" y="55">Combine</text>
  <text class="t-m" x="381" y="73">R</text>
  <text class="t-m" x="381" y="89">G</text>
  <text class="t-m" x="381" y="105">B = 0</text>
  <text class="t-m" x="471" y="73" text-anchor="end">RGB</text>
  <rect class="box" x="496" y="52" width="112" height="72" rx="4" />
  <text class="t-b" x="503" y="67">Add</text>
  <text class="t-s" x="503" y="82">第一步的 Add</text>
  <text class="t-m" x="503" y="99">A</text>
  <text class="t-m" x="503" y="115">B</text>
  <text class="t-m" x="601" y="99" text-anchor="end">Out</text>
  <text class="t-s" x="616" y="72">A 照舊接 Position (World)</text>
  <text class="t-s" x="616" y="90">Out 照舊接 Transform</text>
</svg>`)
