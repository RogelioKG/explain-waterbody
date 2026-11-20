explainer.fig('fresnel-settings-inspector', /* html */ `
<svg viewBox="0 0 660 160" aria-label="第六步的檢查點：設定資產最後多出 Fresnel Power，值是 4">
<text class="t-b" x="160" y="16" text-anchor="middle">預期</text>
<rect class="box" x="10" y="28" width="300" height="84" rx="4" />
<text class="t-s" x="20" y="46">SO_LakeWater (Inspector)</text>
<text class="t-m" x="24" y="66">…</text>
<text class="t-m" x="296" y="66" text-anchor="end"></text>
<text class="t-m" x="24" y="84">Refraction Strength</text>
<text class="t-m" x="296" y="84" text-anchor="end">0.25</text>
<text class="t-m" x="24" y="102">Fresnel Power</text>
<text class="t-m" x="296" y="102" text-anchor="end">4</text>
<text class="t-s" x="160" y="130" text-anchor="middle">Material 上的值和這裡一致</text>
<text class="t-cost" x="500" y="16" text-anchor="middle">錯誤：新欄位是 0</text>
<rect class="box" x="350" y="28" width="300" height="84" rx="4" />
<text class="t-s" x="360" y="46">SO_LakeWater (Inspector)</text>
<text class="t-m" x="364" y="66">…</text>
<text class="t-m" x="636" y="66" text-anchor="end"></text>
<text class="t-m" x="364" y="84">Refraction Strength</text>
<text class="t-m" x="636" y="84" text-anchor="end">0.25</text>
<text class="t-m" x="364" y="102">Fresnel Power</text>
<text class="t-cost" x="636" y="102" text-anchor="end">0</text>
<text class="t-s" x="500" y="130" text-anchor="middle">讀取時被修正成 1：遠處以外也像鏡子。填入 4</text>
</svg>`)
