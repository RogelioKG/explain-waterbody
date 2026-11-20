explainer.fig('lake-terrain-section', /* html */ `
<svg viewBox="0 0 800 300" aria-label="湖的剖面：岸、緩坡、最深處、水面高度，以及石頭與魚的替身示意">
  <path class="band" style="stroke-dasharray:none" d="M40,85 L110,85 L130,97.5 L150,110 L230,147.5 L310,235 L490,235 L570,147.5 L650,110 L670,97.5 L690,85 L760,85 L760,290 L40,290 Z" />
  <path class="c1" d="M150,110 L230,147.5 L310,235 L490,235 L570,147.5 L650,110 Z" />
  <path class="ln" d="M150,44 V52 M150,48 H650 M650,44 V52" />
  <g text-anchor="middle">
    <text class="t-s" x="400" y="36">水邊到水邊約 50 m</text>
    <text class="t" x="80" y="72">岸：Y = 1</text>
    <text class="t" x="400" y="100">水面：Y = 0</text>
    <text class="t-s" x="190" y="200">緩坡：水深 0 到 1.5 m</text>
    <text class="t-s" x="300" y="268">最深處：Y = −5</text>
  </g>
  <text class="t-s" x="144" y="100" text-anchor="end">水邊線</text>
  <g v-if="on(2)" class="ex-in" :class="{ 'is-new': fresh(2) }">
    <ellipse class="box c2" cx="190" cy="112.5" rx="10" ry="17.5" />
    <ellipse class="box c2" cx="250" cy="130" rx="15" ry="37.5" />
    <ellipse class="box c2" cx="540" cy="170" rx="10" ry="12.5" />
    <ellipse class="box c2" cx="430" cy="225" rx="12.5" ry="15" />
    <text class="t-s" x="225" y="78" text-anchor="middle">半泡的石頭</text>
    <text class="t-s" x="500" y="268" text-anchor="middle">沉在水底的石頭</text>
  </g>
  <g v-if="on(3)" class="ex-in" :class="{ 'is-new': fresh(3) }">
    <ellipse class="box c3" cx="210" cy="122.5" rx="6" ry="4" />
    <ellipse class="box c3" cx="280" cy="147.5" rx="6" ry="4" />
    <ellipse class="box c3" cx="340" cy="197.5" rx="6" ry="4" />
    <ellipse class="box c3" cx="370" cy="160" rx="6" ry="4" />
    <ellipse class="box c3" cx="440" cy="160" rx="6" ry="4" />
    <ellipse class="box c3" cx="510" cy="160" rx="6" ry="4" />
    <text class="t-s" x="250" y="232" text-anchor="middle">深度不同的魚</text>
    <text class="t-s" x="440" y="145" text-anchor="middle">同樣深 2 m、距離不同的魚</text>
  </g>
  <g v-if="on(4)" class="ex-in" :class="{ 'is-new': fresh(4) }">
    <path class="ln" stroke-dasharray="5 4" d="M100,110 H700" />
    <text class="t-s" x="715" y="72" text-anchor="middle">水面 mesh 60 m 寬</text>
    <text class="t-s" x="715" y="128" text-anchor="middle">伸進岸下的部分被地形蓋住</text>
  </g>
</svg>`)
