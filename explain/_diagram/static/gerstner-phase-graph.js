explainer.fig('gerstner-phase-graph', /* html */ `
<svg viewBox="0 0 800 250" aria-label="第一步的前半：由 Wavelength、Time、Position 算出相位 φ">
  <path class="ln" d="M112,115 C136,115 108,73 132,73" />
  <path class="ln" d="M112,53 C136,53 108,89 132,89" />
  <path class="ln" d="M236,73 C260,73 232,53 256,53" />
  <path class="ln" d="M360,53 C384,53 356,61 380,61" />
  <path class="ln" d="M112,225 C136,225 108,197 132,197" />
  <path class="ln" d="M236,197 C260,197 232,175 256,175" />
  <path class="ln" d="M236,73 C260,73 232,191 256,191" />
  <path class="ln" d="M112,163 C288.4,163 327.6,113 504,113" />
  <path class="ln" d="M488,61 C512,61 480,129 504,129" />
  <path class="ln" d="M360,175 C480.6,175 507.4,163 628,163" />
  <path class="ln" d="M608,113 C632,113 604,179 628,179" />
  <rect class="box c3" x="8" y="10" width="104" height="56" rx="4" />
  <text class="t-b" x="15" y="25">Wavelength</text>
  <text class="t-s" x="15" y="40">Property</text>
  <text class="t-m" x="105" y="57" text-anchor="end">Out</text>
  <rect class="box" x="8" y="72" width="104" height="56" rx="4" />
  <text class="t-b" x="15" y="87">Constant</text>
  <text class="t-s" x="15" y="102">Mode: TAU</text>
  <text class="t-m" x="105" y="119" text-anchor="end">Out</text>
  <rect class="box" x="8" y="134" width="104" height="42" rx="4" />
  <text class="t-b" x="15" y="149">Time</text>
  <text class="t-m" x="105" y="167" text-anchor="end">Time</text>
  <rect class="box" x="8" y="182" width="104" height="56" rx="4" />
  <text class="t-b" x="15" y="197">Position</text>
  <text class="t-s" x="15" y="212">Space: World</text>
  <text class="t-m" x="105" y="229" text-anchor="end">Out</text>
  <rect class="box" x="132" y="30" width="104" height="72" rx="4" />
  <text class="t-b" x="139" y="45">Divide</text>
  <text class="t-s" x="139" y="60">k</text>
  <text class="t-m" x="139" y="77">A</text>
  <text class="t-m" x="139" y="93">B</text>
  <text class="t-m" x="229" y="77" text-anchor="end">Out</text>
  <rect class="box" x="132" y="168" width="104" height="74" rx="4" />
  <text class="t-b" x="139" y="183">Split</text>
  <text class="t-m" x="139" y="201">In</text>
  <text class="t-m" x="229" y="201" text-anchor="end">R</text>
  <text class="t-m" x="229" y="217" text-anchor="end">G</text>
  <text class="t-m" x="229" y="233" text-anchor="end">B</text>
  <rect class="box" x="256" y="10" width="104" height="72" rx="4" />
  <text class="t-b" x="263" y="25">Multiply</text>
  <text class="t-s" x="263" y="40">k × g</text>
  <text class="t-m" x="263" y="57">A</text>
  <text class="t-m" x="263" y="73">B = 9.81</text>
  <text class="t-m" x="353" y="57" text-anchor="end">Out</text>
  <rect class="box" x="256" y="132" width="104" height="72" rx="4" />
  <text class="t-b" x="263" y="147">Multiply</text>
  <text class="t-s" x="263" y="162">kx₀</text>
  <text class="t-m" x="263" y="179">A</text>
  <text class="t-m" x="263" y="195">B</text>
  <text class="t-m" x="353" y="179" text-anchor="end">Out</text>
  <rect class="box" x="380" y="18" width="108" height="56" rx="4" />
  <text class="t-b" x="387" y="33">Square Root</text>
  <text class="t-s" x="387" y="48">ω</text>
  <text class="t-m" x="387" y="65">In</text>
  <text class="t-m" x="481" y="65" text-anchor="end">Out</text>
  <rect class="box" x="504" y="70" width="104" height="72" rx="4" />
  <text class="t-b" x="511" y="85">Multiply</text>
  <text class="t-s" x="511" y="100">ωt</text>
  <text class="t-m" x="511" y="117">A</text>
  <text class="t-m" x="511" y="133">B</text>
  <text class="t-m" x="601" y="117" text-anchor="end">Out</text>
  <rect class="box" x="628" y="120" width="112" height="72" rx="4" />
  <text class="t-b" x="635" y="135">Subtract</text>
  <text class="t-s" x="635" y="150">φ = kx₀ − ωt</text>
  <text class="t-m" x="635" y="167">A</text>
  <text class="t-m" x="635" y="183">B</text>
  <text class="t-m" x="733" y="167" text-anchor="end">Out</text>
  <text class="t-s" x="790" y="146" text-anchor="end">接到後半</text>
</svg>`)
