explainer.fig('beer-lambert-transmittance-curve', /* html */ `
<svg viewBox="0 0 640 270" aria-label="透光率 τ 隨水的厚度 h 怎麼變：清澈度 5 公尺時的指數曲線，與線性的對照">
<path class="ln" d="M60,20 V220 H600" />
<text class="t-m" x="54" y="24" text-anchor="end">1</text>
<text class="t-m" x="54" y="224" text-anchor="end">0</text>
<path class="ln" d="M60,220 v4" />
<text class="t-m" x="60" y="237" text-anchor="middle">0</text>
<path class="ln" d="M150,220 v4" />
<text class="t-m" x="150" y="237" text-anchor="middle">1</text>
<path class="ln" d="M240,220 v4" />
<text class="t-m" x="240" y="237" text-anchor="middle">2</text>
<path class="ln" d="M330,220 v4" />
<text class="t-m" x="330" y="237" text-anchor="middle">3</text>
<path class="ln" d="M420,220 v4" />
<text class="t-m" x="420" y="237" text-anchor="middle">4</text>
<path class="ln" d="M510,220 v4" />
<text class="t-m" x="510" y="237" text-anchor="middle">5</text>
<path class="ln" d="M600,220 v4" />
<text class="t-m" x="600" y="237" text-anchor="middle">6</text>
<text class="t-s" x="600" y="252" text-anchor="end">h (m)</text>
<text class="t-s" x="38" y="24" text-anchor="end">τ</text>
<path class="ln" style="stroke-dasharray:5 4" d="M60,20 L510,220" />
<text class="t-s" x="195" y="60">線性 1 − h/5 (對照)</text>
<path class="ln c4" style="fill:none;stroke-width:2.2" d="M60,20 L64.5,29 L69,37.6 L73.5,45.8 L78,53.6 L82.5,61.1 L87,68.3 L91.5,75.1 L96,81.6 L100.5,87.9 L105,93.8 L109.5,99.5 L114,104.9 L118.5,110.1 L123,115 L127.5,119.8 L132,124.3 L136.5,128.6 L141,132.7 L145.5,136.6 L150,140.4 L154.5,144 L159,147.4 L163.5,150.7 L168,153.8 L172.5,156.8 L177,159.6 L181.5,162.3 L186,164.9 L190.5,167.4 L195,169.8 L199.5,172 L204,174.2 L208.5,176.2 L213,178.2 L217.5,180.1 L222,181.9 L226.5,183.6 L231,185.2 L235.5,186.8 L240,188.3 L244.5,189.7 L249,191.1 L253.5,192.4 L258,193.6 L262.5,194.8 L267,196 L271.5,197 L276,198.1 L280.5,199.1 L285,200 L289.5,200.9 L294,201.8 L298.5,202.6 L303,203.4 L307.5,204.1 L312,204.8 L316.5,205.5 L321,206.2 L325.5,206.8 L330,207.4 L334.5,207.9 L339,208.5 L343.5,209 L348,209.5 L352.5,210 L357,210.4 L361.5,210.9 L366,211.3 L370.5,211.7 L375,212 L379.5,212.4 L384,212.7 L388.5,213.1 L393,213.4 L397.5,213.7 L402,214 L406.5,214.2 L411,214.5 L415.5,214.7 L420,215 L424.5,215.2 L429,215.4 L433.5,215.6 L438,215.8 L442.5,216 L447,216.2 L451.5,216.4 L456,216.5 L460.5,216.7 L465,216.8 L469.5,217 L474,217.1 L478.5,217.2 L483,217.4 L487.5,217.5 L492,217.6 L496.5,217.7 L501,217.8 L505.5,217.9 L510,218 L514.5,218.1 L519,218.2 L523.5,218.3 L528,218.3 L532.5,218.4 L537,218.5 L541.5,218.6 L546,218.6 L550.5,218.7 L555,218.7 L559.5,218.8 L564,218.8 L568.5,218.9 L573,219 L577.5,219 L582,219 L586.5,219.1 L591,219.1 L595.5,219.2 L600,219.2" />
<text class="t-b" x="163.5" y="136">τ = e^(−0.921h)</text>
<circle class="c4" cx="105" cy="93.8" r="3.5" />
<text class="t-m" x="111" y="83.8">0.5 m：63%</text>
<circle class="c4" cx="195" cy="169.8" r="3.5" />
<text class="t-m" x="201" y="159.8">1.5 m：25%</text>
<path class="ln" d="M375,141 V207" />
<circle class="c4" cx="375" cy="212" r="3.5" />
<text class="t-m" x="375" y="136" text-anchor="middle">3.5 m：4%</text>
<path class="ln" d="M510,181 V213" />
<circle class="c4" cx="510" cy="218" r="3.5" />
<text class="t-m" x="510" y="176" text-anchor="middle">5 m：1%</text>
</svg>`)
