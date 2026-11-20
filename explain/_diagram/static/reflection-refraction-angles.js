explainer.fig('reflection-refraction-angles', /* html */ `
<svg viewBox="0 0 840 290" aria-label="視線和 normal 夾 60 度碰到水面：反射往上 30 度，折射進水裡和 normal 夾 40.6 度">
  <rect class="c1" x="20" y="150" width="800" height="130" style="fill-opacity:0.5;stroke:none" />
  <path class="ln c1" style="stroke-width:2" d="M20,150 L820,150" />
  <path class="ln" stroke-dasharray="3 3" d="M420,30 L420,275" />
  <path class="ln arrow" style="stroke-width:2" d="M246.8,50 L420,150" />
  <path class="ln arrow c2" style="stroke-width:2" d="M420,150 L593.2,50" />
  <path class="ln arrow c3" style="stroke-width:2" d="M420,150 L524.2,271.4" />
  <circle class="box" cx="420" cy="150" r="3.5" />
  <text class="t-m" x="240.8" y="54" text-anchor="end">i：視線</text>
  <text class="t-m" x="599.2" y="54">r：反射</text>
  <text class="t-m" x="530.2" y="275.4">t：折射</text>
  <text class="t-m" x="428" y="40">n</text>
  <text class="t-m" x="410" y="112" text-anchor="end">60°</text>
  <text class="t-m" x="432" y="222">40.6°</text>
  <text class="t-m" x="40" y="140">空氣 n₁ = 1.0</text>
  <text class="t-m" x="40" y="172">水 n₂ = 1.33</text>
</svg>`)
