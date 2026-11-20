explainer.fig('sun-specular-sparkle-check', /* html */ `
<svg viewBox="0 0 780 200" aria-label="第五步的檢查點：預期是碎成小亮點的 specular；錯誤是一條光滑的亮帶或完全沒有 specular">
<text class="t-b" x="120" y="14" text-anchor="middle">預期</text>
<rect x="0" y="24" width="240" height="26" style="fill:var(--f1);fill-opacity:0.2;stroke:none" />
<rect x="0" y="50" width="240" height="94" style="fill:var(--f4);fill-opacity:0.38;stroke:none" />
<circle cx="120" cy="42" r="6" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<ellipse cx="111.9" cy="75.8" rx="5.1" ry="1.9" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="116.6" cy="108.1" rx="7" ry="2.6" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="121.9" cy="110" rx="7.1" ry="2.7" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="121" cy="128.7" rx="8.1" ry="3.1" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="122.9" cy="77.7" rx="5.2" ry="2" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="157" cy="96.3" rx="6.3" ry="2.4" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="98.5" cy="128.6" rx="8.1" ry="3.1" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="121.6" cy="68.1" rx="4.7" ry="1.8" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="130.7" cy="110.8" rx="7.1" ry="2.7" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="107.3" cy="120.2" rx="7.7" ry="2.9" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="140.8" cy="114" rx="7.3" ry="2.7" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="128.3" cy="106.9" rx="6.9" ry="2.6" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="138.5" cy="81.4" rx="5.5" ry="2" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="124.4" cy="96.5" rx="6.3" ry="2.4" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="136" cy="118.2" rx="7.5" ry="2.8" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="102.4" cy="136" rx="8.6" ry="3.2" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="123.6" cy="89.6" rx="5.9" ry="2.2" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="103.2" cy="137.3" rx="8.6" ry="3.2" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="126.9" cy="132.3" rx="8.4" ry="3.1" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="122.6" cy="73.9" rx="5" ry="1.9" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="98.5" cy="140" rx="8.8" ry="3.3" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<ellipse cx="125.2" cy="81.4" rx="5.5" ry="2" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<text class="t-s" x="120" y="162" text-anchor="middle">碎成許多閃動的小亮點，</text>
<text class="t-s" x="120" y="177" text-anchor="middle">散在太陽下方</text>
<text class="t-cost" x="390" y="14" text-anchor="middle">錯誤：一條光滑的亮帶</text>
<rect x="270" y="24" width="240" height="26" style="fill:var(--f1);fill-opacity:0.2;stroke:none" />
<rect x="270" y="50" width="240" height="94" style="fill:var(--f4);fill-opacity:0.38;stroke:none" />
<circle cx="390" cy="42" r="6" style="fill:var(--bg);fill-opacity:0.95;stroke:none" />
<path d="M383.4,52 L396.6,52 L412,140 L368,140 Z" style="fill:var(--bg);fill-opacity:0.5;stroke:none" />
<text class="t-s" x="390" y="162" text-anchor="middle">設定資產的 RippleStrength</text>
<text class="t-s" x="390" y="177" text-anchor="middle">是 0</text>
<text class="t-cost" x="660" y="14" text-anchor="middle">錯誤：看不到 specular</text>
<rect x="540" y="24" width="240" height="26" style="fill:var(--f1);fill-opacity:0.2;stroke:none" />
<rect x="540" y="50" width="240" height="94" style="fill:var(--f4);fill-opacity:0.38;stroke:none" />
<text class="t-s" x="660" y="162" text-anchor="middle">攝影機沒有面向太陽，</text>
<text class="t-s" x="660" y="177" text-anchor="middle">或 Directional Light 沒轉</text>
</svg>`)
