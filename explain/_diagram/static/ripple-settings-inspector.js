explainer.fig('ripple-settings-inspector', /* html */ `
<svg viewBox="0 0 660 230" aria-label="第六步的檢查點：設定資產多出 Ripple Layers、Ripple Strength、Ripple Fade Distance、Smoothness，值是預設值">
<text class="t-b" x="160" y="16" text-anchor="middle">預期</text>
<rect class="box" x="10" y="28" width="300" height="138" rx="4" />
<text class="t-s" x="20" y="46">SO_LakeWater (Inspector)</text>
<text class="t-m" x="24" y="66">…</text>
<text class="t-m" x="296" y="66" text-anchor="end"></text>
<text class="t-m" x="24" y="84">Ripple Layers [0]</text>
<text class="t-m" x="296" y="84" text-anchor="end">(0.3,0.1) 0.1 0.35</text>
<text class="t-m" x="24" y="102">Ripple Layers [1]</text>
<text class="t-m" x="296" y="102" text-anchor="end">(−0.15,0.25) 0.25 0.35</text>
<text class="t-m" x="24" y="120">Ripple Strength</text>
<text class="t-m" x="296" y="120" text-anchor="end">1</text>
<text class="t-m" x="24" y="138">Ripple Fade Distance</text>
<text class="t-m" x="296" y="138" text-anchor="end">60</text>
<text class="t-m" x="24" y="156">Smoothness</text>
<text class="t-m" x="296" y="156" text-anchor="end">0.9</text>
<text class="t-s" x="160" y="184" text-anchor="middle">Material 上的值和這裡一致；改這裡水面立刻變</text>
<text class="t-cost" x="500" y="16" text-anchor="middle">錯誤：新欄位都是 0</text>
<rect class="box" x="350" y="28" width="300" height="138" rx="4" />
<text class="t-s" x="360" y="46">SO_LakeWater (Inspector)</text>
<text class="t-m" x="364" y="66">…</text>
<text class="t-m" x="636" y="66" text-anchor="end"></text>
<text class="t-m" x="364" y="84">Ripple Layers [0]</text>
<text class="t-cost" x="636" y="84" text-anchor="end">(0, 0)  0  0</text>
<text class="t-m" x="364" y="102">Ripple Layers [1]</text>
<text class="t-cost" x="636" y="102" text-anchor="end">(0, 0)  0  0</text>
<text class="t-m" x="364" y="120">Ripple Strength</text>
<text class="t-cost" x="636" y="120" text-anchor="end">0</text>
<text class="t-m" x="364" y="138">Ripple Fade Distance</text>
<text class="t-cost" x="636" y="138" text-anchor="end">0</text>
<text class="t-m" x="364" y="156">Smoothness</text>
<text class="t-cost" x="636" y="156" text-anchor="end">0</text>
<text class="t-s" x="500" y="184" text-anchor="middle">水面回到光滑、specular 模糊：照初始值填入</text>
</svg>`)
