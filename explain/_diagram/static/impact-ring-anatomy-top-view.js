explainer.fig('impact-ring-anatomy-top-view', /* html */ `
<svg viewBox="0 0 840 390" aria-label="從上方看一圈環在入水 1 秒後的樣子：入水處在中心，中線是環帶正中間的圓，從入水處量到中線是中線的半徑；白色環帶是中線往內、往外各一個半寬。右邊放大中線附近的一段">
<rect class="c1" x="20" y="30" width="420" height="350" rx="8" />
<circle class="c3" style="fill:none;stroke-width:21.6" cx="200" cy="205" r="144.0" />
<circle style="fill:none;stroke:var(--ink);stroke-width:1.2;stroke-dasharray:5 4" cx="200" cy="205" r="144.0" />
<rect style="fill:none;stroke:var(--ink-2);stroke-width:1;stroke-dasharray:3 3" x="311.6" y="191.4" width="79.2" height="27.2" />
<path class="ln" style="stroke-width:0.8;stroke-dasharray:3 3" d="M390.8,191.4 L500,140 M390.8,218.6 L500,250" />
<path class="ln arrow" d="M200,205 L98.2,103.2" />
<path class="ln" style="stroke-width:0.9" d="M275.0,76.3 L296.0,50.3" />
<circle class="c2" cx="200" cy="205" r="4" />
<text class="t-s" x="299.0" y="50.3">中線</text>
<text class="t-s" x="200" y="227" text-anchor="middle">入水處</text>
<text class="t-s" x="162" y="138">中線的半徑</text>
<rect class="c1" x="500" y="140" width="320" height="110" />
<path style="fill:var(--f3);stroke:none" d="M671.1,140.0 L671.6,144.6 L672.0,149.2 L672.4,153.8 L672.7,158.3 L673.1,162.9 L673.4,167.5 L673.6,172.1 L673.8,176.7 L674.0,181.2 L674.2,185.8 L674.3,190.4 L674.4,195.0 L674.5,199.6 L674.5,204.2 L674.5,208.8 L674.4,213.3 L674.3,217.9 L674.2,222.5 L674.1,227.1 L673.9,231.7 L673.7,236.2 L673.5,240.8 L673.2,245.4 L672.9,250.0 L585.4,250.0 L585.7,245.4 L586.0,240.8 L586.3,236.2 L586.6,231.7 L586.8,227.1 L587.0,222.5 L587.1,217.9 L587.2,213.3 L587.2,208.8 L587.2,204.2 L587.2,199.6 L587.1,195.0 L587.0,190.4 L586.9,185.8 L586.7,181.2 L586.5,176.7 L586.2,172.1 L585.9,167.5 L585.6,162.9 L585.2,158.3 L584.8,153.8 L584.3,149.2 L583.8,144.6 L583.3,140.0 Z" />
<path style="fill:none;stroke:var(--ink);stroke-width:1.2;stroke-dasharray:5 4" d="M626.9,137.0 L627.4,141.8 L627.9,146.7 L628.4,151.5 L628.8,156.3 L629.2,161.2 L629.6,166.0 L629.9,170.8 L630.1,175.7 L630.3,180.5 L630.5,185.3 L630.7,190.2 L630.8,195.0 L630.8,199.8 L630.9,204.7 L630.8,209.5 L630.8,214.3 L630.7,219.2 L630.5,224.0 L630.4,228.8 L630.2,233.7 L629.9,238.5 L629.6,243.3 L629.3,248.2 L628.9,253.0" />
<text class="t-s" x="630.9" y="133" text-anchor="middle">中線</text>
<text class="t-s" x="506" y="160">← 內側</text>
<text class="t-s" x="814" y="160" text-anchor="end">外側 →</text>
<path class="ln" style="stroke-width:0.9" d="M587.2,266 H674.5 M587.2,260 V272 M630.9,260 V272 M674.5,260 V272" />
<text class="t-s" x="609.0" y="286" text-anchor="middle">半寬</text>
<text class="t-s" x="652.7" y="286" text-anchor="middle">半寬</text>
<text class="t-s" x="630.9" y="304" text-anchor="middle">白色環帶</text>
<text class="t-s" x="470" y="208" text-anchor="middle">放大</text>
<g v-if="on(2)" class="ex-in" :class="{ 'is-new': fresh(2) }">
<path class="ln arrow" d="M200,205 L375.0,205" />
<rect x="377" y="202" width="6" height="6" style="fill:var(--ink);stroke:none" />
<text class="t-m" x="200" y="243" text-anchor="middle">c<tspan font-size="70%" dy="3">imp</tspan><tspan dy="-3"></tspan></text>
<text class="t-m" x="162" y="154">R<tspan font-size="70%" dy="3">ring</tspan><tspan dy="-3"> = 0.8 m</tspan></text>
<text class="t-m" x="232" y="197">r<tspan font-size="70%" dy="3">imp</tspan><tspan dy="-3"> = 1.0 m</tspan></text>
<rect x="772.3" y="201" width="8" height="8" style="fill:var(--ink);stroke:none" />
<text class="t-s" x="776.3" y="226" text-anchor="middle">像素</text>
<path class="ln" style="stroke-width:0.8;stroke-dasharray:2 3" d="M776.3,140 V106" />
<path class="ln" style="stroke-width:0.9" d="M630.9,112 H776.3 M630.9,106 V118 M776.3,106 V118" />
<text class="t-m" x="703.6" y="102" text-anchor="middle">δ<tspan font-size="70%" dy="3">ring</tspan><tspan dy="-3"> = +0.2 m</tspan></text>
<text class="t-m" x="506" y="176">δ<tspan font-size="70%" dy="3">ring</tspan><tspan dy="-3"> &lt; 0</tspan></text>
<text class="t-m" x="814" y="176" text-anchor="end">δ<tspan font-size="70%" dy="3">ring</tspan><tspan dy="-3"> &gt; 0</tspan></text>
<text class="t-m" x="630.9" y="322" text-anchor="middle">半寬 = b<tspan font-size="70%" dy="3">foam</tspan><tspan dy="-3"> </tspan>q<tspan font-size="70%" dy="3">ring</tspan><tspan dy="-3"> = 0.06 m</tspan></text>
</g>
</svg>`)
