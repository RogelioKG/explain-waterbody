explainer.fig('triangle-render-pipeline', /* html */ `
<svg viewBox="0 0 780 210" aria-label="一個三角形從 mesh 到畫面經過哪些站，哪幾站是你寫的程式">
  <path class="ln arrow" d="M170,58 H208" />
  <path class="ln arrow" d="M360,58 H398" />
  <path class="ln arrow" d="M170,168 H208" />
  <path class="ln arrow" d="M360,168 H398" />
  <path class="ln arrow" d="M550,168 H588" />
  <path class="ln arrow" d="M475,86 V113 H95 V138" />
  <rect class="box" x="20" y="30" width="150" height="56" rx="6" />
  <text class="t-b" x="95" y="53" text-anchor="middle">1 vertex data</text>
  <text class="t-s" x="95" y="72" text-anchor="middle">mesh 裡存的</text>
  <rect class="box c3" x="210" y="30" width="150" height="56" rx="6" />
  <text class="t-b" x="285" y="53" text-anchor="middle">2 vertex shader</text>
  <text class="t-s" x="285" y="72" text-anchor="middle">每個 vertex 一次</text>
  <rect class="box" x="400" y="30" width="150" height="56" rx="6" />
  <text class="t-b" x="475" y="53" text-anchor="middle">3 culling</text>
  <text class="t-s" x="475" y="72" text-anchor="middle">正面留下、背面 cull</text>
  <rect class="box" x="20" y="140" width="150" height="56" rx="6" />
  <text class="t-b" x="95" y="163" text-anchor="middle">4 rasterization</text>
  <text class="t-s" x="95" y="182" text-anchor="middle">找出蓋住的像素</text>
  <rect class="box" x="210" y="140" width="150" height="56" rx="6" />
  <text class="t-b" x="285" y="163" text-anchor="middle">5 interpolation</text>
  <text class="t-s" x="285" y="182" text-anchor="middle">由三個 vertex 的值算出</text>
  <rect class="box c3" x="400" y="140" width="150" height="56" rx="6" />
  <text class="t-b" x="475" y="163" text-anchor="middle">6 fragment shader</text>
  <text class="t-s" x="475" y="182" text-anchor="middle">每個 fragment 一次</text>
  <rect class="band" style="stroke-dasharray:4 3" x="590" y="140" width="150" height="56" rx="6" />
  <text class="t-b" x="665" y="163" text-anchor="middle">寫進像素</text>
  <text class="t-s" x="665" y="182" text-anchor="middle">看整幀的順序</text>
  <text class="t-s" x="285" y="22" text-anchor="middle">你寫的程式</text>
  <text class="t-s" x="475" y="133" text-anchor="middle">你寫的程式</text>
</svg>`)
