explainer.fig('vertex-shader-three-vertices', /* html */ `
<svg viewBox="0 0 840 330" aria-label="三個 vertex 各自跑一次 vertex shader：object space 位置，你在 Shader Graph 改 y，Unity 自動接上攝影機換算，交出 clip space 座標，GPU 再換成畫面上的位置">
  <circle class="band" style="stroke-dasharray:none" cx="665" cy="120" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="675" cy="120" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="685" cy="120" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="745" cy="120" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="755" cy="120" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="765" cy="120" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="775" cy="120" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="785" cy="120" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="795" cy="120" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="805" cy="120" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="815" cy="120" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="665" cy="130" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="675" cy="130" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="685" cy="130" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="745" cy="130" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="755" cy="130" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="765" cy="130" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="775" cy="130" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="785" cy="130" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="795" cy="130" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="805" cy="130" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="815" cy="130" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="665" cy="140" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="675" cy="140" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="685" cy="140" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="745" cy="140" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="755" cy="140" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="765" cy="140" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="775" cy="140" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="785" cy="140" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="795" cy="140" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="805" cy="140" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="815" cy="140" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="665" cy="150" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="675" cy="150" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="685" cy="150" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="695" cy="150" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="705" cy="150" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="715" cy="150" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="725" cy="150" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="735" cy="150" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="745" cy="150" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="755" cy="150" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="765" cy="150" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="775" cy="150" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="785" cy="150" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="795" cy="150" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="805" cy="150" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="815" cy="150" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="665" cy="160" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="675" cy="160" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="685" cy="160" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="695" cy="160" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="705" cy="160" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="715" cy="160" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="725" cy="160" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="735" cy="160" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="745" cy="160" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="755" cy="160" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="765" cy="160" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="775" cy="160" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="785" cy="160" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="795" cy="160" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="805" cy="160" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="815" cy="160" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="665" cy="170" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="675" cy="170" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="685" cy="170" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="695" cy="170" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="705" cy="170" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="715" cy="170" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="725" cy="170" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="735" cy="170" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="745" cy="170" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="755" cy="170" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="765" cy="170" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="775" cy="170" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="785" cy="170" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="795" cy="170" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="805" cy="170" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="815" cy="170" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="665" cy="180" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="675" cy="180" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="685" cy="180" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="695" cy="180" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="705" cy="180" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="715" cy="180" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="725" cy="180" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="735" cy="180" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="745" cy="180" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="755" cy="180" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="815" cy="180" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="665" cy="190" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="675" cy="190" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="725" cy="190" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="735" cy="190" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="745" cy="190" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="755" cy="190" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="815" cy="190" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="665" cy="200" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="675" cy="200" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="725" cy="200" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="735" cy="200" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="745" cy="200" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="755" cy="200" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="765" cy="200" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="775" cy="200" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="785" cy="200" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="795" cy="200" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="805" cy="200" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="815" cy="200" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="665" cy="210" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="675" cy="210" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="725" cy="210" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="735" cy="210" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="745" cy="210" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="755" cy="210" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="765" cy="210" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="775" cy="210" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="785" cy="210" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="795" cy="210" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="805" cy="210" r="1.1" />
  <circle class="band" style="stroke-dasharray:none" cx="815" cy="210" r="1.1" />
  <rect class="band" style="stroke-dasharray:4 3;fill:none" x="10" y="24" width="610" height="68" rx="8" />
  <path class="ln arrow" d="M140,58 H170 M300,58 H330 M460,58 H490" />
  <path class="ln arrow" d="M610,58 L689,127.5" />
  <rect class="band" style="stroke-dasharray:4 3;fill:none" x="10" y="124" width="610" height="68" rx="8" />
  <path class="ln arrow" d="M140,158 H170 M300,158 H330 M460,158 H490" />
  <path class="ln arrow" d="M610,158 L671.5,198.75" />
  <rect class="band" style="stroke-dasharray:4 3;fill:none" x="10" y="224" width="610" height="68" rx="8" />
  <path class="ln arrow" d="M140,258 H170 M300,258 H330 M460,258 H490" />
  <path class="ln arrow" d="M610,258 L804,195" />
  <rect class="box" x="20" y="32" width="120" height="52" rx="6" />
  <text class="t-b" x="80" y="54" text-anchor="middle">4321</text>
  <text class="t-s" x="80" y="72" text-anchor="middle">(0, 0, −23.7)</text>
  <rect class="box c3" x="170" y="32" width="130" height="52" rx="6" />
  <text class="t-b" x="235" y="54" text-anchor="middle">y = 0.10</text>
  <text class="t-s" x="235" y="72" text-anchor="middle">波浪抬高</text>
  <rect class="band" style="stroke-dasharray:4 3" x="330" y="32" width="130" height="52" rx="6" />
  <text class="t-b" x="395" y="54" text-anchor="middle">攝影機換算</text>
  <text class="t-s" x="395" y="72" text-anchor="middle">黑盒子</text>
  <rect class="box" x="490" y="32" width="120" height="52" rx="6" />
  <text class="t-b" x="550" y="54" text-anchor="middle">clip space</text>
  <text class="t-s" x="550" y="72" text-anchor="middle">給 GPU 的座標</text>
  <circle class="box c3" cx="695" cy="127.5" r="4.5" />
  <rect class="box" x="20" y="132" width="120" height="52" rx="6" />
  <text class="t-b" x="80" y="154" text-anchor="middle">4120</text>
  <text class="t-s" x="80" y="172" text-anchor="middle">(0, 0, −24)</text>
  <rect class="box c3" x="170" y="132" width="130" height="52" rx="6" />
  <text class="t-b" x="235" y="154" text-anchor="middle">y = 0.30</text>
  <text class="t-s" x="235" y="172" text-anchor="middle">波浪抬高</text>
  <rect class="band" style="stroke-dasharray:4 3" x="330" y="132" width="130" height="52" rx="6" />
  <text class="t-b" x="395" y="154" text-anchor="middle">攝影機換算</text>
  <text class="t-s" x="395" y="172" text-anchor="middle">黑盒子</text>
  <rect class="box" x="490" y="132" width="120" height="52" rx="6" />
  <text class="t-b" x="550" y="154" text-anchor="middle">clip space</text>
  <text class="t-s" x="550" y="172" text-anchor="middle">給 GPU 的座標</text>
  <circle class="box c3" cx="677.5" cy="198.75" r="4.5" />
  <rect class="box" x="20" y="232" width="120" height="52" rx="6" />
  <text class="t-b" x="80" y="254" text-anchor="middle">4121</text>
  <text class="t-s" x="80" y="272" text-anchor="middle">(0.3, 0, −24)</text>
  <rect class="box c3" x="170" y="232" width="130" height="52" rx="6" />
  <text class="t-b" x="235" y="254" text-anchor="middle">y = 0.20</text>
  <text class="t-s" x="235" y="272" text-anchor="middle">波浪抬高</text>
  <rect class="band" style="stroke-dasharray:4 3" x="330" y="232" width="130" height="52" rx="6" />
  <text class="t-b" x="395" y="254" text-anchor="middle">攝影機換算</text>
  <text class="t-s" x="395" y="272" text-anchor="middle">黑盒子</text>
  <rect class="box" x="490" y="232" width="120" height="52" rx="6" />
  <text class="t-b" x="550" y="254" text-anchor="middle">clip space</text>
  <text class="t-s" x="550" y="272" text-anchor="middle">給 GPU 的座標</text>
  <circle class="box c3" cx="810" cy="195" r="4.5" />
  <text class="t-s" x="80" y="16" text-anchor="middle">輸入：object space</text>
  <text class="t-s" x="235" y="16" text-anchor="middle">Shader Graph 裡改</text>
  <text class="t-s" x="395" y="16" text-anchor="middle">Unity 自動加上</text>
  <text class="t-s" x="550" y="16" text-anchor="middle">交給 GPU</text>
  <text class="t-m" x="703" y="131">4321</text>
  <text class="t-m" x="686" y="204">4120</text>
  <text class="t-m" x="802" y="190" text-anchor="end">4121</text>
  <text class="t-b" x="740" y="62" text-anchor="middle">GPU 換成畫面上的位置</text>
  <text class="t" x="315" y="320" text-anchor="middle">三個 vertex 各走一條，互不相通</text>
</svg>`)
