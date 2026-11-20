explainer.fig('water-thickness-eye-depth-graph', /* html */ `
<svg viewBox="0 0 840 224" aria-label="第二步的 graph：Scene Depth (Eye) 減去 Screen Position (Raw) 的 w，Maximum 夾在 0 以上得到 h，暫時除以 5 後接到 Base Color">
<path class="ln" d="M158,53 C206,53 232,73 280,73" />
<path class="ln" d="M158,133 C170,133 164,113 176,113" />
<path class="ln" d="M256,161 C270,161 266,89 280,89" />
<path class="ln" d="M384,73 C394,73 394,73 404,73" />
<path class="ln" d="M500,73 C510,73 510,73 520,73" />
<path class="ln" d="M616,73 C626,73 626,81 636,81" />
<path class="ln" d="M724,81 C731,81 731,53 738,53" />
<rect class="box" x="8" y="10" width="150" height="56" rx="4" />
<text class="t-b" x="15" y="25">Scene Depth</text>
<text class="t-s" x="15" y="40">Sampling Mode: Eye</text>
<text class="t-m" x="15" y="57">UV (不接)</text>
<text class="t-m" x="151" y="57" text-anchor="end">Out</text>
<rect class="box" x="8" y="90" width="150" height="56" rx="4" />
<text class="t-b" x="15" y="105">Screen Position</text>
<text class="t-s" x="15" y="120">Mode: Raw</text>
<text class="t-m" x="151" y="137" text-anchor="end">Out</text>
<rect class="box" x="176" y="84" width="80" height="90" rx="4" />
<text class="t-b" x="183" y="99">Split</text>
<text class="t-m" x="183" y="117">In</text>
<text class="t-m" x="249" y="117" text-anchor="end">R</text>
<text class="t-m" x="249" y="133" text-anchor="end">G</text>
<text class="t-m" x="249" y="149" text-anchor="end">B</text>
<text class="t-m" x="249" y="165" text-anchor="end">A</text>
<rect class="box" x="280" y="30" width="104" height="72" rx="4" />
<text class="t-b" x="287" y="45">Subtract</text>
<text class="t-s" x="287" y="60">ds − dw</text>
<text class="t-m" x="287" y="77">A</text>
<text class="t-m" x="287" y="93">B</text>
<text class="t-m" x="377" y="77" text-anchor="end">Out</text>
<rect class="box" x="404" y="30" width="96" height="72" rx="4" />
<text class="t-b" x="411" y="45">Maximum</text>
<text class="t-s" x="411" y="60">h：夾在 0 以上</text>
<text class="t-m" x="411" y="77">A</text>
<text class="t-m" x="411" y="93">B = 0</text>
<text class="t-m" x="493" y="77" text-anchor="end">Out</text>
<rect class="box" x="520" y="30" width="96" height="72" rx="4" />
<text class="t-b" x="527" y="45">Divide</text>
<text class="t-s" x="527" y="60">暫時：h ÷ 5</text>
<text class="t-m" x="527" y="77">A</text>
<text class="t-m" x="527" y="93">B = 5</text>
<text class="t-m" x="609" y="77" text-anchor="end">Out</text>
<rect class="box" x="636" y="38" width="88" height="56" rx="4" />
<text class="t-b" x="643" y="53">Saturate</text>
<text class="t-s" x="643" y="68">暫時</text>
<text class="t-m" x="643" y="85">In</text>
<text class="t-m" x="717" y="85" text-anchor="end">Out</text>
<rect class="box c2" x="738" y="10" width="94" height="88" rx="4" />
<text class="t-b" x="745" y="25">Fragment</text>
<text class="t-s" x="745" y="40">Master Stack</text>
<text class="t-m" x="745" y="57">Base Color</text>
<text class="t-m" x="745" y="73">…</text>
<text class="t-m" x="745" y="89">Alpha = 1</text>
<text class="t-s" x="12" y="198">ds：水面後面那個東西的 eye depth</text>
<text class="t-s" x="12" y="214">dw：水面自己的 eye depth (Raw 的第四個分量 A 就是 w)</text>
</svg>`)
