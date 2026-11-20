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
const DEF = { yaw: 0.5, pitch: 0.5 };
const st = { ...DEF };
const R = 1.7, FL = -0.8, AX = 1.7, YT = 1.5, N = 12;
const PMIN = 0.25, PMAX = 1.0;
const h = (x, z) => 0.5 * Math.sin(x) + 0.25 * Math.sin(z);

function projAt(p, yaw, pitch) {
  const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
  const x1 = p[0] * cy - p[2] * sy, z1 = p[0] * sy + p[2] * cy;
  return [x1, p[1] * cp + z1 * sp, -p[1] * sp + z1 * cp];
}
const proj = (p) => projAt(p, st.yaw, st.pitch);

const KEY = [];
for (const x of [-R, R]) for (const z of [-R, R]) KEY.push([x, h(x, z), z]);
KEY.push([AX, FL, 0], [0, FL, AX], [0, FL, 0], [0, YT, 0], [R, h(R, 0), 0], [0, h(0, R), R], [-R, FL, 0], [0, FL, -R]);

function arrow(ctx, a, b, color, w, head, dash) {
  const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy);
  if (L < 1) return;
  const ux = dx / L, uy = dy / L, hl = Math.min(head, L * 0.6);
  ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = w; ctx.lineCap = "round";
  ctx.setLineDash(dash || []);
  ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0] - ux * hl * 0.6, b[1] - uy * hl * 0.6); ctx.stroke();
  ctx.setLineDash([]);
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
  const f = fitCanvas(cv);
  if (!f) return;
  const { ctx, w, h: H } = f;
  ctx.clearRect(0, 0, w, H);
  const m = 16;
  let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
  KEY.forEach((p) => { const q = proj(p); x0 = Math.min(x0, q[0]); x1 = Math.max(x1, q[0]); y0 = Math.min(y0, q[1]); y1 = Math.max(y1, q[1]); });
  const S = Math.min((w - 2 * m) / (x1 - x0), (H - 2 * m) / (y1 - y0));
  const ox = w / 2 - (S * (x0 + x1)) / 2, oy = H / 2 + (S * (y0 + y1)) / 2;
  const P = (x, y, z) => { const q = proj([x, y, z]); return [ox + q[0] * S, oy - q[1] * S, q[2]]; };
  const water = token("--water"), cx = token("--ax"), cz = token("--az");
  const muted = token("--muted"), card = token("--card"), text = token("--text");
  const num = token("--num");
  const obs = [];
  const seg = (a, b) => {
    const n = Math.max(1, Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / 4));
    for (let i = 0; i <= n; i++) obs.push([a[0] + ((b[0] - a[0]) * i) / n, a[1] + ((b[1] - a[1]) * i) / n]);
  };

  const quads = [];
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
    const x0 = -R + (2 * R * i) / N, x1 = -R + (2 * R * (i + 1)) / N;
    const z0 = -R + (2 * R * j) / N, z1 = -R + (2 * R * (j + 1)) / N;
    const q = [P(x0, h(x0, z0), z0), P(x1, h(x1, z0), z0), P(x1, h(x1, z1), z1), P(x0, h(x0, z1), z1)];
    quads.push({ q, d: q[0][2] + q[1][2] + q[2][2] + q[3][2] });
  }
  quads.sort((a, b) => b.d - a.d);
  const hull = [P(-R, h(-R, -R), -R), P(R, h(R, -R), -R), P(R, h(R, R), R), P(-R, h(-R, R), R)];

  const O0 = P(0, FL, 0), O = P(0, 0, 0);
  const ends = [P(AX, FL, 0), P(0, FL, AX), P(0, YT, 0)];
  ends.forEach((e) => { arrow(ctx, O0, e, muted, 1.2, 7); seg(O0, e); });
  ctx.strokeStyle = muted; ctx.lineWidth = 1; ctx.setLineDash([2, 3]);
  ctx.beginPath(); ctx.moveTo(O0[0], O0[1]); ctx.lineTo(O[0], O[1]); ctx.stroke(); ctx.setLineDash([]);

  ctx.lineJoin = "round";
  quads.forEach(({ q }) => {
    ctx.beginPath(); q.forEach((p, k) => (k ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath();
    ctx.fillStyle = water; ctx.globalAlpha = 0.09; ctx.fill();
    ctx.strokeStyle = water; ctx.globalAlpha = 0.22; ctx.lineWidth = 0.8; ctx.stroke();
  });
  ctx.globalAlpha = 1;

  const curve = (fn, color) => {
    ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.beginPath();
    let prev = null;
    for (let i = 0; i <= 80; i++) { const t = -R + (2 * R * i) / 80, p = fn(t); i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]); if (prev) seg(prev, p); prev = p; }
    ctx.stroke();
  };
  curve((t) => P(t, h(t, 0), 0), cx);
  curve((t) => P(0, h(0, t), t), cz);

  const Tx = P(1, 0.5, 0), Bz = P(0, 0.25, 1);
  const Tb = P(1, 0, 0), Bb = P(0, 0, 1);
  [[O, Tb, cx], [Tb, Tx, cx], [O, Bb, cz], [Bb, Bz, cz]].forEach(([a, b, c]) => { arrow(ctx, a, b, c, 1.5, 0, [3, 3]); seg(a, b); });
  arrow(ctx, O, Tx, cx, 3.5, 12);
  arrow(ctx, O, Bz, cz, 3.5, 12);
  seg(O, Tx); seg(O, Bz);
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
      let sc = r;
      if (bx < 3 || by < 3 || bx + wd > w - 3 || by + ht > H - 3) sc += 5000;
      let hit = 0;
      for (const o of obs) if (o[0] > bx - 3 && o[0] < bx + wd + 3 && o[1] > by - 3 && o[1] < by + ht + 3) hit++;
      sc += hit * 60;
      for (const q of placed) if (bx < q.x + q.wd + 4 && q.x < bx + wd + 4 && by < q.y + q.ht + 2 && q.y < by + ht + 2) sc += 3000;
      if (inPoly([bx + wd / 2, by + ht / 2], hull)) sc += 25;
      if (!best || sc < best.sc) best = { sc, bx, by, r };
    }
    placed.push({ x: best.bx, y: best.by, wd, ht });
    if (best.r > 20) {
      const lx = Math.min(best.bx + wd, Math.max(best.bx, p[0])), ly = Math.min(best.by + ht, Math.max(best.by, p[1]));
      ctx.strokeStyle = color; ctx.lineWidth = 1; ctx.globalAlpha = 0.8;
      ctx.beginPath(); ctx.moveTo(p[0], p[1]); ctx.lineTo(lx, ly); ctx.stroke(); ctx.globalAlpha = 1;
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
  place(Tx, [["T = (1, 0.5, 0)", F, 600], ["斜率 0.5", F2]], cx, near);
  place(Bz, [["B = (0, 0.25, 1)", F, 600], ["斜率 0.25", F2]], cz, near);
  place(P(R, h(R, 0), 0), [["y = 0.5 sin x", F, 600], ["z = 0 的剖面", F2]], cx, near);
  place(P(0, h(0, R), R), [["y = 0.25 sin z", F, 600], ["x = 0 的剖面", F2]], cz, near);
  place(hull[3], [["水面 h(x, z)", F, 600]], water, near);
  ["x", "z", "y"].forEach((t, k) => place(ends[k], [[t, F, 600]], muted, [6, 12, 20]));
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
document.getElementById("reset").addEventListener("click", () => { Object.assign(st, DEF); render(); });

onRedraw(render);
render();
