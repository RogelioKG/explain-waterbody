explainer.fig('ripple-two-layer-drift-check', /* html */ `
<svg viewBox="0 0 810 216" aria-label="第四步的檢查點：兩層往不同方向走；兩種常見錯誤">
<text class="t-b" x="125" y="14" text-anchor="middle">預期</text>
<rect x="4" y="26" width="242" height="44" style="fill:var(--ink);fill-opacity:0.05;stroke:none" />
<rect x="4" y="70" width="242" height="106" style="fill:var(--f4);fill-opacity:0.35;stroke:none" />
<path d="M4,78.5 H246" style="stroke:var(--ink);stroke-opacity:0.12;stroke-width:0.6;fill:none" />
<path d="M4,91.2 H246" style="stroke:var(--ink);stroke-opacity:0.12;stroke-width:0.9;fill:none" />
<path d="M4,110.3 H246" style="stroke:var(--ink);stroke-opacity:0.12;stroke-width:1.2;fill:none" />
<path d="M4,135.7 H246" style="stroke:var(--ink);stroke-opacity:0.12;stroke-width:1.5;fill:none" />
<path d="M4,165.4 H246" style="stroke:var(--ink);stroke-opacity:0.12;stroke-width:1.8;fill:none" />
<circle cx="125" cy="50" r="8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="107.8" cy="113.4" rx="2.2" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="125.8" cy="84.5" rx="1.4" ry="0.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="125.2" cy="82.5" rx="1.3" ry="0.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="99.6" cy="124.3" rx="2.1" ry="0.9" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="144.1" cy="123.4" rx="2.1" ry="0.9" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="130.1" cy="102.7" rx="2" ry="0.9" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="117.6" cy="137.7" rx="3.1" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="132.1" cy="80.8" rx="1.3" ry="0.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="112.9" cy="93.7" rx="1.6" ry="0.7" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="96.2" cy="158.7" rx="3.3" ry="1.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="115.3" cy="143.3" rx="2.9" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="115.3" cy="83.1" rx="1.3" ry="0.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="119.2" cy="147" rx="2.7" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="121.6" cy="138.5" rx="2.5" ry="1.1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="142.6" cy="156.8" rx="2.9" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="126.8" cy="137.5" rx="3" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="107.3" cy="151.2" rx="3.5" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="122.7" cy="90.5" rx="1.6" ry="0.7" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="124.6" cy="94.6" rx="1.5" ry="0.7" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="145.8" cy="145.9" rx="2.9" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="107.4" cy="163.7" rx="3.5" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="130.8" cy="139.3" rx="2.7" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="165.9" cy="160.7" rx="3.2" ry="1.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="90.6" cy="145.5" rx="3" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="162.9" cy="144" rx="3.1" ry="1.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="119.8" cy="109.3" rx="2.1" ry="0.9" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="124.4" cy="76.9" rx="1.2" ry="0.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="112.4" cy="90.3" rx="1.6" ry="0.7" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="117.5" cy="91.9" rx="1.6" ry="0.7" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="85.4" cy="163.4" rx="3.2" ry="1.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="151.4" cy="135.2" rx="2.9" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="104.2" cy="162.7" rx="3.2" ry="1.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="145.2" cy="116.9" rx="2.4" ry="1.1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="114.6" cy="94.5" rx="1.6" ry="0.7" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="124.4" cy="103.8" rx="1.9" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="103.4" cy="107" rx="1.9" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="128.5" cy="118" rx="2.5" ry="1.1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="126.2" cy="147.8" rx="3" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="89.6" cy="146.6" rx="3.3" ry="1.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="157.7" cy="155.6" rx="3.4" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="119.4" cy="120.3" rx="2" ry="0.9" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="91.8" cy="142.9" rx="2.4" ry="1.1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="112.1" cy="101.1" rx="1.8" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="114.6" cy="81.7" rx="1.3" ry="0.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="121.4" cy="88.4" rx="1.4" ry="0.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="135.8" cy="163.6" rx="2.9" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="118.5" cy="105.9" rx="1.9" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="135.2" cy="91.1" rx="1.7" ry="0.7" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="124" cy="127.4" rx="2.2" ry="0.9" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="120.8" cy="88.4" rx="1.5" ry="0.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="94.1" cy="159.8" rx="2.7" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="127.8" cy="170" rx="3" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="92.6" cy="134.6" rx="2.6" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="162.2" cy="172.2" rx="3.7" ry="1.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="119.2" cy="106.8" rx="1.8" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="127.8" cy="154.9" rx="3.4" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="111.2" cy="114" rx="2.3" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="161.3" cy="172.8" rx="3.9" ry="1.7" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="146.7" cy="158.9" rx="2.9" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="115.4" cy="132.2" rx="2.2" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="121.2" cy="77.8" rx="1.2" ry="0.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="161.8" cy="148" rx="2.9" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="173.5" cy="168.8" rx="4" ry="1.7" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="110.2" cy="117.5" rx="2.1" ry="0.9" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="114" cy="99.8" rx="1.8" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="157.9" cy="165.8" rx="3.3" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="148.2" cy="144.5" rx="2.5" ry="1.1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="157" cy="145.2" rx="3.1" ry="1.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="123.1" cy="153" rx="2.7" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="110.2" cy="156.4" rx="3.4" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<path class="ln arrow" d="M70,134 l16,28" />
<text class="t-s" x="70" y="128" text-anchor="middle">粗的一層</text>
<path class="ln arrow" d="M190,136 l14,-26" />
<text class="t-s" x="190" y="150" text-anchor="middle">細的一層</text>
<text class="t-s" x="125" y="194" text-anchor="middle">兩層往不同方向走，</text>
<text class="t-s" x="125" y="209" text-anchor="middle">花紋的形狀一直在變</text>
<text class="t-cost" x="405" y="14" text-anchor="middle">錯誤：和一層時一樣</text>
<rect x="284" y="26" width="242" height="44" style="fill:var(--ink);fill-opacity:0.05;stroke:none" />
<rect x="284" y="70" width="242" height="106" style="fill:var(--f4);fill-opacity:0.35;stroke:none" />
<path d="M284,78.5 H526" style="stroke:var(--ink);stroke-opacity:0.12;stroke-width:0.6;fill:none" />
<path d="M284,91.2 H526" style="stroke:var(--ink);stroke-opacity:0.12;stroke-width:0.9;fill:none" />
<path d="M284,110.3 H526" style="stroke:var(--ink);stroke-opacity:0.12;stroke-width:1.2;fill:none" />
<path d="M284,135.7 H526" style="stroke:var(--ink);stroke-opacity:0.12;stroke-width:1.5;fill:none" />
<path d="M284,165.4 H526" style="stroke:var(--ink);stroke-opacity:0.12;stroke-width:1.8;fill:none" />
<circle cx="405" cy="50" r="8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="406.8" cy="104.3" rx="1.8" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="414.2" cy="140.1" rx="2.4" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="410" cy="75.2" rx="1.2" ry="0.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="425.2" cy="103.9" rx="1.9" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="402.8" cy="160.4" rx="3.4" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="409.3" cy="94.4" rx="1.8" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="421.1" cy="132.7" rx="2.7" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="410.7" cy="83.3" rx="1.4" ry="0.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="382.8" cy="111.1" rx="2.2" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="418.7" cy="128" rx="2.7" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="439.6" cy="149.9" rx="2.9" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="400.1" cy="157.4" rx="3.6" ry="1.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="366.8" cy="164" rx="2.9" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="423.2" cy="102" rx="1.8" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="390" cy="142.2" rx="2.8" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="396.8" cy="119.6" rx="2.3" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="434" cy="138.4" rx="2.8" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="440.2" cy="168.2" rx="4" ry="1.7" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="378.4" cy="146.2" rx="3.2" ry="1.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="446" cy="171.1" rx="3.6" ry="1.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="381.2" cy="149.9" rx="3.3" ry="1.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="389.7" cy="137.4" rx="2.3" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="450.6" cy="161.9" rx="2.8" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="397" cy="157.4" rx="2.8" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="417.5" cy="110.3" rx="2.2" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="407.2" cy="80.4" rx="1.3" ry="0.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="391" cy="150.3" rx="3.3" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="405.6" cy="172.4" rx="4.1" ry="1.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="384.7" cy="111.9" rx="2.1" ry="0.9" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="399.6" cy="78.4" rx="1.3" ry="0.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="379.6" cy="140.7" rx="2.4" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="387.5" cy="163.1" rx="3.8" ry="1.7" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="393.2" cy="165.5" rx="3.3" ry="1.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="414.6" cy="132.5" rx="2.6" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="413.4" cy="136.1" rx="3" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="400.5" cy="131.2" rx="2.7" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="396.8" cy="104.3" rx="2.1" ry="0.9" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="408.2" cy="132.6" rx="2.2" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="409.6" cy="122.5" rx="2" ry="0.9" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="414.8" cy="141.2" rx="2.4" ry="1.1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="402.5" cy="142.2" rx="2.9" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="415.8" cy="116.3" rx="2.3" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="397.8" cy="76.8" rx="1.2" ry="0.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="379.8" cy="171" rx="3.4" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="391.9" cy="139.1" rx="2.6" ry="1.1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="398.7" cy="112.2" rx="2.1" ry="0.9" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="399.2" cy="111" rx="2.2" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="406.2" cy="77.7" rx="1.3" ry="0.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="391.7" cy="112" rx="2.2" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="392.1" cy="104.4" rx="1.9" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="372.7" cy="148.5" rx="2.8" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="421.8" cy="114.4" rx="2.1" ry="0.9" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="374.2" cy="162" rx="3.1" ry="1.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="434.7" cy="144.3" rx="2.8" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="389.9" cy="102.9" rx="1.9" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="416.2" cy="99.1" rx="1.9" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="397.1" cy="98.3" rx="1.8" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="428.4" cy="143.5" rx="2.7" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="398.8" cy="91.9" rx="1.7" ry="0.7" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="398.2" cy="107.9" rx="1.9" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="399.8" cy="122.9" rx="2.6" ry="1.1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="388.7" cy="95.1" rx="1.8" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="451.3" cy="164.1" rx="3.2" ry="1.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="447.9" cy="169.9" rx="3.1" ry="1.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="433.5" cy="152.6" rx="3.2" ry="1.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="391" cy="132.4" rx="2.4" ry="1.1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="387.7" cy="103.2" rx="1.9" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="419.2" cy="109.6" rx="1.8" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="423.8" cy="166.1" rx="3.8" ry="1.7" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="443.5" cy="165.5" rx="3.4" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<path class="ln arrow" d="M450,134 l20,28" />
<text class="t-s" x="450" y="128" text-anchor="middle">同一方向</text>
<text class="t-s" x="405" y="194" text-anchor="middle">Normal Blend 的 B 沒接第二層，</text>
<text class="t-s" x="405" y="209" text-anchor="middle">或第二層還接著 Ripple0</text>
<text class="t-cost" x="685" y="14" text-anchor="middle">錯誤：粗糙得像砂紙</text>
<rect x="564" y="26" width="242" height="44" style="fill:var(--ink);fill-opacity:0.05;stroke:none" />
<rect x="564" y="70" width="242" height="106" style="fill:var(--f4);fill-opacity:0.35;stroke:none" />
<path d="M564,78.5 H806" style="stroke:var(--ink);stroke-opacity:0.12;stroke-width:0.6;fill:none" />
<path d="M564,91.2 H806" style="stroke:var(--ink);stroke-opacity:0.12;stroke-width:0.9;fill:none" />
<path d="M564,110.3 H806" style="stroke:var(--ink);stroke-opacity:0.12;stroke-width:1.2;fill:none" />
<path d="M564,135.7 H806" style="stroke:var(--ink);stroke-opacity:0.12;stroke-width:1.5;fill:none" />
<path d="M564,165.4 H806" style="stroke:var(--ink);stroke-opacity:0.12;stroke-width:1.8;fill:none" />
<circle cx="685" cy="50" r="8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="695.3" cy="96.3" rx="1.8" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="709.3" cy="109.7" rx="2.1" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="583.3" cy="135.8" rx="2.7" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="764" cy="73.3" rx="1.2" ry="0.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="622.8" cy="98.5" rx="1.8" ry="0.9" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="678" cy="173.6" rx="3.6" ry="1.7" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="679.5" cy="157.3" rx="3.2" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="603.2" cy="137.2" rx="2.7" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="771.1" cy="136.8" rx="2.7" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="741.5" cy="125.4" rx="2.5" ry="1.1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="583" cy="140.5" rx="2.8" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="706.3" cy="149.3" rx="3" ry="1.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="575.3" cy="102.7" rx="1.9" ry="0.9" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="678.6" cy="160.3" rx="3.3" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="773.6" cy="145.3" rx="2.9" ry="1.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="783.5" cy="144.8" rx="2.9" ry="1.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="755.4" cy="112.3" rx="2.1" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="786.9" cy="117.4" rx="2.3" ry="1.1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="590.8" cy="161.6" rx="3.3" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="618.8" cy="85.9" rx="1.5" ry="0.7" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="670.1" cy="170.5" rx="3.5" ry="1.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="638.4" cy="135.9" rx="2.7" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="658.3" cy="123.7" rx="2.4" ry="1.1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="704.9" cy="107.8" rx="2" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="779.6" cy="131.6" rx="2.6" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="785.4" cy="141.6" rx="2.8" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="799.9" cy="159.4" rx="3.3" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="606.2" cy="140.5" rx="2.8" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="793.7" cy="159.8" rx="3.3" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="701.2" cy="164.3" rx="3.4" ry="1.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="617.4" cy="144.8" rx="2.9" ry="1.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="702.2" cy="156.8" rx="3.2" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="582.8" cy="101.1" rx="1.9" ry="0.9" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="799.6" cy="159.1" rx="3.2" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="755.3" cy="81" rx="1.4" ry="0.7" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="603.3" cy="113.9" rx="2.2" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="747.9" cy="102" rx="1.9" ry="0.9" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="578.3" cy="161" rx="3.3" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="578.5" cy="134.7" rx="2.7" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="645.4" cy="145.3" rx="2.9" ry="1.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="797.5" cy="161.9" rx="3.3" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="801.7" cy="123.6" rx="2.4" ry="1.1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="586" cy="103.6" rx="1.9" ry="0.9" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="575.3" cy="133.2" rx="2.6" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="663.5" cy="92.1" rx="1.7" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="604.6" cy="134.3" rx="2.7" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="771.1" cy="76.3" rx="1.3" ry="0.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="792.3" cy="104" rx="2" ry="0.9" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="656.4" cy="163.5" rx="3.4" ry="1.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="689.7" cy="119" rx="2.3" ry="1.1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="707.4" cy="137.7" rx="2.7" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="713.1" cy="129" rx="2.5" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="686.6" cy="167.9" rx="3.5" ry="1.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="736.6" cy="116" rx="2.2" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="638.5" cy="96.2" rx="1.8" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="689.9" cy="171.7" rx="3.5" ry="1.7" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="570.7" cy="127.9" rx="2.5" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="703.7" cy="114.4" rx="2.2" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="712.1" cy="74" rx="1.2" ry="0.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="582.1" cy="136.5" rx="2.7" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="677.1" cy="136" rx="2.7" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="650.5" cy="141.3" rx="2.8" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="740.7" cy="144.1" rx="2.9" ry="1.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="582.2" cy="74.3" rx="1.3" ry="0.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="793.4" cy="141" rx="2.8" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="674.8" cy="97.6" rx="1.8" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="642.9" cy="132.5" rx="2.6" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="641.2" cy="109.1" rx="2.1" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="707.4" cy="109.7" rx="2.1" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="656.3" cy="102.6" rx="1.9" ry="0.9" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="574.3" cy="150.8" rx="3.1" ry="1.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="740" cy="130.1" rx="2.6" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="620.1" cy="103.6" rx="1.9" ry="0.9" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="623.9" cy="154" rx="3.1" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="669.8" cy="91.1" rx="1.6" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="591.8" cy="143.2" rx="2.9" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="646.1" cy="104.8" rx="2" ry="0.9" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="670.6" cy="157" rx="3.2" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="607.6" cy="159.3" rx="3.3" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="720.2" cy="106.3" rx="2" ry="0.9" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="673.6" cy="162.3" rx="3.3" ry="1.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="596.3" cy="95" rx="1.7" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="612.6" cy="126" rx="2.5" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="764.2" cy="154.3" rx="3.1" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="633.2" cy="90.7" rx="1.6" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="718.2" cy="154.3" rx="3.1" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="648.8" cy="154.2" rx="3.1" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="636.3" cy="85.2" rx="1.5" ry="0.7" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="631.5" cy="153" rx="3.1" ry="1.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="665.6" cy="107.3" rx="2" ry="0.9" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="663.8" cy="114.8" rx="2.2" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="604.5" cy="165.9" rx="3.4" ry="1.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="788.7" cy="72.5" rx="1.2" ry="0.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="798.9" cy="161.8" rx="3.3" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="790.3" cy="116.3" rx="2.2" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="620" cy="166.6" rx="3.4" ry="1.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="763.8" cy="148" rx="3" ry="1.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="689.4" cy="139.6" rx="2.8" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="647.8" cy="101.5" rx="1.9" ry="0.9" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="583.9" cy="95.2" rx="1.7" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="635.2" cy="132" rx="2.6" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="578.5" cy="154.6" rx="3.1" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="730.3" cy="164.2" rx="3.4" ry="1.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="777.8" cy="166.2" rx="3.4" ry="1.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="703" cy="163.8" rx="3.4" ry="1.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="742.4" cy="73.3" rx="1.2" ry="0.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="638.2" cy="89.5" rx="1.6" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="690.8" cy="139.6" rx="2.8" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="787.7" cy="114.2" rx="2.2" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="647.9" cy="134.4" rx="2.7" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="769.6" cy="97.8" rx="1.8" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="751.1" cy="120.7" rx="2.3" ry="1.1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="614.2" cy="107.9" rx="2" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="759.1" cy="126.5" rx="2.5" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="753.3" cy="89.5" rx="1.6" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="756.6" cy="166" rx="3.4" ry="1.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="569.8" cy="156" rx="3.2" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="769.8" cy="136.1" rx="2.7" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="631.5" cy="77.1" rx="1.3" ry="0.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="691.4" cy="99.4" rx="1.8" ry="0.9" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="678.7" cy="115.1" rx="2.2" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="568.4" cy="151.2" rx="3.1" ry="1.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="597.7" cy="77.6" rx="1.3" ry="0.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="584" cy="84.7" rx="1.5" ry="0.7" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="767.9" cy="171.4" rx="3.5" ry="1.7" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="685.5" cy="80.8" rx="1.4" ry="0.7" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="641.6" cy="104.2" rx="2" ry="0.9" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="719.4" cy="107.8" rx="2" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="652.4" cy="131.8" rx="2.6" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="644.9" cy="91.5" rx="1.7" ry="0.8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="698" cy="84.6" rx="1.5" ry="0.7" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="657" cy="145" rx="2.9" ry="1.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="609.8" cy="80.1" rx="1.4" ry="0.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="709.4" cy="110.1" rx="2.1" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="657" cy="151.8" rx="3.1" ry="1.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="713.8" cy="153.7" rx="3.1" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="655.1" cy="116" rx="2.2" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="732.5" cy="122.6" rx="2.4" ry="1.1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="730.4" cy="114.9" rx="2.2" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="625.3" cy="119" rx="2.3" ry="1.1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="730.7" cy="126.7" rx="2.5" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="667.4" cy="79.3" rx="1.4" ry="0.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="773.8" cy="115.4" rx="2.2" ry="1" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="655.6" cy="167.5" rx="3.4" ry="1.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="753.1" cy="163.6" rx="3.4" ry="1.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="676.6" cy="98.7" rx="1.8" ry="0.9" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="758.3" cy="84.6" rx="1.5" ry="0.7" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="775.6" cy="139.6" rx="2.8" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="724.2" cy="152.8" rx="3.1" ry="1.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="699.9" cy="146.8" rx="3" ry="1.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="705.5" cy="82.5" rx="1.4" ry="0.7" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="601.6" cy="72.5" rx="1.2" ry="0.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="578.4" cy="151" rx="3.1" ry="1.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="591.2" cy="81.4" rx="1.4" ry="0.7" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="609.9" cy="161.8" rx="3.3" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="764.9" cy="74.4" rx="1.3" ry="0.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="765.5" cy="84.4" rx="1.5" ry="0.7" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="763.7" cy="140.7" rx="2.8" ry="1.3" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="703.5" cy="169.1" rx="3.5" ry="1.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="576.5" cy="153.5" rx="3.1" ry="1.5" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<text class="t-s" x="685" y="194" text-anchor="middle">RippleStrength 太大，</text>
<text class="t-s" x="685" y="209" text-anchor="middle">或每層的 Strength 沒接</text>
</svg>`)
