explainer.fig('underwater-fog-color-mix-graph', /* html */ `
<svg viewBox="0 0 840 360" aria-label="第二步的 graph 後半：畫面乘 SSG_Absorption 的 Transmittance 再乘染色，加上 DeepColor 乘 Opacity，接到 Base Color">
<path class="ln" d="M158,57 C180,57 174,87 196,87" />
<path class="ln" d="M158,121 C180,121 174,103 196,103" />
<path class="ln" d="M158,261 C180,261 174,229 196,229" />
<path class="ln" d="M158,137 C180,137 174,245 196,245" />
<path class="ln" d="M158,325 C180,325 174,323 196,323" />
<path class="ln" d="M158,137 C180,137 174,339 196,339" />
<path class="ln" d="M306,87 C328,87 328,155 350,155" />
<path class="ln" d="M306,213 C328,213 328,171 350,171" />
<path class="ln" d="M466,155 C488,155 484,243 506,243" />
<path class="ln" d="M306,323 C386,323 426,259 506,259" />
<path class="ln" d="M596,243 C618,243 618,243 640,243" />
<rect class="box" x="8" y="10" width="150" height="56" rx="4" />
<text class="t-b" x="15" y="25">URP Sample Buffer</text>
<text class="t-s" x="15" y="40">BlitSource：畫面</text>
<text class="t-m" x="151" y="61" text-anchor="end">Output</text>
<rect class="box c1" x="8" y="74" width="150" height="76" rx="4" />
<text class="t-b" x="15" y="89">SSG_Absorption</text>
<text class="t-s" x="15" y="104">上圖的那個</text>
<text class="t-m" x="151" y="125" text-anchor="end">Transmittance</text>
<text class="t-m" x="151" y="141" text-anchor="end">Opacity</text>
<rect class="box c3" x="8" y="214" width="150" height="56" rx="4" />
<text class="t-b" x="15" y="229">ShallowColor</text>
<text class="t-s" x="15" y="244">Property</text>
<text class="t-m" x="151" y="265" text-anchor="end">Out</text>
<rect class="box c3" x="8" y="278" width="150" height="56" rx="4" />
<text class="t-b" x="15" y="293">DeepColor</text>
<text class="t-s" x="15" y="308">Property</text>
<text class="t-m" x="151" y="329" text-anchor="end">Out</text>
<rect class="box" x="196" y="40" width="110" height="72" rx="4" />
<text class="t-b" x="203" y="55">Multiply</text>
<text class="t-s" x="203" y="70">背景 τ</text>
<text class="t-m" x="203" y="91">A</text>
<text class="t-m" x="203" y="107">B</text>
<text class="t-m" x="299" y="91" text-anchor="end">Out</text>
<rect class="box" x="196" y="166" width="110" height="88" rx="4" />
<text class="t-b" x="203" y="181">Lerp</text>
<text class="t-s" x="203" y="196">染色</text>
<text class="t-m" x="203" y="217">A = 白</text>
<text class="t-m" x="203" y="233">B</text>
<text class="t-m" x="203" y="249">T</text>
<text class="t-m" x="299" y="217" text-anchor="end">Out</text>
<rect class="box" x="196" y="276" width="110" height="72" rx="4" />
<text class="t-b" x="203" y="291">Multiply</text>
<text class="t-s" x="203" y="306">霧色</text>
<text class="t-m" x="203" y="327">A</text>
<text class="t-m" x="203" y="343">B</text>
<text class="t-m" x="299" y="327" text-anchor="end">Out</text>
<rect class="box" x="350" y="108" width="116" height="72" rx="4" />
<text class="t-b" x="357" y="123">Multiply</text>
<text class="t-s" x="357" y="138">背景染色</text>
<text class="t-m" x="357" y="159">A</text>
<text class="t-m" x="357" y="175">B</text>
<text class="t-m" x="459" y="159" text-anchor="end">Out</text>
<rect class="box" x="506" y="196" width="90" height="72" rx="4" />
<text class="t-b" x="513" y="211">Add</text>
<text class="t-m" x="513" y="247">A</text>
<text class="t-m" x="513" y="263">B</text>
<text class="t-m" x="589" y="247" text-anchor="end">Out</text>
<rect class="box c2" x="640" y="196" width="120" height="56" rx="4" />
<text class="t-b" x="647" y="211">Fragment</text>
<text class="t-s" x="647" y="226">Master Stack</text>
<text class="t-m" x="647" y="247">Base Color</text>
</svg>`)
