explainer.fig('frame-render-order-underwater-fog', /* html */ `
<svg viewBox="0 0 840 214" aria-label="一幀的順序：不透明物體、天空、複製 depth texture 與 opaque texture 之後插入水下霧，再畫透明物件與後處理">
<path class="ln" d="M16,130 V136 H234 V130" />
<text class="t-s" x="125.0" y="152" text-anchor="middle">霧要處理的：已在畫面上</text>
<path class="ln" d="M606,130 V136 H824 V130" />
<text class="t-s" x="715.0" y="152" text-anchor="middle">畫在霧的上面</text>
<path class="ln arrow" d="M302.0,58 C302.0,22 538.0,22 538.0,58" />
<text class="t-s" x="420.0" y="24" text-anchor="middle">霧從這裡讀距離</text>
<path class="ln arrow" d="M118,90.0 H131" />
<path class="ln arrow" d="M236,90.0 H249" />
<path class="ln arrow" d="M354,90.0 H367" />
<path class="ln arrow" d="M472,90.0 H485" />
<path class="ln arrow" d="M590,90.0 H603" />
<path class="ln arrow" d="M708,90.0 H721" />
<rect class="box" x="16" y="62" width="100" height="56" rx="5" />
<text class="t-b" x="66.0" y="86" text-anchor="middle">不透明物體</text>
<text class="t-s" x="66.0" y="104" text-anchor="middle">湖底、石頭、魚</text>
<rect class="box" x="134" y="62" width="100" height="56" rx="5" />
<text class="t-b" x="184.0" y="95" text-anchor="middle">天空</text>
<rect class="box" x="252" y="62" width="100" height="56" rx="5" />
<text class="t-b" x="302.0" y="86" text-anchor="middle">複製深度</text>
<text class="t-s" x="302.0" y="104" text-anchor="middle">depth texture</text>
<rect class="box" x="370" y="62" width="100" height="56" rx="5" />
<text class="t-b" x="420.0" y="86" text-anchor="middle">複製畫面</text>
<text class="t-s" x="420.0" y="104" text-anchor="middle">opaque texture</text>
<rect class="box is-new" x="488" y="62" width="100" height="56" rx="5" />
<text class="t-b" x="538.0" y="86" text-anchor="middle">水下霧</text>
<text class="t-s" x="538.0" y="104" text-anchor="middle">這一章加的</text>
<rect class="box" x="606" y="62" width="100" height="56" rx="5" />
<text class="t-b" x="656.0" y="86" text-anchor="middle">透明物件</text>
<text class="t-s" x="656.0" y="104" text-anchor="middle">水面</text>
<rect class="box" x="724" y="62" width="100" height="56" rx="5" />
<text class="t-b" x="774.0" y="86" text-anchor="middle">後處理</text>
<text class="t-s" x="774.0" y="104" text-anchor="middle">到螢幕</text>
<text class="t-s" x="656.0" y="178" text-anchor="middle">不寫深度：</text>
<text class="t-s" x="656.0" y="193" text-anchor="middle">depth texture 沒有它</text>
</svg>`)
