explainer.fig('fishing-rod-bite-states', /* html */ `
<svg viewBox="0 0 840 330" aria-label="FishingRod 的狀態：Idle 按拋竿鍵進 Flying，落水進 Waiting，等一段時間進 Nibbling 輕拉幾下，再進 Biting 往下拉；咬鉤時沒收線就回到 Waiting；在水裡按住收線鍵，拉到竿尖附近回到 Idle">
  <rect class="band" x="336" y="44" width="492" height="196" rx="10" />
  <text class="t-s" x="350" y="230">按住 R：收線</text>
  <path class="ln arrow" d="M148,96 H184" />
  <path class="ln arrow" d="M306,96 H346" />
  <path class="ln arrow" d="M478,96 H510" />
  <path class="ln arrow" d="M642,96 H674" />
  <path class="ln arrow" d="M560,72 C540,30 610,30 590,72" />
  <path class="ln arrow cost-ln" d="M740,124 C740,190 420,190 420,126" />
  <path class="ln arrow" d="M575,240 V290 H78 V126" />
  <rect class="box" x="16" y="70" width="132" height="54" rx="8" />
  <text class="t-b" x="82" y="94" text-anchor="middle">Idle</text>
  <text class="t-s" x="82" y="112" text-anchor="middle">掛在竿尖</text>
  <rect class="box c2" x="186" y="70" width="120" height="54" rx="8" />
  <text class="t-b" x="246" y="94" text-anchor="middle">Flying</text>
  <text class="t-s" x="246" y="112" text-anchor="middle">飛出去</text>
  <rect class="box c1" x="348" y="70" width="130" height="54" rx="8" />
  <text class="t-b" x="413" y="94" text-anchor="middle">Waiting</text>
  <text class="t-s" x="413" y="112" text-anchor="middle">等 3 ~ 8 秒</text>
  <rect class="box c3" x="512" y="70" width="130" height="54" rx="8" />
  <text class="t-b" x="577" y="94" text-anchor="middle">Nibbling</text>
  <text class="t-s" x="577" y="112" text-anchor="middle">輕拉 0.15 秒</text>
  <rect class="box c4" x="676" y="70" width="140" height="54" rx="8" />
  <text class="t-b" x="746" y="94" text-anchor="middle">Biting</text>
  <text class="t-s" x="746" y="112" text-anchor="middle">往下拉 1.5 秒</text>
  <text class="t-s" x="166" y="86" text-anchor="middle">按 F</text>
  <text class="t-s" x="320" y="86" text-anchor="middle">落水</text>
  <text class="t-s" x="575" y="26" text-anchor="middle">每 0.8 秒一下，2 ~ 4 下</text>
  <text class="t-cost" x="580" y="200" text-anchor="middle">沒收線：魚跑掉</text>
  <text class="t-s" x="330" y="306" text-anchor="middle">離竿尖 1 m 內：收回</text>
</svg>`)
