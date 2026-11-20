explainer.fig('water-mesh-ntb-axes', /* html */ `
<svg viewBox="0 0 560 230" aria-label="水面 mesh 上 N 朝 +Y、T 朝 +X；N × T 指向 −Z，和 V 增加的方向 +Z 相反">
<path d="M68.8,163.1 L308.8,163.1 L391.2,116.9 L151.2,116.9 Z" style="fill:var(--f4);fill-opacity:0.18;stroke:var(--f4);stroke-opacity:0.5" />
<path class="ln arrow c2" style="stroke-width:2" d="M230,140 l0,-80" />
<text class="t-b" x="236" y="58">N = (0, 1, 0)</text>
<path class="ln arrow c1" style="stroke-width:2" d="M230,140 l100,0" />
<text class="t-b" x="334" y="144">T = (1, 0, 0)　U 增加的方向</text>
<path class="ln arrow" style="stroke-width:2;stroke:var(--accent)" d="M230,140 l67.5,-37.8" />
<text class="t-b" x="303.5" y="102.2">B 要的方向 = (0, 0, 1)　V 增加的方向</text>
<path class="ln arrow cost-ln" style="stroke-width:2" d="M230,140 l-67.5,37.8" />
<text class="t-cost" x="156.5" y="191.8" text-anchor="end">N × T = (0, 0, −1)</text>
<text class="t-s" x="20" y="222">B = w (N × T)：w = −1 才會翻到 +Z</text>
</svg>`)
