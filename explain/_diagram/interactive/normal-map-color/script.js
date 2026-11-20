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

const N = 160;
const state = { x: 0, y: 0, mark: null };
const pad = document.getElementById("pad");
const map = document.getElementById("map");
const keys = ["x", "y", "z"];

const field = (() => {
  const drops = [[52, 56, 30, 1], [108, 96, 26, -0.8], [62, 122, 34, 0.6]];
  const h = (u, v) => {
    let s = 0;
    drops.forEach(([cx, cy, lam, k]) => {
      const d = Math.hypot(u - cx, v - cy);
      s += k * Math.cos((2 * Math.PI * d) / lam) * Math.exp(-((d / 38) ** 2));
    });
    s += 0.6 * Math.exp(-(((u - 125) / 22) ** 2 + ((v - 38) / 18) ** 2));
    return s * 8;
  };
  const nx = new Float32Array(N * N), ny = new Float32Array(N * N), nz = new Float32Array(N * N);
  const gx = new Float32Array(N * N), gy = new Float32Array(N * N);
  let max = 0;
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
    const k = j * N + i;
    gx[k] = (h(i + 1, j) - h(i - 1, j)) / 2;
    gy[k] = (h(i, j + 1) - h(i, j - 1)) / 2;
    max = Math.max(max, Math.hypot(gx[k], gy[k]));
  }
  const scale = 0.85 / max;
  for (let k = 0; k < N * N; k++) {
    const x = -gx[k] * scale, y = gy[k] * scale;
    nx[k] = x; ny[k] = y; nz[k] = Math.sqrt(Math.max(0, 1 - x * x - y * y));
  }
  return { nx, ny, nz };
})();

const encode = (v) => Math.round(((v + 1) / 2) * 255);
const hex2 = (b) => b.toString(16).padStart(2, "0").toUpperCase();
const fmt = (v) => (v < 0 ? "−" : "") + Math.abs(v).toFixed(2);

const texture = document.createElement("canvas");
texture.width = texture.height = N;
(() => {
  const g = texture.getContext("2d");
  const img = g.createImageData(N, N);
  for (let k = 0; k < N * N; k++) {
    img.data[k * 4] = encode(field.nx[k]);
    img.data[k * 4 + 1] = encode(field.ny[k]);
    img.data[k * 4 + 2] = encode(field.nz[k]);
    img.data[k * 4 + 3] = 255;
  }
  g.putImageData(img, 0, 0);
})();

function derive() {
  const len = Math.hypot(state.x, state.y);
  const k = len > 1 ? 1 / len : 1;
  const x = state.x * k, y = state.y * k;
  const z = Math.sqrt(Math.max(0, 1 - x * x - y * y));
  const v = [x, y, z];
  const c = v.map((a) => (a + 1) / 2);
  const b = v.map(encode);
  return { v, c, b, hex: "#" + b.map(hex2).join("") };
}

function geom(w, h) {
  const R = Math.min(w, h) / 2 - 14;
  return { cx: w / 2, cy: h / 2, R };
}

let discCache = null;
function disc(S) {
  if (discCache && discCache.S === S) return discCache.cv;
  const cv = document.createElement("canvas");
  cv.width = cv.height = S;
  const g = cv.getContext("2d");
  const img = g.createImageData(S, S);
  for (let j = 0; j < S; j++) for (let i = 0; i < S; i++) {
    const x = ((i + 0.5) / S) * 2 - 1, y = 1 - ((j + 0.5) / S) * 2;
    const r2 = x * x + y * y;
    const o = (j * S + i) * 4;
    if (r2 > 1) continue;
    img.data[o] = encode(x);
    img.data[o + 1] = encode(y);
    img.data[o + 2] = encode(Math.sqrt(1 - r2));
    img.data[o + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  discCache = { S, cv };
  return cv;
}

function drawPad(d) {
  const f = fitCanvas(pad);
  if (!f) return;
  const { ctx, w, h } = f;
  ctx.clearRect(0, 0, w, h);
  const { cx, cy, R } = geom(w, h);
  const dpr = window.devicePixelRatio || 1;
  ctx.drawImage(disc(Math.max(2, Math.round(R * 2 * dpr))), cx - R, cy - R, R * 2, R * 2);
  ctx.strokeStyle = token("--line");
  ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.stroke();
  ctx.strokeStyle = token("--text");
  ctx.globalAlpha = 0.25;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(cx - R, cy); ctx.lineTo(cx + R, cy);
  ctx.moveTo(cx, cy - R); ctx.lineTo(cx, cy + R);
  ctx.stroke();
  ctx.globalAlpha = 1;
  const px = cx + d.v[0] * R, py = cy - d.v[1] * R;
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.fillStyle = token("--text"); ctx.globalAlpha = 0.5;
  ctx.beginPath(); ctx.arc(cx, cy, 3, 0, Math.PI * 2); ctx.fill(); ctx.globalAlpha = 1;
  ctx.strokeStyle = token("--xx");
  ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, cy); ctx.stroke();
  ctx.strokeStyle = token("--yy");
  ctx.beginPath(); ctx.moveTo(px, cy); ctx.lineTo(px, py); ctx.stroke();
  ctx.fillStyle = d.hex;
  ctx.strokeStyle = token("--text");
  ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.arc(px, py, 8, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.font = `600 11px ${token("--num")}`;
  ctx.textBaseline = "middle";
  ctx.textAlign = "left";
  ctx.fillStyle = token("--xx");
  ctx.fillText("x", Math.min(w - 8, cx + R + 3), cy);
  ctx.textAlign = "center";
  ctx.fillStyle = token("--yy");
  ctx.fillText("y", cx, Math.max(6, cy - R - 7));
}

function drawMap(d) {
  const f = fitCanvas(map);
  if (!f) return;
  const { ctx, w, h } = f;
  ctx.clearRect(0, 0, w, h);
  const S = Math.min(w, h);
  const ox = (w - S) / 2, oy = (h - S) / 2;
  ctx.imageSmoothingEnabled = true;
  ctx.drawImage(texture, ox, oy, S, S);
  ctx.strokeStyle = token("--line");
  ctx.lineWidth = 1;
  ctx.strokeRect(ox + 0.5, oy + 0.5, S - 1, S - 1);
  if (state.mark) {
    const mx = ox + (state.mark.i + 0.5) / N * S, my = oy + (state.mark.j + 0.5) / N * S;
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = "#000";
    ctx.globalAlpha = 0.6;
    ctx.beginPath(); ctx.arc(mx, my, 7, 0, Math.PI * 2); ctx.stroke();
    ctx.globalAlpha = 1;
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#fff";
    ctx.beginPath(); ctx.arc(mx, my, 7, 0, Math.PI * 2); ctx.stroke();
  }
}

const vec = document.getElementById("vec");
const view = { yaw: 0.35, pitch: 0.65 };
function proj(p) {
  const cy = Math.cos(view.yaw), sy = Math.sin(view.yaw), cp = Math.cos(view.pitch), sp = Math.sin(view.pitch);
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
function drawVec(d) {
  const f = fitCanvas(vec);
  if (!f) return;
  const { ctx, w, h } = f;
  ctx.clearRect(0, 0, w, h);
  ctx.font = `600 12px ${token("--num")}`;
  const S = Math.min(w / 2.7, h / 2.3);
  const ox = w / 2, oy = h * 0.54;
  const P = (p) => { const q = proj(p); return [ox + q[0] * S, oy - q[1] * S, q[2]]; };
  const W = (a, b, c) => [a, c, b];
  const o = P([0, 0, 0]);
  ctx.strokeStyle = token("--muted"); ctx.lineWidth = 1; ctx.globalAlpha = 0.5;
  ctx.beginPath();
  for (let i = 0; i <= 48; i++) { const t = (i / 48) * Math.PI * 2, p = P(W(Math.cos(t), Math.sin(t), 0)); i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]); }
  ctx.stroke();
  ctx.globalAlpha = 0.3; ctx.setLineDash([3, 4]);
  [[-1, 0, 0], [0, -1, 0]].forEach((a) => { const p = P(W(...a)); ctx.beginPath(); ctx.moveTo(o[0], o[1]); ctx.lineTo(p[0], p[1]); ctx.stroke(); });
  ctx.setLineDash([]); ctx.globalAlpha = 1;
  const [x, y, z] = d.v;
  const tip = P(W(x, y, z)), px = P(W(x, 0, 0)), pxy = P(W(x, y, 0));
  ctx.lineCap = "round"; ctx.lineWidth = 3;
  ctx.strokeStyle = token("--xx"); ctx.beginPath(); ctx.moveTo(o[0], o[1]); ctx.lineTo(px[0], px[1]); ctx.stroke();
  ctx.strokeStyle = token("--yy"); ctx.beginPath(); ctx.moveTo(px[0], px[1]); ctx.lineTo(pxy[0], pxy[1]); ctx.stroke();
  ctx.strokeStyle = token("--zz"); ctx.beginPath(); ctx.moveTo(pxy[0], pxy[1]); ctx.lineTo(tip[0], tip[1]); ctx.stroke();
  const axes = [[[1, 0, 0], "x", "--xx"], [[0, 1, 0], "y", "--yy"], [[0, 0, 1], "z", "--zz"]].map(([a, t, c]) => ({ p: P(W(...a)), t, c: token(c) }));
  axes.sort((p, q) => q.p[2] - p.p[2]);
  axes.forEach((a) => {
    ctx.globalAlpha = 0.9; ctx.strokeStyle = a.c; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(o[0], o[1]); ctx.lineTo(a.p[0], a.p[1]); ctx.stroke(); ctx.globalAlpha = 1;
    const dx = a.p[0] - o[0], dy = a.p[1] - o[1], L = Math.hypot(dx, dy) || 1;
    ctx.fillStyle = a.c; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText(a.t, a.p[0] + (dx / L) * 16, a.p[1] + (dy / L) * 16);
  });
  arrow(ctx, o[0], o[1], tip[0], tip[1], token("--text"), 6, 15, 0.9);
  arrow(ctx, o[0], o[1], tip[0], tip[1], d.hex, 3.5, 12, 1);
  ctx.beginPath(); ctx.arc(tip[0], tip[1], 7, 0, Math.PI * 2);
  ctx.fillStyle = d.hex; ctx.fill();
  ctx.strokeStyle = token("--text"); ctx.lineWidth = 2; ctx.stroke();
}
let vlast = null;
function rotate(dyaw, dpitch) {
  view.yaw += dyaw;
  view.pitch = Math.min(1.5, Math.max(-0.2, view.pitch + dpitch));
  render();
}
vec.addEventListener("pointerdown", (e) => { vlast = [e.clientX, e.clientY]; vec.setPointerCapture(e.pointerId); vec.style.cursor = "grabbing"; });
vec.addEventListener("pointermove", (e) => {
  if (!vlast) return;
  rotate((e.clientX - vlast[0]) * 0.01, (e.clientY - vlast[1]) * 0.01);
  vlast = [e.clientX, e.clientY];
});
const vend = () => { vlast = null; vec.style.cursor = ""; };
vec.addEventListener("pointerup", vend);
vec.addEventListener("pointercancel", vend);
vec.addEventListener("keydown", (e) => {
  const m = { ArrowLeft: [-0.1, 0], ArrowRight: [0.1, 0], ArrowUp: [0, -0.1], ArrowDown: [0, 0.1] }[e.key];
  if (!m) return;
  e.preventDefault();
  rotate(m[0], m[1]);
});

function render() {
  const d = derive();
  keys.forEach((k, n) => {
    const row = document.getElementById("r-" + k);
    const pct = d.c[n] * 100 + "%";
    row.querySelectorAll(".pt, .tie").forEach((e) => { e.style.left = pct; });
    row.querySelector(".vv span").textContent = fmt(d.v[n]);
    row.querySelector(".cv span").textContent = d.c[n].toFixed(2);
  });
  document.getElementById("chip").style.background = d.hex;
  document.getElementById("hex").textContent = d.hex;
  ["bR", "bG", "bB"].forEach((id, n) => { document.getElementById(id).textContent = d.b[n]; });
  pad.setAttribute("aria-valuetext", `x ${fmt(d.v[0])}，y ${fmt(d.v[1])}，顏色 ${d.hex}`);
  drawPad(d);
  drawVec(d);
  drawMap(d);
}

function fromPad(e) {
  const r = pad.getBoundingClientRect();
  const { cx, cy, R } = geom(r.width, r.height);
  let x = (e.clientX - r.left - cx) / R, y = -(e.clientY - r.top - cy) / R;
  const len = Math.hypot(x, y);
  if (len > 1) { x /= len; y /= len; }
  if (len < 0.05) { x = 0; y = 0; }
  state.x = x; state.y = y; state.mark = null;
  render();
}
let dragging = false;
pad.addEventListener("pointerdown", (e) => { dragging = true; pad.setPointerCapture(e.pointerId); pad.focus(); fromPad(e); });
pad.addEventListener("pointermove", (e) => { if (dragging) fromPad(e); });
pad.addEventListener("pointerup", () => { dragging = false; });
pad.addEventListener("pointercancel", () => { dragging = false; });
pad.addEventListener("keydown", (e) => {
  const step = e.shiftKey ? 0.2 : 0.05;
  const m = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, step], ArrowDown: [0, -step] }[e.key];
  if (!m) return;
  e.preventDefault();
  let x = state.x + m[0], y = state.y + m[1];
  const len = Math.hypot(x, y);
  if (len > 1) { x /= len; y /= len; }
  state.x = Math.abs(x) < 1e-9 ? 0 : x;
  state.y = Math.abs(y) < 1e-9 ? 0 : y;
  state.mark = null;
  render();
});

function fromMap(e) {
  const r = map.getBoundingClientRect();
  const S = Math.min(r.width, r.height);
  const ox = (r.width - S) / 2, oy = (r.height - S) / 2;
  const i = Math.floor(((e.clientX - r.left - ox) / S) * N), j = Math.floor(((e.clientY - r.top - oy) / S) * N);
  if (i < 0 || j < 0 || i >= N || j >= N) return;
  const k = j * N + i;
  state.x = field.nx[k]; state.y = field.ny[k]; state.mark = { i, j };
  render();
}
map.addEventListener("pointerdown", (e) => { map.setPointerCapture(e.pointerId); fromMap(e); });
map.addEventListener("pointermove", fromMap);
map.addEventListener("keydown", (e) => {
  const step = 4;
  const m = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] }[e.key];
  if (!m) return;
  e.preventDefault();
  const cur = state.mark || { i: N / 2, j: N / 2 };
  const i = Math.min(N - 1, Math.max(0, cur.i + m[0])), j = Math.min(N - 1, Math.max(0, cur.j + m[1]));
  const k = j * N + i;
  state.x = field.nx[k]; state.y = field.ny[k]; state.mark = { i, j };
  render();
});

document.getElementById("reset").addEventListener("click", () => { state.x = 0; state.y = 0; state.mark = null; render(); });

onRedraw(render);
render();
