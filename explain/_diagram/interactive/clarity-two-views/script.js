const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const theme = (() => {
  const query = window.matchMedia("(prefers-color-scheme: dark)");
  let fixed = false;
  const set = (t) => {
    if (document.documentElement.dataset.theme === t) return;
    document.documentElement.dataset.theme = t;
    document.dispatchEvent(new Event("themechange"));
  };
  set(query.matches ? "dark" : "light");
  query.addEventListener("change", (e) => { if (!fixed) set(e.matches ? "dark" : "light"); });
  window.addEventListener("message", (e) => {
    const d = e.data;
    if (e.source !== window.parent || !d || d.type !== "theme" || (d.theme !== "light" && d.theme !== "dark")) return;
    fixed = true;
    set(d.theme);
  });
  return () => document.documentElement.dataset.theme;
})();

function token(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function fitCanvas(canvas) {
  const r = canvas.getBoundingClientRect();
  if (r.width === 0 || r.height === 0) return null;
  const dpr = window.devicePixelRatio || 1;
  const pw = Math.round(r.width * dpr), ph = Math.round(r.height * dpr);
  if (canvas.width !== pw || canvas.height !== ph) {
    canvas.width = pw;
    canvas.height = ph;
  }
  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, w: r.width, h: r.height };
}

function onRedraw(fn) {
  let queued = false;
  const run = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; fn(); });
  };
  new ResizeObserver(run).observe(document.body);
  document.addEventListener("themechange", run);
  if (document.fonts) document.fonts.ready.then(run);
}

function animate(frame, { playing = !REDUCED, onChange = () => {} } = {}) {
  let visible = true, last = 0, id = 0, t = 0;
  const tick = (now) => {
    const dt = last ? Math.min(0.05, (now - last) / 1000) : 0;
    last = now;
    t += dt;
    frame(dt, t);
    id = requestAnimationFrame(tick);
  };
  const sync = () => {
    const run = ctl.playing && visible && !document.hidden;
    if (run && !id) { last = 0; id = requestAnimationFrame(tick); }
    if (!run && id) { cancelAnimationFrame(id); id = 0; }
  };
  const ctl = {
    playing,
    play() { ctl.playing = true; sync(); onChange(true); },
    pause() { ctl.playing = false; sync(); onChange(false); },
    toggle() { ctl.playing ? ctl.pause() : ctl.play(); },
  };
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; sync(); }).observe(document.body);
  document.addEventListener("visibilitychange", sync);
  sync();
  return ctl;
}

const K = Math.log(100);
const MAX_D = 20;
const FISH = [
  { d: 1, lane: 0 },
  { d: 2.5, lane: 1 },
  { d: 5, lane: 0 },
  { d: 10, lane: 1 },
  { d: 15, lane: 0 },
];

const state = { D: 5 };

const $ = (id) => document.getElementById(id);
const cv = $("cv");
const plot = $("plot");
const slider = $("clarity");
const out = $("o-d");
const el = { tTop: $("t-top"), tBot: $("t-bot"), pH: $("p-h"), pD: $("p-d"), pW1: $("p-w1"), pW2: $("p-w2"), axisT: $("axis-t") };

const ticks = [0, 5, 10, 15, 20].map((v) => {
  const s = document.createElement("span");
  s.className = "tick";
  s.dataset.overlay = "";
  s.textContent = String(v);
  $("ticks").append(s);
  return s;
});
const ftags = FISH.map(() => {
  const s = document.createElement("span");
  s.className = "ftag";
  s.dataset.overlay = "";
  $("fish-tags").append(s);
  return s;
});

const tau = (d, D) => Math.exp((-K * d) / D);

function pct(t) {
  const v = t * 100;
  if (v < 0.001) return "≈0%";
  return `${Number(v.toPrecision(2))}%`;
}

const probe = document.createElement("canvas").getContext("2d");
function rgb(css) {
  probe.fillStyle = "#000";
  probe.fillStyle = css;
  const s = probe.fillStyle;
  if (s[0] === "#") return [1, 3, 5].map((i) => parseInt(s.slice(i, i + 2), 16) / 255);
  return s.match(/[\d.]+/g).slice(0, 3).map((n) => Number(n) / 255);
}
const css = (c) => `rgb(${c.map((v) => Math.round(Math.max(0, Math.min(1, v)) * 255)).join(",")})`;

function seen(c, t, P) {
  return c.map((v, i) => {
    const tint = 1 + (P.shallow[i] - 1) * (1 - t);
    return t * tint * v + (1 - t) * P.deep[i];
  });
}

function rand(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let r = Math.imul(s ^ (s >>> 15), 1 | s);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}
const PEBBLES = (() => {
  const r = rand(7);
  return Array.from({ length: 160 }, () => ({ x: r(), y: 0.2 + r() * 0.6, rx: 0.6 + r() * 0.8, ry: 0.5 + r() * 0.4, k: r() }));
})();

function derive() {
  const D = state.D;
  return {
    D,
    fish: FISH.map((f) => ({ ...f, t: tau(f.d, D) })),
    edge: tau(D, D),
  };
}

function layout(w, h) {
  const narrow = w < 520;
  const x0 = narrow ? 26 : 32;
  const x1 = w - (narrow ? 14 : 20);
  const titleH = 24;
  const bandH = narrow ? 16 : 20;
  const axisH = 36;
  const rest = h - titleH - bandH - axisH;
  const secH = Math.max(40, Math.round(rest * 0.36));
  const yBand = titleH;
  const yS = yBand + bandH;
  const yBase = yS + secH;
  const yB0 = yBase + axisH;
  const yB1 = h;
  const X = (d) => x0 + (d / MAX_D) * (x1 - x0);
  const toD = (x) => ((x - x0) / (x1 - x0)) * MAX_D;
  const bedY = (d) => yS + (Math.min(d, MAX_D) / MAX_D) * secH;
  const fishL = narrow ? 22 : 34;
  return { w, h, narrow, x0, x1, titleH, bandH, axisH, secH, yBand, yS, yBase, yB0, yB1, X, toD, bedY, fishL };
}

function band(ctx, G, P, D, y, xs, xe) {
  const H = G.bandH;
  for (let x = Math.floor(xs); x < xe; x++) {
    const d = Math.max(0, G.toD(x + 0.5));
    ctx.fillStyle = css(seen(P.sand, tau(d, D), P));
    ctx.fillRect(x, y, 1.02, H);
  }
  const unit = G.narrow ? 2.2 : 2.8;
  PEBBLES.forEach((p) => {
    const px = p.x * G.w;
    if (px < xs + 2 || px > xe - 2) return;
    const d = Math.max(0, G.toD(px));
    const c = p.k < 0.75 ? P.pebble : P.sand.map((v) => v * 1.08);
    ctx.fillStyle = css(seen(c, tau(d, D), P));
    ctx.beginPath();
    ctx.ellipse(px, y + p.y * H, p.rx * unit, p.ry * unit, 0, 0, Math.PI * 2);
    ctx.fill();
  });
}

function arrow(ctx, x1, y1, x2, y2, color, head) {
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 2;
  ctx.setLineDash([]);
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  const len = Math.hypot(x2 - x1, y2 - y1);
  if (len < head * 2) return;
  const ux = (x2 - x1) / len, uy = (y2 - y1) / len;
  ctx.beginPath();
  ctx.moveTo(x2 + ux, y2 + uy);
  ctx.lineTo(x2 - ux * head * 1.6 - uy * head, y2 - uy * head * 1.6 + ux * head);
  ctx.lineTo(x2 - ux * head * 1.6 + uy * head, y2 - uy * head * 1.6 - ux * head);
  ctx.closePath();
  ctx.fill();
}

function fishPath(ctx, x, y, L) {
  const H = L * 0.42;
  ctx.beginPath();
  ctx.ellipse(x - L * 0.08, y, L * 0.38, H / 2, 0, 0, Math.PI * 2);
  ctx.moveTo(x + L * 0.22, y);
  ctx.lineTo(x + L * 0.5, y - H * 0.5);
  ctx.lineTo(x + L * 0.5, y + H * 0.5);
  ctx.closePath();
}

function eye(ctx, x, y, color, bg, ring) {
  ctx.fillStyle = bg;
  ctx.strokeStyle = ring;
  ctx.lineWidth = 1;
  ctx.setLineDash([]);
  ctx.beginPath();
  ctx.arc(x, y, 12, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 1.5;
  ctx.setLineDash([]);
  ctx.beginPath();
  ctx.moveTo(x - 8, y);
  ctx.quadraticCurveTo(x, y - 8, x + 8, y);
  ctx.quadraticCurveTo(x, y + 8, x - 8, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x + 1.5, y, 2.6, 0, Math.PI * 2);
  ctx.fill();
}

function place(node, x, y) {
  node.style.left = `${Math.round(x)}px`;
  node.style.top = `${Math.round(y)}px`;
}

function render() {
  const c = fitCanvas(cv);
  if (!c) return;
  const { ctx, w, h } = c;
  const G = layout(w, h);
  const S = derive();
  const P = {
    deep: rgb(token("--water-deep")),
    shallow: rgb(token("--water-shallow")),
    sand: rgb(token("--sand")),
    pebble: rgb(token("--pebble")),
    fish: rgb(token("--fish")).map((v) => (theme() === "light" ? v + (1 - v) * 0.4 : v)),
    dist: token("--dist"),
    line: token("--line"),
    muted: token("--muted"),
    text: token("--text"),
    card: token("--card"),
  };
  const xD = G.X(S.D);
  ctx.clearRect(0, 0, w, h);

  ctx.fillStyle = css(P.sand);
  ctx.globalAlpha = 0.22;
  ctx.fillRect(0, G.yS, w, G.secH);
  ctx.globalAlpha = 1;

  ctx.fillStyle = css(P.deep);
  ctx.globalAlpha = 0.82;
  ctx.beginPath();
  ctx.moveTo(G.x0, G.yS);
  ctx.lineTo(G.x1, G.yBase);
  ctx.lineTo(w, G.yBase);
  ctx.lineTo(w, G.yS);
  ctx.closePath();
  ctx.fill();
  ctx.globalAlpha = 1;

  ctx.strokeStyle = css(P.sand);
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(0, G.yS);
  ctx.lineTo(G.x0, G.yS);
  ctx.lineTo(G.x1, G.yBase);
  ctx.lineTo(w, G.yBase);
  ctx.stroke();

  band(ctx, G, P, S.D, G.yBand, 0, w);

  ctx.strokeStyle = css(P.shallow);
  ctx.globalAlpha = 0.7;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(G.x0, G.yS + 0.5);
  ctx.lineTo(w, G.yS + 0.5);
  ctx.stroke();
  ctx.globalAlpha = 1;

  ctx.strokeStyle = P.line;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, G.yBase + 0.5);
  ctx.lineTo(w, G.yBase + 0.5);
  [0, 5, 10, 15, 20].forEach((v) => {
    const x = Math.round(G.X(v)) + 0.5;
    ctx.moveTo(x, G.yBase);
    ctx.lineTo(x, G.yBase + 4);
  });
  ctx.stroke();

  const r = 8;
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(0, G.yB0, w, G.yB1 - G.yB0, r);
  ctx.clip();
  ctx.fillStyle = css(P.deep);
  ctx.fillRect(0, G.yB0, w, G.yB1 - G.yB0);
  band(ctx, G, P, S.D, G.yB1 - G.bandH, 0, w);
  ctx.restore();

  const top = G.yB0 + 26;
  const bottom = G.yB1 - G.bandH - 4;
  const mid = (top + bottom) / 2;
  const gap = Math.max(22, Math.min(40, (bottom - top) * 0.27));
  const laneY = [mid - gap, mid + gap];

  ctx.strokeStyle = P.dist;
  ctx.lineWidth = 1.25;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(xD, G.bedY(S.D));
  ctx.lineTo(xD, G.yBase);
  ctx.moveTo(xD, G.yB0);
  ctx.lineTo(xD, G.yB1);
  ctx.stroke();
  ctx.setLineDash([]);

  arrow(ctx, xD, G.bedY(S.D), xD, G.yS + 1, P.dist, 4);

  S.fish.forEach((f, i) => {
    const fx = G.X(f.d), fy = laneY[f.lane];
    fishPath(ctx, fx, fy, G.fishL);
    ctx.fillStyle = css(seen(P.fish, f.t, P));
    ctx.fill();
    if (f.t < 0.0101) {
      ctx.strokeStyle = P.muted;
      ctx.globalAlpha = 0.6;
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 2]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.globalAlpha = 1;
    }
    const tag = ftags[i];
    tag.textContent = pct(f.t);
    tag.classList.toggle("gone", f.t < 0.0101);
    const th = 17, half = G.fishL * 0.21;
    place(tag, fx, f.lane === 0 ? fy - half - 3 - th : fy + half + 3);
  });

  arrow(ctx, xD, mid, G.x0 + 14, mid, P.dist, 4);
  eye(ctx, G.x0, mid, P.text, P.card, P.line);

  place(el.tTop, 0, 2);
  place(el.tBot, 4, G.yB0 + 4);

  const pw = el.pH.offsetWidth, ph = el.pH.offsetHeight;
  const arrowMid = (G.yS + G.bedY(S.D)) / 2;
  const hy = Math.min(G.yBase - ph - 2, Math.max(G.yS + 3, arrowMid - ph / 2));
  place(el.pH, xD + 6 + pw <= w ? xD + 6 : xD - 6 - pw, hy);

  const dw = el.pD.offsetWidth, dh = el.pD.offsetHeight;
  place(el.pD, xD + 6 + dw <= w - 4 ? xD + 6 : xD - 6 - dw, mid - dh / 2);

  el.pW1.hidden = false;
  el.pW2.hidden = false;
  const w1 = el.pW1.offsetWidth;
  const wx = w - w1;
  el.pW1.hidden = xD + 10 > wx;
  el.pW2.hidden = xD + 10 > wx - 4;
  place(el.pW1, wx, (G.titleH - el.pW1.offsetHeight) / 2);
  place(el.pW2, wx - 4, G.yB0 + 5);

  ticks.forEach((s, i) => place(s, G.X(i * 5), G.yBase + 5));
  place(el.axisT, G.x0 - 4, G.yBase + 19);

  cv.setAttribute("aria-label", `岸上剖面與水下視角：清澈度 ${S.D} 公尺時，水深 ${S.D} 公尺以下看不到底，${S.D} 公尺外的魚看不見`);
}

function update() {
  state.D = Number(slider.value);
  out.value = `${state.D.toFixed(1)} m`;
  out.textContent = out.value;
  render();
}

slider.addEventListener("input", update);
update();
onRedraw(render);
