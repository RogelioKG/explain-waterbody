explainer.fig('urp-water-learning-route', /* html */ `
<svg viewBox="0 0 840 490" aria-label="學習路線：照什麼順序走，哪一章是選讀，兩個階段在哪裡分開">
      <rect class="band" x="5" y="5" width="830" height="351" rx="10" />
      <rect class="band" x="5" y="376" width="830" height="104" rx="10" />

      <path class="ln arrow" d="M190,92 H220" />
      <path class="ln arrow" d="M380,92 H410" />
      <path class="ln arrow" d="M570,92 H600" />
      <path class="ln arrow" d="M680,116 V142 H17 V202 H30" />
      <path class="ln arrow" d="M130,202 H144" />
      <path class="ln arrow" d="M244,202 H258" />
      <path class="ln arrow" d="M358,202 H372" />
      <path class="ln arrow" d="M472,202 H486" />
      <path class="ln arrow" d="M586,202 H600" />
      <path class="ln arrow" d="M700,202 H714" style="stroke-dasharray:4 3" />
      <path class="ln arrow" d="M650,226 V252 H17 V312 H30" />
      <path class="ln arrow" d="M190,312 H220" />
      <path class="ln arrow" d="M380,312 H410" />
      <path class="ln arrow" d="M570,312 H600" />
      <path class="ln arrow" d="M680,336 V366 H17 V442 H30" />
      <path class="ln arrow" d="M190,442 H220" />
      <path class="ln arrow" d="M380,442 H410" />

      <rect class="box" x="30" y="68" width="160" height="48" rx="8" />
      <rect class="box" x="220" y="68" width="160" height="48" rx="8" />
      <rect class="box" x="410" y="68" width="160" height="48" rx="8" />
      <rect class="box" x="600" y="68" width="160" height="48" rx="8" />
      <rect class="box c1" x="30" y="178" width="100" height="48" rx="8" />
      <rect class="box c1" x="144" y="178" width="100" height="48" rx="8" />
      <rect class="box c1" x="258" y="178" width="100" height="48" rx="8" />
      <rect class="box c1" x="372" y="178" width="100" height="48" rx="8" />
      <rect class="box c1" x="486" y="178" width="100" height="48" rx="8" />
      <rect class="box c1" x="600" y="178" width="100" height="48" rx="8" />
      <rect class="band" x="714" y="178" width="100" height="48" rx="8" />
      <rect class="box c2" x="30" y="288" width="160" height="48" rx="8" />
      <rect class="box c2" x="220" y="288" width="160" height="48" rx="8" />
      <rect class="box c2" x="410" y="288" width="160" height="48" rx="8" />
      <rect class="box c2" x="600" y="288" width="160" height="48" rx="8" />
      <rect class="box c4" x="30" y="418" width="160" height="48" rx="8" />
      <rect class="box c4" x="220" y="418" width="160" height="48" rx="8" />
      <rect class="box c4" x="410" y="418" width="160" height="48" rx="8" />

      <text class="t-b" x="30" y="30">第一階段：做出一片能釣魚的湖</text>
      <text class="t-s" x="30" y="58">準備</text>
      <text class="t-s" x="30" y="168">水面上的外觀</text>
      <text class="t-s" x="30" y="278">互動與物理</text>
      <text class="t-b" x="30" y="404">第二階段：水下</text>

      <g text-anchor="middle">
        <text class="t-s" x="110" y="86">第 1 章</text>
        <text class="t-b" x="110" y="104">Vector Math</text>
        <text class="t-s" x="300" y="86">第 2 章</text>
        <text class="t-b" x="300" y="104">Shader Basics</text>
        <text class="t-s" x="490" y="86">第 3 章</text>
        <text class="t-b" x="490" y="104">URP Setup</text>
        <text class="t-s" x="680" y="86">第 4 章</text>
        <text class="t-b" x="680" y="104">Shader Graph</text>

        <text class="t-s" x="80" y="196">第 5 章</text>
        <text class="t-b" x="80" y="214">Gerstner Waves</text>
        <text class="t-s" x="194" y="196">第 6 章</text>
        <text class="t-b" x="194" y="214">Depth Coloring</text>
        <text class="t-s" x="308" y="196">第 7 章</text>
        <text class="t-b" x="308" y="214">Flow Normals</text>
        <text class="t-s" x="422" y="196">第 8 章</text>
        <text class="t-b" x="422" y="214">Refraction</text>
        <text class="t-s" x="536" y="196">第 9 章</text>
        <text class="t-b" x="536" y="214">Reflection</text>
        <text class="t-s" x="650" y="196">第 10 章</text>
        <text class="t-b" x="650" y="214">Caustics</text>
        <text class="t-s" x="764" y="196">第 11 章</text>
        <text class="t-b" x="764" y="214">讀懂官方範例</text>

        <text class="t-s" x="110" y="306">第 12 章</text>
        <text class="t-b" x="110" y="324">Wave Height Query</text>
        <text class="t-s" x="300" y="306">第 13 章</text>
        <text class="t-b" x="300" y="324">Buoyancy</text>
        <text class="t-s" x="490" y="306">第 14 章</text>
        <text class="t-b" x="490" y="324">Fishing Bobber</text>
        <text class="t-s" x="680" y="306">第 15 章</text>
        <text class="t-b" x="680" y="324">Interactive Ripples</text>

        <text class="t-s" x="110" y="436">第 16 章</text>
        <text class="t-b" x="110" y="454">Underwater Fog</text>
        <text class="t-s" x="300" y="436">第 17 章</text>
        <text class="t-b" x="300" y="454">Surface from Below</text>
        <text class="t-s" x="490" y="436">第 18 章</text>
        <text class="t-b" x="490" y="454">Waterline</text>
      </g>
    </svg>`)
