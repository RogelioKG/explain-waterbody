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

const N_WATER = 1.33;
const TH1 = 60;
const H_MAX = 2;
const T_MAX = 15;
const PERIOD = 3.2;
const RAD = Math.PI / 180;

const cv = document.getElementById("cv");
const sT = document.getElementById("s-t");
const sH = document.getElementById("s-h");
const oT = document.getElementById("o-t");
const oH = document.getElementById("o-h");
const btn = document.getElementById("play");

const state = { t: Number(sT.value), H: Number(sH.value), amp: 9, phase: 0 };

function refractV(t) {
  const th2 = Math.asin(Math.sin((TH1 + t) * RAD) / N_WATER) / RAD;
  return th2 - t;
}

function derive(s) {
  const angA = refractV(0);
  const angB = refractV(s.t);
  const kA = Math.tan(angA * RAD);
  const kB = Math.tan(angB * RAD);
  const ratio = kA - kB;
  return { angA, angB, kA, kB, ratio, delta: ratio * s.H, kMax: Math.tan(refractV(-T_MAX) * RAD) };
}

const signed = (v) => {
  const r = Math.round(v);
  return r > 0 ? `+${r}°` : r < 0 ? `−${-r}°` : "0°";
};

function syncControls() {
  oT.value = signed(state.t);
  oH.value = `${state.H.toFixed(2)} m`;
}

function label(ctx, text, x, y, { color, align = "center", font = "sans", size = 12, weight = 500, base = "alphabetic" } = {}) {
  ctx.font = `${weight} ${size}px ${token(font === "num" ? "--num" : "--sans")}`;
  ctx.fillStyle = color;
  ctx.textAlign = align;
  ctx.textBaseline = base;
  ctx.fillText(text, x, y);
  return ctx.measureText(text).width;
}

function textW(ctx, text, size, weight, font) {
  ctx.font = `${weight} ${size}px ${token(font === "num" ? "--num" : "--sans")}`;
  return ctx.measureText(text).width;
}

function arc(ctx, cx, cy, r, a0, a1, color, width = 1.2) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.setLineDash([]);
  ctx.arc(cx, cy, r, Math.min(a0, a1), Math.max(a0, a1));
  ctx.stroke();
}

function line(ctx, x0, y0, x1, y1, color, width = 1.2, dash = []) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.setLineDash(dash);
  ctx.moveTo(x0, y0);
  ctx.lineTo(x1, y1);
  ctx.stroke();
  ctx.setLineDash([]);
}

function dot(ctx, x, y, r, color) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}

function draw() {
  const f = fitCanvas(cv);
  if (!f) return;
  const { ctx, w, h } = f;
  const d = derive(state);
  const C = {
    text: token("--text"), muted: token("--muted"), line: token("--line"),
    cam: token("--cam"), tilt: token("--tilt"), water: token("--water"),
  };
  ctx.clearRect(0, 0, w, h);

  const L = 80;
  const wedge = Math.tan(T_MAX * RAD);
  const airNeed = L + 42;
  const leftNeed = Math.max(120, wedge * L + 12 + textW(ctx, "平靜的 normal", 12, 500));
  const rightNeed = 16;
  const botNeed = 52;
  const s = Math.max(10, Math.min((h - airNeed - botNeed - 8) / H_MAX, (w - leftNeed - rightNeed - 12) / (H_MAX * d.kMax)));
  const compW = leftNeed + s * H_MAX * d.kMax + rightNeed;
  const compH = airNeed + s * H_MAX + botNeed;
  const px = Math.max(6, (w - compW) / 2) + leftNeed;
  const py = Math.max(4, (h - compH) / 2) + airNeed;
  const Hs = state.H * s;
  const by = py + Hs;
  const xA = px + state.H * s * d.kA;
  const xB = px + state.H * s * d.kB;

  const down = (deg, r) => [px + r * Math.sin(deg * RAD), py + r * Math.cos(deg * RAD)];
  const up = (deg, r) => [px + r * Math.sin(deg * RAD), py - r * Math.cos(deg * RAD)];
  const canvasAng = (deg, isUp) => (isUp ? -90 + deg : 90 - deg) * RAD;

  ctx.fillStyle = C.water;
  ctx.globalAlpha = 0.13;
  ctx.fillRect(0, py, w, Hs);
  ctx.globalAlpha = 1;
  line(ctx, 0, py, w, py, C.water, 1.6);
  label(ctx, "水面", w - 12, py - 7, { color: C.water, align: "right" });
  line(ctx, 0, by, w, by, C.muted, 1, [4, 3]);
  label(ctx, "湖底", 12, by + 17, { color: C.muted, align: "left" });

  line(ctx, px, py - L, px, by, C.muted, 1, [2, 3]);
  label(ctx, "平靜的 normal", px - wedge * L - 10, py - L + 4, { color: C.muted, align: "right" });

  const rCam = Math.min(2 * (L - 28), (px - 14) / Math.sin(TH1 * RAD));
  const [cx, cy] = up(-TH1, rCam);
  line(ctx, cx, cy, px, py, C.muted, 1.8);
  line(ctx, px, py, xA, by, C.muted, 1.8);
  line(ctx, px, py, xB, by, C.tilt, 1.8, [5, 3]);

  arc(ctx, px, py, 40, canvasAng(-TH1, true), canvasAng(0, true), C.muted);
  const y1 = py - 56;
  label(ctx, "θ₁ = 60°", px - wedge * 56 - 6, y1 + 4, { color: C.muted, align: "right", font: "num" });

  const [nx, ny] = up(state.t, L + 18);
  line(ctx, px, py, nx, ny, C.tilt, 1.6, [2, 3]);
  if (Math.abs(state.t) > 0.05) arc(ctx, px, py, 28, canvasAng(0, true), canvasAng(state.t, true), C.tilt, 1.4);
  const nName = "有波紋的 normal";
  const nVal = signed(state.t);
  const wName = textW(ctx, nName, 12, 600);
  const wVal = textW(ctx, nVal, 12, 600, "num");
  const wAll = wName + 6 + wVal;
  const lx = Math.min(Math.max(nx - wAll / 2, 6), w - 6 - wAll);
  label(ctx, nName, lx, ny - 7, { color: C.tilt, align: "left", weight: 600 });
  label(ctx, nVal, lx + wName + 6, ny - 7, { color: C.tilt, align: "left", weight: 600, font: "num" });

  const half = 30;
  const [sx0, sy0] = up(state.t - 90, half);
  const [sx1, sy1] = up(state.t + 90, half);
  line(ctx, sx0, sy0, sx1, sy1, C.tilt, 3);
  label(ctx, "波紋的水面", px - half - 8, py - 5, { color: C.tilt, align: "right" });

  dot(ctx, cx, cy, 5, C.cam);
  const camW = textW(ctx, "攝影機", 12, 500);
  label(ctx, "攝影機", Math.max(4, cx + 6 - camW), cy + 18, { color: C.cam, align: "left" });

  label(ctx, "P", px + 9, py - 7, { color: C.text, align: "left", weight: 700, size: 13 });

  if (Hs >= 40) label(ctx, "水深 H", px - 8, py + Hs / 2 + 4, { color: C.water, align: "right" });

  if (Hs >= 62) {
    const r2 = Math.min(52, 0.42 * Hs);
    const rb = Math.min(86, 0.72 * Hs);
    arc(ctx, px, py, r2, canvasAng(0, false), canvasAng(d.angA, false), C.muted);
    arc(ctx, px, py, rb, canvasAng(0, false), canvasAng(d.angB, false), C.tilt, 1.4);
    const [l2x, l2y] = down(Math.max(d.angA, d.angB) + 10, r2 + 12);
    label(ctx, `θ₂ = ${d.angA.toFixed(1)}°`, l2x, l2y + 4, { color: C.muted, align: "left", font: "num" });
    const [lbx, lby] = down(d.angB / 2, rb + 13);
    const bText = `${d.angB.toFixed(1)}°`;
    const bw = textW(ctx, bText, 12, 600, "num");
    label(ctx, bText, Math.max(lbx - bw / 2, px + 5), lby + 4, { color: C.tilt, font: "num", weight: 600, align: "left" });
  }

  dot(ctx, xA, by, 3.8, C.text);
  dot(ctx, xB, by, 3.8, C.tilt);
  let la = xA, lb = xB;
  const gap = 15;
  if (Math.abs(la - lb) < gap) {
    const mid = (la + lb) / 2;
    const sgn = lb <= la ? -1 : 1;
    lb = mid + sgn * gap / 2;
    la = mid - sgn * gap / 2;
  }
  label(ctx, "A", la, by + 18, { color: C.text, weight: 700, size: 13 });
  label(ctx, "B", lb, by + 18, { color: C.tilt, weight: 700, size: 13 });

  const yb = by + 30;
  if (Math.abs(xA - xB) >= 12) {
    line(ctx, Math.min(xA, xB), yb, Math.max(xA, xB), yb, C.tilt, 1.2);
    line(ctx, xA, yb - 5, xA, yb + 5, C.tilt, 1.2);
    line(ctx, xB, yb - 5, xB, yb + 5, C.tilt, 1.2);
  }
  const dText = `Δ = ${Math.abs(d.ratio).toFixed(2)} H = ${Math.round(Math.abs(d.delta) * 100)} cm`;
  const dw = textW(ctx, dText, 12, 600, "num");
  const dx = Math.min(Math.max(xA - dw / 2, 8), w - 10 - dw);
  label(ctx, dText, dx, yb + 18, { color: C.tilt, align: "left", font: "num", weight: 600 });

  const side = d.ratio > 0.0005 ? "A 左側" : d.ratio < -0.0005 ? "A 右側" : "A 上";
  cv.setAttribute("aria-label", `切面：攝影機的視線以 60 度射到水面點 P；平靜時折進水裡和垂直夾 ${d.angA.toFixed(1)} 度、碰到湖底的 A；normal 傾斜 ${signed(state.t)}，折進水裡和垂直夾 ${d.angB.toFixed(1)} 度、碰到 B，B 在 ${side}，水深 ${state.H.toFixed(2)} 公尺處相距 ${Math.abs(d.ratio).toFixed(2)} H = ${Math.round(Math.abs(d.delta) * 100)} 公分`);
}

const anim = animate((dt) => {
  state.phase += (dt * 2 * Math.PI) / PERIOD;
  state.t = state.amp * Math.cos(state.phase);
  sT.value = String(Math.round(state.t));
  syncControls();
  draw();
}, {
  playing: false,
  onChange(p) { btn.setAttribute("aria-pressed", String(p)); },
});

function startSwing() {
  state.amp = Math.abs(state.t) >= 2 ? Math.abs(state.t) : 9;
  state.phase = Math.acos(Math.max(-1, Math.min(1, state.t / state.amp)));
  anim.play();
}

btn.addEventListener("click", () => (anim.playing ? anim.pause() : startSwing()));
sT.addEventListener("input", () => {
  if (anim.playing) anim.pause();
  state.t = Number(sT.value);
  syncControls();
  draw();
});
sH.addEventListener("input", () => {
  state.H = Number(sH.value);
  syncControls();
  draw();
});

syncControls();
onRedraw(draw);
if (!REDUCED) startSwing();
