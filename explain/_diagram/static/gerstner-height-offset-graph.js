explainer.fig('gerstner-height-offset-graph', /* html */ `
<svg viewBox="0 0 820 200" aria-label="第一步的後半：把 φ 算成高度，加到 world 位置上，再轉回 object space 接到 Position block">
  <path class="ln" d="M112,53 C136,53 102,43 126,43" />
  <path class="ln" d="M230,43 C254,43 220,73 244,73" />
  <path class="ln" d="M112,113 C171.4,113 184.6,89 244,89" />
  <path class="ln" d="M348,73 C372,73 338,65 362,65" />
  <path class="ln" d="M466,49 C490,49 456,115 480,115" />
  <path class="ln" d="M112,173 C277.6,173 314.4,99 480,99" />
  <path class="ln" d="M584,99 C608,99 574,107 598,107" />
  <path class="ln" d="M708,107 C732,107 698,97 722,97" />
  <rect class="box" x="8" y="10" width="104" height="56" rx="4" />
  <text class="t-b" x="15" y="25">Subtract</text>
  <text class="t-s" x="15" y="40">前半的 φ</text>
  <text class="t-m" x="105" y="57" text-anchor="end">Out</text>
  <rect class="box c3" x="8" y="70" width="104" height="56" rx="4" />
  <text class="t-b" x="15" y="85">Amplitude</text>
  <text class="t-s" x="15" y="100">Property</text>
  <text class="t-m" x="105" y="117" text-anchor="end">Out</text>
  <rect class="box" x="8" y="130" width="104" height="56" rx="4" />
  <text class="t-b" x="15" y="145">Position</text>
  <text class="t-s" x="15" y="160">Space: World</text>
  <text class="t-m" x="105" y="177" text-anchor="end">Out</text>
  <rect class="box" x="126" y="14" width="104" height="42" rx="4" />
  <text class="t-b" x="133" y="29">Sine</text>
  <text class="t-m" x="133" y="47">In</text>
  <text class="t-m" x="223" y="47" text-anchor="end">Out</text>
  <rect class="box" x="244" y="30" width="104" height="72" rx="4" />
  <text class="t-b" x="251" y="45">Multiply</text>
  <text class="t-s" x="251" y="60">A sin φ</text>
  <text class="t-m" x="251" y="77">A</text>
  <text class="t-m" x="251" y="93">B</text>
  <text class="t-m" x="341" y="77" text-anchor="end">Out</text>
  <rect class="box" x="362" y="20" width="104" height="74" rx="4" />
  <text class="t-b" x="369" y="35">Combine</text>
  <text class="t-m" x="369" y="53">R = 0</text>
  <text class="t-m" x="369" y="69">G</text>
  <text class="t-m" x="369" y="85">B = 0</text>
  <text class="t-m" x="459" y="53" text-anchor="end">RGB</text>
  <rect class="box" x="480" y="70" width="104" height="58" rx="4" />
  <text class="t-b" x="487" y="85">Add</text>
  <text class="t-m" x="487" y="103">A</text>
  <text class="t-m" x="487" y="119">B</text>
  <text class="t-m" x="577" y="103" text-anchor="end">Out</text>
  <rect class="box" x="598" y="64" width="110" height="56" rx="4" />
  <text class="t-b" x="605" y="79">Transform</text>
  <text class="t-s" x="605" y="94">World → Object</text>
  <text class="t-m" x="605" y="111">In</text>
  <text class="t-m" x="701" y="111" text-anchor="end">Out</text>
  <rect class="box c2" x="722" y="54" width="96" height="88" rx="4" />
  <text class="t-b" x="729" y="69">Vertex</text>
  <text class="t-s" x="729" y="84">Master Stack</text>
  <text class="t-m" x="729" y="101">Position</text>
  <text class="t-m" x="729" y="117">Normal</text>
  <text class="t-m" x="729" y="133">Tangent</text>
  <text class="t-s" x="604" y="140">Type: Position</text>
</svg>`)
