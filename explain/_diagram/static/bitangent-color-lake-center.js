explainer.fig('bitangent-color-lake-center', /* html */ `
<svg viewBox="0 0 560 170" aria-label="Bitangent Vector 接到 Base Color 時，湖心的顏色：藍色是 B 朝 +Z，黑色是 B 朝 −Z">
<text class="t-b" x="140" y="16" text-anchor="middle">預期：湖心是藍色</text>
<ellipse cx="140" cy="82" rx="110" ry="52" style="fill:var(--ink);fill-opacity:0.12;stroke:none" />
<ellipse cx="140" cy="82" rx="80" ry="36" style="fill:var(--f4);fill-opacity:0.9;stroke:none" />
<text class="t-s" x="140" y="156" text-anchor="middle">B = (0, 0, 1)，Saturate 後是藍</text>
<text class="t-cost" x="420" y="16" text-anchor="middle">錯誤：湖心是黑色</text>
<ellipse cx="420" cy="82" rx="110" ry="52" style="fill:var(--ink);fill-opacity:0.12;stroke:none" />
<ellipse cx="420" cy="82" rx="80" ry="36" style="fill:var(--ink);fill-opacity:0.85;stroke:none" />
<text class="t-s" x="420" y="156" text-anchor="middle">B = (0, 0, −1)，Saturate 後是 0</text>
</svg>`)
