explainer.fig('sun-glint-sharp-band-check', /* html */ `
<svg viewBox="0 0 530 216" aria-label="第一步的檢查點：壓低攝影機面向太陽。預期是一條銳利的亮帶；常見錯誤是一大片模糊的亮">
<text class="t-b" x="125" y="14" text-anchor="middle">預期</text>
<rect x="4" y="26" width="242" height="44" style="fill:var(--ink);fill-opacity:0.05;stroke:none" />
<rect x="4" y="70" width="242" height="106" style="fill:var(--f4);fill-opacity:0.35;stroke:none" />
<path d="M4,78.5 H246" style="stroke:var(--ink);stroke-opacity:0.12;stroke-width:0.6;fill:none" />
<path d="M4,91.2 H246" style="stroke:var(--ink);stroke-opacity:0.12;stroke-width:0.9;fill:none" />
<path d="M4,110.3 H246" style="stroke:var(--ink);stroke-opacity:0.12;stroke-width:1.2;fill:none" />
<path d="M4,135.7 H246" style="stroke:var(--ink);stroke-opacity:0.12;stroke-width:1.5;fill:none" />
<path d="M4,165.4 H246" style="stroke:var(--ink);stroke-opacity:0.12;stroke-width:1.8;fill:none" />
<circle cx="125" cy="50" r="8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="125" cy="73.2" rx="3" ry="1.2" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="125" cy="83.8" rx="6" ry="1.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="125" cy="101.8" rx="10" ry="2.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="125" cy="125.1" rx="15" ry="3.4" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="125" cy="154.8" rx="21" ry="4.6" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<text class="t-s" x="125" y="194" text-anchor="middle">太陽下方一條銳利的亮帶，</text>
<text class="t-s" x="125" y="209" text-anchor="middle">被大波浪切成幾段</text>
<text class="t-cost" x="405" y="14" text-anchor="middle">錯誤：一大片模糊的亮</text>
<rect x="284" y="26" width="242" height="44" style="fill:var(--ink);fill-opacity:0.05;stroke:none" />
<rect x="284" y="70" width="242" height="106" style="fill:var(--f4);fill-opacity:0.35;stroke:none" />
<path d="M284,78.5 H526" style="stroke:var(--ink);stroke-opacity:0.12;stroke-width:0.6;fill:none" />
<path d="M284,91.2 H526" style="stroke:var(--ink);stroke-opacity:0.12;stroke-width:0.9;fill:none" />
<path d="M284,110.3 H526" style="stroke:var(--ink);stroke-opacity:0.12;stroke-width:1.2;fill:none" />
<path d="M284,135.7 H526" style="stroke:var(--ink);stroke-opacity:0.12;stroke-width:1.5;fill:none" />
<path d="M284,165.4 H526" style="stroke:var(--ink);stroke-opacity:0.12;stroke-width:1.8;fill:none" />
<circle cx="405" cy="50" r="8" style="fill:var(--bg);stroke:var(--muted);stroke-width:0.6" />
<ellipse cx="405" cy="120" rx="70" ry="44" style="fill:var(--bg);fill-opacity:0.55;stroke:none" />
<text class="t-s" x="405" y="194" text-anchor="middle">Smoothness 沒接，</text>
<text class="t-s" x="405" y="209" text-anchor="middle">或預設值還是 0.5</text>
</svg>`)
