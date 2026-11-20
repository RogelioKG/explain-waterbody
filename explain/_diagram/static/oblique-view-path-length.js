explainer.fig('oblique-view-path-length', /* html */ `
<svg viewBox="0 0 640 230" aria-label="同一個地方，從正上方看和從低角度看，視線在水裡走的長度不同">
<rect x="20" y="110" width="600" height="60" style="fill:var(--f4);fill-opacity:0.15;stroke:none" />
<path class="ln" d="M20,110 H620" />
<path class="ln" style="stroke-width:2" d="M20,170 H620" />
<text class="t-s" x="616" y="104" text-anchor="end">水面</text>
<text class="t-s" x="616" y="186" text-anchor="end">湖底 (水深 1 m)</text>
<path class="ln arrow c4" style="stroke-width:2" d="M420,30 V168" />
<text class="t-b" x="428" y="40">從正上方看</text>
<text class="t-m" x="428" y="144.0">h = 1 m</text>
<path class="ln arrow cost-ln" style="stroke-width:2" d="M194.8,40 L417,168" />
<text class="t-b" x="194.8" y="30">從低角度 (30°) 看</text>
<text class="t-m" x="338" y="150" text-anchor="end">h ≈ 2 m</text>
</svg>`)
