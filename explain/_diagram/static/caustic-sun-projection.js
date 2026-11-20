explainer.fig('caustic-sun-projection', /* html */ `
<svg viewBox="0 0 760 380" aria-label="湖底那一點收到的陽光沿斜邊從水面穿進來：斜邊 h_sun、鉛直邊 H、兩者夾角 ψ，H = h_sun cos ψ；左上是長度 1 的 ℓ，鉛直分量 −ℓ_y 就是 cos ψ">
<path d="M30,108 L200.0,120.0 C330.0,128.0 458.0,199.4 520.0,280.0 L596.9,380 L30,380 Z" style="fill:var(--bg-muted);stroke:none" />
<path d="M200.0,120.0 C330.0,128.0 458.0,199.4 520.0,280.0 L596.9,380 H750 V120.0 Z" style="fill:var(--f4);fill-opacity:0.12;stroke:none" />
<path class="ln" style="stroke:var(--f4);stroke-width:1.4" d="M200.0,120.0 H750" />
<path class="ln" style="stroke:var(--muted);stroke-width:2.2" d="M30,108 L200.0,120.0 C330.0,128.0 458.0,199.4 520.0,280.0 L596.9,380" />
<text class="t-s" x="110" y="134" text-anchor="middle">岸</text>
<text class="t-s" x="744" y="140" text-anchor="end">水面 y₀</text>
<text class="t-s" x="330" y="300" text-anchor="middle">湖底</text>
<path class="ln" style="stroke:var(--muted);stroke-width:1.1;stroke-dasharray:4 3" d="M520.0,120.0 L520.0,280.0" />
<path class="ln" style="stroke:var(--muted);stroke-width:1" d="M529.0,120.0 V129.0 H520.0" />
<path class="ln" style="stroke:var(--f3);stroke-width:1.4" d="M718.5,43.4 L654.3,120.0" />
<path style="fill:var(--f3);stroke:none" d="M685.1,83.2 L687.5,76.1 L691.8,79.7 Z" />
<text class="t-s" x="724.5" y="41.4" style="fill:var(--f3)">陽光</text>
<path class="ln" style="stroke:var(--f3);stroke-width:2.6" d="M654.3,120.0 L520.6,279.2" />
<path style="fill:var(--f3);stroke:none" d="M605.9,177.6 L609.0,168.4 L614.5,173.0 Z" />
<path class="ln" style="stroke:var(--ink-2);stroke-width:0.7" d="M657.3,122.6 L668.8,132.2" />
<path class="ln" style="stroke:var(--ink-2);stroke-width:0.7" d="M523.1,282.6 L534.6,292.2" />
<path class="ln" style="stroke:var(--ink-2);stroke-width:0.9" d="M665.0,129.0 L530.7,289.0" />
<path style="fill:var(--ink-2);stroke:none" d="M665.0,129.0 L662.9,135.1 L659.4,132.1 Z" />
<path style="fill:var(--ink-2);stroke:none" d="M530.7,289.0 L532.8,282.9 L536.3,285.9 Z" />
<text class="t-m" x="611.9" y="213.0" style="fill:var(--f3)">h<tspan font-size="70%" dy="3">sun</tspan><tspan dy="-3"> = 1.31</tspan></text>
<path style="fill:var(--ink-2);stroke:none" d="M520.0,121.0 L522.3,127.0 L517.7,127.0 Z" />
<path style="fill:var(--ink-2);stroke:none" d="M520.0,275.0 L517.7,269.0 L522.3,269.0 Z" />
<text class="t-m" x="512.0" y="204.0" text-anchor="end">H = 1</text>
<path class="ln" style="stroke:var(--ink-2);stroke-width:0.7" d="M520.0,116.0 L520.0,95.0" />
<path class="ln" style="stroke:var(--ink-2);stroke-width:0.7" d="M654.3,116.0 L654.3,95.0" />
<path class="ln" style="stroke:var(--ink-2);stroke-width:0.9" d="M520.0,100.0 L654.3,100.0" />
<path style="fill:var(--ink-2);stroke:none" d="M520.0,100.0 L526.0,97.7 L526.0,102.3 Z" />
<path style="fill:var(--ink-2);stroke:none" d="M654.3,100.0 L648.3,102.3 L648.3,97.7 Z" />
<text class="t-m" x="587.1" y="94.0" text-anchor="middle" style="fill:var(--f1)">0.84</text>
<path class="ln" style="stroke:var(--ink-2);stroke-width:1" d="M520.0,210.0 A70,70 0 0 1 565.0,226.4" />
<text class="t-m" x="552.8" y="193.8" text-anchor="middle">ψ = 40°</text>
<circle cx="654.3" cy="120.0" r="4" style="fill:var(--f1);stroke:none" />
<circle cx="520.0" cy="280.0" r="4" style="fill:var(--f2);stroke:none" />
<text class="t-b" x="674.3" y="160.0">p<tspan font-size="70%" dy="3">s</tspan><tspan dy="-3"></tspan></text>
<text class="t-b" x="508.0" y="308.0" text-anchor="end">p<tspan font-size="70%" dy="3">bed</tspan><tspan dy="-3"></tspan></text>
<rect class="box" x="18.0" y="6.0" width="200.0" height="94.0" rx="6" />
<path class="ln" style="stroke-dasharray:3 3;stroke:var(--ink-2);stroke-width:0.9" d="M157.0,32.0 L112.0,32.0" />
<path class="ln" style="stroke-dasharray:3 3;stroke:var(--ink-2);stroke-width:0.9" d="M112.0,32.0 L112.0,85.6" />
<path class="ln" style="stroke-width:0.9;stroke:var(--ink-2)" d="M119.0,32.0 V39.0 H112.0" />
<path class="ln" style="stroke:var(--f3);stroke-width:2" d="M157.0,32.0 L115.9,81.0" />
<path style="fill:var(--f3);stroke:none" d="M112.0,85.6 L114.7,77.4 L119.6,81.6 Z" />
<circle cx="157.0" cy="32.0" r="2.2" style="fill:var(--f3);stroke:none" />
<path class="ln" style="stroke:var(--ink-2);stroke-width:1" d="M112.0,67.6 A18,18 0 0 1 123.6,71.8" />
<text class="t-m" x="121.9" y="62.4" text-anchor="middle">ψ</text>
<text class="t-m" x="134.5" y="25.0" text-anchor="middle">0.643</text>
<text class="t-m" x="105.0" y="62.8" text-anchor="end">−ℓ<tspan font-size="70%" dy="3">y</tspan><tspan dy="-3"> = 0.766</tspan></text>
<text class="t-s" x="139.9" y="71.9" style="fill:var(--f3)">ℓ，長度 1</text>
<text class="t-s" x="30" y="370">虛線：正上方　數字單位：公尺</text>
</svg>`)
