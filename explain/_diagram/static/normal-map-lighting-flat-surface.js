explainer.fig('normal-map-lighting-flat-surface', /* html */ `
<svg viewBox="0 0 720 215" aria-label="同樣的光照在平的水面上：normal 都朝上時亮度一致，normal map 的 normal 隨起伏傾斜，亮度有明有暗">
  <path class="ln" style="stroke-width:2.5" d="M30,150 H330" />
  <path class="ln arrow c3" style="stroke-width:1.6" d="M40,36 L55.0,62.0" />
  <path class="ln arrow c3" style="stroke-width:1.6" d="M56,36 L71.0,62.0" />
  <path class="ln arrow c3" style="stroke-width:1.6" d="M72,36 L87.0,62.0" />
  <text class="t-s" x="96" y="52">光</text>
  <path class="ln arrow c1" style="stroke-width:1.8" d="M48.8,148 L48.8,116.0" />
  <rect x="30.0" y="162" width="37.5" height="18" style="fill:#d7d7d7;stroke:var(--line-strong)" />
  <path class="ln arrow c1" style="stroke-width:1.8" d="M86.2,148 L86.2,116.0" />
  <rect x="67.5" y="162" width="37.5" height="18" style="fill:#d7d7d7;stroke:var(--line-strong)" />
  <path class="ln arrow c1" style="stroke-width:1.8" d="M123.8,148 L123.8,116.0" />
  <rect x="105.0" y="162" width="37.5" height="18" style="fill:#d7d7d7;stroke:var(--line-strong)" />
  <path class="ln arrow c1" style="stroke-width:1.8" d="M161.2,148 L161.2,116.0" />
  <rect x="142.5" y="162" width="37.5" height="18" style="fill:#d7d7d7;stroke:var(--line-strong)" />
  <path class="ln arrow c1" style="stroke-width:1.8" d="M198.8,148 L198.8,116.0" />
  <rect x="180.0" y="162" width="37.5" height="18" style="fill:#d7d7d7;stroke:var(--line-strong)" />
  <path class="ln arrow c1" style="stroke-width:1.8" d="M236.2,148 L236.2,116.0" />
  <rect x="217.5" y="162" width="37.5" height="18" style="fill:#d7d7d7;stroke:var(--line-strong)" />
  <path class="ln arrow c1" style="stroke-width:1.8" d="M273.8,148 L273.8,116.0" />
  <rect x="255.0" y="162" width="37.5" height="18" style="fill:#d7d7d7;stroke:var(--line-strong)" />
  <path class="ln arrow c1" style="stroke-width:1.8" d="M311.2,148 L311.2,116.0" />
  <rect x="292.5" y="162" width="37.5" height="18" style="fill:#d7d7d7;stroke:var(--line-strong)" />
  <text class="t-b" x="180" y="20" text-anchor="middle">interpolation 後的 normal：都朝上</text>
  <text class="t-s" x="180" y="198" text-anchor="middle">整片一樣亮</text>
  <path class="ln" style="stroke-width:2.5" d="M390,150 H690" />
  <path class="ln arrow c3" style="stroke-width:1.6" d="M400,36 L415.0,62.0" />
  <path class="ln arrow c3" style="stroke-width:1.6" d="M416,36 L431.0,62.0" />
  <path class="ln arrow c3" style="stroke-width:1.6" d="M432,36 L447.0,62.0" />
  <text class="t-s" x="456" y="52">光</text>
  <path class="ln" style="stroke:var(--muted);stroke-width:1.2;stroke-dasharray:4 3" d="M390,108.4 L396,106.0 L402,102.9 L408,99.3 L414,95.5 L420,92.0 L426,89.1 L432,87.0 L438,86.1 L444,86.3 L450,87.6 L456,90.0 L462,93.1 L468,96.7 L474,100.5 L480,104.0 L486,106.9 L492,109.0 L498,109.9 L504,109.7 L510,108.4 L516,106.0 L522,102.9 L528,99.3 L534,95.5 L540,92.0 L546,89.1 L552,87.0 L558,86.1 L564,86.3 L570,87.6 L576,90.0 L582,93.1 L588,96.7 L594,100.5 L600,104.0 L606,106.9 L612,109.0 L618,109.9 L624,109.7 L630,108.4 L636,106.0 L642,102.9 L648,99.3 L654,95.5 L660,92.0 L666,89.1 L672,87.0 L678,86.1 L684,86.3 L690,87.6" />
  <text class="t-s" x="690" y="76" text-anchor="end">看起來像的起伏</text>
  <path class="ln arrow c1" style="stroke-width:1.8" d="M408.8,148 L391.8,120.9" />
  <rect x="390.0" y="162" width="37.5" height="18" style="fill:#f0f0f0;stroke:var(--line-strong)" />
  <path class="ln arrow c1" style="stroke-width:1.8" d="M446.2,148 L452.6,116.6" />
  <rect x="427.5" y="162" width="37.5" height="18" style="fill:#c0c0c0;stroke:var(--line-strong)" />
  <path class="ln arrow c1" style="stroke-width:1.8" d="M483.8,148 L497.4,119.1" />
  <rect x="465.0" y="162" width="37.5" height="18" style="fill:#9e9e9e;stroke:var(--line-strong)" />
  <path class="ln arrow c1" style="stroke-width:1.8" d="M521.2,148 L505.5,120.1" />
  <rect x="502.5" y="162" width="37.5" height="18" style="fill:#f0f0f0;stroke:var(--line-strong)" />
  <path class="ln arrow c1" style="stroke-width:1.8" d="M558.8,148 L557.4,116.0" />
  <rect x="540.0" y="162" width="37.5" height="18" style="fill:#dadada;stroke:var(--line-strong)" />
  <path class="ln arrow c1" style="stroke-width:1.8" d="M596.2,148 L612.6,120.5" />
  <rect x="577.5" y="162" width="37.5" height="18" style="fill:#8f8f8f;stroke:var(--line-strong)" />
  <path class="ln arrow c1" style="stroke-width:1.8" d="M633.8,148 L621.5,118.4" />
  <rect x="615.0" y="162" width="37.5" height="18" style="fill:#eeeeee;stroke:var(--line-strong)" />
  <path class="ln arrow c1" style="stroke-width:1.8" d="M671.2,148 L662.7,117.2" />
  <rect x="652.5" y="162" width="37.5" height="18" style="fill:#eaeaea;stroke:var(--line-strong)" />
  <text class="t-b" x="540" y="20" text-anchor="middle">normal map 給的 normal：隨起伏傾斜</text>
  <text class="t-s" x="540" y="198" text-anchor="middle">mesh 仍是平的，但光影有起伏</text>
  <text class="t-s" x="26" y="175" text-anchor="end">亮度</text>
</svg>`)
