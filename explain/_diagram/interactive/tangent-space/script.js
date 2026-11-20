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

const pad = document.getElementById("pad");
const cv = document.getElementById("cv");
const st = { x: 0.4, y: 0.3, a: 30, b: 15, yaw: 0.35, pitch: 0.65 };
const RAD = Math.PI / 180;
const $ = (id) => document.getElementById(id);
const fmt = (v) => { const s = (Math.abs(v) < 0.005 ? 0 : v).toFixed(2); return s.startsWith("-") ? "−" + s.slice(1) : s; };
const vec = (v) => "(" + v.map(fmt).join(", ") + ")";
const add = (...vs) => vs.reduce((p, q) => [p[0] + q[0], p[1] + q[1], p[2] + q[2]]);
const mul = (v, k) => [v[0] * k, v[1] * k, v[2] * k];
const dot = (p, q) => p[0] * q[0] + p[1] * q[1] + p[2] * q[2];

function tilt(v, a, b) {
  const ca = Math.cos(a), sa = Math.sin(a), cb = Math.cos(b), sb = Math.sin(b);
  const p = [v[0] * ca + v[1] * sa, -v[0] * sa + v[1] * ca, v[2]];
  return [p[0], p[1] * cb - p[2] * sb, p[1] * sb + p[2] * cb];
}

function derive() {
  const { x, y } = st;
  const z = Math.sqrt(Math.max(0, 1 - x * x - y * y));
  const flat = { T: [1, 0, 0], B: [0, 0, 1], N: [0, 1, 0] };
  const a = st.a * RAD, b = st.b * RAD;
  const slope = { T: tilt(flat.T, a, b), B: tilt(flat.B, a, b), N: tilt(flat.N, a, b) };
  const build = (f) => {
    const n = add(mul(f.T, x), mul(f.B, y), mul(f.N, z));
    return { f, n, ang: Math.acos(Math.min(1, Math.max(-1, dot(n, f.N)))) / RAD };
  };
  return { x, y, z, direct: [x, z, y], flat: build(flat), slope: build(slope) };
}

function proj(p) {
  const cy = Math.cos(st.yaw), sy = Math.sin(st.yaw), cp = Math.cos(st.pitch), sp = Math.sin(st.pitch);
  const x1 = p[0] * cy - p[2] * sy, z1 = p[0] * sy + p[2] * cy;
  return [x1, p[1] * cp + z1 * sp, -p[1] * sp + z1 * cp];
}

function arrow(ctx, x0, y0, x1, y1, color, w, head, alpha) {
  const dx = x1 - x0, dy = y1 - y0, L = Math.hypot(dx, dy);
  if (L < 1) return;
  const ux = dx / L, uy = dy / L, hl = Math.min(head, L * 0.6);
  ctx.globalAlpha = alpha;
  ctx.strokeStyle = color; ctx.fillStyle = color;
  ctx.lineWidth = w; ctx.lineCap = "round";
  ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1 - ux * hl * 0.6, y1 - uy * hl * 0.6); ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x1 - ux * hl + uy * hl * 0.45, y1 - uy * hl - ux * hl * 0.45);
  ctx.lineTo(x1 - ux * hl - uy * hl * 0.45, y1 - uy * hl + ux * hl * 0.45);
  ctx.closePath(); ctx.fill();
  ctx.globalAlpha = 1;
}

function label(ctx, text, x, y, color, anchor) {
  const tw = ctx.measureText(text).width, W = ctx.canvas.clientWidth;
  if (anchor === "left" && x + tw > W - 2) x = W - 2 - tw;
  if (anchor === "right" && x - tw < 2) x = 2 + tw;
  ctx.fillStyle = color; ctx.textAlign = anchor; ctx.textBaseline = "middle";
  ctx.fillText(text, x, y);
  return [x, y];
}

function scene(ctx, ox, oy, S, s, o) {
  const P = (p) => { const q = proj(p); return [ox + q[0] * S, oy - q[1] * S, q[2]]; };
  const corner = (f, i, j) => add(mul(f.T, i), mul(f.B, j));
  const quad = (f, k) => [[-k, -k], [k, -k], [k, k], [-k, k]].map(([i, j]) => P(corner(f, i, j)));
  if (o.ghost) {
    const q = quad(o.ghost, 1);
    ctx.strokeStyle = token("--muted"); ctx.globalAlpha = 0.5; ctx.lineWidth = 1; ctx.setLineDash([4, 4]);
    ctx.beginPath(); q.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath(); ctx.stroke();
    ctx.setLineDash([]); ctx.globalAlpha = 1;
  }
  const q = quad(s.f, 1);
  ctx.beginPath(); q.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath();
  ctx.fillStyle = token("--text"); ctx.globalAlpha = 0.08; ctx.fill();
  ctx.globalAlpha = 0.6; ctx.strokeStyle = token("--muted"); ctx.lineWidth = 1.2; ctx.stroke();
  ctx.globalAlpha = 0.2; ctx.lineWidth = 1;
  [-0.5, 0, 0.5].forEach((t) => {
    [[corner(s.f, t, -1), corner(s.f, t, 1)], [corner(s.f, -1, t), corner(s.f, 1, t)]].forEach(([p0, p1]) => {
      const a = P(p0), b = P(p1);
      ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke();
    });
  });
  ctx.globalAlpha = 1;

  const c0 = P([0, 0, 0]);
  const ang = Math.acos(Math.min(1, Math.max(-1, dot(s.f.N, s.n))));
  if (ang > 0.02) {
    const sinA = Math.sin(ang);
    ctx.strokeStyle = token("--ww"); ctx.globalAlpha = 0.55; ctx.lineWidth = 1.5; ctx.beginPath();
    for (let i = 0; i <= 16; i++) {
      const t = i / 16;
      const w1 = Math.sin((1 - t) * ang) / sinA, w2 = Math.sin(t * ang) / sinA;
      const p = P(add(mul(s.f.N, w1 * 0.8), mul(s.n, w2 * 0.8)));
      i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]);
    }
    ctx.stroke(); ctx.globalAlpha = 1;
  }

  const dTip = P(o.direct);
  ctx.setLineDash([5, 4]); arrow(ctx, c0[0], c0[1], dTip[0], dTip[1], token("--ww"), 3, 12, 0.6); ctx.setLineDash([]);

  const items = [
    { v: s.f.T, c: token("--tt"), t: "T" },
    { v: s.f.B, c: token("--bb"), t: "B" },
    { v: s.f.N, c: token("--nn"), t: "N" },
    { v: s.n, c: token("--ww"), t: "n_world", main: true },
  ].map((it) => ({ ...it, p: P(it.v) }));
  items.sort((p, q) => q.p[2] - p.p[2]);
  items.forEach((it) => arrow(ctx, c0[0], c0[1], it.p[0], it.p[1], it.c, it.main ? 3.5 : 2.5, it.main ? 13 : 11, 1));
  ctx.beginPath(); ctx.arc(c0[0], c0[1], 3, 0, Math.PI * 2); ctx.fillStyle = token("--text"); ctx.fill();

  const nTip = P(s.n), nT = P(s.f.N);
  const nRight = nTip[0] >= nT[0];
  let nLab = null;
  items.forEach((it) => {
    const dx = it.p[0] - c0[0], dy = it.p[1] - c0[1], L = Math.hypot(dx, dy) || 1;
    let lx = it.p[0] + (dx / L) * 12, ly = it.p[1] + (dy / L) * 12;
    let anchor = dx >= 0 ? "left" : "right";
    if (it.t === "N") anchor = nRight ? "right" : "left";
    if (it.t === "n_world") anchor = nRight ? "left" : "right";
    if (it.t === "N" || it.t === "n_world") lx += (it.t === "N" ? (nRight ? -1 : 1) : (nRight ? 1 : -1)) * 4;
    const pos = label(ctx, it.t, lx, ly, it.c, anchor);
    if (it.main) nLab = { pos, anchor };
  });
  const dx = dTip[0] - c0[0], dy = dTip[1] - c0[1], L = Math.hypot(dx, dy) || 1;
  const same = Math.hypot(dTip[0] - nTip[0], dTip[1] - nTip[1]) < 4;
  if (same) label(ctx, "= n_tangent", nLab.pos[0], nLab.pos[1] + 14, token("--ww"), nLab.anchor);
  else label(ctx, "n_tangent", dTip[0] + (dx / L) * 12 + (dx >= 0 ? -2 : 2), dTip[1] + (dy / L) * 12 - 10, token("--ww"), dx >= 0 ? "right" : "left");
}

function drawScene(d) {
  const f = fitCanvas(cv);
  if (!f) return;
  const { ctx, w, h } = f;
  ctx.clearRect(0, 0, w, h);
  ctx.font = `600 12px ${token("--num")}`;
  const S = Math.min(w / 2 / 2.8, h / 3);
  const oy = h * 0.5 - 4;
  scene(ctx, w * 0.25, oy, S, d.flat, { direct: d.direct });
  scene(ctx, w * 0.75, oy, S, d.slope, { direct: d.direct, ghost: d.flat.f });
}

function geom(w, h) { return { cx: w / 2, cy: h / 2, R: Math.max(10, Math.min(w, h) / 2 - 16) }; }

function drawPad(d) {
  const f = fitCanvas(pad);
  if (!f) return;
  const { ctx, w, h } = f;
  ctx.clearRect(0, 0, w, h);
  const { cx, cy, R } = geom(w, h);
  ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
  ctx.fillStyle = token("--card-2"); ctx.fill();
  ctx.strokeStyle = token("--line"); ctx.lineWidth = 1.5; ctx.stroke();
  ctx.strokeStyle = token("--text"); ctx.globalAlpha = 0.25; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.arc(cx, cy, R / 2, 0, Math.PI * 2);
  ctx.moveTo(cx - R, cy); ctx.lineTo(cx + R, cy); ctx.moveTo(cx, cy - R); ctx.lineTo(cx, cy + R); ctx.stroke();
  ctx.globalAlpha = 1;
  const px = cx + d.x * R, py = cy - d.y * R;
  ctx.lineWidth = 3; ctx.lineCap = "round";
  ctx.fillStyle = token("--text"); ctx.globalAlpha = 0.5;
  ctx.beginPath(); ctx.arc(cx, cy, 3, 0, Math.PI * 2); ctx.fill(); ctx.globalAlpha = 1;
  ctx.strokeStyle = token("--tt"); ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, cy); ctx.stroke();
  ctx.strokeStyle = token("--bb"); ctx.beginPath(); ctx.moveTo(px, cy); ctx.lineTo(px, py); ctx.stroke();
  ctx.fillStyle = token("--ww"); ctx.strokeStyle = token("--text"); ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.arc(px, py, 8, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.font = `600 12px ${token("--num")}`; ctx.textBaseline = "middle";
  ctx.textAlign = "left"; ctx.fillStyle = token("--tt"); ctx.fillText("T", Math.min(w - 9, cx + R + 4), cy);
  ctx.textAlign = "center"; ctx.fillStyle = token("--bb"); ctx.fillText("B", cx, Math.max(7, cy - R - 8));
}

function fill(id, d, name) {
  const s = d[name];
  $("t-" + id).textContent = vec([d.x, d.y, d.z]);
  $("x-" + id).textContent = fmt(d.x);
  $("y-" + id).textContent = fmt(d.y);
  $("z-" + id).textContent = fmt(d.z);
  $("v-" + id).textContent = vec(s.n);
  $("a-" + id).textContent = s.ang.toFixed(1) + "°";
}

function render() {
  const d = derive();
  fill("flat", d, "flat");
  fill("slope", d, "slope");
  $("o-a").textContent = st.a + "°";
  $("o-b").textContent = st.b + "°";
  pad.setAttribute("aria-valuetext", `x ${fmt(d.x)}，y ${fmt(d.y)}，z ${fmt(d.z)}`);
  drawPad(d);
  drawScene(d);
}

function clampXY(x, y) {
  const len = Math.hypot(x, y);
  if (len > 1) { x /= len; y /= len; }
  if (len < 0.05) { x = 0; y = 0; }
  st.x = Math.abs(x) < 1e-9 ? 0 : x;
  st.y = Math.abs(y) < 1e-9 ? 0 : y;
}
function fromPad(e) {
  const r = pad.getBoundingClientRect();
  const { cx, cy, R } = geom(r.width, r.height);
  clampXY((e.clientX - r.left - cx) / R, -(e.clientY - r.top - cy) / R);
  render();
}
let padDrag = false;
pad.addEventListener("pointerdown", (e) => { padDrag = true; pad.setPointerCapture(e.pointerId); pad.focus(); fromPad(e); });
pad.addEventListener("pointermove", (e) => { if (padDrag) fromPad(e); });
pad.addEventListener("pointerup", () => { padDrag = false; });
pad.addEventListener("pointercancel", () => { padDrag = false; });
pad.addEventListener("keydown", (e) => {
  const step = e.shiftKey ? 0.2 : 0.05;
  const m = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, step], ArrowDown: [0, -step] }[e.key];
  if (!m) return;
  e.preventDefault();
  clampXY(st.x + m[0], st.y + m[1]);
  render();
});

function rotate(dyaw, dpitch) {
  st.yaw += dyaw;
  st.pitch = Math.min(1.5, Math.max(-0.2, st.pitch + dpitch));
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

const snapZero = (el, key) => {
  let ptr = false;
  el.addEventListener("pointerdown", () => { ptr = true; });
  window.addEventListener("pointerup", () => { ptr = false; });
  el.addEventListener("input", () => {
    let v = +el.value;
    if (ptr && Math.abs(v) <= 3) { v = 0; el.value = 0; }
    st[key] = v; render();
  });
};
snapZero($("in-a"), "a");
snapZero($("in-b"), "b");

onRedraw(render);
render();
