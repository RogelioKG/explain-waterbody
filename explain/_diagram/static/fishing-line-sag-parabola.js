explainer.fig('fishing-line-sag-parabola', /* html */ `
<svg viewBox="0 0 640 260" aria-label="釣線從竿尖到浮標：直線往下扣掉一段，兩端不動，正中間垂得最多">
  <path class="c1" d="M0,200 H640 V260 H0 Z" />
  <path class="ln c1" style="fill:none;stroke-width:2" d="M0,200 H640" />
  <path class="ln" style="stroke-dasharray:5 4" d="M60,50 L580,190" />
  <path class="ln c3" style="fill:none;stroke-width:2.5" d="M60,50 Q320,220 580,190" />
  <path class="ln arrow" d="M320,120 V166" />
  <circle class="c2" cx="60" cy="50" r="5" />
  <rect class="box c2" x="574" y="176" width="12" height="38" rx="6" />
  <text class="t-s" x="70" y="40">竿尖</text>
  <text class="t-s" x="590" y="166" text-anchor="end">浮標頂端</text>
  <text class="t-s" x="232" y="86">直線 (拉直)</text>
  <text class="t-s" x="314" y="144" text-anchor="end">垂得最多</text>
</svg>`)
