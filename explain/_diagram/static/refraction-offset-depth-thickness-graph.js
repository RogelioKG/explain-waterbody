explainer.fig('refraction-offset-depth-thickness-graph', /* html */ `
<svg viewBox="0 0 840 226" aria-label="第五步的 graph：同一個 Comparison 驅動第二個 Branch，選出最後採用的那個 UV 的 depth，接進再放的一個 SSG_Thickness 得到 h1，取代原本的 h 接進 SSG_Absorption 的 Thickness">
<g class="is-new">
<path class="ln" d="M132,53 C159.2,53 172.8,83 200,83" />
</g>
<g class="is-new">
<path class="ln" d="M132,123 C159.2,123 172.8,99 200,99" />
</g>
<g class="is-new">
<path class="ln" d="M132,193 C159.2,193 172.8,115 200,115" />
</g>
<g class="is-new">
<path class="ln" d="M310,83 C332,83 328,103 350,103" />
</g>
<g class="is-new">
<path class="ln" d="M310,203 C332,203 328,119 350,119" />
</g>
<g class="is-new">
<path class="ln" d="M520,103 C542,103 548,103 570,103" />
</g>
<rect class="box" x="8" y="10" width="124" height="56" rx="4" />
<text class="t-b" x="15" y="25">Comparison</text>
<text class="t-s" x="15" y="40">第四步的</text>
<text class="t-m" x="125" y="57" text-anchor="end">Out</text>
<rect class="box" x="8" y="80" width="124" height="56" rx="4" />
<text class="t-b" x="15" y="95">Scene Depth</text>
<text class="t-s" x="15" y="110">UV 不接 (已有)</text>
<text class="t-m" x="125" y="127" text-anchor="end">Out</text>
<rect class="box" x="8" y="150" width="124" height="56" rx="4" />
<text class="t-b" x="15" y="165">Scene Depth</text>
<text class="t-s" x="15" y="180">d1 (第四步的)</text>
<text class="t-m" x="125" y="197" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box" x="200" y="40" width="110" height="88" rx="4" />
<text class="t-b" x="207" y="55">Branch</text>
<text class="t-s" x="207" y="70">depth</text>
<text class="t-m" x="207" y="87">Predicate</text>
<text class="t-m" x="207" y="103">True</text>
<text class="t-m" x="207" y="119">False</text>
<text class="t-m" x="303" y="87" text-anchor="end">Out</text>
</g>
<rect class="box" x="200" y="160" width="110" height="56" rx="4" />
<text class="t-b" x="207" y="175">Split</text>
<text class="t-s" x="207" y="190">A = dw (已有)</text>
<text class="t-m" x="303" y="207" text-anchor="end">Out</text>
<g class="is-new">
<rect class="box c1" x="350" y="60" width="170" height="72" rx="4" />
<text class="t-b" x="357" y="75">SSG_Thickness</text>
<text class="t-s" x="357" y="90">再放一個</text>
<text class="t-m" x="357" y="107">SceneDepth</text>
<text class="t-m" x="357" y="123">SurfaceDepth</text>
<text class="t-m" x="513" y="107" text-anchor="end">Thickness</text>
</g>
<rect class="box c1" x="350" y="160" width="170" height="56" rx="4" />
<text class="t-b" x="357" y="175">SSG_Thickness</text>
<text class="t-s" x="357" y="190">原本的 (已有)</text>
<text class="t-m" x="513" y="207" text-anchor="end">Thickness</text>
<rect class="box c1" x="570" y="60" width="190" height="56" rx="4" />
<text class="t-b" x="577" y="75">SSG_Absorption</text>
<text class="t-s" x="577" y="90">Sub Graph (已有)</text>
<text class="t-m" x="577" y="107">Thickness</text>
<text class="t-m" x="753" y="107" text-anchor="end">Transmittance</text>
<text class="t-s" x="530" y="203">只接 SSG_Foam、Saturate，不改</text>
</svg>`)
