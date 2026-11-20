explainer.fig('mipmap-averaging-levels', /* html */ `
<svg viewBox="0 0 780 330" aria-label="遠處一個像素蓋住 4 × 4 個 texel，只取一點時鏡頭稍動就從 0 變 100；mipmap 每一格是上一層 2 × 2 四格的平均，一層接一層，4 × 4 變 2 × 2 再變 1 × 1，GPU 挑一格等於 16 格平均的那一層">
  <text class="t-b" x="20" y="14">texture 上：一個像素蓋住的範圍</text>
  <rect x="20" y="40" width="18" height="18" style="fill:#000000;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="38" y="40" width="18" height="18" style="fill:#cccccc;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="56" y="40" width="18" height="18" style="fill:#666666;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="74" y="40" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="92" y="40" width="18" height="18" style="fill:#000000;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="110" y="40" width="18" height="18" style="fill:#cccccc;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="128" y="40" width="18" height="18" style="fill:#666666;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="146" y="40" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="164" y="40" width="18" height="18" style="fill:#000000;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="182" y="40" width="18" height="18" style="fill:#cccccc;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="200" y="40" width="18" height="18" style="fill:#666666;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="218" y="40" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="20" y="58" width="18" height="18" style="fill:#ffffff;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="38" y="58" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="56" y="58" width="18" height="18" style="fill:#cccccc;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="74" y="58" width="18" height="18" style="fill:#ffffff;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="92" y="58" width="18" height="18" style="fill:#ffffff;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="110" y="58" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="128" y="58" width="18" height="18" style="fill:#cccccc;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="146" y="58" width="18" height="18" style="fill:#ffffff;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="164" y="58" width="18" height="18" style="fill:#ffffff;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="182" y="58" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="200" y="58" width="18" height="18" style="fill:#cccccc;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="218" y="58" width="18" height="18" style="fill:#ffffff;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="20" y="76" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="38" y="76" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="56" y="76" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="74" y="76" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="92" y="76" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="110" y="76" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="128" y="76" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="146" y="76" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="164" y="76" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="182" y="76" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="200" y="76" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="218" y="76" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="20" y="94" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="38" y="94" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="56" y="94" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="74" y="94" width="18" height="18" style="fill:#ffffff;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="92" y="94" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="110" y="94" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="128" y="94" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="146" y="94" width="18" height="18" style="fill:#ffffff;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="164" y="94" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="182" y="94" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="200" y="94" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="218" y="94" width="18" height="18" style="fill:#ffffff;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="20" y="112" width="18" height="18" style="fill:#000000;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="38" y="112" width="18" height="18" style="fill:#cccccc;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="56" y="112" width="18" height="18" style="fill:#666666;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="74" y="112" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="92" y="112" width="18" height="18" style="fill:#000000;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="110" y="112" width="18" height="18" style="fill:#cccccc;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="128" y="112" width="18" height="18" style="fill:#666666;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="146" y="112" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="164" y="112" width="18" height="18" style="fill:#000000;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="182" y="112" width="18" height="18" style="fill:#cccccc;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="200" y="112" width="18" height="18" style="fill:#666666;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="218" y="112" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="20" y="130" width="18" height="18" style="fill:#ffffff;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="38" y="130" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="56" y="130" width="18" height="18" style="fill:#cccccc;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="74" y="130" width="18" height="18" style="fill:#ffffff;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="92" y="130" width="18" height="18" style="fill:#ffffff;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="110" y="130" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="128" y="130" width="18" height="18" style="fill:#cccccc;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="146" y="130" width="18" height="18" style="fill:#ffffff;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="164" y="130" width="18" height="18" style="fill:#ffffff;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="182" y="130" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="200" y="130" width="18" height="18" style="fill:#cccccc;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="218" y="130" width="18" height="18" style="fill:#ffffff;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="20" y="148" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="38" y="148" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="56" y="148" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="74" y="148" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="92" y="148" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="110" y="148" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="128" y="148" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="146" y="148" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="164" y="148" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="182" y="148" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="200" y="148" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="218" y="148" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="20" y="166" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="38" y="166" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="56" y="166" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="74" y="166" width="18" height="18" style="fill:#ffffff;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="92" y="166" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="110" y="166" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="128" y="166" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="146" y="166" width="18" height="18" style="fill:#ffffff;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="164" y="166" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="182" y="166" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="200" y="166" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="218" y="166" width="18" height="18" style="fill:#ffffff;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="20" y="184" width="18" height="18" style="fill:#000000;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="38" y="184" width="18" height="18" style="fill:#cccccc;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="56" y="184" width="18" height="18" style="fill:#666666;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="74" y="184" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="92" y="184" width="18" height="18" style="fill:#000000;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="110" y="184" width="18" height="18" style="fill:#cccccc;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="128" y="184" width="18" height="18" style="fill:#666666;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="146" y="184" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="164" y="184" width="18" height="18" style="fill:#000000;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="182" y="184" width="18" height="18" style="fill:#cccccc;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="200" y="184" width="18" height="18" style="fill:#666666;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="218" y="184" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="20" y="202" width="18" height="18" style="fill:#ffffff;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="38" y="202" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="56" y="202" width="18" height="18" style="fill:#cccccc;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="74" y="202" width="18" height="18" style="fill:#ffffff;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="92" y="202" width="18" height="18" style="fill:#ffffff;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="110" y="202" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="128" y="202" width="18" height="18" style="fill:#cccccc;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="146" y="202" width="18" height="18" style="fill:#ffffff;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="164" y="202" width="18" height="18" style="fill:#ffffff;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="182" y="202" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="200" y="202" width="18" height="18" style="fill:#cccccc;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="218" y="202" width="18" height="18" style="fill:#ffffff;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="20" y="220" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="38" y="220" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="56" y="220" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="74" y="220" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="92" y="220" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="110" y="220" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="128" y="220" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="146" y="220" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="164" y="220" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="182" y="220" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="200" y="220" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="218" y="220" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="20" y="238" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="38" y="238" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="56" y="238" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="74" y="238" width="18" height="18" style="fill:#ffffff;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="92" y="238" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="110" y="238" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="128" y="238" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="146" y="238" width="18" height="18" style="fill:#ffffff;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="164" y="238" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="182" y="238" width="18" height="18" style="fill:#333333;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="200" y="238" width="18" height="18" style="fill:#999999;stroke:var(--line-strong);stroke-width:.5" />
  <rect x="218" y="238" width="18" height="18" style="fill:#ffffff;stroke:var(--line-strong);stroke-width:.5" />
  <text class="t-m" x="101" y="125" text-anchor="middle" style="fill:#f5f5f5;font-size:10px">0</text>
  <text class="t-m" x="119" y="125" text-anchor="middle" style="fill:#111;font-size:10px">80</text>
  <text class="t-m" x="137" y="125" text-anchor="middle" style="fill:#f5f5f5;font-size:10px">40</text>
  <text class="t-m" x="155" y="125" text-anchor="middle" style="fill:#111;font-size:10px">60</text>
  <text class="t-m" x="101" y="143" text-anchor="middle" style="fill:#111;font-size:10px">100</text>
  <text class="t-m" x="119" y="143" text-anchor="middle" style="fill:#f5f5f5;font-size:10px">20</text>
  <text class="t-m" x="137" y="143" text-anchor="middle" style="fill:#111;font-size:10px">80</text>
  <text class="t-m" x="155" y="143" text-anchor="middle" style="fill:#111;font-size:10px">100</text>
  <text class="t-m" x="101" y="161" text-anchor="middle" style="fill:#111;font-size:10px">60</text>
  <text class="t-m" x="119" y="161" text-anchor="middle" style="fill:#f5f5f5;font-size:10px">20</text>
  <text class="t-m" x="137" y="161" text-anchor="middle" style="fill:#f5f5f5;font-size:10px">20</text>
  <text class="t-m" x="155" y="161" text-anchor="middle" style="fill:#111;font-size:10px">60</text>
  <text class="t-m" x="101" y="179" text-anchor="middle" style="fill:#111;font-size:10px">60</text>
  <text class="t-m" x="119" y="179" text-anchor="middle" style="fill:#f5f5f5;font-size:10px">20</text>
  <text class="t-m" x="137" y="179" text-anchor="middle" style="fill:#111;font-size:10px">60</text>
  <text class="t-m" x="155" y="179" text-anchor="middle" style="fill:#111;font-size:10px">100</text>
  <rect class="box" style="fill:none;stroke:var(--accent-mark);stroke-width:2.5;stroke-dasharray:5 3" x="92" y="112" width="72" height="72" />
  <rect class="box c3" style="fill:none;stroke-width:2.5" x="92" y="112" width="18" height="18" />
  <rect class="box c1" style="fill:none;stroke-width:2.5" x="92" y="130" width="18" height="18" />
  <text class="t-b" x="128" y="276" text-anchor="middle">一個像素蓋住 4 × 4 個 texel</text>
  <rect class="box c3" x="22" y="292" width="12" height="12" />
  <text class="t-s" x="40" y="302">只取這一點：0</text>
  <rect class="box c1" x="22" y="312" width="12" height="12" />
  <text class="t-s" x="40" y="322">鏡頭稍動，取到這一點：100</text>
  <text class="t-b" x="300" y="14">mipmap：每格是上一層 2 × 2 的平均</text>
  <rect x="300" y="70" width="30" height="30" style="fill:#000000;stroke:var(--line-strong)" />
  <text class="t-m" x="315.0" y="89.0" text-anchor="middle" style="fill:#f5f5f5">0</text>
  <rect x="330" y="70" width="30" height="30" style="fill:#cccccc;stroke:var(--line-strong)" />
  <text class="t-m" x="345.0" y="89.0" text-anchor="middle" style="fill:#111">80</text>
  <rect x="360" y="70" width="30" height="30" style="fill:#666666;stroke:var(--line-strong)" />
  <text class="t-m" x="375.0" y="89.0" text-anchor="middle" style="fill:#f5f5f5">40</text>
  <rect x="390" y="70" width="30" height="30" style="fill:#999999;stroke:var(--line-strong)" />
  <text class="t-m" x="405.0" y="89.0" text-anchor="middle" style="fill:#111">60</text>
  <rect x="300" y="100" width="30" height="30" style="fill:#ffffff;stroke:var(--line-strong)" />
  <text class="t-m" x="315.0" y="119.0" text-anchor="middle" style="fill:#111">100</text>
  <rect x="330" y="100" width="30" height="30" style="fill:#333333;stroke:var(--line-strong)" />
  <text class="t-m" x="345.0" y="119.0" text-anchor="middle" style="fill:#f5f5f5">20</text>
  <rect x="360" y="100" width="30" height="30" style="fill:#cccccc;stroke:var(--line-strong)" />
  <text class="t-m" x="375.0" y="119.0" text-anchor="middle" style="fill:#111">80</text>
  <rect x="390" y="100" width="30" height="30" style="fill:#ffffff;stroke:var(--line-strong)" />
  <text class="t-m" x="405.0" y="119.0" text-anchor="middle" style="fill:#111">100</text>
  <rect x="300" y="130" width="30" height="30" style="fill:#999999;stroke:var(--line-strong)" />
  <text class="t-m" x="315.0" y="149.0" text-anchor="middle" style="fill:#111">60</text>
  <rect x="330" y="130" width="30" height="30" style="fill:#333333;stroke:var(--line-strong)" />
  <text class="t-m" x="345.0" y="149.0" text-anchor="middle" style="fill:#f5f5f5">20</text>
  <rect x="360" y="130" width="30" height="30" style="fill:#333333;stroke:var(--line-strong)" />
  <text class="t-m" x="375.0" y="149.0" text-anchor="middle" style="fill:#f5f5f5">20</text>
  <rect x="390" y="130" width="30" height="30" style="fill:#999999;stroke:var(--line-strong)" />
  <text class="t-m" x="405.0" y="149.0" text-anchor="middle" style="fill:#111">60</text>
  <rect x="300" y="160" width="30" height="30" style="fill:#999999;stroke:var(--line-strong)" />
  <text class="t-m" x="315.0" y="179.0" text-anchor="middle" style="fill:#111">60</text>
  <rect x="330" y="160" width="30" height="30" style="fill:#333333;stroke:var(--line-strong)" />
  <text class="t-m" x="345.0" y="179.0" text-anchor="middle" style="fill:#f5f5f5">20</text>
  <rect x="360" y="160" width="30" height="30" style="fill:#999999;stroke:var(--line-strong)" />
  <text class="t-m" x="375.0" y="179.0" text-anchor="middle" style="fill:#111">60</text>
  <rect x="390" y="160" width="30" height="30" style="fill:#ffffff;stroke:var(--line-strong)" />
  <text class="t-m" x="405.0" y="179.0" text-anchor="middle" style="fill:#111">100</text>
  <rect x="500" y="70" width="30" height="30" style="fill:#808080;stroke:var(--line-strong)" />
  <text class="t-m" x="515.0" y="89.0" text-anchor="middle" style="fill:#f5f5f5">50</text>
  <rect x="530" y="70" width="30" height="30" style="fill:#b2b2b2;stroke:var(--line-strong)" />
  <text class="t-m" x="545.0" y="89.0" text-anchor="middle" style="fill:#111">70</text>
  <rect x="500" y="100" width="30" height="30" style="fill:#666666;stroke:var(--line-strong)" />
  <text class="t-m" x="515.0" y="119.0" text-anchor="middle" style="fill:#f5f5f5">40</text>
  <rect x="530" y="100" width="30" height="30" style="fill:#999999;stroke:var(--line-strong)" />
  <text class="t-m" x="545.0" y="119.0" text-anchor="middle" style="fill:#111">60</text>
  <rect x="640" y="70" width="30" height="30" style="fill:#8c8c8c;stroke:var(--line-strong)" />
  <text class="t-m" x="655.0" y="89.0" text-anchor="middle" style="fill:#111">55</text>
  <rect style="fill:none;stroke:var(--accent-mark);stroke-width:2.5;stroke-dasharray:5 3" x="360" y="70" width="60" height="60" />
  <rect style="fill:none;stroke:var(--accent-mark);stroke-width:2.5;stroke-dasharray:5 3" x="500" y="70" width="60" height="60" />
  <rect style="fill:none;stroke:var(--accent-mark);stroke-width:3" x="640" y="70" width="30" height="30" />
  <path class="ln arrow" style="stroke:var(--accent-mark)" d="M390,68 V52 H545 V68" />
  <text class="t-s" x="468" y="46" text-anchor="middle">四格平均 70</text>
  <path class="ln arrow" style="stroke:var(--accent-mark)" d="M530,132 V152 H655 V102" />
  <text class="t-s" x="592" y="168" text-anchor="middle">四格平均 55</text>
  <text class="t-s" x="360" y="212" text-anchor="middle">第 0 層</text>
  <text class="t-s" x="360" y="228" text-anchor="middle">512 × 512</text>
  <text class="t-s" x="530" y="212" text-anchor="middle">第 1 層</text>
  <text class="t-s" x="530" y="228" text-anchor="middle">256 × 256</text>
  <text class="t-s" x="655" y="212" text-anchor="middle">第 2 層</text>
  <text class="t-s" x="655" y="228" text-anchor="middle">128 × 128</text>
  <text class="t-b" x="655" y="62" text-anchor="middle">GPU 挑這層</text>
  <text class="t" x="560" y="262" text-anchor="middle">一個 texel ≈ 一個像素</text>
  <text class="t" x="560" y="280" text-anchor="middle">= 第 0 層 16 格的平均</text>
</svg>`)
