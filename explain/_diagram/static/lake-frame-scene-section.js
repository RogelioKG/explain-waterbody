explainer.fig('lake-frame-scene-section', /* html */ `
<svg viewBox="0 0 800 300" aria-label="這一幀的場景剖面：岸上的攝影機、天空、水面、坐在湖底的石頭；穿過像素 P 的線依序碰到什麼">
  <path class="c4" style="fill-opacity:.35;stroke:none" d="M0,0 H800 V150 H150 L120,125 H0 Z" />
  <path class="band" style="stroke-dasharray:none;fill:var(--line-strong);fill-opacity:.4" d="M0,125 H120 L150,150 L300,250 H800 V300 H0 Z" />
  <path class="box c2" style="fill:var(--f2);fill-opacity:.55;stroke-width:1.5" d="M468,250 L462,215 L474,180 L492,152 L512,136 L540,130 L562,142 L572,175 L578,215 L574,250 Z" />
  <path class="c1" style="fill:var(--f1);fill-opacity:.3;stroke:none" d="M150,150 H800 V250 H300 Z" />
  <path class="ln" style="stroke-width:1.6" d="M150,150 H800" />
  <path class="ln" d="M70,76 L62,125 M70,76 L78,125" />
  <rect class="box" x="58" y="60" width="30" height="16" rx="3" />
  <path class="box" d="M88,63 L96,60 V76 L88,73 Z" />
  <text class="t-s" x="64" y="48" text-anchor="middle">攝影機</text>
  <path v-if="!on(2)" class="ln arrow" d="M96,68 L136.0,84.5" />
  <text class="t" x="400" y="40" text-anchor="middle">天空</text>
  <text class="t-s" x="780" y="142" text-anchor="end">水面 y = 0</text>
  <text class="t-s" x="590" y="128">半泡的石頭</text>
  <text class="t-s" x="780" y="292" text-anchor="end">湖底，最深 y = −5</text>
  <path class="ln" style="stroke:var(--f3);stroke-width:5" d="M164,150 H180" />
  <path class="ln" d="M172,154 L232,182" />
  <text class="t-s" x="236" y="184">我們追的三角形</text>
  <text class="t-s" x="236" y="199">離岸約 1 m</text>
  <g v-if="on(2)" class="ex-in" :class="{ 'is-new': fresh(2) }">
    <path class="ln" d="M108,50 V96" />
    <text class="t-s" x="122" y="48" text-anchor="middle">畫面</text>
    <path class="ln arrow" d="M96,68 L326.5,150.0" />
    <path class="ln" style="opacity:.55" d="M326.5,150.0 L467.7,198.5" />
    <path class="ln" stroke-dasharray="4 3" style="opacity:.4" d="M467.7,198.5 L617.5,250.0" />
    <circle class="box" cx="108" cy="74.9" r="3" />
    <text class="t-b" x="114" y="65.9">P</text>
    <circle class="c1" cx="326.5" cy="150" r="4.5" />
    <circle class="c2" cx="467.7" cy="198.5" r="4.5" />
    <circle class="band" style="stroke-dasharray:none" cx="617.5" cy="250" r="4.5" />
    <text class="t-s" x="336.5" y="140">水面 4 m</text>
    <text class="t-s" x="453.7" y="224.5" text-anchor="end">石頭 7 m</text>
    <text class="t-s" x="617.5" y="270" text-anchor="middle">湖底 12 m</text>
  </g>
</svg>`)
