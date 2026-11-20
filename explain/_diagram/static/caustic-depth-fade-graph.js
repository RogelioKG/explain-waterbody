explainer.fig('caustic-depth-fade-graph', /* html */ `
<svg viewBox="0 0 840 300" aria-label="第五步的 graph：再放一個 SSG_Absorption，Thickness 接 hsun 算出 τsun；Step 在水深 H ≥ 0 時輸出 1；I c 乘上兩者後接回 Add 的 A">
<g class="is-new">
<path class="ln" d="M178,53 C298,53 298,53 418,53" />
</g>
<g class="is-new">
<path class="ln" d="M178,123 C200,123 178,123 200,123" />
</g>
<g class="is-new">
<path class="ln" d="M178,193 C200,193 178,139 200,139" />
</g>
<g class="is-new">
<path class="ln" d="M178,263 C200,263 178,279 200,279" />
</g>
<g class="is-new">
<path class="ln" d="M396,139 C418,139 396,69 418,69" />
</g>
<g class="is-new">
<path class="ln" d="M502,53 C524,53 502,193 524,193" />
</g>
<g class="is-new">
<path class="ln" d="M310,263 C395.6,263 438.4,209 524,209" />
</g>
<g class="is-new">
<path class="ln" d="M608,193 C630,193 608,193 630,193" />
</g>
<rect class="box" x="8" y="10" width="170" height="56" rx="4" />
<text class="t-b" x="15" y="25">Multiply</text>
<text class="t-s" x="15" y="40">I c (第二步的)</text>
<text class="t-m" x="171" y="57" text-anchor="end">Out</text>
<rect class="box" x="8" y="80" width="170" height="56" rx="4" />
<text class="t-b" x="15" y="95">Divide</text>
<text class="t-s" x="15" y="110">陽光的路 hsun (第四步的)</text>
<text class="t-m" x="171" y="127" text-anchor="end">Out</text>
<rect class="box c3" x="8" y="150" width="170" height="56" rx="4" />
<text class="t-b" x="15" y="165">Clarity</text>
<text class="t-s" x="15" y="180">Property (已有)</text>
<text class="t-m" x="171" y="197" text-anchor="end">Out</text>
<rect class="box" x="8" y="220" width="170" height="56" rx="4" />
<text class="t-b" x="15" y="235">Subtract</text>
<text class="t-s" x="15" y="250">水深 H (第四步的)</text>
<text class="t-m" x="171" y="267" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box c1" x="200" y="80" width="196" height="72" rx="4" />
<text class="t-b" x="207" y="95">SSG_Absorption</text>
<text class="t-s" x="207" y="110">再放一個</text>
<text class="t-m" x="207" y="127">Thickness</text>
<text class="t-m" x="207" y="143">Clarity</text>
<text class="t-m" x="389" y="127" text-anchor="end">Opacity</text>
<text class="t-m" x="389" y="143" text-anchor="end">Transmittance</text>
</g>
<g class="is-new">
<rect class="box" x="200" y="220" width="110" height="72" rx="4" />
<text class="t-b" x="207" y="235">Step</text>
<text class="t-s" x="207" y="250">χ</text>
<text class="t-m" x="207" y="267">Edge = 0</text>
<text class="t-m" x="207" y="283">In</text>
<text class="t-m" x="303" y="267" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="418" y="10" width="84" height="72" rx="4" />
<text class="t-b" x="425" y="25">Multiply</text>
<text class="t-s" x="425" y="40">I c τsun</text>
<text class="t-m" x="425" y="57">A</text>
<text class="t-m" x="425" y="73">B</text>
<text class="t-m" x="495" y="57" text-anchor="end">Out</text>
</g>
<g class="is-new">
<rect class="box" x="524" y="150" width="84" height="72" rx="4" />
<text class="t-b" x="531" y="165">Multiply</text>
<text class="t-s" x="531" y="180">η</text>
<text class="t-m" x="531" y="197">A</text>
<text class="t-m" x="531" y="213">B</text>
<text class="t-m" x="601" y="197" text-anchor="end">Out</text>
</g>
<rect class="box" x="630" y="150" width="120" height="72" rx="4" />
<text class="t-b" x="637" y="165">Add</text>
<text class="t-s" x="637" y="180">1 + η (第二步的)</text>
<text class="t-m" x="637" y="197">A</text>
<text class="t-m" x="637" y="213">B = 1</text>
<text class="t-m" x="743" y="197" text-anchor="end">Out</text>
<text class="t-s" x="630" y="232">A 取代原本 I c 的線</text>
</svg>`)
