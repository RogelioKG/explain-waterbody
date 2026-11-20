explainer.fig('frame-render-order-water', /* html */ `
<svg viewBox="0 0 780 160" aria-label="一幀裡 opaque 物體、天空、兩張圖、transparent 物體的先後，以及水讀取那兩張圖">
  <path class="ln arrow" d="M180,66.0 H203" />
  <path class="ln arrow" d="M375,66.0 H398" />
  <path class="ln arrow" d="M570,66.0 H593" />
  <path class="ln arrow" d="M680.0,102 V128 H485.0 V105" />
  <text class="t-s" x="582.5" y="146" text-anchor="middle">水的 fragment shader 讀取</text>
  <rect class="box" x="10" y="30" width="170" height="72" rx="6" />
  <text class="t-b" x="95.0" y="52" text-anchor="middle">opaque 物體</text>
  <text class="t-s" x="95.0" y="72" text-anchor="middle">湖底、石頭</text>
  <text class="t-s" x="95.0" y="88" text-anchor="middle">Geometry (2000)</text>
  <rect class="box c4" x="205" y="30" width="170" height="72" rx="6" />
  <text class="t-b" x="290.0" y="52" text-anchor="middle">天空</text>
  <text class="t-s" x="290.0" y="72" text-anchor="middle">填滿沒畫到的像素</text>
  <rect class="band" style="stroke-dasharray:4 3" x="400" y="30" width="170" height="72" rx="6" />
  <text class="t-b" x="485.0" y="52" text-anchor="middle">準備兩張圖</text>
  <text class="t-s" x="485.0" y="72" text-anchor="middle">depth texture</text>
  <text class="t-s" x="485.0" y="88" text-anchor="middle">opaque texture</text>
  <rect class="box c1" x="595" y="30" width="170" height="72" rx="6" />
  <text class="t-b" x="680.0" y="52" text-anchor="middle">transparent 物體</text>
  <text class="t-s" x="680.0" y="72" text-anchor="middle">水面</text>
  <text class="t-s" x="680.0" y="88" text-anchor="middle">Transparent (3000)</text>
</svg>`)
