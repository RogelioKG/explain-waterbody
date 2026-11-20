explainer.fig('gerstner-four-wave-custom-function-graph', /* html */ `
<svg viewBox="0 0 820 420" aria-label="最後的 graph：Position、時間、四個波、浪高總控接進 Custom Function，三個輸出各經過一個 Transform 接到 Vertex 的三個 block">
  <path class="ln" d="M128,51 C166.7,51 175.3,153 214,153" />
  <g v-if="!on(2)">
    <path class="ln" d="M128,97 C166.7,97 175.3,169 214,169" />
  </g>
  <g v-if="on(2)">
    <path class="ln is-new" d="M128,111 C166.7,111 175.3,169 214,169" />
  </g>
  <path class="ln" d="M128,171 C166.7,171 175.3,185 214,185" />
  <path class="ln" d="M128,231 C166.7,231 175.3,201 214,201" />
  <path class="ln" d="M128,291 C166.7,291 175.3,217 214,217" />
  <path class="ln" d="M128,351 C166.7,351 175.3,233 214,233" />
  <g v-if="on(3)">
    <path class="ln is-new" d="M144,397 C175.5,397 182.5,249 214,249" />
  </g>
  <path class="ln" d="M414,153 C447.3,153 454.7,103 488,103" />
  <path class="ln" d="M414,169 C447.3,169 454.7,191 488,191" />
  <path class="ln" d="M414,185 C447.3,185 454.7,279 488,279" />
  <path class="ln" d="M608,103 C644.9,103 653.1,183 690,183" />
  <path class="ln" d="M608,191 C644.9,191 653.1,199 690,199" />
  <path class="ln" d="M608,279 C644.9,279 653.1,215 690,215" />
  <rect class="box" x="8" y="8" width="120" height="56" rx="4" />
  <text class="t-b" x="15" y="23">Position</text>
  <text class="t-s" x="15" y="38">Space: World</text>
  <text class="t-m" x="121" y="55" text-anchor="end">Out</text>
  <g v-if="!on(2)">
    <rect class="box" x="8" y="68" width="120" height="42" rx="4" />
    <text class="t-b" x="15" y="83">Time</text>
    <text class="t-m" x="121" y="101" text-anchor="end">Time</text>
  </g>
  <g v-if="on(2)">
    <rect class="box c3 is-new" x="8" y="68" width="120" height="56" rx="4" />
    <text class="t-b" x="15" y="83">WaterTime</text>
    <text class="t-s" x="15" y="98">Property (Global)</text>
    <text class="t-m" x="121" y="115" text-anchor="end">Out</text>
  </g>
  <rect class="box c3" x="8" y="128" width="120" height="56" rx="4" />
  <text class="t-b" x="15" y="143">Wave0</text>
  <text class="t-s" x="15" y="158">Property (Vector 4)</text>
  <text class="t-m" x="121" y="175" text-anchor="end">Out</text>
  <rect class="box c3" x="8" y="188" width="120" height="56" rx="4" />
  <text class="t-b" x="15" y="203">Wave1</text>
  <text class="t-s" x="15" y="218">Property (Vector 4)</text>
  <text class="t-m" x="121" y="235" text-anchor="end">Out</text>
  <rect class="box c3" x="8" y="248" width="120" height="56" rx="4" />
  <text class="t-b" x="15" y="263">Wave2</text>
  <text class="t-s" x="15" y="278">Property (Vector 4)</text>
  <text class="t-m" x="121" y="295" text-anchor="end">Out</text>
  <rect class="box c3" x="8" y="308" width="120" height="56" rx="4" />
  <text class="t-b" x="15" y="323">Wave3</text>
  <text class="t-s" x="15" y="338">Property (Vector 4)</text>
  <text class="t-m" x="121" y="355" text-anchor="end">Out</text>
  <g v-if="on(3)">
    <rect class="box c3 is-new" x="8" y="368" width="136" height="42" rx="4" />
    <text class="t-b" x="15" y="383">WaveHeightScale</text>
    <text class="t-m" x="137" y="401" text-anchor="end">Out</text>
  </g>
  <rect class="box c4" x="214" y="110" width="200" height="152" rx="4" />
  <text class="t-b" x="221" y="125">GerstnerWaves</text>
  <text class="t-s" x="221" y="140">Custom Function</text>
  <text class="t-m" x="221" y="157">PositionWS</text>
  <text class="t-m" x="221" y="173">WaveTime</text>
  <text class="t-m" x="221" y="189">Wave0</text>
  <text class="t-m" x="221" y="205">Wave1</text>
  <text class="t-m" x="221" y="221">Wave2</text>
  <text class="t-m" x="221" y="237">Wave3</text>
  <text class="t-m" x="407" y="157" text-anchor="end">PositionOut</text>
  <text class="t-m" x="407" y="173" text-anchor="end">NormalOut</text>
  <text class="t-m" x="407" y="189" text-anchor="end">TangentOut</text>
  <rect class="box" x="488" y="60" width="120" height="56" rx="4" />
  <text class="t-b" x="495" y="75">Transform</text>
  <text class="t-s" x="495" y="90">World → Object</text>
  <text class="t-m" x="495" y="107">In</text>
  <text class="t-m" x="601" y="107" text-anchor="end">Out</text>
  <rect class="box" x="488" y="148" width="120" height="56" rx="4" />
  <text class="t-b" x="495" y="163">Transform</text>
  <text class="t-s" x="495" y="178">World → Object</text>
  <text class="t-m" x="495" y="195">In</text>
  <text class="t-m" x="601" y="195" text-anchor="end">Out</text>
  <rect class="box" x="488" y="236" width="120" height="56" rx="4" />
  <text class="t-b" x="495" y="251">Transform</text>
  <text class="t-s" x="495" y="266">World → Object</text>
  <text class="t-m" x="495" y="283">In</text>
  <text class="t-m" x="601" y="283" text-anchor="end">Out</text>
  <rect class="box c2" x="690" y="140" width="110" height="88" rx="4" />
  <text class="t-b" x="697" y="155">Vertex</text>
  <text class="t-s" x="697" y="170">Master Stack</text>
  <text class="t-m" x="697" y="187">Position</text>
  <text class="t-m" x="697" y="203">Normal</text>
  <text class="t-m" x="697" y="219">Tangent</text>
  <g v-if="on(3)">
    <text class="t-m" x="221" y="253">HeightScale</text>
  </g>
  <text class="t-s" x="494" y="136">Type: Position</text>
  <text class="t-s" x="494" y="224">Type: Normal</text>
  <text class="t-s" x="494" y="312">Type: Direction</text>
</svg>`)
