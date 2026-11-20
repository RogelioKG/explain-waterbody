explainer.fig('vertex-space-chain-to-pixel', /* html */ `
<svg viewBox="0 0 840 120" aria-label="石頭的一個 vertex 從 object space 換到 world、view、clip space，除以 w 得到 NDC，再換成像素">
  <path class="ln arrow" d="M116,49 L148,49" />
  <path class="ln arrow" d="M260,49 L292,49" />
  <path class="ln arrow" d="M404,49 L436,49" />
  <path class="ln arrow" d="M548,49 L580,49" />
  <path class="ln arrow" d="M692,49 L724,49" />
  <rect class="box c1" x="4" y="14" width="112" height="70" rx="4" />
  <text class="t-b" x="12" y="36">object space</text>
  <text class="t-s" x="12" y="56">物件自己的</text>
  <text class="t-s" x="12" y="72">原點與軸</text>
  <rect class="box" x="148" y="14" width="112" height="70" rx="4" />
  <text class="t-b" x="156" y="36">world space</text>
  <text class="t-s" x="156" y="56">整個場景共用</text>
  <text class="t-s" x="156" y="72">單位公尺</text>
  <rect class="box" x="292" y="14" width="112" height="70" rx="4" />
  <text class="t-b" x="300" y="36">view space</text>
  <text class="t-s" x="300" y="56">攝影機在原點</text>
  <text class="t-s" x="300" y="72">看向 −Z</text>
  <rect class="box" x="436" y="14" width="112" height="70" rx="4" />
  <text class="t-b" x="444" y="36">clip space</text>
  <text class="t-s" x="444" y="56">(x, y, z, w)</text>
  <text class="t-s" x="444" y="72">w = 距離</text>
  <rect class="box" x="580" y="14" width="112" height="70" rx="4" />
  <text class="t-b" x="588" y="36">NDC</text>
  <text class="t-s" x="588" y="56">畫面內的 x、y</text>
  <text class="t-s" x="588" y="72">在 −1 到 1</text>
  <rect class="box c2" x="724" y="14" width="112" height="70" rx="4" />
  <text class="t-b" x="732" y="36">螢幕</text>
  <text class="t-s" x="732" y="56">像素位置</text>
  <text class="t-m" x="132" y="42" text-anchor="middle">M</text>
  <text class="t-m" x="276" y="42" text-anchor="middle">V</text>
  <text class="t-m" x="420" y="42" text-anchor="middle">P</text>
  <text class="t-m" x="564" y="42" text-anchor="middle">÷ w</text>
  <text class="t-m" x="708" y="42" text-anchor="middle">換算</text>
  <text class="t-s" x="276" y="110" text-anchor="middle">前三步：乘上 4 × 4 矩陣</text>
  <text class="t-s" x="564" y="110" text-anchor="middle">第四步：除以 w</text>
</svg>`)
