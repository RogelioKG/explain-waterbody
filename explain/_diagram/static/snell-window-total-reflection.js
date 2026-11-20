explainer.fig('snell-window-total-reflection', /* html */ `
<svg viewBox="0 0 840 260" aria-label="從水下往上看，只有和正上方夾 48.8 度以內的視線能穿出水面，圓錐外的水面全反射">
  <rect class="c1" x="20" y="60" width="800" height="200" style="fill-opacity:0.5;stroke:none" />
  <path class="ln c1" style="stroke-width:2" d="M20,60 L820,60" />
  <path class="ln" stroke-dasharray="4 3" d="M420,230 L226.2,60" />
  <path class="ln" stroke-dasharray="4 3" d="M420,230 L613.8,60" />
  <path class="ln" stroke-dasharray="2 3" d="M420,230 L420,60" />
  <path class="ln c2" style="stroke-width:2" d="M420,230 L321.9,60" />
  <path class="ln arrow c2" style="stroke-width:2" d="M321.9,60 L277.3,10" />
  <path class="ln c3" style="stroke-width:2" d="M420,230 L125.6,60" />
  <path class="ln arrow c3" style="stroke-width:2" d="M125.6,60 L30,115.2" />
  <circle class="box" cx="420" cy="230" r="5" />
  <text class="t-s" x="432" y="234">水下的眼睛</text>
  <text class="t-m" x="460" y="150">48.8°</text>
  <text class="t-s" x="480" y="40">圓錐內：看得到水面上的世界</text>
  <text class="t-s" x="40" y="200">圓錐外：全反射，</text>
  <text class="t-s" x="40" y="216">映出湖底與魚</text>
  <text class="t-s" x="810" y="48" text-anchor="end">空氣</text>
  <text class="t-s" x="810" y="80" text-anchor="end">水</text>
</svg>`)
