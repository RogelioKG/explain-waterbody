explainer.fig('water-lake-sample-graph-overview', /* html */ `
<svg viewBox="0 0 840 420" aria-label="WaterLake 的全貌：細波紋三塊接到轉成 world space 再到 Normal；細波紋也接到折射，折射與深淺在 Depth Fog 的 Lerp 合成 Base Color；DepthFade 0.25 接 Alpha；Smoothness 沒接線填 1.0；Vertex 區沒有接線">
<path class="ln arrow" d="M180,46 H198" />
<path class="ln arrow" d="M350,46 H368" />
<path class="ln arrow" d="M500,46 H518" />
<path class="ln arrow" d="M683,46 H698" />
<path class="ln arrow" d="M430,72 V138" />
<path class="ln arrow" d="M500,164 C512,164 512,190 523,190" />
<path class="ln arrow" d="M500,254 C512,254 512,214 523,214" />
<path class="ln arrow" d="M683,202 H698" />
<path class="ln arrow" d="M500,326 H698" />
<rect class="box c1" x="10" y="20" width="170" height="52" rx="5" />
<text class="t-b" x="18" y="38">Ripple UV Coordinates</text>
<text class="t-s" x="18" y="53">world x、z，兩組 UV</text>
<text class="t-s" x="18" y="68">Flow Normals</text>
<rect class="box c1" x="200" y="20" width="150" height="52" rx="5" />
<text class="t-b" x="208" y="38">Small / Large Ripples</text>
<text class="t-s" x="208" y="53">texture sample 4 次，相加</text>
<text class="t-s" x="208" y="68">Flow Normals</text>
<rect class="box c1" x="370" y="20" width="130" height="52" rx="5" />
<text class="t-b" x="378" y="38">× DistanceMask</text>
<text class="t-s" x="378" y="53">遠處淡出</text>
<text class="t-s" x="378" y="68">Flow Normals</text>
<rect class="box c1" x="520" y="20" width="163" height="52" rx="5" />
<text class="t-b" x="528" y="38">Convert Normals</text>
<text class="t-s" x="528" y="53">To World Space：y 填 5</text>
<text class="t-s" x="528" y="68">Flow Normals</text>
<rect class="box" x="700" y="20" width="130" height="52" rx="5" />
<text class="t-b" x="708" y="38">Normal</text>
<text class="t-s" x="708" y="53">(World Space)</text>
<rect class="box c2" x="360" y="140" width="140" height="52" rx="5" />
<text class="t-b" x="368" y="158">Water Refraction</text>
<text class="t-s" x="368" y="173">偏移 screen UV 取背景</text>
<text class="t-s" x="368" y="188">Refraction</text>
<rect class="box c3" x="360" y="230" width="140" height="52" rx="5" />
<text class="t-b" x="368" y="248">DepthFade</text>
<text class="t-s" x="368" y="263">OpaqueDepth，0.1 次方</text>
<text class="t-s" x="368" y="278">Depth Coloring</text>
<rect class="box c3" x="525" y="176" width="158" height="52" rx="5" />
<text class="t-b" x="533" y="194">Depth Fog：Lerp</text>
<text class="t-s" x="533" y="209">Color × 背景 → DepthColor</text>
<text class="t-s" x="533" y="224">Depth Coloring</text>
<rect class="box" x="700" y="176" width="130" height="52" rx="5" />
<text class="t-b" x="708" y="194">Base Color</text>
<rect class="box c3" x="360" y="300" width="140" height="52" rx="5" />
<text class="t-b" x="368" y="318">DepthFade (0.25)</text>
<text class="t-s" x="368" y="333">水邊一圈變透明</text>
<text class="t-s" x="368" y="348">Depth Coloring</text>
<rect class="box" x="700" y="300" width="130" height="52" rx="5" />
<text class="t-b" x="708" y="318">Alpha</text>
<rect class="box c4" x="700" y="360" width="130" height="52" rx="5" />
<text class="t-b" x="708" y="378">Smoothness</text>
<text class="t-s" x="708" y="393">沒接線，欄位 1.0</text>
<text class="t-s" x="708" y="408">Reflection</text>
<text class="t-s" x="440" y="102">波紋的 x、y</text>
<text class="t-s" x="510" y="246">T</text>
<text class="t-s" x="10" y="120">Vertex 區的 Position、Normal、Tangent</text>
<text class="t-s" x="10" y="137">都沒接線：WaterLake 的水面是平的</text>
<text class="t-s" x="10" y="170">折射那一塊的 HDRP 分支 (HD Scene Color、</text>
<text class="t-s" x="10" y="187">BranchOnRP、AlphaMerge) 省略未畫</text>
<text class="t-s" x="10" y="220">方塊第三行：對應你做過的哪一章</text>
</svg>`)
