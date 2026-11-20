explainer.fig('foam-noise-smoothstep-graph', /* html */ `
<svg viewBox="0 0 840 480" aria-label="第四步後半的 graph：world position 的 xz 加上隨時間的漂移、乘上 FoamNoiseScale，到泡沫貼圖取 R 當 n；m − n 經 Smoothstep 得到泡沫 f，取代 m 接到兩個 Lerp 的 T">
<path class="ln" d="M112,53 C134,53 112,61 134,61" />
<path class="ln" d="M112,117 C134,117 112,77 134,77" />
<path class="ln" d="M224,61 C246,61 224,55 246,55" />
<path class="ln" d="M336,55 C358,55 336,69 358,69" />
<g class="is-new">
<path class="ln" d="M112,193 C134,193 112,193 134,193" />
</g>
<g class="is-new">
<path class="ln" d="M224,193 C246,193 224,213 246,213" />
</g>
<g class="is-new">
<path class="ln" d="M112,265 C134,265 112,265 134,265" />
</g>
<g class="is-new">
<path class="ln" d="M224,265 C246,265 224,229 246,229" />
</g>
<g class="is-new">
<path class="ln" d="M350,213 C372,213 364,219 386,219" />
</g>
<g class="is-new">
<path class="ln" d="M364,293 C386,293 364,235 386,235" />
</g>
<g class="is-new">
<path class="ln" d="M496,143 C506,143 506,219 516,219" />
</g>
<g class="is-new">
<path class="ln" d="M496,219 C506,219 506,235 516,235" />
</g>
<g class="is-new">
<path class="ln" d="M454,69 C560,69 560,53 664,53" />
</g>
<g class="is-new">
<path class="ln" d="M644,219 C650,219 646,69 664,69" />
</g>
<g class="is-new">
<path class="ln" d="M756,53 C778,53 778,101 756,101 L668,101 C655,101 655,185 664,185" />
</g>
<g class="is-new">
<path class="ln" d="M756,136 C782,136 782,268 756,268 L654,268 C644,268 644,355 664,355" />
</g>
<g class="is-new">
<path class="ln" d="M756,136 C782,136 782,268 756,268 L654,268 C644,268 644,455 664,455" />
</g>
<path class="ln" d="M620,333 C642,333 642,323 664,323" />
<path class="ln" d="M620,461 C642,461 642,339 664,339" />
<path class="ln" d="M620,397 C642,397 642,423 664,423" />
<path class="ln" d="M756,323 C759,323 759,329 762,329" />
<path class="ln" d="M756,423 C759,423 759,361 762,361" />
<rect class="box" x="8" y="10" width="104" height="56" rx="4" />
<text class="t-b" x="15" y="25">Maximum</text>
<text class="t-s" x="15" y="40">第二步的 h</text>
<text class="t-m" x="105" y="57" text-anchor="end">Out</text>
<rect class="box c3" x="8" y="74" width="104" height="56" rx="4" />
<text class="t-b" x="15" y="89">FoamWidth</text>
<text class="t-s" x="15" y="104">Property</text>
<text class="t-m" x="105" y="121" text-anchor="end">Out</text>
<rect class="box" x="134" y="18" width="90" height="72" rx="4" />
<text class="t-b" x="141" y="33">Divide</text>
<text class="t-s" x="141" y="48">h ÷ W</text>
<text class="t-m" x="141" y="65">A</text>
<text class="t-m" x="141" y="81">B</text>
<text class="t-m" x="217" y="65" text-anchor="end">Out</text>
<rect class="box" x="246" y="26" width="90" height="42" rx="4" />
<text class="t-b" x="253" y="41">Saturate</text>
<text class="t-m" x="253" y="59">In</text>
<text class="t-m" x="329" y="59" text-anchor="end">Out</text>
<rect class="box" x="358" y="26" width="96" height="56" rx="4" />
<text class="t-b" x="365" y="41">One Minus</text>
<text class="t-s" x="365" y="56">m</text>
<text class="t-m" x="365" y="73">In</text>
<text class="t-m" x="447" y="73" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box" x="8" y="150" width="104" height="56" rx="4" />
<text class="t-b" x="15" y="165">Position</text>
<text class="t-s" x="15" y="180">Space: World</text>
<text class="t-m" x="105" y="197" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="134" y="150" width="90" height="56" rx="4" />
<text class="t-b" x="141" y="165">Swizzle</text>
<text class="t-s" x="141" y="180">Mask: xz</text>
<text class="t-m" x="141" y="197">In</text>
<text class="t-m" x="217" y="197" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box c3" x="8" y="222" width="104" height="56" rx="4" />
<text class="t-b" x="15" y="237">WaterTime</text>
<text class="t-s" x="15" y="252">Property (已有)</text>
<text class="t-m" x="105" y="269" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="134" y="222" width="90" height="72" rx="4" />
<text class="t-b" x="141" y="237">Multiply</text>
<text class="t-s" x="141" y="252">× 0.05</text>
<text class="t-m" x="141" y="269">A</text>
<text class="t-m" x="141" y="285">B = 0.05</text>
<text class="t-m" x="217" y="269" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="246" y="170" width="104" height="72" rx="4" />
<text class="t-b" x="253" y="185">Add</text>
<text class="t-s" x="253" y="200">(x, z) + 0.05t</text>
<text class="t-m" x="253" y="217">A</text>
<text class="t-m" x="253" y="233">B</text>
<text class="t-m" x="343" y="217" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box c3" x="246" y="250" width="118" height="56" rx="4" />
<text class="t-b" x="253" y="265">FoamNoiseScale</text>
<text class="t-s" x="253" y="280">Property</text>
<text class="t-m" x="357" y="297" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box c3" x="386" y="100" width="110" height="56" rx="4" />
<text class="t-b" x="393" y="115">FoamNoiseTex</text>
<text class="t-s" x="393" y="130">Property</text>
<text class="t-m" x="489" y="147" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="386" y="176" width="110" height="72" rx="4" />
<text class="t-b" x="393" y="191">Multiply</text>
<text class="t-s" x="393" y="206">× s</text>
<text class="t-m" x="393" y="223">A</text>
<text class="t-m" x="393" y="239">B</text>
<text class="t-m" x="489" y="223" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="516" y="176" width="128" height="72" rx="4" />
<text class="t-b" x="523" y="191">Sample Texture 2D</text>
<text class="t-s" x="523" y="206">n</text>
<text class="t-m" x="523" y="223">Texture</text>
<text class="t-m" x="523" y="239">UV</text>
<text class="t-m" x="637" y="223" text-anchor="end">R</text>
</g>
<g class="is-new">
<rect class="box" x="664" y="20" width="92" height="72" rx="4" />
<text class="t-b" x="671" y="35">Subtract</text>
<text class="t-s" x="671" y="50">m − n</text>
<text class="t-m" x="671" y="67">A</text>
<text class="t-m" x="671" y="83">B</text>
<text class="t-m" x="749" y="67" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="664" y="110" width="92" height="88" rx="4" />
<text class="t-b" x="671" y="125">Smoothstep</text>
<text class="t-s" x="671" y="140">f</text>
<text class="t-m" x="671" y="157">Edge1 = 0</text>
<text class="t-m" x="671" y="173">Edge2 = 0.2</text>
<text class="t-m" x="671" y="189">In</text>
<text class="t-m" x="749" y="140" text-anchor="end">Out</text>
</g>
<rect class="box" x="516" y="290" width="104" height="56" rx="4" />
<text class="t-b" x="523" y="305">Lerp</text>
<text class="t-s" x="523" y="320">第三步的水色</text>
<text class="t-m" x="613" y="337" text-anchor="end">Out</text>
<rect class="box" x="516" y="354" width="104" height="56" rx="4" />
<text class="t-b" x="523" y="369">Saturate</text>
<text class="t-s" x="523" y="384">第三步的 α</text>
<text class="t-m" x="613" y="401" text-anchor="end">Out</text>
<rect class="box c3" x="516" y="418" width="104" height="56" rx="4" />
<text class="t-b" x="523" y="433">FoamColor</text>
<text class="t-s" x="523" y="448">Property</text>
<text class="t-m" x="613" y="465" text-anchor="end">Out</text>
<rect class="box" x="664" y="280" width="92" height="88" rx="4" />
<text class="t-b" x="671" y="295">Lerp</text>
<text class="t-s" x="671" y="310">加上泡沫色</text>
<text class="t-m" x="671" y="327">A</text>
<text class="t-m" x="671" y="343">B</text>
<text class="t-m" x="671" y="359">T</text>
<text class="t-m" x="749" y="327" text-anchor="end">Out</text>
<rect class="box" x="664" y="380" width="92" height="88" rx="4" />
<text class="t-b" x="671" y="395">Lerp</text>
<text class="t-s" x="671" y="410">泡沫不透明</text>
<text class="t-m" x="671" y="427">A</text>
<text class="t-m" x="671" y="443">B = 1</text>
<text class="t-m" x="671" y="459">T</text>
<text class="t-m" x="749" y="427" text-anchor="end">Out</text>
<rect class="box c2" x="762" y="300" width="76" height="74" rx="4" />
<text class="t-b" x="769" y="315">Fragment</text>
<text class="t-m" x="769" y="333">Base</text>
<text class="t-m" x="769" y="349">…</text>
<text class="t-m" x="769" y="365">Alpha</text>
</svg>`)
