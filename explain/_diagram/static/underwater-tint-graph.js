explainer.fig('underwater-tint-graph', /* html */ `
<svg viewBox="0 0 580 96" aria-label="第一步的 graph：URP Sample Buffer 讀出霧之前的畫面，暫時乘上一個偏藍綠的顏色，接到 Base Color">
<path class="ln" d="M158,67 C182.8,67 195.2,59 220,59" />
<path class="ln" d="M390,59 C414,59 426,59 450,59" />
<rect class="box" x="8" y="20" width="150" height="56" rx="4" />
<text class="t-b" x="15" y="35">URP Sample Buffer</text>
<text class="t-s" x="15" y="50">BlitSource</text>
<text class="t-m" x="151" y="71" text-anchor="end">Output</text>
<rect class="box" x="220" y="12" width="170" height="72" rx="4" />
<text class="t-b" x="227" y="27">Multiply</text>
<text class="t-s" x="227" y="42">暫時</text>
<text class="t-m" x="227" y="63">A</text>
<text class="t-m" x="227" y="79">B = (0.5, 0.8, 0.8, 1)</text>
<text class="t-m" x="383" y="63" text-anchor="end">Out</text>
<rect class="box c2" x="450" y="12" width="120" height="56" rx="4" />
<text class="t-b" x="457" y="27">Fragment</text>
<text class="t-s" x="457" y="42">Master Stack</text>
<text class="t-m" x="457" y="63">Base Color</text>
</svg>`)
