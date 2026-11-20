explainer.fig('refraction-world-normal-offset-graph', /* html */ `
<svg viewBox="0 0 840 264" aria-label="第六步的 graph：Normal Strength 先經過 Transform (Tangent 到 World) 再接 Swizzle，Mask 改成 xz；offset 的 Multiply 之後接 Divide，除以 UV 不接的那個 Scene Depth (水面後方的 depth)，再接 Add">
<g class="is-new">
<path class="ln" d="M158,53 C169,53 169,53 180,53" />
</g>
<path class="ln" d="M158,143 C169,143 169,129 180,129" />
<path class="ln" d="M158,213 C235,213 235,149 312,149" />
<path class="ln" d="M292,129 C302,129 302,165 312,165" />
<g class="is-new">
<path class="ln" d="M292,53 C302,53 302,53 312,53" />
</g>
<path class="ln" d="M398,53 C408,53 408,73 418,73" />
<path class="ln" d="M398,149 C408,149 408,89 418,89" />
<g class="is-new">
<path class="ln" d="M508,73 C518,73 518,59 528,59" />
</g>
<g class="is-new">
<path class="ln" d="M508,163 C518,163 518,75 528,75" />
</g>
<g class="is-new">
<path class="ln" d="M608,59 C619,59 619,85 630,85" />
</g>
<path class="ln" d="M548,243 C589,243 589,69 630,69" />
<path class="ln" d="M700,69 C711,69 711,77 722,77" />
<rect class="box" x="8" y="10" width="150" height="56" rx="4" />
<text class="t-b" x="15" y="25">Normal Strength</text>
<text class="t-s" x="15" y="40">細波紋 (已有)</text>
<text class="t-m" x="151" y="57" text-anchor="end">Out</text>
<rect class="box c1" x="8" y="100" width="150" height="56" rx="4" />
<text class="t-b" x="15" y="115">SSG_Thickness</text>
<text class="t-s" x="15" y="130">原本的 (已有)</text>
<text class="t-m" x="151" y="147" text-anchor="end">Thickness</text>
<rect class="box c3" x="8" y="170" width="150" height="56" rx="4" />
<text class="t-b" x="15" y="185">RefractionStrength</text>
<text class="t-s" x="15" y="200">Property，改成 0.25</text>
<text class="t-m" x="151" y="217" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box" x="180" y="10" width="112" height="56" rx="4" />
<text class="t-b" x="187" y="25">Transform</text>
<text class="t-s" x="187" y="40">Tangent → World</text>
<text class="t-m" x="187" y="57">In</text>
<text class="t-m" x="285" y="57" text-anchor="end">Out</text>
</g>
<rect class="box" x="180" y="100" width="112" height="42" rx="4" />
<text class="t-b" x="187" y="115">Saturate</text>
<text class="t-m" x="187" y="133">In</text>
<text class="t-m" x="285" y="133" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box" x="312" y="10" width="86" height="56" rx="4" />
<text class="t-b" x="319" y="25">Swizzle</text>
<text class="t-s" x="319" y="40">Mask: xz</text>
<text class="t-m" x="319" y="57">In</text>
<text class="t-m" x="391" y="57" text-anchor="end">Out</text>
</g>
<rect class="box" x="312" y="120" width="86" height="58" rx="4" />
<text class="t-b" x="319" y="135">Multiply</text>
<text class="t-m" x="319" y="153">A</text>
<text class="t-m" x="319" y="169">B</text>
<text class="t-m" x="391" y="153" text-anchor="end">Out</text>
<rect class="box" x="418" y="30" width="90" height="72" rx="4" />
<text class="t-b" x="425" y="45">Multiply</text>
<text class="t-s" x="425" y="60">第三步的</text>
<text class="t-m" x="425" y="77">A</text>
<text class="t-m" x="425" y="93">B</text>
<text class="t-m" x="501" y="77" text-anchor="end">Out</text>
<rect class="box" x="418" y="120" width="90" height="56" rx="4" />
<text class="t-b" x="425" y="135">Scene Depth</text>
<text class="t-s" x="425" y="150">UV 不接 (ds)</text>
<text class="t-m" x="501" y="167" text-anchor="end">Out</text>
<rect class="box" x="418" y="200" width="130" height="56" rx="4" />
<text class="t-b" x="425" y="215">Screen Position</text>
<text class="t-s" x="425" y="230">Default (第一步的)</text>
<text class="t-m" x="541" y="247" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box" x="528" y="30" width="80" height="58" rx="4" />
<text class="t-b" x="535" y="45">Divide</text>
<text class="t-m" x="535" y="63">A</text>
<text class="t-m" x="535" y="79">B</text>
<text class="t-m" x="601" y="63" text-anchor="end">Out</text>
</g>
<rect class="box" x="630" y="40" width="70" height="58" rx="4" />
<text class="t-b" x="637" y="55">Add</text>
<text class="t-m" x="637" y="73">A</text>
<text class="t-m" x="637" y="89">B</text>
<text class="t-m" x="693" y="73" text-anchor="end">Out</text>
<rect class="box" x="722" y="48" width="110" height="42" rx="4" />
<text class="t-b" x="729" y="63">Scene Color</text>
<text class="t-m" x="729" y="81">UV</text>
<text class="t-m" x="825" y="81" text-anchor="end">Out</text>
</svg>`)
