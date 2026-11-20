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

const VIEW_W = 8;
const X0 = 0.37, Z0 = 0.21;
const D_MAX = 1.25, BINS = 50;

const S = {
  dens: 0.7, ao: 2, n: 3, I: 3,
  showPt: true, showEdge: false, showGrid: false,
  probe: { fx: 0.7, fy: 0.36 },
  aoDir: 1,
};

const $ = (id) => document.getElementById(id);
const cv = $("cv"), cvCell = $("cv-cell"), cvCurve = $("cv-curve"), tag = $("tag");
const buf = document.createElement("canvas");
const R = { hist: new Float32Array(BINS), probe: null, ptRange: null };

function hash(ix, iy) {
  let x = ix >>> 0, y = iy >>> 0;
  y = (y ^ 1103515245) >>> 0;
  x = (x + y) >>> 0;
  x = Math.imul(x, y) >>> 0;
  x = (x ^ (x >>> 5)) >>> 0;
  x = Math.imul(x, 0x27d4eb2d) >>> 0;
  y = (y ^ ((x << 3) >>> 0)) >>> 0;
  return [(x >>> 8) / 0xffffff, (y >>> 8) / 0xffffff];
}

function cellPoint(gx, gy, a) {
  const h = hash(gx, gy);
  return [Math.sin(h[1] * a) * 0.5 + 0.5, Math.cos(h[0] * a) * 0.5 + 0.5];
}

function voronoi(u, v, a) {
  const gx = Math.floor(u), gy = Math.floor(v), fx = u - gx, fy = v - gy;
  let best = 8, bx = 0, by = 0, cx = 0, cy = 0;
  for (let y = -1; y <= 1; y++) for (let x = -1; x <= 1; x++) {
    const p = cellPoint(gx + x, gy + y, a);
    const d = Math.hypot(x + p[0] - fx, y + p[1] - fy);
    if (d < best) { best = d; cx = gx + x; cy = gy + y; bx = cx + p[0]; by = cy + p[1]; }
  }
  return { d: best, u: bx, v: by, cx, cy };
}

function pointRange(a) {
  let sx0 = Infinity, sx1 = -Infinity, cy0 = Infinity, cy1 = -Infinity;
  for (let i = 0; i <= 2000; i++) {
    const h = i / 2000, s = Math.sin(h * a), c = Math.cos(h * a);
    sx0 = Math.min(sx0, s); sx1 = Math.max(sx1, s);
    cy0 = Math.min(cy0, c); cy1 = Math.max(cy1, c);
  }
  return { x0: sx0 * 0.5 + 0.5, x1: sx1 * 0.5 + 0.5, y0: cy0 * 0.5 + 0.5, y1: cy1 * 0.5 + 0.5 };
}

const bright = (d) => S.I * Math.pow(d, S.n);

function rgb(name) {
  const c = token(name);
  if (c[0] === "#") {
    const h = c.length === 4 ? c.slice(1).split("").map((k) => k + k).join("") : c.slice(1, 7);
    return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  }
  const m = c.match(/[\d.]+/g) || [0, 0, 0];
  return m.slice(0, 3).map(Number);
}

const fmt = (x, k = 2) => String(Number(x.toFixed(k)));

function derive() {
  R.ptRange = pointRange(S.ao);
  const w = cv.clientWidth || 1, h = cv.clientHeight || 1;
  const m = VIEW_W / w;
  const x = X0 + S.probe.fx * w * m, z = Z0 + (1 - S.probe.fy) * h * m;
  const q = voronoi(x * S.dens, z * S.dens, S.ao);
  R.probe = { x, z, d: q.d, px: q.u / S.dens, pz: q.v / S.dens, cell: [q.cx, q.cy] };
}

function drawField() {
  const f = fitCanvas(cv);
  if (!f) return;
  const { ctx, w, h } = f;
  const r = anim.playing ? 1 : Math.min(window.devicePixelRatio || 1, 2);
  const W = Math.max(1, Math.round(w * r)), H = Math.max(1, Math.round(h * r));
  if (buf.width !== W || buf.height !== H) { buf.width = W; buf.height = H; }
  const bctx = buf.getContext("2d");
  const img = bctx.createImageData(W, H);
  const px = img.data;
  const D = S.dens, a = S.ao, mpp = VIEW_W / W;
  const gx0 = Math.floor(X0 * D) - 1, gx1 = Math.floor((X0 + VIEW_W) * D) + 1;
  const gz0 = Math.floor(Z0 * D) - 1, gz1 = Math.floor((Z0 + H * mpp) * D) + 1;
  const nw = gx1 - gx0 + 1, nh = gz1 - gz0 + 1;
  const tx = new Float32Array(nw * nh), ty = new Float32Array(nw * nh);
  for (let j = 0; j < nh; j++) for (let i = 0; i < nw; i++) {
    const p = cellPoint(gx0 + i, gz0 + j, a);
    tx[j * nw + i] = p[0]; ty[j * nw + i] = p[1];
  }
  const ids = new Int32Array(W * H);
  const hist = new Float32Array(BINS);
  const lut = new Uint8ClampedArray(1025);
  for (let k = 0; k <= 1024; k++) {
    const b = Math.min(1, bright((k / 1024) * D_MAX));
    lut[k] = Math.round(255 * Math.pow(b, 1 / 2.2));
  }
  for (let sy = 0; sy < H; sy++) {
    const v = (Z0 + (H - sy - 0.5) * mpp) * D;
    const gy = Math.floor(v), fy = v - gy;
    for (let sx = 0; sx < W; sx++) {
      const u = (X0 + (sx + 0.5) * mpp) * D;
      const gx = Math.floor(u), fx = u - gx;
      let best = 8, id = 0;
      for (let y = -1; y <= 1; y++) {
        const row = (gy + y - gz0) * nw;
        for (let x = -1; x <= 1; x++) {
          const k = row + gx + x - gx0;
          const dx = x + tx[k] - fx, dy = y + ty[k] - fy;
          const d = dx * dx + dy * dy;
          if (d < best) { best = d; id = k; }
        }
      }
      const d = Math.sqrt(best);
      const o = sy * W + sx;
      ids[o] = id;
      hist[Math.min(BINS - 1, Math.floor((d / D_MAX) * BINS))]++;
      const g = lut[Math.min(1024, Math.round((d / D_MAX) * 1024))];
      px[o * 4] = g; px[o * 4 + 1] = g; px[o * 4 + 2] = g; px[o * 4 + 3] = 255;
    }
  }
  const total = W * H;
  for (let i = 0; i < BINS; i++) hist[i] /= total;
  R.hist = hist;

  const ec = rgb("--edge");
  const paint = (o) => { px[o * 4] = ec[0]; px[o * 4 + 1] = ec[1]; px[o * 4 + 2] = ec[2]; };
  const pr = R.probe;
  const probeId = (pr.cell[1] - gz0) * nw + (pr.cell[0] - gx0);
  const t1 = Math.max(1, Math.round(r * 1.2)), t2 = Math.max(2, Math.round(r * 2.5));
  const mark = new Uint8Array(W * H);
  for (let sy = 0; sy < H; sy++) for (let sx = 0; sx < W; sx++) {
    const o = sy * W + sx, id = ids[o];
    if (S.showEdge) {
      const rd = sx + 1 < W && ids[o + 1] !== id, dn = sy + 1 < H && ids[o + W] !== id;
      if (rd || dn) for (let k = 0; k < t1; k++) {
        if (rd && sx - k >= 0) mark[o - k] = 1;
        if (dn && sy - k >= 0) mark[o - k * W] = 1;
      }
    }
    if (id === probeId) {
      for (let k = 1; k <= t2; k++) {
        if ((sx + k < W && ids[o + k] !== id) || (sx - k >= 0 && ids[o - k] !== id) ||
            (sy + k < H && ids[o + k * W] !== id) || (sy - k >= 0 && ids[o - k * W] !== id)) { mark[o] = 1; break; }
      }
    }
  }
  for (let o = 0; o < total; o++) if (mark[o]) paint(o);
  bctx.putImageData(img, 0, 0);

  ctx.clearRect(0, 0, w, h);
  ctx.imageSmoothingEnabled = true;
  ctx.drawImage(buf, 0, 0, w, h);

  const s = w / VIEW_W;
  const toX = (x) => (x - X0) * s, toY = (z) => h - (z - Z0) * s;

  if (S.showGrid) {
    ctx.save();
    ctx.strokeStyle = token("--edge");
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    for (let k = Math.ceil(X0 * D); k <= (X0 + VIEW_W) * D; k++) { const X = Math.round(toX(k / D)) + 0.5; ctx.moveTo(X, 0); ctx.lineTo(X, h); }
    for (let k = Math.ceil(Z0 * D); k <= (Z0 + h / s) * D; k++) { const Y = Math.round(toY(k / D)) + 0.5; ctx.moveTo(0, Y); ctx.lineTo(w, Y); }
    ctx.stroke();
    ctx.restore();
  }

  const PX = toX(pr.x), PY = toY(pr.z), NX = toX(pr.px), NY = toY(pr.pz);
  ctx.strokeStyle = token("--d");
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(PX, PY); ctx.lineTo(NX, NY); ctx.stroke();

  if (S.showPt) {
    ctx.fillStyle = token("--pt");
    ctx.strokeStyle = token("--card");
    ctx.lineWidth = 1.5;
    for (let j = 0; j < nh; j++) for (let i = 0; i < nw; i++) {
      const X = toX((gx0 + i + tx[j * nw + i]) / D), Y = toY((gz0 + j + ty[j * nw + i]) / D);
      if (X < -6 || X > w + 6 || Y < -6 || Y > h + 6) continue;
      ctx.beginPath(); ctx.arc(X, Y, 3.5, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    }
  }
  ctx.fillStyle = token("--pt");
  ctx.strokeStyle = token("--card");
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(NX, NY, 5, 0, Math.PI * 2); ctx.fill(); ctx.stroke();

  ctx.strokeStyle = token("--card");
  ctx.lineWidth = 4;
  ctx.beginPath(); ctx.arc(PX, PY, 5, 0, Math.PI * 2); ctx.stroke();
  ctx.strokeStyle = token("--d");
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(PX, PY, 5, 0, Math.PI * 2); ctx.stroke();

  const tw = tag.offsetWidth, th = tag.offsetHeight;
  let lx = PX + 10, ly = PY - th - 8;
  if (lx + tw > w - 4) lx = PX - tw - 10;
  if (ly < 4) ly = PY + 10;
  tag.style.transform = `translate(${Math.round(lx)}px, ${Math.round(ly)}px)`;
}

function drawCell() {
  const f = fitCanvas(cvCell);
  if (!f) return;
  const { ctx, w, h } = f;
  ctx.clearRect(0, 0, w, h);
  const p = 10, sz = Math.min(w, h) - 2 * p;
  const X = (x) => p + x * sz, Y = (y) => p + (1 - y) * sz;
  const g = R.ptRange;
  ctx.save();
  ctx.globalAlpha = 0.22;
  ctx.fillStyle = token("--pt");
  ctx.fillRect(X(g.x0), Y(g.y1), Math.max(1, (g.x1 - g.x0) * sz), Math.max(1, (g.y1 - g.y0) * sz));
  ctx.restore();
  ctx.strokeStyle = token("--edge");
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 3]);
  ctx.strokeRect(X(0) + 0.5, Y(1) + 0.5, sz - 1, sz - 1);
  ctx.setLineDash([]);
  ctx.fillStyle = token("--pt");
  for (let j = 0; j < 20; j++) for (let i = 0; i < 20; i++) {
    const q = cellPoint(i, j, S.ao);
    ctx.beginPath(); ctx.arc(X(q[0]), Y(q[1]), 1.4, 0, Math.PI * 2); ctx.fill();
  }
}

function drawCurve() {
  const f = fitCanvas(cvCurve);
  if (!f) return;
  const { ctx, w, h } = f;
  ctx.clearRect(0, 0, w, h);
  const L = 12, B = 14, T = 8, Rr = 6;
  const pw = w - L - Rr, ph = h - T - B;
  const X = (d) => L + (d / D_MAX) * pw, Y = (b) => T + (1 - b) * ph;
  let hm = 0;
  for (const v of R.hist) hm = Math.max(hm, v);
  ctx.fillStyle = token("--line");
  const bw = pw / BINS;
  R.hist.forEach((v, i) => {
    const bh = hm ? (v / hm) * ph : 0;
    ctx.fillRect(L + i * bw, T + ph - bh, Math.max(1, bw - 0.3), bh);
  });
  ctx.strokeStyle = token("--muted");
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(L + 0.5, T); ctx.lineTo(L + 0.5, T + ph + 0.5); ctx.lineTo(L + pw, T + ph + 0.5); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(X(1), T + ph); ctx.lineTo(X(1), T + ph + 3); ctx.stroke();
  ctx.fillStyle = token("--muted");
  ctx.font = `500 9px ${token("--num")}`;
  ctx.textBaseline = "top";
  ctx.textAlign = "center";
  ctx.fillText("1", X(1), T + ph + 3);
  ctx.textAlign = "left";
  ctx.fillText("0", L - 9, T + ph + 3);
  ctx.textBaseline = "middle";
  ctx.fillText("1", L - 9, Y(1));
  ctx.strokeStyle = token("--n");
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let i = 0; i <= 120; i++) {
    const d = (i / 120) * D_MAX, b = Math.min(1, bright(d));
    i ? ctx.lineTo(X(d), Y(b)) : ctx.moveTo(X(d), Y(b));
  }
  ctx.stroke();
  const d = Math.min(D_MAX, R.probe.d), b = Math.min(1, bright(d));
  ctx.strokeStyle = token("--d");
  ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(X(d), T + ph); ctx.lineTo(X(d), Y(b)); ctx.stroke();
  ctx.fillStyle = token("--d");
  ctx.beginPath(); ctx.arc(X(d), Y(b), 3, 0, Math.PI * 2); ctx.fill();
}

function texts() {
  const g = R.ptRange;
  $("o-dens").textContent = `${S.dens.toFixed(1)}/m`;
  $("o-ao").textContent = S.ao.toFixed(1);
  $("o-n").textContent = fmt(S.n, 1);
  $("o-i").textContent = fmt(S.I, 1);
  $("r-pt").textContent = `x ${fmt(g.x0)}~${fmt(g.x1)} · y ${fmt(g.y0)}~${fmt(g.y1)}`;
  $("o-tag").textContent = R.probe.d.toFixed(2);
  $("r-d").textContent = R.probe.d.toFixed(2);
  const b = bright(R.probe.d);
  $("r-b").textContent = fmt(b, b < 0.1 ? 3 : 2);
  $("bd-grid").hidden = S.ao > 0.05;
  $("bd-n").hidden = S.n !== 1;
}

function draw() {
  derive();
  texts();
  drawField();
  drawCell();
  drawCurve();
}

let queued = false;
function update() {
  if (queued) return;
  queued = true;
  requestAnimationFrame(() => { queued = false; draw(); });
}

const sliders = { "s-dens": "dens", "s-ao": "ao", "s-n": "n", "s-i": "I" };
for (const [id, key] of Object.entries(sliders)) {
  $(id).addEventListener("input", (e) => {
    S[key] = Number(e.target.value);
    if (key === "ao" && anim.playing) anim.pause();
    update();
  });
}

const toggles = { "b-pt": "showPt", "b-edge": "showEdge", "b-grid": "showGrid" };
for (const [id, key] of Object.entries(toggles)) {
  $(id).addEventListener("click", (e) => {
    S[key] = !S[key];
    e.currentTarget.setAttribute("aria-pressed", String(S[key]));
    update();
  });
}

const playBtn = $("b-play");
const anim = animate((dt) => {
  S.ao += S.aoDir * 0.6 * dt;
  if (S.ao >= 10) { S.ao = 10; S.aoDir = -1; }
  if (S.ao <= 0) { S.ao = 0; S.aoDir = 1; }
  $("s-ao").value = S.ao;
  draw();
}, {
  playing: false,
  onChange: (on) => {
    playBtn.setAttribute("aria-pressed", String(on));
    playBtn.textContent = on ? "❚❚" : "▶";
    playBtn.setAttribute("aria-label", on ? "停止 AngleOffset 變化" : "讓 AngleOffset 隨時間變");
    if (!on) update();
  },
});
playBtn.addEventListener("click", () => anim.toggle());

function setProbe(e) {
  const r = cv.getBoundingClientRect();
  S.probe.fx = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
  S.probe.fy = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
  update();
}
cv.addEventListener("pointermove", setProbe);
cv.addEventListener("pointerdown", setProbe);
cv.addEventListener("keydown", (e) => {
  const k = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[e.key];
  if (!k) return;
  e.preventDefault();
  S.probe.fx = Math.min(1, Math.max(0, S.probe.fx + k[0] * 0.02));
  S.probe.fy = Math.min(1, Math.max(0, S.probe.fy + k[1] * 0.02));
  update();
});

onRedraw(draw);
