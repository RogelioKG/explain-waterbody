explainer.fig('impact-ripples-graph', /* html */ `
<svg viewBox="0 0 840 460" aria-label="入水漣漪的 graph：Position (World)、WaterTime、ImpactRipple、ImpactFoamWidth 接進 Custom Function ImpactRipples；它的 Foam 和 SSG_Foam 的 Foam 取 Maximum，接到泡沫色 Lerp 的 T 與 One Minus；第三步再把它的 NormalTS 和細波紋的 Normal Strength 用 Normal Blend 疊起來，接到 Normal block 與 Transform (它的輸出接 SSG_Refraction_UV 與 SSG_Fresnel)">
  <path class="ln" d="M148,63 C171.4,63 176.6,103 200,103" />
  <path class="ln" d="M148,133 C171.4,133 176.6,119 200,119" />
  <path class="ln" :class="{ 'is-new': fresh(1) }" d="M148,203 C171.4,203 176.6,135 200,135" />
  <path class="ln" :class="{ 'is-new': fresh(1) }" d="M148,273 C171.4,273 176.6,151 200,151" />
  <path class="ln" :class="{ 'is-new': fresh(1) }" d="M148,353 C288.4,353 319.6,243 460,243" />
  <path class="ln" :class="{ 'is-new': fresh(1) }" d="M400,103 C427.0,103 433.0,259 460,259" />
  <path class="ln" :class="{ 'is-new': fresh(1) }" d="M580,243 C607.0,243 613.0,213 640,213" />
  <path class="ln" :class="{ 'is-new': fresh(1) }" d="M580,243 C607.0,243 613.0,279 640,279" />
  <g v-if="on(2)">
  <path class="ln" :class="{ 'is-new': fresh(2) }" d="M148,423 C288.4,423 319.6,373 460,373" />
  <path class="ln" :class="{ 'is-new': fresh(2) }" d="M400,119 C427.0,119 433.0,389 460,389" />
  <path class="ln" :class="{ 'is-new': fresh(2) }" d="M580,373 C607.0,373 613.0,323 640,323" />
  <path class="ln" :class="{ 'is-new': fresh(2) }" d="M580,373 C607.0,373 613.0,398 640,398" />
  </g>
  <rect class="box" x="8" y="20" width="140" height="56" rx="4" />
  <text class="t-b" x="15" y="34">Position</text>
  <text class="t-s" x="15" y="51">World (已有)</text>
  <text class="t-m" x="141" y="67" text-anchor="end">Out</text>
  <rect class="box c3" x="8" y="90" width="140" height="56" rx="4" />
  <text class="t-b" x="15" y="104">WaterTime</text>
  <text class="t-s" x="15" y="121">Property (已有)</text>
  <text class="t-m" x="141" y="137" text-anchor="end">Out</text>
  <g class="ex-in" :class="{ 'is-new': fresh(1) }">
  <rect class="box c3" x="8" y="160" width="140" height="56" rx="4" />
  <text class="t-b" x="15" y="174">ImpactRipple</text>
  <text class="t-s" x="15" y="191">Property</text>
  <text class="t-m" x="141" y="207" text-anchor="end">Out</text>
  </g>
  <g class="ex-in" :class="{ 'is-new': fresh(1) }">
  <rect class="box c3" x="8" y="230" width="140" height="56" rx="4" />
  <text class="t-b" x="15" y="244">ImpactFoamWidth</text>
  <text class="t-s" x="15" y="261">Property</text>
  <text class="t-m" x="141" y="277" text-anchor="end">Out</text>
  </g>
  <rect class="box c1" x="8" y="310" width="140" height="56" rx="4" />
  <text class="t-b" x="15" y="324">SSG_Foam</text>
  <text class="t-s" x="15" y="341">已有，只畫一個接口</text>
  <text class="t-m" x="141" y="357" text-anchor="end">Foam</text>
  <g class="ex-in" :class="{ 'is-new': fresh(1) }">
  <rect class="box c4" x="200" y="60" width="200" height="110" rx="4" />
  <text class="t-b" x="207" y="74">ImpactRipples</text>
  <text class="t-s" x="207" y="91">Custom Function</text>
  <text class="t-m" x="207" y="107">PositionWS</text>
  <text class="t-m" x="207" y="123">WaterTime</text>
  <text class="t-m" x="207" y="139">Shape</text>
  <text class="t-m" x="207" y="155">FoamWidth</text>
  <text class="t-m" x="393" y="107" text-anchor="end">Foam</text>
  </g>
  <g v-if="on(2)">
  <text class="t-m" x="393" y="123" text-anchor="end">NormalTS</text>
  </g>
  <g class="ex-in" :class="{ 'is-new': fresh(1) }">
  <rect class="box" x="460" y="200" width="120" height="72" rx="4" />
  <text class="t-b" x="467" y="214">Maximum</text>
  <text class="t-s" x="467" y="231">泡沫遮罩</text>
  <text class="t-m" x="467" y="247">A</text>
  <text class="t-m" x="467" y="263">B</text>
  <text class="t-m" x="573" y="247" text-anchor="end">Out</text>
  </g>
  <rect class="box" x="640" y="170" width="190" height="56" rx="4" />
  <text class="t-b" x="647" y="184">Lerp「泡沫色」</text>
  <text class="t-s" x="647" y="201">已有，A、B 不變</text>
  <text class="t-m" x="647" y="217">T</text>
  <rect class="box" x="640" y="236" width="190" height="56" rx="4" />
  <text class="t-b" x="647" y="250">One Minus</text>
  <text class="t-s" x="647" y="267">已有 (1 − f)</text>
  <text class="t-m" x="647" y="283">In</text>
  <g v-if="on(2)">
  <rect class="box" x="8" y="380" width="140" height="56" rx="4" />
  <text class="t-b" x="15" y="394">Normal Strength</text>
  <text class="t-s" x="15" y="411">細波紋 (已有)</text>
  <text class="t-m" x="141" y="427" text-anchor="end">Out</text>
  <g class="ex-in" :class="{ 'is-new': fresh(2) }">
  <rect class="box" x="460" y="330" width="120" height="72" rx="4" />
  <text class="t-b" x="467" y="344">Normal Blend</text>
  <text class="t-s" x="467" y="361">Mode: Default</text>
  <text class="t-m" x="467" y="377">A</text>
  <text class="t-m" x="467" y="393">B</text>
  <text class="t-m" x="573" y="377" text-anchor="end">Out</text>
  </g>
  <rect class="box c2" x="640" y="302" width="190" height="42" rx="4" />
  <text class="t-b" x="647" y="316">Normal (Tangent Space)</text>
  <rect class="box" x="640" y="354" width="190" height="56" rx="4" />
  <text class="t-b" x="647" y="368">Transform</text>
  <text class="t-s" x="647" y="385">Refraction 的 (已有)</text>
  <text class="t-m" x="647" y="402">In</text>
  <text class="t-s" x="647" y="430">Out → 兩個 NormalWS</text>
  </g>
</svg>`)
