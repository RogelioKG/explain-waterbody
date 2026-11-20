/* ============================================================
   explainer shell. Synced into <root>/_explainer/ by scripts/build_index.py;
   edit assets/explainer.js in the skill, never the copies.
   A page loads it with <script src="../_explainer/explainer.js"></script> in <head>
   and calls explainer({...}) at the end of <body>.
   Each drawn figure is its own file <root>/_diagram/static/<name>.js that calls explainer.fig(name, template).
   ============================================================ */
(function () {
  var saved = null;
  try { saved = localStorage.getItem('ex-theme'); } catch (e) {}
  var dark = saved ? saved === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.classList.toggle('dark', dark);

  /* embedded pages (interactive diagrams) get the theme by postMessage: on each iframe load and whenever <html class> changes */
  function sendTheme(f) {
    if (f.contentWindow) f.contentWindow.postMessage({ type: 'theme', theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light' }, '*');
  }
  document.addEventListener('load', function (e) { if (e.target.tagName === 'IFRAME') sendTheme(e.target); }, true);
  new MutationObserver(function () { document.querySelectorAll('iframe').forEach(sendTheme); })
    .observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

  var base = document.currentScript.src.replace(/[^/]*$/, '');
  var head = document.head;
  function el(tag, attrs, text) {
    var e = document.createElement(tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text) e.textContent = text;
    head.appendChild(e);
    return e;
  }
  el('link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' });
  el('link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' });
  el('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Noto+Sans+TC:wght@400;500;600;700&family=Public+Sans:wght@400;500;600;700&display=swap' });
  el('link', { rel: 'stylesheet', href: base + 'explainer.css' });
  el('style', { type: 'text/tailwindcss' }, '  @custom-variant dark (&:where(.dark, .dark *));\n  @theme inline {\n    --font-sans: var(--ex-sans);\n    --font-mono: var(--ex-mono);\n    --color-bg: var(--bg);\n    --color-soft: var(--bg-soft);\n    --color-muted-bg: var(--bg-muted);\n    --color-line: var(--line);\n    --color-line-strong: var(--line-strong);\n    --color-ink: var(--ink);\n    --color-ink-2: var(--ink-2);\n    --color-muted: var(--muted);\n    --color-accent: var(--accent);\n    --color-accent-soft: var(--accent-soft);\n    --color-cost: var(--cost);\n    --color-cost-soft: var(--cost-soft);\n    --color-f1: var(--f1);\n    --color-f1-soft: var(--f1-soft);\n    --color-f2: var(--f2);\n    --color-f2-soft: var(--f2-soft);\n    --color-f3: var(--f3);\n    --color-f3-soft: var(--f3-soft);\n    --color-f4: var(--f4);\n    --color-f4-soft: var(--f4-soft);\n  }\n');
  function load(src, optional) {
    return new Promise(function (resolve, reject) {
      var e = document.createElement('script');
      e.src = src; e.async = false;
      e.onload = resolve;
      e.onerror = optional ? resolve : reject;
      head.appendChild(e);
    });
  }
  var ready = Promise.all([
    load('https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4.1.4'),
    load('https://cdn.jsdelivr.net/npm/vue@3.5.13/dist/vue.global.prod.js'),
    load('https://cdn.jsdelivr.net/npm/marked@15.0.7/marked.min.js'),
    load('_tree.js', true), /* this topic's tree, optional: window.EX_TREE */
  ]);
  var DEFS = '<svg width="0" height="0" style="position:absolute" aria-hidden="true">\n  <defs>\n    <marker id="ex-arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">\n      <path d="M0,1 L9,5 L0,9 z" fill="var(--line-strong)"/>\n    </marker>\n    <marker id="ex-arrow-new" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">\n      <path d="M0,1 L9,5 L0,9 z" fill="var(--accent-mark)"/>\n    </marker>\n    <marker id="ex-arrow-cost" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">\n      <path d="M0,1 L9,5 L0,9 z" fill="var(--cost-mark)"/>\n    </marker>\n  </defs>\n</svg>';

  var errors = [];
  addEventListener('error', function (e) { errors.push(String(e.message || e)); });
  addEventListener('unhandledrejection', function (e) { errors.push(String(e.reason)); });
  function report(r) { document.documentElement.setAttribute('data-ex-check', JSON.stringify(r)); }

  /* figures live one per file, shared by every topic: <ex-fig of="name"> in the text loads <root>/_diagram/static/<name>.js, which calls explainer.fig(name, template) */
  var figPath = function (k) { return '../_diagram/static/' + k + '.js'; };
  var figFiles = {}; /* key -> template registered by a figure file */
  var figMissing = {}; /* key -> path of a figure file that failed to load */
  var FIG_RE = /<ex-fig\s[^>]*?of="([^"]+)"/g;

  window.explainer = function (cfg) {
    var source = document.getElementById('ex-content');
    var keys = [];
    (source ? source.textContent : '').replace(FIG_RE, function (m, k) {
      if (keys.indexOf(k) < 0) keys.push(k);
    });
    var figs = Promise.all(keys.map(function (k) {
      return load(figPath(k)).then(null, function () { figMissing[k] = figPath(k); });
    }));
    Promise.all([ready, figs]).then(function () {
      document.body.insertAdjacentHTML('afterbegin', DEFS + '<div id="app" v-cloak></div>');
      try { run(cfg); } catch (e) { errors.push(String(e)); report({ errors: errors, warnings: [], figure: [], links: [] }); }
    }, function () { report({ errors: ['無法載入 CDN 的 Vue / marked / Tailwind'], warnings: [], figure: [], links: [] }); });
  };
  window.explainer.fig = function (key, template) { figFiles[key] = template; };

function run(cfg) {
  const { createApp, reactive, computed, provide, inject, ref, onMounted, onBeforeUnmount, nextTick, markRaw } = Vue;

  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  /* ---------- markdown → Vue template ---------- */
  const BLOCKS = ['q', 'reveal'];
  const problems = []; /* markup that would render wrong, reported by ?check */
  const maths = []; /* TeX pulled out of the markdown before marked sees it: { tex, display } */
  let mathWait = Promise.resolve(); /* settles when KaTeX has painted every formula; ?check waits for it */
  const MATH_RE = new RegExp([
    '(^[ \\t]*```[\\s\\S]*?(?:^[ \\t]*```|$(?![\\s\\S])))', /* 1 fenced code: left alone */
    '((`+)(?:[^\\n]|\\n(?!\\n))*?\\3(?!`))', /* 2 inline code: left alone */
    '(\\\\\\$)', /* 4 \$ : a literal dollar sign */
    '\\$\\$([\\s\\S]+?)\\$\\$', /* 5 $$ display $$ */
    '\\$(?![\\s$])((?:\\\\[\\s\\S]|[^$\\\\\\n])+?)(?<!\\s)\\$(?!\\d)', /* 6 $ inline $ */
    '(\\$\\$)', /* 7 a $$ that never closes */
  ].join('|'), 'gm');
  function extractMath(text) {
    return text.replace(MATH_RE, (m, fence, code, _t, dollar, disp, inl, stray, at) => {
      if (fence || code) return m;
      if (dollar) return '&#36;';
      if (stray) { problems.push('$$ 沒有閉合：' + text.slice(at, at + 30).replace(/\n/g, ' ')); return m; }
      maths.push({ tex: (disp != null ? disp : inl).trim(), display: disp != null });
      return '\u0002' + (maths.length - 1) + '\u0003';
    });
  }
  /* a q title is element content, so its $math$ can become KaTeX; `code` is the only markdown it takes */
  function inlineTitle(text) {
    return text.split(/(`+)([^`]+?)\1/).map((part, k) =>
      k % 3 === 2 ? `<code>${esc(part).replace(/\$/g, '&#36;')}</code>` : k % 3 === 1 ? '' : esc(part)).join('');
  }
  function preprocess(md) {
    const seen = new Set();
    const lines = md.replace(/\s+$/, '').split('\n');
    const out = [];
    const stack = [];
    let fence = false;
    lines.forEach((raw, i) => {
      let line = raw;
      if (/^\s*```/.test(line)) fence = !fence;
      if (fence) { out.push(line); return; }
      const open = line.match(/^:::\s*([a-z][\w-]*)\s*(.*)$/);
      if (open) {
        if (!BLOCKS.includes(open[1])) problems.push(`內容第 ${i + 1} 行：未知的區塊「::: ${open[1]}」`);
        stack.push({ name: open[1], at: i + 1 });
        const arg = open[2].trim();
        out.push('', open[1] === 'q'
          ? `<ex-q>\n<template #title><span v-pre>${inlineTitle(arg)}</span></template>`
          : `<ex-${open[1]} arg="${esc(arg)}">`, '');
        return;
      }
      if (/^:::\s*$/.test(line)) {
        const top = stack.pop();
        if (top) out.push('', `</ex-${top.name}>`, '');
        else problems.push(`內容第 ${i + 1} 行：多出一個 :::`);
        return;
      }
      if (stack.length && /^#{1,6}\s/.test(line)) problems.push(`內容第 ${i + 1} 行：標題寫在 ::: ${stack[stack.length - 1].name} 區塊裡，收合會錯位`);
      line = line.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (m, t, label) => {
        t = t.trim();
        const first = !seen.has(t);
        seen.add(t);
        return `<ex-term t="${esc(t)}"${first ? ' first' : ''}>${label || t}</ex-term>`;
      });
      out.push(line);
    });
    if (fence) problems.push('程式碼區塊的 ``` 沒有關閉');
    while (stack.length) {
      const top = stack.pop();
      problems.push(`內容第 ${top.at} 行：::: ${top.name} 沒有關閉`);
      out.push('', `</ex-${top.name}>`, '');
    }
    return extractMath(out.join('\n'));
  }

  /* h3 and deeper headings open a collapsible section that runs until the next heading of the same or a higher level */
  const MARK = '\u0001';
  const usedIds = new Set();
  function slug(text) {
    const base = text.replace(/<[^>]+>/g, '').replace(/[`*_]/g, '').trim().replace(/\s+/g, '-') || 'section';
    let id = base;
    for (let k = 2; usedIds.has(id); k++) id = base + '-' + k;
    usedIds.add(id);
    return id;
  }
  function nest(html) {
    const parts = html.split(new RegExp(MARK + '(\\d)' + MARK));
    let out = parts[0];
    const open = [];
    const close = (d) => { while (open.length && open[open.length - 1] >= d) { open.pop(); out += '</div></details>\n'; } };
    for (let i = 1; i < parts.length; i += 2) {
      const d = Number(parts[i]);
      close(d);
      if (d >= 3) { open.push(d); out += '<details class="ex-fold ex-fold-h" open>'; }
      out += parts[i + 1];
    }
    close(0);
    return out;
  }

  let listDepth = 0;
  const renderer = new marked.Renderer();
  /* the fence info string is "<language> <title>"; the title (file path + function) becomes a caption */
  renderer.code = ({ text, lang }) => {
    const info = (lang || '').trim();
    const sp = info.search(/\s/);
    const title = sp > 0 ? info.slice(sp + 1).trim() : '';
    const language = sp > 0 ? info.slice(0, sp) : info;
    const src = text.replace(/\n$/, '');
    const pre = `<pre v-pre><code${language ? ` data-lang="${esc(language)}"` : ''}>${esc(src)}</code></pre>`;
    return title ? `<figure class="ex-code"><figcaption v-pre>${esc(title)}</figcaption>${pre}</figure>\n` : pre + '\n';
  };
  renderer.codespan = ({ text }) => `<code v-pre>${esc(text)}</code>`;
  renderer.heading = function ({ tokens, depth, text }) {
    const h = `<h${depth} id="${esc(slug(text))}">${this.parser.parseInline(tokens)}</h${depth}>`;
    if (listDepth || depth < 2) return h + '\n';
    if (depth === 2) return MARK + '2' + MARK + h + '\n';
    return `${MARK}${depth}${MARK}<summary>${h}</summary><div class="ex-fold-body">\n`;
  };
  /* a numbered item with nested content folds: its first paragraph is the summary */
  renderer.list = function (token) {
    listDepth++;
    const items = token.items.map((it) => {
      const t = it.tokens;
      const first = t[0];
      if (token.ordered && t.length > 1 && first && (first.type === 'text' || first.type === 'paragraph') && first.tokens) {
        return `<li><details class="ex-fold ex-fold-li" open><summary>${this.parser.parseInline(first.tokens)}</summary><div class="ex-fold-body">${this.parser.parse(t.slice(1), !!it.loose)}</div></details></li>\n`;
      }
      return `<li>${this.parser.parse(t, !!it.loose)}</li>\n`;
    });
    listDepth--;
    const tag = token.ordered ? 'ol' : 'ul';
    const start = token.ordered && token.start !== 1 && token.start !== '' ? ` start="${token.start}"` : '';
    return `<${tag}${start}>\n${items.join('')}</${tag}>\n`;
  };

  function render(md) {
    const html = nest(marked.parse(preprocess(md), { renderer, gfm: true }))
      .replace(/\u0002(\d+)\u0003/g, (m, i) => {
        const x = maths[i];
        return x ? `<span v-pre class="ex-math${x.display ? ' ex-math-d' : ''}" data-tex="${esc(x.tex)}">${esc(x.display ? '$$' + x.tex + '$$' : '$' + x.tex + '$')}</span>` : m;
      });
    return `<div class="ex-prose">${html}</div>`;
  }

  /* ---------- paths, trail, tree ---------- */
  // pages live at <root>/<topic>/<page>.html; the index at <root>/index.html
  const selfPath = decodeURIComponent(location.pathname).split('/').slice(-2).join('/');
  let trail = [];
  try { trail = JSON.parse(new URLSearchParams(location.search).get('trail') || '[]'); } catch (e) { trail = []; }
  const withTrail = (href, list) => list.length ? href + (href.includes('?') ? '&' : '?') + 'trail=' + encodeURIComponent(JSON.stringify(list)) : href;
  const trailHref = (i) => withTrail('../' + trail[i].p, trail.slice(0, i));
  const prereqHref = (href) => withTrail(href, trail.concat([{ t: cfg.title, p: selfPath }]));
  const indexHref = cfg.index === false ? null : '../index.html';
  const pageFile = decodeURIComponent(location.pathname).split('/').pop();
  const listed = (window.EX_TREE || []).map((n) => Object.assign({}, n, { current: n.href === pageFile }));
  if (listed.length && !listed.some((n) => n.current)) console.warn('explainer: ' + pageFile + ' is not listed in _tree.js');
  const tree = listed.some((n) => n.current) ? listed : [{ t: cfg.title, d: 0, current: true }];
  const treeNodes = [];
  {
    const stack = [];
    tree.forEach((n, i) => {
      const node = Object.assign({}, n, { i, children: [] });
      while (stack.length && stack[stack.length - 1].d >= n.d) stack.pop();
      (stack.length ? stack[stack.length - 1].children : treeNodes).push(node);
      stack.push(node);
    });
  }
  const curIdx = tree.findIndex((n) => n.current);
  const crumbs = [];
  {
    let d = tree[curIdx].d;
    crumbs.unshift(tree[curIdx]);
    for (let i = curIdx - 1; i >= 0 && d > 0; i--) if (tree[i].d < d) { crumbs.unshift(tree[i]); d = tree[i].d; }
    if (indexHref) crumbs.unshift({ t: 'All Topics', href: indexHref });
  }
  const surround = [];
  {
    const me = tree[curIdx];
    const parent = crumbs.length > 1 && crumbs[crumbs.length - 2].href !== indexHref ? crumbs[crumbs.length - 2] : null;
    if (parent && parent.href) surround.push({ kind: 'up', label: '回到上一層', node: parent });
    for (let i = curIdx - 1; i >= 0 && tree[i].d >= me.d; i--) {
      if (tree[i].d === me.d && tree[i].href) { surround.push({ kind: 'prev', label: '上一個分支', node: tree[i] }); break; }
    }
    for (let i = curIdx + 1; i < tree.length && tree[i].d >= me.d; i++) {
      if (tree[i].d === me.d && tree[i].href) { surround.push({ kind: 'next', label: '下一個分支', node: tree[i] }); break; }
    }
  }

  /* ---------- figures: an SVG template from ../_diagram/static/<key>.js drawn at a state with <ex-fig of="key" at="n" /> ---------- */
  const figHelpers = { methods: { on(n) { return this.step >= n; }, fresh(n) { return !this.final && this.step === n; } } };
  const figDefs = {};
  for (const [k, template] of Object.entries(figFiles)) {
    figDefs[k] = markRaw({
      template,
      props: { step: { type: Number, default: Infinity }, final: { type: Boolean, default: false } },
      mixins: [figHelpers],
    });
  }

  /* ---------- ?check: render self check read by scripts/check.py ---------- */
  const checkMode = new URLSearchParams(location.search).has('check');
  const source = document.getElementById('ex-content');
  const md = source ? source.textContent : '';
  function lint() {
    const out = problems.slice();
    const terms = cfg.terms || {};
    new Set([...md.matchAll(/\[\[([^\]|]+)/g)].map((m) => m[1].trim())).forEach((t) => { if (!terms[t]) out.push(`[[${t}]] 沒有寫進 terms`); });
    [...md.matchAll(/<ex-(bars|layout|timeline|matrix)\s+of="([^"]+)"/g)].forEach((m) => { if (!(cfg.data || {})[m[2]]) out.push(`<ex-${m[1]} of="${m[2]}"> 找不到 data.${m[2]}`); });
    new Set([...md.matchAll(FIG_RE)].map((m) => m[1])).forEach((k) => {
      if (figDefs[k]) return;
      out.push(figMissing[k] ? `<ex-fig of="${k}"> 找不到 ${figMissing[k]}` : `<ex-fig of="${k}">：${figPath(k)} 沒有呼叫 explainer.fig('${k}', …)`);
    });
    if (window.EX_TREE && window.EX_TREE.length && !window.EX_TREE.some((n) => n.href === pageFile)) out.push('_tree.js 沒有列出本頁');
    document.querySelectorAll('#app a[href^="#"]').forEach((a) => {
      const id = decodeURIComponent(a.getAttribute('href').slice(1));
      if (id && !document.getElementById(id)) out.push(`連結 #${id} 找不到目標`);
    });
    return out;
  }
  /* local files the page links to or embeds; check.py tests that they exist */
  const fileLinks = () => [...new Set([...document.querySelectorAll('#app a[href], #app iframe[src], #app img[src]')].map((a) => a.getAttribute('href') || a.getAttribute('src'))
    .filter((h) => !/^(#|[a-z][\w+.-]*:)/i.test(h)).map((h) => h.split('#')[0].split('?')[0]).filter(Boolean))];
  function figReport() {
    const out = new Set();
    const box = (e) => { const b = e.getBBox(); return { x: b.x, y: b.y, w: b.width, h: b.height }; };
    const hit = (a, b, pad) => a.x + pad < b.x + b.w && b.x + pad < a.x + a.w && a.y + pad < b.y + b.h && b.y + pad < a.y + a.h;
    const within = (a, b) => a.x >= b.x - 0.5 && a.y >= b.y - 0.5 && a.x + a.w <= b.x + b.w + 0.5 && a.y + a.h <= b.y + b.h + 0.5;
    const later = (a, b) => !!(b.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_FOLLOWING); /* a is drawn after b */
    document.querySelectorAll('.ex-main .ex-fig').forEach((wrap) => {
      const n = wrap.dataset.label || '圖';
      const svg = wrap.querySelector('svg');
      if (!svg || !svg.getClientRects().length) return;
      const vb = svg.viewBox.baseVal;
      const shapes = [...svg.querySelectorAll('rect, path, line, circle, ellipse, polygon, polyline')].filter((e) => !e.closest('defs'));
      const filled = shapes.filter((e) => !/^(path|line|polyline)$/.test(e.tagName) && getComputedStyle(e).fill !== 'none');
      const strokes = shapes.filter((e) => typeof e.getTotalLength === 'function' && getComputedStyle(e).fill === 'none');
      const texts = [...svg.querySelectorAll('text')];
      const name = (t) => t.textContent.trim().slice(0, 20);
      texts.forEach((t, i) => {
        const a = box(t);
        if (vb && vb.width && (a.x < vb.x - 1 || a.y < vb.y - 1 || a.x + a.w > vb.x + vb.width + 1 || a.y + a.h > vb.y + vb.height + 1)) out.add(`${n}：「${name(t)}」超出 viewBox`);
        texts.slice(i + 1).forEach((u) => { if (hit(a, box(u), 1)) out.add(`${n}：「${name(t)}」和「${name(u)}」重疊`); });
        filled.forEach((f) => {
          const b = box(f);
          if (!hit(a, b, 0.5)) return;
          if (later(f, t)) out.add(`${n}：「${name(t)}」被後畫的形狀蓋住`);
          else if (!within(a, b) && !filled.some((g) => g !== f && later(g, f) && !later(g, t) && within(a, box(g)))) out.add(`${n}：「${name(t)}」壓到框線`);
        });
        strokes.forEach((s) => {
          const len = s.getTotalLength();
          for (let d = 0; d <= len; d += 2) {
            const p = s.getPointAtLength(d);
            if (p.x <= a.x + 1 || p.x >= a.x + a.w - 1 || p.y <= a.y + 1 || p.y >= a.y + a.h - 1) continue;
            const covered = filled.some((f) => { if (!later(f, s)) return false; const b = box(f); return p.x >= b.x && p.x <= b.x + b.w && p.y >= b.y && p.y <= b.y + b.h; });
            if (!covered) { out.add(`${n}：線穿過「${name(t)}」`); break; }
          }
        });
      });
    });
    return [...out].slice(0, 30);
  }

  /* ---------- shared state ---------- */
  const q = new URLSearchParams(location.search);
  const store = reactive({ sections: [], flat: [], section: '', quiz: 0, revealAll: q.has('reveal') || checkMode });
  const isDark = ref(document.documentElement.classList.contains('dark'));
  const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const foldsOf = () => [...document.querySelectorAll('.ex-main details.ex-fold')];

  /* open every collapsed section around the target, then scroll to it */
  function jump(id, behavior) {
    const el = document.getElementById(id);
    if (!el) return;
    for (let d = el.closest('details'); d; d = d.parentElement && d.parentElement.closest('details')) d.open = true;
    el.scrollIntoView({ block: 'start', behavior: behavior || (reduceMotion() ? 'auto' : 'smooth') });
    history.replaceState(null, '', '#' + encodeURIComponent(id));
  }

  const app = createApp({
    setup() {
      provide('store', store);
      const folds = ref(0);
      const anyOpen = ref(true);
      function syncFolds() { const all = foldsOf(); folds.value = all.length; anyOpen.value = all.some((d) => d.open); }
      function setAll(open) { foldsOf().forEach((d) => { d.open = open; }); syncFolds(); }
      function toggleTheme() {
        isDark.value = !isDark.value;
        document.documentElement.classList.toggle('dark', isDark.value);
        try { localStorage.setItem('ex-theme', isDark.value ? 'dark' : 'light'); } catch (e) {}
      }
      let raf = 0;
      function track() {
        raf = 0;
        const line = Math.min(innerHeight * 0.3, 300);
        const atEnd = innerHeight + scrollY >= document.documentElement.scrollHeight - 2;
        let cur = store.flat.length ? store.flat[0].id : '';
        for (const x of store.flat) if (x.el.getClientRects().length && x.el.getBoundingClientRect().top < (atEnd ? innerHeight * 0.85 : line)) cur = x.id;
        store.section = cur;
      }
      function buildOutline() {
        const out = [];
        document.querySelectorAll('.ex-main .ex-prose h2[id], .ex-main .ex-prose details.ex-fold-h > summary > h3[id]').forEach((el) => {
          if (el.closest('.ex-q, .ex-reveal')) return;
          const item = { id: el.id, title: el.textContent.trim(), el, children: [] };
          if (el.tagName === 'H2' || !out.length) out.push(item); else out[out.length - 1].children.push(item);
        });
        const flat = out.flatMap((x) => [x].concat(x.children));
        flat.forEach((x, i) => { x.i = i; });
        store.sections = out;
        store.flat = flat;
      }
      const onScroll = () => { if (!raf) raf = requestAnimationFrame(track); };
      const onToggle = (e) => { if (e.target.matches && e.target.matches('details.ex-fold')) { syncFolds(); onScroll(); } };
      const onHash = () => jump(decodeURIComponent(location.hash.slice(1)));
      /* in-page links open the sections that hide their target; a term inside a summary does not toggle it */
      const onClick = (e) => {
        if (e.target.closest('summary') && e.target.closest('.ex-term')) { e.preventDefault(); return; }
        const a = e.target.closest('a[href^="#"]');
        if (a && a.closest('#app') && a.getAttribute('href').length > 1) { e.preventDefault(); jump(decodeURIComponent(a.getAttribute('href').slice(1))); }
      };
      onMounted(() => {
        addEventListener('scroll', onScroll, { passive: true });
        addEventListener('resize', onScroll);
        addEventListener('hashchange', onHash);
        document.addEventListener('toggle', onToggle, true);
        document.addEventListener('click', onClick);
        if (store.revealAll) document.documentElement.classList.add('ex-static');
        if (checkMode) document.fonts.ready.then(() => setTimeout(() => mathWait.then(() => nextTick(() => report({ errors, warnings: lint(), figure: figReport(), links: fileLinks() }))), 300));
        nextTick(() => {
          buildOutline();
          syncFolds();
          if (location.hash.length > 1) jump(decodeURIComponent(location.hash.slice(1)), 'auto');
          track();
        });
      });
      onBeforeUnmount(() => {
        removeEventListener('scroll', onScroll); removeEventListener('resize', onScroll); removeEventListener('hashchange', onHash);
        document.removeEventListener('toggle', onToggle, true); document.removeEventListener('click', onClick);
      });
      document.title = cfg.title;
      const navOpen = ref(false);
      addEventListener('keydown', (e) => { if (e.key === 'Escape') navOpen.value = false; });
      return { cfg, store, crumbs, surround, trail, trailHref, prereqHref, toggleTheme, isDark, navOpen, folds, anyOpen, setAll };
    },
    template: `
<header class="ex-header">
  <div class="ex-header-in">
    <div class="ex-head-l">
    <button class="ex-icon-btn ex-menu-btn" type="button" @click="navOpen = !navOpen" :aria-expanded="navOpen" aria-label="導覽">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h10"/></svg>
    </button>
    <nav class="ex-crumbs" aria-label="所在位置">
      <template v-for="(c, i) in crumbs" :key="i">
        <a v-if="c.href && !c.current" :href="c.href">{{ c.t }}</a>
        <span v-else aria-current="page">{{ c.t }}</span>
        <svg v-if="i < crumbs.length - 1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
      </template>
    </nav>
    </div>
    <button class="ex-icon-btn" type="button" @click="toggleTheme" :aria-label="isDark ? '切換到亮色模式' : '切換到暗色模式'">
      <svg v-if="isDark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
      <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
    </button>
  </div>
</header>
<template v-if="navOpen">
  <div class="ex-scrim" @click="navOpen = false"></div>
  <div class="ex-drop" role="dialog" aria-label="導覽" @keydown.esc="navOpen = false"><ex-nav @pick="navOpen = false"></ex-nav></div>
</template>
<div class="ex-grid">
  <aside class="ex-left" aria-label="導覽">
    <div class="ex-left-in"><ex-nav></ex-nav></div>
  </aside>
  <main class="ex-main">
    <div class="ex-page-head">
      <nav v-if="trail.length" class="ex-trail" aria-label="追問路徑">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/></svg>
        <template v-for="(t, i) in trail" :key="i"><a :href="trailHref(i)">{{ t.t }}</a><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></template>
        <span aria-current="page">{{ cfg.title }}</span>
      </nav>
      <h1>{{ cfg.title }}</h1>
      <dl class="ex-meta">
        <div v-if="cfg.assumes"><dt>假設你已懂</dt><dd>
          <template v-if="Array.isArray(cfg.assumes)"><template v-for="(a, i) in cfg.assumes" :key="i"><span v-if="i">、</span><a v-if="a.href" :href="prereqHref(a.href)">{{ a.t }}</a><span v-else>{{ a }}</span></template></template>
          <template v-else>{{ cfg.assumes }}</template>
        </dd></div>
        <div v-if="cfg.approach"><dt>這次怎麼走</dt><dd>{{ cfg.approach }}</dd></div>
        <div v-if="cfg.env"><dt>動手環境</dt><dd>{{ cfg.env }}</dd></div>
      </dl>
      <div v-if="folds" class="ex-tools">
        <button type="button" class="ex-tool-btn" @click="setAll(!anyOpen)">
          <svg v-if="anyOpen" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m7 20 5-5 5 5"/><path d="m7 4 5 5 5-5"/></svg>
          <svg v-else width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>
          {{ anyOpen ? '全部收合' : '全部展開' }}
        </button>
      </div>
    </div>
    <ex-content></ex-content>
    <nav v-if="surround.length" class="ex-surround" aria-label="相鄰頁面">
      <template v-for="s in surround" :key="s.kind">
        <a v-if="s.kind === 'up'" class="ex-up" :href="s.node.href"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>{{ s.label }}：{{ s.node.t }}</a>
        <a v-else class="ex-sib" :class="s.kind" :href="s.node.href"><small>{{ s.label }}</small>{{ s.node.t }}</a>
      </template>
    </nav>
  </main>
</div>`
  });


  /* ---------- navigation (left rail and dropdown) ---------- */
  app.component('ex-outline', {
    setup() {
      const store = inject('store');
      const cur = computed(() => { const x = store.flat.find((y) => y.id === store.section); return x ? x.i : -1; });
      const cls = (x) => ({ done: x.i < cur.value, active: x.i === cur.value, within: x.children && x.children.some((c) => c.i === cur.value) });
      /* only the h2 being read lists its h3s; the others stay one line each */
      const isOpen = (x) => x.i === cur.value || x.children.some((c) => c.i === cur.value);
      return { store, cls, isOpen };
    },
    template: `
<ol class="ex-outline" aria-label="本頁進度">
  <li v-for="x in store.sections" :key="x.id">
    <a :href="'#' + x.id" :class="cls(x)">{{ x.title }}</a>
    <ol v-if="x.children.length && isOpen(x)">
      <li v-for="c in x.children" :key="c.id"><a :href="'#' + c.id" :class="cls(c)">{{ c.title }}</a></li>
    </ol>
  </li>
</ol>`
  });
  app.component('ex-tree-list', {
    props: { nodes: Array, depth: { type: Number, default: 0 } },
    template: `
<ul class="ex-tree" :class="{ 'is-nested': depth > 0 }">
  <li v-for="n in nodes" :key="n.i">
    <span v-if="n.current" class="node is-current" aria-current="page"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8M16 17H8M10 9H8"/></svg><span>{{ n.t }}</span></span>
    <a v-else-if="n.href" class="node" :href="n.href"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8M16 17H8M10 9H8"/></svg><span>{{ n.t }}</span></a>
    <span v-else class="node is-pending" title="Not yet expanded"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.1 2.18a10 10 0 0 1 3.8 0"/><path d="M13.9 21.82a10 10 0 0 1-3.8 0"/><path d="M17.61 3.72a10 10 0 0 1 2.69 2.7"/><path d="M2.18 13.9a10 10 0 0 1 0-3.8"/><path d="M20.28 17.61a10 10 0 0 1-2.7 2.69"/><path d="M21.82 10.1a10 10 0 0 1 0 3.8"/><path d="M3.72 6.39a10 10 0 0 1 2.7-2.69"/><path d="M6.39 20.28a10 10 0 0 1-2.69-2.7"/></svg><span>{{ n.t }}</span><span class="sr-only">(Not yet expanded)</span></span>
    <ex-tree-list v-if="n.children.length" :nodes="n.children" :depth="depth + 1"></ex-tree-list>
  </li>
</ul>`
  });
  app.component('ex-nav', {
    emits: ['pick'],
    setup() { return { treeNodes, indexHref, hasTree: !!(window.EX_TREE && window.EX_TREE.length && tree.length > 1) }; },
    template: `
<div @click="$event.target.closest('a') && $emit('pick')">
  <template v-if="indexHref"><a class="ex-nav-index" :href="indexHref"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>All Topics</a><div class="ex-nav-sep" aria-hidden="true"></div></template>
  <template v-if="hasTree">
    <p class="ex-nav-h"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 5h4M3 12h4M3 19h4M10 5h11M14 12h7M14 19h7M7 5v14"/></svg>主題樹</p>
    <ex-tree-list :nodes="treeNodes"></ex-tree-list>
    <div class="ex-nav-sep" aria-hidden="true"></div>
  </template>
  <p class="ex-nav-h"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>本頁進度</p>
  <ex-outline></ex-outline>
</div>`
  });

  /* ---------- content ---------- */
  app.component('ex-content', {
    template: render(md),
    compilerOptions: { delimiters: ['{%%', '%%}'] },
  });

  /* ---------- figure in the text: <ex-fig of="key" at="2" caption="…" />; without at it shows the final state ---------- */
  app.component('ex-fig', {
    props: { of: String, at: [String, Number], caption: String },
    setup(props) {
      const el = ref(null);
      const has = props.at !== undefined && props.at !== null && props.at !== '';
      const step = has ? Number(props.at) : Infinity;
      const label = `圖 ${props.of}${has ? ' 第 ' + props.at + ' 步' : ''}`;
      /* draw at most at the viewBox's own scale, so a narrow figure does not blow up across the column */
      onMounted(() => {
        const svg = el.value && el.value.querySelector('svg');
        const w = svg && svg.viewBox && svg.viewBox.baseVal && svg.viewBox.baseVal.width;
        if (w) svg.style.maxWidth = w + 'px';
      });
      return { el, def: figDefs[props.of], step, final: !has, label };
    },
    template: `
<figure ref="el" class="ex-ig ex-fig" :data-label="label"><component v-if="def" :is="def" :step="step" :final="final"></component><figcaption v-if="caption">{{ caption }}</figcaption></figure>`
  });

  /* ---------- reveal ---------- */
  app.component('ex-reveal', {
    props: { arg: String },
    setup() {
      const store = inject('store');
      const local = ref(false);
      const open = computed(() => local.value || store.revealAll);
      return { open, show: () => { local.value = true; } };
    },
    template: `
<div class="ex-reveal">
  <button v-if="!open" type="button" class="ex-reveal-btn" @click="show" aria-expanded="false">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>
    {{ arg || '想好了，揭曉' }}
  </button>
  <div v-else class="ex-reveal-body"><slot></slot></div>
</div>`
  });

  /* ---------- term recall ---------- */
  let termSeq = 0;
  app.component('ex-term', {
    props: { t: String, first: { type: [Boolean, String], default: false } },
    setup(props) {
      const show = ref(false);
      const entry = (cfg.terms || {})[props.t];
      const def = typeof entry === 'string' ? entry : (entry && entry.def) || '';
      const href = entry && entry.href ? prereqHref(entry.href) : null;
      const isFirst = props.first !== false && !href;
      const id = 'ex-pop-' + (++termSeq);
      const out = (e) => { if (!e.currentTarget.contains(e.relatedTarget)) show.value = false; };
      return { show, isFirst, def, href, id, out };
    },
    template: `
<span v-if="isFirst || !def" class="ex-term-first"><slot></slot></span>
<span v-else class="ex-term-wrap" @keydown.esc="show = false" @mouseenter="show = true" @mouseleave="show = false" @focusin="show = true" @focusout="out"><span
  class="ex-term" tabindex="0"
  :role="href ? 'button' : null" :aria-expanded="href ? String(show) : null" :aria-controls="href ? id : null" :aria-describedby="href ? null : id"
  @keydown.enter.prevent="show = !show" @keydown.space.prevent="show = !show"><slot></slot></span><span
  v-show="show" class="ex-pop-wrap" :id="id"><span class="ex-pop" :role="href ? null : 'tooltip'"><b>{{ t }}</b>{{ def }}<br v-if="href"><a v-if="href" class="ex-pop-link" :href="href">看前提頁<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></span></span></span>`
  });

  /* ---------- quiz ---------- */
  app.component('ex-q', {
    props: { arg: String },
    setup() {
      const store = inject('store');
      const n = ++store.quiz;
      const open = ref(false);
      return { n, open };
    },
    template: `
<div class="ex-q" :id="n === 1 ? 'quiz' : null">
  <p class="ex-q-text"><span class="ex-q-n">{{ n }}.</span><span><slot name="title">{{ arg }}</slot></span></p>
  <button v-if="!open" type="button" class="ex-reveal-btn" @click="open = true" aria-expanded="false">看推理路徑</button>
  <div v-else class="ex-q-ans"><slot></slot></div>
</div>`
  });

  /* ---------- built-in infographics: <ex-bars of="key" /> etc., data in cfg.data[key] ---------- */
  const igData = (key) => (cfg.data || {})[key] || {};
  const tone = (t) => 'ex-tone-' + (t || 'neutral');
  const num = (n) => (n >= 10 ? Math.round(n).toLocaleString('en-US') : String(Math.round(n * 10) / 10));

  app.component('ex-bars', {
    props: { of: String },
    setup(props) {
      const d = igData(props.of);
      const rows = d.rows || [];
      const vals = rows.map((r) => r.value);
      const log = d.scale === 'log';
      const max = Math.max(...vals), min = Math.min(...vals);
      const lo = log ? Math.log(min) - 0.12 * (Math.log(max) - Math.log(min) || 1) : 0;
      const w = (v) => (log ? (Math.log(v) - lo) / (Math.log(max) - lo) : v / max) * 100;
      const ratio = (i) => {
        const a = rows[i - 1].value, b = rows[i].value;
        return a >= b ? '÷ ' + num(a / b) : '× ' + num(b / a);
      };
      const caption = [d.caption, log ? '長度採對數刻度' : ''].filter(Boolean).join('；');
      return { d, rows, w, ratio, caption, tone };
    },
    template: `
<figure class="ex-ig ex-bars">
  <div v-for="(r, i) in rows" :key="i" class="ex-bars-row">
    <span class="ex-bars-k">{{ r.label }}</span>
    <div class="ex-bars-lane">
      <span class="ex-bars-bar" :class="tone(r.tone)" :style="{ width: 'calc(' + w(r.value) + '% * 0.72)' }"></span>
      <span class="ex-bars-v">{{ r.display || r.value }}</span>
      <span v-if="d.ratios && i" class="ex-bars-r">{{ ratio(i) }}</span>
    </div>
  </div>
  <figcaption v-if="caption">{{ caption }}</figcaption>
</figure>`
  });

  app.component('ex-layout', {
    props: { of: String },
    setup(props) {
      const d = igData(props.of);
      const segs = d.segments || [];
      const total = d.total || segs.reduce((n, x) => n + x.len, 0);
      const unit = d.unit || 'bit';
      let at = 0;
      const placed = segs.map((x) => {
        const a = at; at += x.len;
        const range = d.order === 'lsb' ? [a, a + x.len - 1] : [total - 1 - a, total - a - x.len];
        return Object.assign({}, x, { range });
      });
      return { d, placed, unit, tone };
    },
    template: `
<figure class="ex-ig ex-lay">
  <div class="ex-lay-strip" role="list">
    <div v-for="(x, i) in placed" :key="i" class="ex-lay-seg" :class="tone(x.tone)" :style="{ flex: x.len }" role="listitem">
      <span class="ex-lay-range">{{ x.range[0] }}<template v-if="x.range[0] !== x.range[1]"> – {{ x.range[1] }}</template></span>
      <b class="ex-lay-val">{{ x.value }}</b>
      <span class="ex-lay-lbl">{{ x.label }}</span>
      <span class="ex-lay-len">{{ x.len }} {{ unit }}</span>
    </div>
  </div>
  <figcaption v-if="d.caption">{{ d.caption }}</figcaption>
</figure>`
  });

  app.component('ex-timeline', {
    props: { of: String },
    setup(props) {
      const d = igData(props.of);
      const rows = d.rows || [];
      const unit = d.unit || '';
      const total = (r) => r.segments.reduce((n, x) => n + x.len, 0);
      const max = Math.max(...rows.map(total));
      const legend = [];
      rows.forEach((r) => r.segments.forEach((x) => {
        if (!legend.some((l) => l.label === x.label)) legend.push({ label: x.label, tone: x.tone });
      }));
      return { d, rows, unit, total, max, legend, tone, num };
    },
    template: `
<figure class="ex-ig ex-tl">
  <div v-for="(r, i) in rows" :key="i" class="ex-tl-row">
    <span class="ex-tl-k">{{ r.label }}</span>
    <div class="ex-tl-lane">
      <span class="ex-tl-track" :style="{ width: (total(r) / max * 78) + '%' }">
        <span v-for="(x, j) in r.segments" :key="j" class="ex-tl-seg" :class="tone(x.tone)" :style="{ flexGrow: x.len }" :title="x.label + '：' + x.len + ' ' + unit"></span>
      </span>
      <span class="ex-tl-total">{{ num(total(r)) }} {{ unit }}</span>
    </div>
  </div>
  <ul class="ex-tl-legend">
    <li v-for="l in legend" :key="l.label"><span class="ex-tl-key" :class="tone(l.tone)"></span>{{ l.label }}</li>
  </ul>
  <figcaption v-if="d.caption">{{ d.caption }}</figcaption>
</figure>`
  });

  app.component('ex-matrix', {
    props: { of: String },
    setup(props) {
      const d = igData(props.of);
      const txt = (v) => (typeof v === 'object' && v ? v.t : v);
      const cls = (v) => (typeof v === 'object' && v && v.tone ? 'is-' + v.tone : '');
      return { d, txt, cls };
    },
    template: `
<figure class="ex-ig ex-mx">
  <table>
    <thead><tr><th scope="col"><span class="sr-only">面向</span></th><th v-for="c in d.cols" :key="c" scope="col">{{ c }}</th></tr></thead>
    <tbody><tr v-for="r in d.rows" :key="r.k"><th scope="row">{{ r.k }}</th><td v-for="(v, i) in r.v" :key="i" :class="cls(v)">{{ txt(v) }}</td></tr></tbody>
  </table>
  <figcaption v-if="d.caption">{{ d.caption }}</figcaption>
</figure>`
  });

  /* ---------- page components ---------- */
  for (const [name, comp] of Object.entries(cfg.components || {})) app.component(name, comp);

  app.config.errorHandler = (e) => { errors.push(String(e)); console.error(e); };
  app.mount('#app');

  /* math with KaTeX: loaded only when the page has a formula; the raw TeX stays in place until it arrives or if the CDN fails */
  (function () {
    const KATEX = 'https://cdn.jsdelivr.net/npm/katex@0.19.1/dist/';
    let loading = null;
    const paint = () => {
      const nodes = [...document.querySelectorAll('#app .ex-math:not([data-done])')];
      if (!nodes.length) return;
      if (!loading) {
        el('link', { rel: 'stylesheet', href: KATEX + 'katex.min.css' });
        loading = load(KATEX + 'katex.min.js').then(() => true, () => false);
      }
      mathWait = loading.then((ok) => {
        if (!ok) { if (checkMode) problems.push('無法載入 CDN 的 KaTeX'); return; }
        for (const n of nodes) {
          if (n.hasAttribute('data-done') || !n.isConnected) continue;
          n.setAttribute('data-done', '');
          const tex = n.dataset.tex, display = n.classList.contains('ex-math-d');
          if (/[\u3000-\u303f\u3400-\u9fff\uff00-\uffef]/.test(tex)) problems.push('數學式裡有中文：' + tex.slice(0, 40));
          try { katex.renderToString(tex, { displayMode: display, throwOnError: true }); }
          catch (e) { problems.push('數學式無法解析：' + tex.slice(0, 40) + '（' + String(e.message || e).replace(/^KaTeX parse error:\s*/, '') + '）'); }
          katex.render(tex, n, { displayMode: display, throwOnError: false });
        }
      });
    };
    new MutationObserver(paint).observe(document.getElementById('app'), { childList: true, subtree: true });
    paint();
  })();

  /* syntax highlight with Shiki: async after render, plain text until it arrives or if the CDN fails */
  (function () {
    const cache = new Map();
    let shiki = null;
    const paint = async () => {
      const blocks = [...document.querySelectorAll('#app pre code[data-lang]:not([data-hl])')];
      if (!blocks.length) return;
      if (!shiki) shiki = import('https://cdn.jsdelivr.net/npm/shiki@3.2.1/+esm').catch(() => null);
      const mod = await shiki;
      if (!mod) return;
      for (const code of blocks) {
        if (code.hasAttribute('data-hl')) continue;
        code.setAttribute('data-hl', '');
        const lang = code.dataset.lang, text = code.textContent, key = lang + '\0' + text;
        try {
          if (!cache.has(key)) cache.set(key, mod.codeToHtml(text, { lang, themes: { light: 'github-light', dark: 'github-dark' }, defaultColor: false }));
          const inner = new DOMParser().parseFromString(await cache.get(key), 'text/html').querySelector('code');
          if (inner && code.isConnected) code.innerHTML = inner.innerHTML;
        } catch (e) { /* unknown language: keep plain text */ }
      }
    };
    new MutationObserver(paint).observe(document.getElementById('app'), { childList: true, subtree: true });
    paint();
  })();
}
})();
