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

const cv = document.getElementById("cv");
const sl = document.getElementById("f");
const fv = document.getElementById("fv");
const tA = document.getElementById("tA"), tB = document.getElementById("tB");
const DEF = { yaw: 0.35, pitch: 0.38 };
const st = { ...DEF, deg: 0 };
const PMIN = 0.1, PMAX = 1.1;
const S = 0.5, K = (2 * Math.PI) / 6, AMP = S / K;
const XA = -0.05, XB = 6.0, ZR = 0.9, FL = -0.62, NX = 56, NZ = 6;
const SNAP = [0, 90], SNAP_TOL = 6;
const P = (x, z) => [x + AMP * Math.cos(K * x), AMP * Math.sin(K * x), z];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const fmt = (v) => String(+v.toFixed(2) + 0).replace("-", "−");
const vec = (v) => "(" + v.map(fmt).join(", ") + ")";
const BV = [0, 0, 1];

function derive() {
  const f = (st.deg * Math.PI) / 180;
  const T = [1 - S * Math.sin(f), S * Math.cos(f), 0];
  const Nn = cross(BV, T);
  return { f, T, N: Nn, pt: P(f / K, 0) };
}

function projAt(p, yaw, pitch) {
  const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
  const x1 = p[0] * cy - p[2] * sy, z1 = p[0] * sy + p[2] * cy;
  return [x1, p[1] * cp + z1 * sp, -p[1] * sp + z1 * cp];
}
const proj = (p) => projAt(p, st.yaw, st.pitch);

const KEY = [];
for (const x of [XA, XB]) for (const z of [-ZR, ZR]) KEY.push(P(x, z));
KEY.push([XA, FL, -ZR], [XA + 1.8, FL, -ZR], [XA, FL, -ZR + 1]);
for (let d = 0; d < 360; d += 15) {
  const f = (d * Math.PI) / 180, T = [1 - S * Math.sin(f), S * Math.cos(f), 0], pt = P(f / K, 0);
  const Nn = cross(BV, T);
  [T, BV, Nn].forEach((v) => KEY.push([pt[0] + v[0], pt[1] + v[1], pt[2] + v[2]]));
}

function arrow(ctx, a, b, color, w, head) {
  const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy);
  if (L < 1) return;
  const ux = dx / L, uy = dy / L, hl = Math.min(head, L * 0.6);
  ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = w; ctx.lineCap = "round";
  ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0] - ux * hl * 0.6, b[1] - uy * hl * 0.6); ctx.stroke();
  if (!head) return;
  ctx.beginPath();
  ctx.moveTo(b[0], b[1]);
  ctx.lineTo(b[0] - ux * hl + uy * hl * 0.45, b[1] - uy * hl - ux * hl * 0.45);
  ctx.lineTo(b[0] - ux * hl - uy * hl * 0.45, b[1] - uy * hl + ux * hl * 0.45);
  ctx.closePath(); ctx.fill();
}

function inPoly(pt, poly) {
  let c = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const a = poly[i], b = poly[j];
    if ((a[1] > pt[1]) !== (b[1] > pt[1]) && pt[0] < ((b[0] - a[0]) * (pt[1] - a[1])) / (b[1] - a[1]) + a[0]) c = !c;
  }
  return c;
}

function render() {
  const fc = fitCanvas(cv);
  if (!fc) return;
  const { ctx, w, h: H } = fc;
  const d = derive();
  ctx.clearRect(0, 0, w, H);
  const m = w < 520 ? 4 : 12;
  let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
  KEY.forEach((p) => { const q = proj(p); x0 = Math.min(x0, q[0]); x1 = Math.max(x1, q[0]); y0 = Math.min(y0, q[1]); y1 = Math.max(y1, q[1]); });
  const sc = Math.min((w - 2 * m) / (x1 - x0), (H - 2 * m) / (y1 - y0));
  const ox = w / 2 - (sc * (x0 + x1)) / 2, oy = H / 2 + (sc * (y0 + y1)) / 2;
  const Pp = (p) => { const q = proj(p); return [ox + q[0] * sc, oy - q[1] * sc, q[2]]; };
  const water = token("--water"), ct = token("--tan"), cb = token("--bin"), cn = token("--nrm");
  const muted = token("--muted"), card = token("--card"), text = token("--text"), num = token("--num");
  const obs = [];
  const seg = (a, b) => {
    const n = Math.max(1, Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / 4));
    for (let i = 0; i <= n; i++) obs.push([a[0] + ((b[0] - a[0]) * i) / n, a[1] + ((b[1] - a[1]) * i) / n]);
  };

  const quads = [];
  for (let i = 0; i < NX; i++) for (let j = 0; j < NZ; j++) {
    const xa = XA + ((XB - XA) * i) / NX, xb = XA + ((XB - XA) * (i + 1)) / NX;
    const za = -ZR + (2 * ZR * j) / NZ, zb = -ZR + (2 * ZR * (j + 1)) / NZ;
    const q = [Pp(P(xa, za)), Pp(P(xb, za)), Pp(P(xb, zb)), Pp(P(xa, zb))];
    quads.push({ q, d: q[0][2] + q[1][2] + q[2][2] + q[3][2] });
  }
  quads.sort((a, b) => b.d - a.d);
  const hull = [Pp(P(XA, -ZR)), Pp(P(XB, -ZR)), Pp(P(XB, ZR)), Pp(P(XA, ZR))];

  const O0 = Pp([XA, FL, -ZR]);
  const ends = [Pp([XA + 1.8, FL, -ZR]), Pp([XA, FL, -ZR + 1])];
  ends.forEach((e) => { arrow(ctx, O0, e, muted, 1.2, 7); seg(O0, e); });

  ctx.lineJoin = "round";
  quads.forEach(({ q }) => {
    ctx.beginPath(); q.forEach((p, k) => (k ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath();
    ctx.fillStyle = water; ctx.globalAlpha = 0.09; ctx.fill();
    ctx.strokeStyle = water; ctx.globalAlpha = 0.22; ctx.lineWidth = 0.8; ctx.stroke();
  });
  ctx.globalAlpha = 1;

  ctx.strokeStyle = water; ctx.lineWidth = 1.8; ctx.globalAlpha = 0.6; ctx.beginPath();
  let prev = null;
  for (let i = 0; i <= 160; i++) {
    const p = Pp(P(XA + ((XB - XA) * i) / 160, 0));
    i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]);
    if (prev) seg(prev, p);
    prev = p;
  }
  ctx.stroke(); ctx.globalAlpha = 1;

  const pt = d.pt, add = (v) => [pt[0] + v[0], pt[1] + v[1], pt[2] + v[2]];
  const O = Pp(pt), Tx = Pp(add(d.T)), Bz = Pp(add(BV)), Nt = Pp(add(d.N));
  arrow(ctx, O, Tx, ct, 3, 11);
  arrow(ctx, O, Bz, cb, 3, 11);
  arrow(ctx, O, Nt, cn, 4.5, 15);
  seg(O, Tx); seg(O, Bz); seg(O, Nt);

  const unit = (v) => { const L = Math.hypot(...v); return v.map((c) => c / L); };
  const nu = unit(d.N), A0 = 0.26;
  [d.T, BV].forEach((t) => {
    const tu = unit(t);
    const a = Pp(add(nu.map((c) => c * A0))), c = Pp(add(nu.map((c, i) => (c + tu[i]) * A0))), b = Pp(add(tu.map((c) => c * A0)));
    ctx.beginPath(); ctx.moveTo(O[0], O[1]); ctx.lineTo(a[0], a[1]); ctx.lineTo(c[0], c[1]); ctx.lineTo(b[0], b[1]); ctx.closePath();
    ctx.fillStyle = cn; ctx.globalAlpha = 0.14; ctx.fill(); ctx.globalAlpha = 1;
    ctx.strokeStyle = cn; ctx.lineWidth = 2; ctx.lineJoin = "round";
    ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(c[0], c[1]); ctx.lineTo(b[0], b[1]); ctx.stroke();
    seg(a, c); seg(c, b);
  });
  ctx.fillStyle = text; ctx.beginPath(); ctx.arc(O[0], O[1], 3.5, 0, 6.2832); ctx.fill();

  const sm = w < 520, F = sm ? 11 : 12.8, F2 = sm ? 10 : 11;
  const placed = [];
  const place = (p, lines, color, rads) => {
    let wd = 0;
    lines.forEach(([t, size, wt]) => { ctx.font = `${wt || 500} ${size}px ${num}`; wd = Math.max(wd, ctx.measureText(t).width); });
    const ht = lines.reduce((a, l) => a + l[1] + 3, 0);
    let best = null;
    for (const r of rads) for (let ang = 0; ang < 360; ang += 15) {
      const c = Math.cos((ang * Math.PI) / 180), sn = Math.sin((ang * Math.PI) / 180);
      const bx = p[0] + c * (r + wd / 2) - wd / 2, by = p[1] + sn * (r + ht / 2) - ht / 2;
      let s = r;
      if (bx < 3 || by < 3 || bx + wd > w - 3 || by + ht > H - 3) s += 5000;
      let hit = 0;
      for (const o of obs) if (o[0] > bx - 3 && o[0] < bx + wd + 3 && o[1] > by - 3 && o[1] < by + ht + 3) hit++;
      s += hit * 60;
      for (const q of placed) if (bx < q.x + q.wd + 4 && q.x < bx + wd + 4 && by < q.y + q.ht + 2 && q.y < by + ht + 2) s += 3000;
      if (inPoly([bx + wd / 2, by + ht / 2], hull)) s += 25;
      if (r > 20) {
        const ex = Math.min(bx + wd, Math.max(bx, p[0])), ey = Math.min(by + ht, Math.max(by, p[1]));
        for (let t = 0.1; t < 1; t += 0.1) {
          const qx = p[0] + (ex - p[0]) * t, qy = p[1] + (ey - p[1]) * t;
          for (const q of placed) if (qx > q.x - 2 && qx < q.x + q.wd + 2 && qy > q.y - 2 && qy < q.y + q.ht + 2) s += 3000;
        }
      }
      if (!best || s < best.s) best = { s, bx, by, r };
    }
    placed.push({ x: best.bx, y: best.by, wd, ht });
    if (best.r > 20) {
      const lx = Math.min(best.bx + wd, Math.max(best.bx, p[0])), ly = Math.min(best.by + ht, Math.max(best.by, p[1]));
      ctx.strokeStyle = color; ctx.lineWidth = 1; ctx.globalAlpha = 0.8;
      ctx.beginPath(); ctx.moveTo(p[0], p[1]); ctx.lineTo(lx, ly); ctx.stroke(); ctx.globalAlpha = 1;
      seg(p, [lx, ly]);
    }
    ctx.textAlign = "left"; ctx.textBaseline = "middle"; ctx.lineJoin = "round"; ctx.strokeStyle = card; ctx.lineWidth = 4;
    let yy = best.by;
    lines.forEach(([t, size, wt], k) => {
      yy += size / 2;
      ctx.font = `${wt || 500} ${size}px ${num}`;
      ctx.strokeText(t, best.bx, yy); ctx.fillStyle = k ? muted : color; ctx.fillText(t, best.bx, yy);
      yy += size / 2 + 3;
    });
  };
  const near = [8, 16, 28, 44, 64, 90, 120];
  place(Nt, [["N = " + vec(d.N), F + 1, 700], ["B × T", F2]], cn, near);
  place(Tx, [["T = " + vec(d.T), F, 600]], ct, near);
  place(Bz, [["B = " + vec(BV), F, 600]], cb, near);
  place(hull[1], [["水面", F, 600]], water, near);
  place(ends[0], [["+x 波前進", F, 600]], muted, [6, 12, 20]);
  place(ends[1], [["z", F, 600]], muted, [6, 12, 20]);
}

function syncSlider() {
  const d = st.deg;
  sl.value = d;
  fv.textContent = (d === 0 ? "0" : d === 90 ? "π/2" : (d / 180).toFixed(2) + "π");
  tA.setAttribute("aria-pressed", String(d === 0));
  tB.setAttribute("aria-pressed", String(d === 90));
  const pos = (v) => `calc(7px + (100% - 14px) * ${v / 360})`;
  tA.style.left = pos(0); tB.style.left = pos(90);
}

function rotate(dyaw, dpitch) {
  st.yaw += dyaw;
  st.pitch = Math.min(PMAX, Math.max(PMIN, st.pitch + dpitch));
  render();
}
let last = null;
cv.addEventListener("pointerdown", (e) => { last = [e.clientX, e.clientY]; cv.setPointerCapture(e.pointerId); cv.style.cursor = "grabbing"; });
cv.addEventListener("pointermove", (e) => {
  if (!last) return;
  rotate((e.clientX - last[0]) * 0.01, (e.clientY - last[1]) * 0.01);
  last = [e.clientX, e.clientY];
});
const endDrag = () => { last = null; cv.style.cursor = ""; };
cv.addEventListener("pointerup", endDrag);
cv.addEventListener("pointercancel", endDrag);
cv.addEventListener("keydown", (e) => {
  const m = { ArrowLeft: [-0.1, 0], ArrowRight: [0.1, 0], ArrowUp: [0, -0.1], ArrowDown: [0, 0.1] }[e.key];
  if (!m) return;
  e.preventDefault();
  rotate(m[0], m[1]);
});
document.getElementById("reset").addEventListener("click", () => { st.yaw = DEF.yaw; st.pitch = DEF.pitch; render(); });

const setDeg = (v) => { st.deg = v; syncSlider(); render(); };
sl.addEventListener("input", () => {
  let v = +sl.value;
  const s = SNAP.find((t) => Math.abs(v - t) <= SNAP_TOL);
  if (s !== undefined) v = s;
  setDeg(v);
});
tA.addEventListener("click", () => setDeg(0));
tB.addEventListener("click", () => setDeg(90));

syncSlider();
onRedraw(render);
render();
