explainer.fig('impact-event-data-flow', /* html */ `
<svg viewBox="0 0 840 256" aria-label="入水事件的路徑：WaterSplash 呼叫 WaterImpacts.Add，記下位置、時間、強度，整個陣列寫進全域 shader 變數；水面 shader 用 WaterBody 傳的 _WaterTime 算出每筆事件過了多久">
  <path class="ln arrow" d="M196,80 H268" />
  <path class="ln arrow" d="M470,80 H558" />
  <path class="ln arrow" d="M692,120 V168" />
  <path class="ln arrow" d="M470,205 H558" />
  <rect class="box c2" x="16" y="40" width="180" height="80" rx="6" />
  <text class="t-b" x="28" y="64">WaterSplash</text>
  <text class="t-s" x="28" y="84">掛在方塊、角色上</text>
  <text class="t-s" x="28" y="102">穿過水面時呼叫</text>
  <text class="t-m" x="232" y="70" text-anchor="middle">Add</text>
  <rect class="box c4" x="270" y="40" width="200" height="80" rx="6" />
  <text class="t-b" x="282" y="64">WaterImpacts</text>
  <text class="t-s" x="282" y="84">32 格，滿了蓋掉最舊</text>
  <text class="t-s" x="282" y="102">記下 Time.time</text>
  <text class="t-s" x="514" y="70" text-anchor="middle">寫入全域</text>
  <rect class="box" x="560" y="40" width="264" height="80" rx="6" />
  <text class="t-b" x="572" y="64">全域 shader 變數</text>
  <text class="t-m" x="572" y="84">_WaterImpacts[32]</text>
  <text class="t-m" x="572" y="102">(x, z, 時間, 強度)</text>
  <rect class="box c4" x="270" y="170" width="200" height="70" rx="6" />
  <text class="t-b" x="282" y="194">WaterBody</text>
  <text class="t-m" x="282" y="214">_WaterTime = Time.time</text>
  <rect class="box c3" x="560" y="170" width="264" height="70" rx="6" />
  <text class="t-b" x="572" y="194">ImpactRipples.hlsl</text>
  <text class="t-s" x="572" y="214">每個像素算每筆過了多久</text>
</svg>`)
