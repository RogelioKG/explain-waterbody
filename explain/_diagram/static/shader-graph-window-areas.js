explainer.fig('shader-graph-window-areas', /* html */ `
<svg viewBox="0 0 760 360" aria-label="Shader Graph 視窗的各個區域：Toolbar、Workspace、Blackboard、Master Stack、Graph Inspector、Main Preview">
  <rect class="box" x="10" y="10" width="740" height="340" rx="4" />
  <rect class="box band" style="stroke-dasharray:none" x="10" y="10" width="740" height="32" rx="4" />
  <text class="t-b" x="22" y="31">Toolbar</text>
  <text class="t-s" x="96" y="31">最左邊 Save Asset；右邊有 Blackboard、Graph Inspector、Main Preview 三個開關</text>
  <text class="t-s" x="200" y="336">Workspace：中間的格子區，放 node、拉線</text>
  <rect class="box c3" x="24" y="56" width="150" height="120" rx="4" />
  <text class="t-b" x="34" y="76">Blackboard</text>
  <text class="t-s" x="34" y="96">這個 graph 的 Property</text>
  <text class="t-s" x="34" y="114">標題列的 + 新增</text>
  <rect class="box" x="200" y="200" width="96" height="44" rx="4" />
  <text class="t-b" x="210" y="220">node</text>
  <text class="t-s" x="210" y="236">空白鍵新增</text>
  <path class="ln arrow" d="M296,222 C320,222 316,222 340,222" />
  <rect class="box c2" x="340" y="60" width="200" height="250" rx="4" />
  <text class="t-b" x="350" y="80">Master Stack</text>
  <rect class="box" x="352" y="92" width="176" height="78" rx="3" />
  <text class="t-b" x="360" y="110">Vertex</text>
  <text class="t-m" x="360" y="128">Position</text>
  <text class="t-m" x="360" y="144">Normal</text>
  <text class="t-m" x="360" y="160">Tangent</text>
  <rect class="box" x="352" y="180" width="176" height="120" rx="3" />
  <text class="t-b" x="360" y="198">Fragment</text>
  <text class="t-m" x="360" y="216">Base Color</text>
  <text class="t-m" x="360" y="232">Normal (Tangent Space)</text>
  <text class="t-m" x="360" y="248">Metallic</text>
  <text class="t-m" x="360" y="264">Smoothness</text>
  <text class="t-m" x="360" y="280">Emission</text>
  <text class="t-m" x="360" y="296">Ambient Occlusion</text>
  <rect class="box" x="560" y="56" width="176" height="140" rx="4" />
  <text class="t-b" x="570" y="76">Graph Inspector</text>
  <text class="t-s" x="570" y="96">分頁：Graph Settings</text>
  <text class="t-s" x="570" y="114">　　　Node Settings</text>
  <text class="t-s" x="570" y="136">選取的東西的設定</text>
  <rect class="box" x="560" y="210" width="176" height="110" rx="4" />
  <text class="t-b" x="570" y="230">Main Preview</text>
  <text class="t-s" x="570" y="250">目前結果的預覽</text>
  <text class="t-s" x="570" y="268">左鍵拖曳旋轉</text>
</svg>`)
