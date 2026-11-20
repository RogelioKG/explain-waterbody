explainer.fig('wave-settings-shader-csharp-sync', /* html */ `
<svg viewBox="0 0 840 250" aria-label="設定資產與 CurrentTime 同時送到 shader 和 C# 的查詢，所以畫面上的水面和查到的高度一致">
  <path class="ln arrow" d="M170,65 H262" />
  <path class="ln arrow" d="M170,65 C215,65 215,185 262,185" />
  <path class="ln arrow" d="M170,185 C215,185 215,65 262,65" />
  <path class="ln arrow" d="M170,185 H262" />
  <path class="ln arrow" d="M420,65 H462" />
  <path class="ln arrow" d="M620,65 H662" />
  <path class="ln arrow" d="M420,185 H462" />
  <path class="ln arrow" d="M620,185 H662" />
  <rect class="box" x="20" y="40" width="150" height="50" rx="6" />
  <text class="t-b" x="95.0" y="61" text-anchor="middle">SO_LakeWater</text>
  <text class="t-s" x="95.0" y="78" text-anchor="middle">波浪參數與浪高總控</text>
  <rect class="box" x="20" y="160" width="150" height="50" rx="6" />
  <text class="t-m" x="95.0" y="181" text-anchor="middle">CurrentTime()</text>
  <text class="t-s" x="95.0" y="198" text-anchor="middle">Edit / Play 各自的時鐘</text>
  <rect class="box" x="270" y="40" width="150" height="50" rx="6" />
  <text class="t-b" x="345.0" y="61" text-anchor="middle">M_LakeWater</text>
  <text class="t-s" x="345.0" y="78" text-anchor="middle">_WaterTime (全域)</text>
  <rect class="box" x="470" y="40" width="150" height="50" rx="6" />
  <text class="t-m" x="545.0" y="61" text-anchor="middle">GerstnerWaves.hlsl</text>
  <text class="t-s" x="545.0" y="78" text-anchor="middle">GPU：移動 vertex</text>
  <rect class="c1" x="670" y="40" width="150" height="50" rx="6" />
  <text class="t-b" x="745.0" y="69.5" text-anchor="middle">畫面上的水面</text>
  <rect class="box" x="270" y="160" width="150" height="50" rx="6" />
  <text class="t-m" x="345.0" y="181" text-anchor="middle">WaveOffset</text>
  <text class="t-s" x="345.0" y="198" text-anchor="middle">C#：照抄的公式</text>
  <rect class="box" x="470" y="160" width="150" height="50" rx="6" />
  <text class="t-m" x="545.0" y="181" text-anchor="middle">GetSurfaceHeight</text>
  <text class="t-s" x="545.0" y="198" text-anchor="middle">反推 4 次再算高度</text>
  <rect class="c2" x="670" y="160" width="150" height="50" rx="6" />
  <text class="t-m" x="745.0" y="181" text-anchor="middle">WaterHeightProbe</text>
  <text class="t-s" x="745.0" y="198" text-anchor="middle">小球的 Y</text>
  <text class="t-s" x="95" y="129" text-anchor="middle">兩條路共用來源</text>
  <text class="t-s" x="745" y="125" text-anchor="middle">兩邊一致</text>
  <path class="ln" stroke-dasharray="2 3" d="M745,92 V112 M745,133 V158" />
</svg>`)
