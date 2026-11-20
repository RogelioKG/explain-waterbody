explainer.fig('water-splash-ends-below', /* html */ `
<svg viewBox="0 0 840 300" aria-label="WaterSplash 數底端、頂端有幾個在水面下：0、1、2。數目改變時記一筆 (從 0 變多時再噴水花)；停在 1 (半泡在水裡) 時，水平每走 0.75 公尺記一筆">
  <rect class="band" x="30" y="36" width="180" height="256" rx="8" />
  <path class="c1" style="stroke:none" d="M31,150 H209 V291 H31 Z" />
  <path class="ln c1" style="stroke-width:2" d="M31,150 H209" />
  <text class="t-b" x="120" y="26" text-anchor="middle">0 個在水面下</text>
  <rect class="box c2" x="70" y="80" width="60" height="60" rx="3" />
  <circle class="c4" cx="100" cy="80" r="4.5" />
  <circle class="c4" cx="100" cy="140" r="4.5" />
  <rect class="band" x="330" y="36" width="180" height="256" rx="8" />
  <path class="c1" style="stroke:none" d="M331,150 H509 V291 H331 Z" />
  <path class="ln c1" style="stroke-width:2" d="M331,150 H509" />
  <text class="t-b" x="420" y="26" text-anchor="middle">1 個：半泡在水裡</text>
  <rect class="box c2" x="370" y="120" width="60" height="60" rx="3" />
  <circle class="c4" cx="400" cy="120" r="4.5" />
  <circle class="c4" cx="400" cy="180" r="4.5" />
  <rect class="band" x="630" y="36" width="180" height="256" rx="8" />
  <path class="c1" style="stroke:none" d="M631,150 H809 V291 H631 Z" />
  <path class="ln c1" style="stroke-width:2" d="M631,150 H809" />
  <text class="t-b" x="720" y="26" text-anchor="middle">2 個：整個在水下</text>
  <rect class="box c2" x="670" y="180" width="60" height="60" rx="3" />
  <circle class="c4" cx="700" cy="180" r="4.5" />
  <circle class="c4" cx="700" cy="240" r="4.5" />
  <text class="t-s" x="137" y="88">頂端</text>
  <text class="t-s" x="137" y="142">底端</text>
  <text class="t-s" x="618" y="146" text-anchor="end">水面</text>
  <path class="ln arrow" d="M218,86 H322" />
  <path class="ln arrow" d="M322,232 H218" />
  <path class="ln arrow" d="M518,86 H622" />
  <path class="ln arrow" d="M622,232 H518" />
  <text class="t-s" x="270" y="76" text-anchor="middle">落水：一筆＋水花</text>
  <text class="t-s" x="270" y="250" text-anchor="middle">離開水面：一筆</text>
  <text class="t-s" x="570" y="76" text-anchor="middle">沉下去：一筆</text>
  <text class="t-s" x="570" y="250" text-anchor="middle">浮上來：一筆</text>
  <path class="ln arrow" d="M440,165 H484" />
  <text class="t-s" x="420" y="282" text-anchor="middle">水平每走 0.75 m 一筆</text>
</svg>`)
