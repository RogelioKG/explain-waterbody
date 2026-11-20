explainer.fig('water-splash-console-check', /* html */ `
<svg viewBox="0 0 810 216" aria-label="第一步的檢查點：Console 只在方塊落水時各印一行；兩種常見錯誤是落水沒有印、按下 Play 就印一行之後不再印">
<text class="t-s" x="280" y="20" text-anchor="middle">在空中</text>
<path class="ln" style="stroke-dasharray:2 3" d="M230,28 V196" />
<text class="t-s" x="425" y="20" text-anchor="middle">浮著</text>
<path class="ln" style="stroke-dasharray:2 3" d="M330,28 V196" />
<text class="t-s" x="570" y="20" text-anchor="middle">移回空中</text>
<path class="ln" style="stroke-dasharray:2 3" d="M520,28 V196" />
<text class="t-s" x="710" y="20" text-anchor="middle">浮著</text>
<path class="ln" style="stroke-dasharray:2 3" d="M620,28 V196" />
<path class="ln" style="stroke-dasharray:2 3" d="M800,28 V196" />
<text class="t-s" x="330" y="212" text-anchor="middle">落水</text>
<text class="t-s" x="520" y="212" text-anchor="middle">改 Position Y</text>
<text class="t-s" x="620" y="212" text-anchor="middle">落水</text>
<text class="t-b" x="8" y="56">預期</text>
<text class="t-s" x="8" y="74">每次落水印一行</text>
<rect x="230" y="44" width="570" height="34" rx="3" style="fill:var(--ink);fill-opacity:0.04;stroke:var(--line-strong);stroke-width:0.6" />
<rect x="328" y="50" width="4" height="22" style="fill:var(--ink);fill-opacity:0.65;stroke:none" />
<rect x="618" y="50" width="4" height="22" style="fill:var(--ink);fill-opacity:0.65;stroke:none" />
<text class="t-cost" x="8" y="108">錯誤：落水沒有印</text>
<text class="t-s" x="8" y="126">掛在方塊以外的物件上</text>
<rect x="230" y="96" width="570" height="34" rx="3" style="fill:var(--ink);fill-opacity:0.04;stroke:var(--line-strong);stroke-width:0.6" />
<text class="t-cost" x="8" y="160">錯誤：按下 Play 就印</text>
<text class="t-s" x="8" y="178">Bottom 填得太負</text>
<rect x="230" y="148" width="570" height="34" rx="3" style="fill:var(--ink);fill-opacity:0.04;stroke:var(--line-strong);stroke-width:0.6" />
<rect x="234" y="154" width="4" height="22" style="fill:var(--ink);fill-opacity:0.65;stroke:none" />
</svg>`)
