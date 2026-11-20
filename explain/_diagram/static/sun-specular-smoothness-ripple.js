explainer.fig('sun-specular-smoothness-ripple', /* html */ `
<svg viewBox="0 0 640 330" aria-label="太陽 specular 隨兩個參數的變化：Smoothness 越大越小越亮，RippleStrength 越大越碎、散得越開">
<text class="t-b" x="260" y="16" text-anchor="middle">RippleStrength 0</text>
<text class="t-b" x="510" y="16" text-anchor="middle">RippleStrength 1</text>
<text class="t-b" x="138" y="92" text-anchor="end">Smoothness 0.97</text>
<rect x="150" y="28" width="220" height="26" style="fill:var(--f1);fill-opacity:0.2;stroke:none" />
<rect x="150" y="54" width="220" height="94" style="fill:var(--f4);fill-opacity:0.38;stroke:none" />
<circle cx="260" cy="46" r="6" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<path d="M258.2,56 L261.8,56 L266,144 L254,144 Z" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<rect x="400" y="28" width="220" height="26" style="fill:var(--f1);fill-opacity:0.2;stroke:none" />
<rect x="400" y="54" width="220" height="94" style="fill:var(--f4);fill-opacity:0.38;stroke:none" />
<circle cx="510" cy="46" r="6" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="504.8" cy="79.8" rx="2.6" ry="1" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="507.8" cy="112.1" rx="3.5" ry="1.3" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="511.3" cy="114" rx="3.5" ry="1.3" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="510.6" cy="132.7" rx="4.1" ry="1.5" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="511.9" cy="81.7" rx="2.6" ry="1" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="533.9" cy="100.3" rx="3.2" ry="1.2" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="496.1" cy="132.6" rx="4.1" ry="1.5" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="511.1" cy="72.1" rx="2.3" ry="0.9" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="516.9" cy="114.8" rx="3.6" ry="1.3" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="501.8" cy="124.2" rx="3.8" ry="1.4" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="523.5" cy="118" rx="3.7" ry="1.4" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="515.4" cy="110.9" rx="3.5" ry="1.3" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="522" cy="85.4" rx="2.7" ry="1" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="512.8" cy="100.5" rx="3.2" ry="1.2" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="520.3" cy="122.2" rx="3.8" ry="1.4" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="498.6" cy="140" rx="4.3" ry="1.6" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="512.3" cy="93.6" rx="3" ry="1.1" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="499.1" cy="141.3" rx="4.3" ry="1.6" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="514.5" cy="136.3" rx="4.2" ry="1.6" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="511.7" cy="77.9" rx="2.5" ry="0.9" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="496.1" cy="144" rx="4.4" ry="1.6" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="513.3" cy="85.4" rx="2.7" ry="1" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="504.7" cy="103.5" rx="3.2" ry="1.2" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="514.9" cy="110.4" rx="3.4" ry="1.3" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="520.1" cy="110.3" rx="3.4" ry="1.3" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="501" cy="140.7" rx="4.3" ry="1.6" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="524.9" cy="134.3" rx="4.1" ry="1.5" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="509.6" cy="73.2" rx="2.4" ry="0.9" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="531.2" cy="134.7" rx="4.1" ry="1.5" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="506.2" cy="109" rx="3.4" ry="1.3" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="514.1" cy="121.8" rx="3.8" ry="1.4" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="524.7" cy="109.4" rx="3.4" ry="1.3" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="520.8" cy="83.9" rx="2.7" ry="1" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="518.3" cy="146.1" rx="4.5" ry="1.7" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<text class="t-b" x="138" y="242" text-anchor="end">Smoothness 0.7</text>
<rect x="150" y="178" width="220" height="26" style="fill:var(--f1);fill-opacity:0.2;stroke:none" />
<rect x="150" y="204" width="220" height="94" style="fill:var(--f4);fill-opacity:0.38;stroke:none" />
<circle cx="260" cy="196" r="6" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<path d="M253.4,206 L266.6,206 L282,294 L238,294 Z" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<rect x="400" y="178" width="220" height="26" style="fill:var(--f1);fill-opacity:0.2;stroke:none" />
<rect x="400" y="204" width="220" height="94" style="fill:var(--f4);fill-opacity:0.38;stroke:none" />
<circle cx="510" cy="196" r="6" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="517" cy="229.6" rx="5.1" ry="1.9" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="514.8" cy="222.5" rx="4.7" ry="1.8" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="497.4" cy="214.7" rx="4.3" ry="1.6" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="529.2" cy="279.4" rx="8" ry="3" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="513.1" cy="276.3" rx="7.8" ry="2.9" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="521.2" cy="233.2" rx="5.3" ry="2" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="514.4" cy="224" rx="4.8" ry="1.8" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="517" cy="290.6" rx="8.6" ry="3.2" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="519.5" cy="281.9" rx="8.1" ry="3" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="496.1" cy="225.9" rx="4.9" ry="1.8" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="499.2" cy="236.1" rx="5.5" ry="2.1" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="492.1" cy="284.2" rx="8.2" ry="3.1" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="528.3" cy="286.4" rx="8.4" ry="3.1" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="519.5" cy="268" rx="7.3" ry="2.7" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="515.8" cy="253.4" rx="6.5" ry="2.4" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="517.3" cy="216.7" rx="4.4" ry="1.6" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="523.6" cy="291.2" rx="8.6" ry="3.2" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="501.1" cy="235.3" rx="5.4" ry="2" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="480.2" cy="289" rx="8.5" ry="3.2" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="496" cy="283.6" rx="8.2" ry="3.1" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="496.5" cy="253.6" rx="6.5" ry="2.4" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="517.5" cy="246.8" rx="6.1" ry="2.3" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<text class="t-s" x="390" y="324" text-anchor="middle">攝影機壓低、面向低角度的太陽。示意：亮點的大小與數量是誇大畫的</text>
</svg>`)
