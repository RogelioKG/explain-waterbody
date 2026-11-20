explainer.fig('transmittance-alpha-color-graph', /* html */ `
<svg viewBox="0 0 840 320" aria-label="第三步的 graph：由 h 與 Clarity 算出透光率 τ，1 − τ 當 Alpha，也拿來在淺水色與深水色之間混合">
<path class="ln" d="M112,53 C174.4,53 205.6,53 268,53" />
<path class="ln" d="M112,117 C134,117 112,125 134,125" />
<path class="ln" d="M246,109 C268,109 246,69 268,69" />
<path class="ln" d="M364,53 C386,53 364,61 386,61" />
<path class="ln" d="M476,61 C498,61 476,61 498,61" />
<path class="ln" d="M602,61 C632,61 632,113 562,113 L288,113 C238,113 238,163 268,163" />
<path class="ln" d="M364,163 C386,163 364,163 386,163" />
<path class="ln" d="M476,163 C521.6,163 544.4,275 590,275" />
<path class="ln" d="M530,249 C554,249 566,243 590,243" />
<path class="ln" d="M530,311 C554,311 566,259 590,259" />
<path class="ln" d="M686,243 C708,243 708,163 730,163" />
<path class="ln" d="M476,163 C577.6,163 628.4,195 730,195" />
<rect class="box" x="8" y="10" width="104" height="56" rx="4" />
<text class="t-b" x="15" y="25">Maximum</text>
<text class="t-s" x="15" y="40">第二步的 h</text>
<text class="t-m" x="105" y="57" text-anchor="end">Out</text>
<rect class="box c3" x="8" y="74" width="104" height="56" rx="4" />
<text class="t-b" x="15" y="89">Clarity</text>
<text class="t-s" x="15" y="104">Property</text>
<text class="t-m" x="105" y="121" text-anchor="end">Out</text>
<rect class="box" x="134" y="66" width="112" height="72" rx="4" />
<text class="t-b" x="141" y="81">Divide</text>
<text class="t-s" x="141" y="96">k = 4.605 ÷ D</text>
<text class="t-m" x="141" y="113">A = 4.605</text>
<text class="t-m" x="141" y="129">B</text>
<text class="t-m" x="239" y="113" text-anchor="end">Out</text>
<rect class="box" x="268" y="10" width="96" height="72" rx="4" />
<text class="t-b" x="275" y="25">Multiply</text>
<text class="t-s" x="275" y="40">kh</text>
<text class="t-m" x="275" y="57">A</text>
<text class="t-m" x="275" y="73">B</text>
<text class="t-m" x="357" y="57" text-anchor="end">Out</text>
<rect class="box" x="386" y="18" width="90" height="56" rx="4" />
<text class="t-b" x="393" y="33">Negate</text>
<text class="t-s" x="393" y="48">−kh</text>
<text class="t-m" x="393" y="65">In</text>
<text class="t-m" x="469" y="65" text-anchor="end">Out</text>
<rect class="box" x="498" y="18" width="104" height="56" rx="4" />
<text class="t-b" x="505" y="33">Exponential</text>
<text class="t-s" x="505" y="48">Base E：τ</text>
<text class="t-m" x="505" y="65">In</text>
<text class="t-m" x="595" y="65" text-anchor="end">Out</text>
<rect class="box" x="268" y="120" width="96" height="56" rx="4" />
<text class="t-b" x="275" y="135">One Minus</text>
<text class="t-s" x="275" y="150">1 − τ</text>
<text class="t-m" x="275" y="167">In</text>
<text class="t-m" x="357" y="167" text-anchor="end">Out</text>
<rect class="box" x="386" y="120" width="90" height="56" rx="4" />
<text class="t-b" x="393" y="135">Saturate</text>
<text class="t-s" x="393" y="150">α</text>
<text class="t-m" x="393" y="167">In</text>
<text class="t-m" x="469" y="167" text-anchor="end">Out</text>
<rect class="box c3" x="420" y="206" width="110" height="56" rx="4" />
<text class="t-b" x="427" y="221">ShallowColor</text>
<text class="t-s" x="427" y="236">Property</text>
<text class="t-m" x="523" y="253" text-anchor="end">Out</text>
<rect class="box c3" x="420" y="268" width="110" height="56" rx="4" />
<text class="t-b" x="427" y="283">DeepColor</text>
<text class="t-s" x="427" y="298">Property</text>
<text class="t-m" x="523" y="315" text-anchor="end">Out</text>
<rect class="box" x="590" y="200" width="96" height="88" rx="4" />
<text class="t-b" x="597" y="215">Lerp</text>
<text class="t-s" x="597" y="230">水的顏色</text>
<text class="t-m" x="597" y="247">A</text>
<text class="t-m" x="597" y="263">B</text>
<text class="t-m" x="597" y="279">T</text>
<text class="t-m" x="679" y="247" text-anchor="end">Out</text>
<rect class="box c2" x="730" y="120" width="100" height="88" rx="4" />
<text class="t-b" x="737" y="135">Fragment</text>
<text class="t-s" x="737" y="150">Master Stack</text>
<text class="t-m" x="737" y="167">Base Color</text>
<text class="t-m" x="737" y="183">…</text>
<text class="t-m" x="737" y="199">Alpha</text>
</svg>`)
