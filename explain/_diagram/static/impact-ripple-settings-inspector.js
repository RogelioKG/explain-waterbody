explainer.fig('impact-ripple-settings-inspector', /* html */ `
<svg viewBox="0 0 810 222" aria-label="第三步搬進設定資產的檢查點：SO_LakeWater 最後多出五個 Impact 欄位，M_LakeWater 上的值和它一致；常見錯誤是改了設定資產，Material 上的值沒跟著變">
<text class="t-b" x="129" y="14" text-anchor="middle">預期</text>
<rect class="box" x="4" y="28" width="250" height="164" rx="4" />
<text class="t-s" x="14" y="46">SO_LakeWater (Inspector)</text>
<text class="t-m" x="18" y="66">…</text>
<text class="t-m" x="240" y="66" text-anchor="end"></text>
<text class="t-m" x="18" y="84">Caustic Strength</text>
<text class="t-m" x="240" y="84" text-anchor="end">3</text>
<text class="t-m" x="18" y="102">Impact Ripple Speed</text>
<text class="t-m" x="240" y="102" text-anchor="end">0.8</text>
<text class="t-m" x="18" y="120">Impact Ripple Lifetime</text>
<text class="t-m" x="240" y="120" text-anchor="end">2.5</text>
<text class="t-m" x="18" y="138">Impact Ripple Width</text>
<text class="t-m" x="240" y="138" text-anchor="end">0.3</text>
<text class="t-m" x="18" y="156">Impact Ripple Slope</text>
<text class="t-m" x="240" y="156" text-anchor="end">0.4</text>
<text class="t-m" x="18" y="174">Impact Foam Width</text>
<text class="t-m" x="240" y="174" text-anchor="end">0.1</text>
<text class="t-s" x="129" y="212" text-anchor="middle">值是 C# 的初始值</text>
<text class="t-b" x="409" y="14" text-anchor="middle">預期：Material 跟著變</text>
<rect class="box" x="284" y="28" width="250" height="146" rx="4" />
<text class="t-s" x="294" y="46">M_LakeWater (Inspector)</text>
<text class="t-m" x="298" y="66">…</text>
<text class="t-m" x="520" y="66" text-anchor="end"></text>
<text class="t-m" x="298" y="84">ImpactRipple X</text>
<text class="t-m" x="520" y="84" text-anchor="end">0.8</text>
<text class="t-m" x="298" y="102">Y</text>
<text class="t-m" x="520" y="102" text-anchor="end">2.5</text>
<text class="t-m" x="298" y="120">Z</text>
<text class="t-m" x="520" y="120" text-anchor="end">0.3</text>
<text class="t-m" x="298" y="138">W</text>
<text class="t-m" x="520" y="138" text-anchor="end">0.4</text>
<text class="t-m" x="298" y="156">ImpactFoamWidth</text>
<text class="t-m" x="520" y="156" text-anchor="end">0.1</text>
<text class="t-s" x="409" y="212" text-anchor="middle">和設定資產一致</text>
<text class="t-cost" x="685" y="14" text-anchor="middle">錯誤：Material 沒跟著變</text>
<rect class="box" x="564" y="28" width="242" height="56" rx="4" />
<text class="t-s" x="574" y="46">SO_LakeWater</text>
<text class="t-m" x="578" y="66">Impact Ripple Speed</text>
<text class="t-m" x="792" y="66" text-anchor="end">2</text>
<rect class="box" x="564" y="96" width="242" height="56" rx="4" />
<text class="t-s" x="574" y="114">M_LakeWater</text>
<text class="t-m" x="578" y="134">ImpactRipple X</text>
<text class="t-cost" x="792" y="134" text-anchor="end">0.8</text>
<text class="t-s" x="685" y="186" text-anchor="middle">Reference 和 C# 的</text>
<text class="t-s" x="685" y="201" text-anchor="middle">名字不同</text>
</svg>`)
