explainer.fig('water-body-wave-data-flow', /* html */ `
<svg viewBox="0 0 840 300" aria-label="設定資產的值由 WaterBody 寫進這片水的 Material，時間由 WaterBody 以全域變數傳給 shader，bounds 也由 WaterBody 依浪高放大">
  <path class="ln arrow" d="M184,70 H262" />
  <path class="ln arrow" d="M440,52 H560" />
  <path class="ln arrow" d="M440,104 C500,104 500,150 560,150" />
  <path class="ln arrow" d="M352,128 V200" />
  <path class="ln arrow" d="M720,92 V122" />
  <path class="ln arrow" d="M720,182 V200" />
  <rect class="box c3" x="16" y="34" width="168" height="76" rx="6" />
  <text class="t-b" x="28" y="56">WaterSettings 資產</text>
  <text class="t-s" x="28" y="76">一片水一份</text>
  <text class="t-s" x="28" y="94">4 個波、浪高總控</text>
  <rect class="box c4" x="264" y="30" width="176" height="98" rx="6" />
  <text class="t-b" x="276" y="52">WaterBody Component</text>
  <text class="t-s" x="276" y="72">掛在 WaterSurface 上</text>
  <text class="t-m" x="276" y="94">Material.SetVector</text>
  <text class="t-m" x="276" y="112">Shader.SetGlobalFloat</text>
  <rect class="box" x="562" y="22" width="262" height="70" rx="6" />
  <text class="t-b" x="574" y="44">這片水的 Material (M_LakeWater)</text>
  <text class="t-m" x="574" y="64">_Wave0 … _Wave3</text>
  <text class="t-m" x="574" y="82">_WaveHeightScale</text>
  <rect class="box" x="562" y="124" width="262" height="58" rx="6" />
  <text class="t-b" x="574" y="146">全域 shader 變數</text>
  <text class="t-m" x="574" y="166">_WaterTime (所有湖共用)</text>
  <rect class="box c2" x="562" y="202" width="262" height="56" rx="6" />
  <text class="t-b" x="574" y="224">SG_Water.shadergraph</text>
  <text class="t-s" x="574" y="244">Custom Function 讀這些值算波浪</text>
  <rect class="box" x="264" y="202" width="176" height="56" rx="6" />
  <text class="t-b" x="276" y="224">MeshRenderer</text>
  <text class="t-m" x="276" y="244">localBounds 放大</text>
</svg>`)
