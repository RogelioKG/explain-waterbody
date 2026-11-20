explainer.fig('fresnel-sub-graph', /* html */ `
<svg viewBox="0 0 1010 250" aria-label="收成 Sub Graph 之後的主 graph：View Direction (World) 接 SSG_Fresnel 的 ViewDirWS，FresnelPower 接 Power，接 Normal block 的 Normal Strength 經 Transform (Tangent → World) 接 NormalWS，同一個 Transform 也接著 SSG_Refraction_UV 的 NormalWS，Normal Strength 也接著 Normal block；OneMinusFresnel 接兩個 × (1 − F_r) 的 Multiply 的 B，Fresnel 不接">
<g class="is-new">
<path class="ln" d="M320,53 C335,53 335,63 350,63" />
</g>
<g class="is-new">
<path class="ln" d="M148,63 C164,63 164,79 180,79 H350" />
</g>
<path class="ln" d="M148,163 C164,163 164,133 180,133" />
<g class="is-new">
<path class="ln" d="M320,133 C335,133 335,95 350,95" />
</g>
<path class="ln" d="M320,133 C335,133 335,173 350,173" />
<path class="ln" d="M148,163 C164,163 160,230 180,230 H860 C875,230 875,121 890,121" />
<g class="is-new">
<path class="ln" d="M560,79 C575,79 575,69 590,69" />
</g>
<g class="is-new">
<path class="ln" d="M560,79 C575,79 575,159 590,159" />
</g>
<path class="ln" d="M720,53 C730,53 730,53 740,53" />
<path class="ln" d="M850,53 C870,53 870,89 890,89" />
<path class="ln" d="M720,143 C815,143 815,105 890,105" />
<rect class="box c3" x="8" y="20" width="140" height="56" rx="4" />
<text class="t-b" x="15" y="35">FresnelPower</text>
<text class="t-s" x="15" y="50">Property</text>
<text class="t-m" x="141" y="67" text-anchor="end">Out</text>
<rect class="box" x="8" y="120" width="140" height="56" rx="4" />
<text class="t-b" x="15" y="135">Normal Strength</text>
<text class="t-s" x="15" y="150">細波紋 (已有)</text>
<text class="t-m" x="141" y="167" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box" x="180" y="10" width="140" height="56" rx="4" />
<text class="t-b" x="187" y="25">View Direction</text>
<text class="t-s" x="187" y="40">Space: World</text>
<text class="t-m" x="313" y="57" text-anchor="end">Out</text>
</g>
<rect class="box" x="180" y="90" width="140" height="56" rx="4" />
<text class="t-b" x="187" y="105">Transform</text>
<text class="t-s" x="187" y="120">Tangent → World</text>
<text class="t-m" x="187" y="137">In</text>
<text class="t-m" x="313" y="137" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box c1" x="350" y="20" width="210" height="90" rx="4" />
<text class="t-b" x="357" y="35">SSG_Fresnel</text>
<text class="t-s" x="357" y="50">Sub Graph</text>
<text class="t-m" x="357" y="67">ViewDirWS</text>
<text class="t-m" x="357" y="83">Power</text>
<text class="t-m" x="357" y="99">NormalWS</text>
<text class="t-m" x="553" y="67" text-anchor="end">Fresnel</text>
<text class="t-m" x="553" y="83" text-anchor="end">OneMinusFresnel</text>
</g>
<rect class="box c1" x="350" y="130" width="170" height="56" rx="4" />
<text class="t-b" x="357" y="145">SSG_Refraction_UV</text>
<text class="t-s" x="357" y="160">已有，只畫一個接口</text>
<text class="t-m" x="357" y="177">NormalWS</text>
<rect class="box" x="590" y="10" width="130" height="74" rx="4" />
<text class="t-b" x="597" y="25">Multiply</text>
<text class="t-s" x="597" y="40">水自身 × (1 − F<tspan font-size="70%" dy="3">r</tspan><tspan dy="-3">)</tspan></text>
<text class="t-m" x="597" y="57">A ← 已有</text>
<text class="t-m" x="597" y="73">B</text>
<text class="t-m" x="713" y="57" text-anchor="end">Out</text>
<rect class="box" x="590" y="100" width="130" height="74" rx="4" />
<text class="t-b" x="597" y="115">Multiply</text>
<text class="t-s" x="597" y="130">Emission × (1 − F<tspan font-size="70%" dy="3">r</tspan><tspan dy="-3">)</tspan></text>
<text class="t-m" x="597" y="147">A ← 已有</text>
<text class="t-m" x="597" y="163">B</text>
<text class="t-m" x="713" y="147" text-anchor="end">Out</text>
<rect class="box" x="740" y="10" width="110" height="88" rx="4" />
<text class="t-b" x="747" y="25">Lerp「泡沫色」</text>
<text class="t-s" x="747" y="40">B、T 不變</text>
<text class="t-m" x="747" y="57">A</text>
<text class="t-m" x="747" y="73">B</text>
<text class="t-m" x="747" y="89">T</text>
<text class="t-m" x="843" y="57" text-anchor="end">Out</text>
<rect class="box c2" x="890" y="60" width="110" height="74" rx="4" />
<text class="t-b" x="897" y="75">Fragment</text>
<text class="t-m" x="897" y="93">Base Color</text>
<text class="t-m" x="897" y="109">Emission</text>
<text class="t-m" x="897" y="125">Normal</text>
</svg>`)
