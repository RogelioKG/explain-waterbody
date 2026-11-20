explainer.fig('gerstner-normal-graph', /* html */ `
<svg viewBox="0 0 830 210" aria-label="第三步：由陡度、sin φ、cos φ 算出 normal (−S cos φ, 1 − S sin φ, 0)，normalize 後轉回 object space 接到 Normal block">
  <path class="ln is-new" d="M112,115 C136,115 100,57 124,57" />
  <path class="ln is-new" d="M112,53 C136,53 100,73 124,73" />
  <path class="ln is-new" d="M112,115 C136,115 100,155 124,155" />
  <path class="ln is-new" d="M112,177 C136,177 100,171 124,171" />
  <path class="ln is-new" d="M228,57 C252,57 216,51 240,51" />
  <path class="ln is-new" d="M228,155 C252,155 216,149 240,149" />
  <path class="ln is-new" d="M344,51 C368,51 332,85 356,85" />
  <path class="ln is-new" d="M344,149 C368,149 332,101 356,101" />
  <path class="ln is-new" d="M460,85 C484,85 448,95 472,95" />
  <path class="ln is-new" d="M576,95 C600,95 564,103 588,103" />
  <path class="ln is-new" d="M700,103 C724,103 694,105 718,105" />
  <rect class="box" x="8" y="10" width="104" height="56" rx="4" />
  <text class="t-b" x="15" y="25">Cosine</text>
  <text class="t-s" x="15" y="40">第二步的</text>
  <text class="t-m" x="105" y="57" text-anchor="end">Out</text>
  <rect class="box c3" x="8" y="72" width="104" height="56" rx="4" />
  <text class="t-b" x="15" y="87">Steepness</text>
  <text class="t-s" x="15" y="102">Property</text>
  <text class="t-m" x="105" y="119" text-anchor="end">Out</text>
  <rect class="box" x="8" y="134" width="104" height="56" rx="4" />
  <text class="t-b" x="15" y="149">Sine</text>
  <text class="t-s" x="15" y="164">第一步的</text>
  <text class="t-m" x="105" y="181" text-anchor="end">Out</text>
  <rect class="box is-new" x="124" y="14" width="104" height="72" rx="4" />
  <text class="t-b" x="131" y="29">Multiply</text>
  <text class="t-s" x="131" y="44">S cos φ</text>
  <text class="t-m" x="131" y="61">A</text>
  <text class="t-m" x="131" y="77">B</text>
  <text class="t-m" x="221" y="61" text-anchor="end">Out</text>
  <rect class="box is-new" x="124" y="112" width="104" height="72" rx="4" />
  <text class="t-b" x="131" y="127">Multiply</text>
  <text class="t-s" x="131" y="142">S sin φ</text>
  <text class="t-m" x="131" y="159">A</text>
  <text class="t-m" x="131" y="175">B</text>
  <text class="t-m" x="221" y="159" text-anchor="end">Out</text>
  <rect class="box is-new" x="240" y="22" width="104" height="42" rx="4" />
  <text class="t-b" x="247" y="37">Negate</text>
  <text class="t-m" x="247" y="55">In</text>
  <text class="t-m" x="337" y="55" text-anchor="end">Out</text>
  <rect class="box is-new" x="240" y="120" width="104" height="42" rx="4" />
  <text class="t-b" x="247" y="135">One Minus</text>
  <text class="t-m" x="247" y="153">In</text>
  <text class="t-m" x="337" y="153" text-anchor="end">Out</text>
  <rect class="box is-new" x="356" y="56" width="104" height="74" rx="4" />
  <text class="t-b" x="363" y="71">Combine</text>
  <text class="t-m" x="363" y="89">R</text>
  <text class="t-m" x="363" y="105">G</text>
  <text class="t-m" x="363" y="121">B = 0</text>
  <text class="t-m" x="453" y="89" text-anchor="end">RGB</text>
  <rect class="box is-new" x="472" y="66" width="104" height="42" rx="4" />
  <text class="t-b" x="479" y="81">Normalize</text>
  <text class="t-m" x="479" y="99">In</text>
  <text class="t-m" x="569" y="99" text-anchor="end">Out</text>
  <rect class="box is-new" x="588" y="60" width="112" height="56" rx="4" />
  <text class="t-b" x="595" y="75">Transform</text>
  <text class="t-s" x="595" y="90">World → Object</text>
  <text class="t-m" x="595" y="107">In</text>
  <text class="t-m" x="693" y="107" text-anchor="end">Out</text>
  <rect class="box c2" x="718" y="46" width="96" height="88" rx="4" />
  <text class="t-b" x="725" y="61">Vertex</text>
  <text class="t-s" x="725" y="76">Master Stack</text>
  <text class="t-m" x="725" y="93">Position</text>
  <text class="t-m" x="725" y="109">Normal</text>
  <text class="t-m" x="725" y="125">Tangent</text>
  <text class="t-s" x="594" y="134">Type: Normal</text>
  <text class="t-s" x="718" y="152">Position 照舊</text>
</svg>`)
