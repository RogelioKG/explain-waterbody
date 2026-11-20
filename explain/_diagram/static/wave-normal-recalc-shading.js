explainer.fig('wave-normal-recalc-shading', /* html */ `
<svg viewBox="0 0 840 260" aria-label="normal 沒重算時每個 vertex 的 normal 都朝上、整片一樣亮；重算後 normal 跟著坡面傾斜，迎光面亮、背光面暗">
  <path class="ln c1" style="fill:none;stroke-width:2" d="M30.9,115.9 L32.2,115.4 L33.4,114.9 L34.6,114.4 L35.8,113.9 L37,113.4 L38.2,112.9 L39.3,112.4 L40.5,111.9 L41.6,111.3 L42.7,110.8 L43.7,110.3 L44.8,109.8 L45.8,109.3 L46.8,108.7 L47.8,108.2 L48.8,107.7 L49.7,107.2 L50.7,106.7 L51.6,106.1 L52.5,105.6 L53.4,105.1 L54.2,104.7 L55.1,104.2 L55.9,103.7 L56.7,103.2 L57.5,102.8 L58.3,102.3 L59.1,101.9 L59.8,101.5 L60.5,101 L61.2,100.6 L61.9,100.2 L62.6,99.9 L63.3,99.5 L64,99.2 L64.6,98.8 L65.2,98.5 L65.9,98.2 L66.5,97.9 L67.1,97.6 L67.7,97.4 L68.3,97.1 L68.8,96.9 L69.4,96.7 L70,96.5 L70.5,96.4 L71.1,96.2 L71.6,96.1 L72.1,96 L72.7,95.9 L73.2,95.8 L73.7,95.7 L74.2,95.7 L74.8,95.7 L75.3,95.7 L75.8,95.7 L76.4,95.7 L76.9,95.8 L77.4,95.9 L77.9,96 L78.5,96.1 L79,96.2 L79.6,96.4 L80.1,96.5 L80.7,96.7 L81.3,96.9 L81.8,97.2 L82.4,97.4 L83,97.7 L83.6,97.9 L84.2,98.2 L84.8,98.5 L85.5,98.9 L86.1,99.2 L86.8,99.6 L87.5,99.9 L88.2,100.3 L88.9,100.7 L89.6,101.1 L90.3,101.5 L91.1,101.9 L91.8,102.4 L92.6,102.8 L93.4,103.3 L94.2,103.8 L95,104.2 L95.9,104.7 L96.7,105.2 L97.6,105.7 L98.5,106.2 L99.5,106.7 L100.4,107.2 L101.4,107.8 L102.3,108.3 L103.3,108.8 L104.3,109.3 L105.4,109.9 L106.4,110.4 L107.5,110.9 L108.6,111.4 L109.7,111.9 L110.8,112.5 L112,113 L113.2,113.5 L114.3,114 L115.6,114.5 L116.8,115 L118,115.5 L119.3,116 L120.6,116.4 L121.8,116.9 L123.2,117.4 L124.5,117.8 L125.8,118.2 L127.2,118.7 L128.6,119.1 L130,119.5 L131.4,119.9 L132.8,120.2 L134.2,120.6 L135.7,120.9 L137.1,121.3 L138.6,121.6 L140.1,121.9 L141.6,122.2 L143.1,122.4 L144.6,122.7 L146.1,122.9 L147.6,123.1 L149.1,123.3 L150.7,123.5 L152.2,123.7 L153.8,123.8 L155.4,124 L156.9,124.1 L158.5,124.2 L160.1,124.2 L161.6,124.3 L163.2,124.3 L164.8,124.3 L166.3,124.3 L167.9,124.3 L169.5,124.2 L171.1,124.2 L172.6,124.1 L174.2,124 L175.8,123.9 L177.3,123.7 L178.9,123.6 L180.4,123.4 L182,123.2 L183.5,123 L185,122.8 L186.5,122.5 L188,122.3 L189.5,122 L191,121.7 L192.5,121.4 L193.9,121 L195.4,120.7 L196.8,120.3 L198.2,120 L199.6,119.6 L201,119.2 L202.4,118.8 L203.8,118.4 L205.1,117.9 L206.5,117.5 L207.8,117 L209.1,116.6 L210.4,116.1 L211.6,115.6 L212.9,115.1 L214.1,114.6 L215.3,114.1 L216.5,113.6 L217.7,113.1 L218.8,112.6 L220,112.1 L221.1,111.6 L222.2,111 L223.3,110.5 L224.3,110 L225.4,109.5 L226.4,109 L227.4,108.4 L228.4,107.9 L229.3,107.4 L230.3,106.9 L231.2,106.4 L232.1,105.9 L233,105.4 L233.9,104.9 L234.7,104.4 L235.6,103.9 L236.4,103.4 L237.2,103 L238,102.5 L238.7,102.1 L239.5,101.6 L240.2,101.2 L240.9,100.8 L241.6,100.4 L242.3,100 L243,99.7 L243.7,99.3 L244.3,99 L245,98.6 L245.6,98.3 L246.2,98 L246.8,97.7 L247.4,97.5 L248,97.2 L248.6,97 L249.2,96.8 L249.7,96.6 L250.3,96.4 L250.8,96.3 L251.4,96.1 L251.9,96 L252.4,95.9 L253,95.8 L253.5,95.8 L254,95.7 L254.5,95.7 L255.1,95.7 L255.6,95.7 L256.1,95.7 L256.7,95.8 L257.2,95.8 L257.7,95.9 L258.3,96 L258.8,96.2 L259.3,96.3 L259.9,96.5 L260.4,96.7 L261,96.9 L261.6,97.1 L262.2,97.3 L262.8,97.6 L263.4,97.8 L264,98.1 L264.6,98.4 L265.2,98.7 L265.9,99.1 L266.5,99.4 L267.2,99.8 L267.9,100.1 L268.6,100.5 L269.3,100.9 L270,101.3 L270.7,101.8 L271.5,102.2 L272.3,102.6 L273,103.1 L273.9,103.6 L274.7,104 L275.5,104.5 L276.4,105 L277.3,105.5 L278.1,106 L279.1,106.5 L280,107 L280.9,107.5 L281.9,108.1 L282.9,108.6 L283.9,109.1 L284.9,109.6 L286,110.1 L287,110.7 L288.1,111.2 L289.2,111.7 L290.4,112.2 L291.5,112.8 L292.7,113.3 L293.8,113.8 L295,114.3 L296.2,114.8 L297.5,115.3 L298.7,115.8 L300,116.2 L301.3,116.7 L302.6,117.2 L303.9,117.6 L305.3,118.1 L306.6,118.5 L308,118.9 L309.4,119.3 L310.8,119.7 L312.2,120.1 L313.6,120.4 L315,120.8 L316.5,121.1 L317.9,121.5 L319.4,121.8 L320.9,122.1 L322.4,122.3 L323.9,122.6 L325.4,122.8 L327,123.1 L328.5,123.3 L330,123.5 L331.6,123.6 L333.1,123.8 L334.7,123.9 L336.2,124 L337.8,124.1 L339.4,124.2 L341,124.3 L342.5,124.3 L344.1,124.3 L345.7,124.3 L347.2,124.3 L348.8,124.3 L350.4,124.2 L352,124.1 L353.5,124 L355.1,123.9 L356.7,123.8 L358.2,123.6 L359.8,123.5 L361.3,123.3 L362.8,123.1 L364.4,122.9 L365.9,122.6 L367.4,122.4 L368.9,122.1 L370.4,121.8 L371.8,121.5 L373.3,121.2 L374.8,120.8 L376.2,120.5 L377.6,120.1 L379,119.8 L380.4,119.4 L381.8,119 L383.2,118.5 L384.6,118.1 L385.9,117.7 L387.2,117.2 L388.5,116.8 L389.8,116.3" />
  <path class="ln arrow cost-ln" d="M44.3,110 L44.3,84" />
  <path class="ln arrow cost-ln" d="M67.2,97.6 L67.2,71.6" />
  <path class="ln arrow cost-ln" d="M82.8,97.6 L82.8,71.6" />
  <path class="ln arrow cost-ln" d="M105.7,110 L105.7,84" />
  <path class="ln arrow cost-ln" d="M142.8,122.4 L142.8,96.4" />
  <path class="ln arrow cost-ln" d="M187.2,122.4 L187.2,96.4" />
  <path class="ln arrow cost-ln" d="M224.3,110 L224.3,84" />
  <path class="ln arrow cost-ln" d="M247.2,97.6 L247.2,71.6" />
  <path class="ln arrow cost-ln" d="M262.8,97.6 L262.8,71.6" />
  <path class="ln arrow cost-ln" d="M285.7,110 L285.7,84" />
  <path class="ln arrow cost-ln" d="M322.8,122.4 L322.8,96.4" />
  <path class="ln arrow cost-ln" d="M367.2,122.4 L367.2,96.4" />
  <rect x="30" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="35" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="40" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="45" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="50" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="55" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="60" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="65" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="70" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="75" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="80" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="85" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="90" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="95" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="100" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="105" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="110" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="115" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="120" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="125" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="130" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="135" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="140" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="145" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="150" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="155" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="160" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="165" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="170" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="175" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="180" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="185" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="190" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="195" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="200" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="205" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="210" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="215" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="220" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="225" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="230" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="235" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="240" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="245" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="250" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="255" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="260" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="265" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="270" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="275" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="280" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="285" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="290" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="295" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="300" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="305" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="310" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="315" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="320" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="325" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="330" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="335" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="340" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="345" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="350" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="355" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="360" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="365" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="370" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="375" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="380" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="385" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <text class="t-cost" x="210" y="24" text-anchor="middle">normal 沒重算：全部朝上</text>
  <text class="t-s" x="210" y="210" text-anchor="middle">整片同樣亮，從上面看不出起伏</text>
  <path class="ln c1" style="fill:none;stroke-width:2" d="M450.9,115.9 L452.2,115.4 L453.4,114.9 L454.6,114.4 L455.8,113.9 L457,113.4 L458.2,112.9 L459.3,112.4 L460.5,111.9 L461.6,111.3 L462.7,110.8 L463.7,110.3 L464.8,109.8 L465.8,109.3 L466.8,108.7 L467.8,108.2 L468.8,107.7 L469.7,107.2 L470.7,106.7 L471.6,106.1 L472.5,105.6 L473.4,105.1 L474.2,104.7 L475.1,104.2 L475.9,103.7 L476.7,103.2 L477.5,102.8 L478.3,102.3 L479.1,101.9 L479.8,101.5 L480.5,101 L481.2,100.6 L481.9,100.2 L482.6,99.9 L483.3,99.5 L484,99.2 L484.6,98.8 L485.2,98.5 L485.9,98.2 L486.5,97.9 L487.1,97.6 L487.7,97.4 L488.3,97.1 L488.8,96.9 L489.4,96.7 L490,96.5 L490.5,96.4 L491.1,96.2 L491.6,96.1 L492.1,96 L492.7,95.9 L493.2,95.8 L493.7,95.7 L494.2,95.7 L494.8,95.7 L495.3,95.7 L495.8,95.7 L496.4,95.7 L496.9,95.8 L497.4,95.9 L497.9,96 L498.5,96.1 L499,96.2 L499.6,96.4 L500.1,96.5 L500.7,96.7 L501.3,96.9 L501.8,97.2 L502.4,97.4 L503,97.7 L503.6,97.9 L504.2,98.2 L504.8,98.5 L505.5,98.9 L506.1,99.2 L506.8,99.6 L507.5,99.9 L508.2,100.3 L508.9,100.7 L509.6,101.1 L510.3,101.5 L511.1,101.9 L511.8,102.4 L512.6,102.8 L513.4,103.3 L514.2,103.8 L515,104.2 L515.9,104.7 L516.7,105.2 L517.6,105.7 L518.5,106.2 L519.5,106.7 L520.4,107.2 L521.4,107.8 L522.3,108.3 L523.3,108.8 L524.3,109.3 L525.4,109.9 L526.4,110.4 L527.5,110.9 L528.6,111.4 L529.7,111.9 L530.8,112.5 L532,113 L533.2,113.5 L534.3,114 L535.6,114.5 L536.8,115 L538,115.5 L539.3,116 L540.6,116.4 L541.8,116.9 L543.2,117.4 L544.5,117.8 L545.8,118.2 L547.2,118.7 L548.6,119.1 L550,119.5 L551.4,119.9 L552.8,120.2 L554.2,120.6 L555.7,120.9 L557.1,121.3 L558.6,121.6 L560.1,121.9 L561.6,122.2 L563.1,122.4 L564.6,122.7 L566.1,122.9 L567.6,123.1 L569.1,123.3 L570.7,123.5 L572.2,123.7 L573.8,123.8 L575.4,124 L576.9,124.1 L578.5,124.2 L580.1,124.2 L581.6,124.3 L583.2,124.3 L584.8,124.3 L586.3,124.3 L587.9,124.3 L589.5,124.2 L591.1,124.2 L592.6,124.1 L594.2,124 L595.8,123.9 L597.3,123.7 L598.9,123.6 L600.4,123.4 L602,123.2 L603.5,123 L605,122.8 L606.5,122.5 L608,122.3 L609.5,122 L611,121.7 L612.5,121.4 L613.9,121 L615.4,120.7 L616.8,120.3 L618.2,120 L619.6,119.6 L621,119.2 L622.4,118.8 L623.8,118.4 L625.1,117.9 L626.5,117.5 L627.8,117 L629.1,116.6 L630.4,116.1 L631.6,115.6 L632.9,115.1 L634.1,114.6 L635.3,114.1 L636.5,113.6 L637.7,113.1 L638.8,112.6 L640,112.1 L641.1,111.6 L642.2,111 L643.3,110.5 L644.3,110 L645.4,109.5 L646.4,109 L647.4,108.4 L648.4,107.9 L649.3,107.4 L650.3,106.9 L651.2,106.4 L652.1,105.9 L653,105.4 L653.9,104.9 L654.7,104.4 L655.6,103.9 L656.4,103.4 L657.2,103 L658,102.5 L658.7,102.1 L659.5,101.6 L660.2,101.2 L660.9,100.8 L661.6,100.4 L662.3,100 L663,99.7 L663.7,99.3 L664.3,99 L665,98.6 L665.6,98.3 L666.2,98 L666.8,97.7 L667.4,97.5 L668,97.2 L668.6,97 L669.2,96.8 L669.7,96.6 L670.3,96.4 L670.8,96.3 L671.4,96.1 L671.9,96 L672.4,95.9 L673,95.8 L673.5,95.8 L674,95.7 L674.5,95.7 L675.1,95.7 L675.6,95.7 L676.1,95.7 L676.7,95.8 L677.2,95.8 L677.7,95.9 L678.3,96 L678.8,96.2 L679.3,96.3 L679.9,96.5 L680.4,96.7 L681,96.9 L681.6,97.1 L682.2,97.3 L682.8,97.6 L683.4,97.8 L684,98.1 L684.6,98.4 L685.2,98.7 L685.9,99.1 L686.5,99.4 L687.2,99.8 L687.9,100.1 L688.6,100.5 L689.3,100.9 L690,101.3 L690.7,101.8 L691.5,102.2 L692.3,102.6 L693,103.1 L693.9,103.6 L694.7,104 L695.5,104.5 L696.4,105 L697.3,105.5 L698.1,106 L699.1,106.5 L700,107 L700.9,107.5 L701.9,108.1 L702.9,108.6 L703.9,109.1 L704.9,109.6 L706,110.1 L707,110.7 L708.1,111.2 L709.2,111.7 L710.4,112.2 L711.5,112.8 L712.7,113.3 L713.8,113.8 L715,114.3 L716.2,114.8 L717.5,115.3 L718.7,115.8 L720,116.2 L721.3,116.7 L722.6,117.2 L723.9,117.6 L725.3,118.1 L726.6,118.5 L728,118.9 L729.4,119.3 L730.8,119.7 L732.2,120.1 L733.6,120.4 L735,120.8 L736.5,121.1 L737.9,121.5 L739.4,121.8 L740.9,122.1 L742.4,122.3 L743.9,122.6 L745.4,122.8 L747,123.1 L748.5,123.3 L750,123.5 L751.6,123.6 L753.1,123.8 L754.7,123.9 L756.2,124 L757.8,124.1 L759.4,124.2 L761,124.3 L762.5,124.3 L764.1,124.3 L765.7,124.3 L767.2,124.3 L768.8,124.3 L770.4,124.2 L772,124.1 L773.5,124 L775.1,123.9 L776.7,123.8 L778.2,123.6 L779.8,123.5 L781.3,123.3 L782.8,123.1 L784.4,122.9 L785.9,122.6 L787.4,122.4 L788.9,122.1 L790.4,121.8 L791.8,121.5 L793.3,121.2 L794.8,120.8 L796.2,120.5 L797.6,120.1 L799,119.8 L800.4,119.4 L801.8,119 L803.2,118.5 L804.6,118.1 L805.9,117.7 L807.2,117.2 L808.5,116.8 L809.8,116.3" />
  <path class="ln arrow" d="M464.3,110 L452.7,86.7" />
  <path class="ln arrow" d="M487.2,97.6 L476.7,73.8" />
  <path class="ln arrow" d="M502.8,97.6 L513.3,73.8" />
  <path class="ln arrow" d="M525.7,110 L537.3,86.7" />
  <path class="ln arrow" d="M562.8,122.4 L567.3,96.8" />
  <path class="ln arrow" d="M607.2,122.4 L602.7,96.8" />
  <path class="ln arrow" d="M644.3,110 L632.7,86.7" />
  <path class="ln arrow" d="M667.2,97.6 L656.7,73.8" />
  <path class="ln arrow" d="M682.8,97.6 L693.3,73.8" />
  <path class="ln arrow" d="M705.7,110 L717.3,86.7" />
  <path class="ln arrow" d="M742.8,122.4 L747.3,96.8" />
  <path class="ln arrow" d="M787.2,122.4 L782.7,96.8" />
  <rect x="450" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.18" />
  <rect x="455" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.16" />
  <rect x="460" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.15" />
  <rect x="465" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.14" />
  <rect x="470" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.13" />
  <rect x="475" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.13" />
  <rect x="480" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.13" />
  <rect x="485" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.17" />
  <rect x="490" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.28" />
  <rect x="495" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.47" />
  <rect x="500" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.65" />
  <rect x="505" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.72" />
  <rect x="510" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.74" />
  <rect x="515" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.73" />
  <rect x="520" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.71" />
  <rect x="525" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.68" />
  <rect x="530" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.66" />
  <rect x="535" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.62" />
  <rect x="540" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.60" />
  <rect x="545" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.57" />
  <rect x="550" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.54" />
  <rect x="555" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.51" />
  <rect x="560" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.48" />
  <rect x="565" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.45" />
  <rect x="570" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.43" />
  <rect x="575" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.41" />
  <rect x="580" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.37" />
  <rect x="585" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.35" />
  <rect x="590" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.33" />
  <rect x="595" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.31" />
  <rect x="600" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.29" />
  <rect x="605" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.26" />
  <rect x="610" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.25" />
  <rect x="615" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.23" />
  <rect x="620" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.21" />
  <rect x="625" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.19" />
  <rect x="630" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.18" />
  <rect x="635" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.16" />
  <rect x="640" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.15" />
  <rect x="645" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.14" />
  <rect x="650" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.13" />
  <rect x="655" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.13" />
  <rect x="660" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.13" />
  <rect x="665" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.16" />
  <rect x="670" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.27" />
  <rect x="675" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.49" />
  <rect x="680" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.65" />
  <rect x="685" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.72" />
  <rect x="690" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.74" />
  <rect x="695" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.73" />
  <rect x="700" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.71" />
  <rect x="705" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.69" />
  <rect x="710" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.65" />
  <rect x="715" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.63" />
  <rect x="720" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.59" />
  <rect x="725" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.56" />
  <rect x="730" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.54" />
  <rect x="735" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.51" />
  <rect x="740" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.48" />
  <rect x="745" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.46" />
  <rect x="750" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.42" />
  <rect x="755" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.40" />
  <rect x="760" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.38" />
  <rect x="765" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.36" />
  <rect x="770" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.33" />
  <rect x="775" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.31" />
  <rect x="780" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.29" />
  <rect x="785" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.27" />
  <rect x="790" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.25" />
  <rect x="795" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.23" />
  <rect x="800" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.21" />
  <rect x="805" y="166" width="5.40" height="22" style="fill:var(--ink);stroke:none;fill-opacity:0.19" />
  <text class="t-b" x="630" y="24" text-anchor="middle">重算後：normal 垂直於坡面</text>
  <text class="t-s" x="630" y="210" text-anchor="middle">朝光的坡亮、背光的坡暗</text>
  <text class="t-s" x="420" y="240" text-anchor="middle">下方色條是由 normal 算出的明暗 (示意：光從左邊低角度照來，越深越暗)</text>
</svg>`)
