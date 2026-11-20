explainer.fig('caustic-settings-inspector', /* html */ `
<svg viewBox="0 0 660 198" aria-label="第七步的檢查點：設定資產在 Fresnel Power 下面多了 Caustic Layers、Caustic Power、Caustic Strength、Caustic Distortion；常見錯誤是 Reference 不一致，改設定資產時 Material 沒跟著變">
<text class="t-b" x="160" y="16" text-anchor="middle">預期</text>
<rect class="box" x="10" y="28" width="300" height="138" rx="4" />
<text class="t-s" x="20" y="46">SO_LakeWater (Inspector)</text>
<text class="t-m" x="24" y="66">…</text>
<text class="t-m" x="24" y="84">Fresnel Power</text>
<text class="t-m" x="296" y="84" text-anchor="end">4</text>
<text class="t-m" x="24" y="102">▸ Caustic Layers</text>
<text class="t-m" x="296" y="102" text-anchor="end">2</text>
<text class="t-m" x="24" y="120">Caustic Power</text>
<text class="t-m" x="296" y="120" text-anchor="end">3</text>
<text class="t-m" x="24" y="138">Caustic Strength</text>
<text class="t-m" x="296" y="138" text-anchor="end">3</text>
<text class="t-m" x="24" y="156">Caustic Distortion</text>
<text class="t-m" x="296" y="156" text-anchor="end">0.25</text>
<text class="t-s" x="160" y="186" text-anchor="middle">Material 上的值和這裡一致</text>
<text class="t-cost" x="500" y="16" text-anchor="middle">錯誤：Reference 不一致</text>
<rect class="box" x="350" y="28" width="300" height="50" rx="4" />
<text class="t-s" x="360" y="46">SO_LakeWater (Inspector)</text>
<text class="t-m" x="364" y="66">Caustic Strength</text>
<text class="t-m" x="636" y="66" text-anchor="end">0</text>
<rect class="box" x="350" y="92" width="300" height="50" rx="4" />
<text class="t-s" x="360" y="110">M_LakeWater (Inspector)</text>
<text class="t-m" x="364" y="130">CausticStrength</text>
<text class="t-cost" x="636" y="130" text-anchor="end">3</text>
<text class="t-s" x="500" y="186" text-anchor="middle">改成 0，Material 沒跟著變</text>
</svg>`)
