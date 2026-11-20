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

const L = 6;
const S = 0.5;
const K = (2 * Math.PI) / L;
const A = S / K;
const OMEGA = Math.sqrt(9.81 * K);
const R = 0.1;
const SPACING = 0.5;
const ITER = 4;
const SPEED = 0.5;

const cv = document.getElementById("cv");
const maxv = document.getElementById("maxv");
const badge = document.getElementById("badge");
const btnNaive = document.getElementById("mNaive");
const btnSolved = document.getElementById("mSolved");
const btnPlay = document.getElementById("play");
const bar = document.getElementById("bar");
const lines = document.querySelectorAll(".lines .line");

const state = { mode: "naive", mix: 0, t: 0 };

const u = (p, t) => A * Math.cos(K * p - OMEGA * t);
const zeta = (p, t) => A * Math.sin(K * p - OMEGA * t);

function solve(q, t, n) {
  let p = q;
  for (let i = 0; i < n; i++) p = q - u(p, t);
  return p;
}

const naiveY = (q, t) => zeta(q, t);
const solvedY = (q, t) => zeta(solve(q, t, ITER), t);
const surfaceY = (q, t) => zeta(solve(q, t, 60), t);

function maxAbove(fn) {
  let m = 0;
  for (let i = 0; i < 2000; i++) {
    const q = (i / 2000) * L;
    m = Math.max(m, fn(q, 0) - surfaceY(q, 0));
  }
  return m;
}

const MAX = { naive: maxAbove(naiveY), solved: maxAbove(solvedY) };

function derive() {
  const m = MAX[state.mode];
  const over = m > R;
  return { m, over };
}

function syncUI() {
  const d = derive();
  btnNaive.setAttribute("aria-pressed", String(state.mode === "naive"));
  btnSolved.setAttribute("aria-pressed", String(state.mode === "solved"));
  lines.forEach((el) => el.classList.toggle("on", el.dataset.mode === state.mode));
  maxv.textContent = `${(d.m * 100).toFixed(1)} cm`;
  badge.textContent = d.over ? `> 半徑 ${R * 100} cm：懸空` : "一半泡在水裡";
  badge.classList.toggle("ok", !d.over);
}

function draw() {
  const f = fitCanvas(cv);
  if (!f) return;
  const { ctx, w, h } = f;
  const cWater = token("--water");
  const cBall = token("--ball");
  const cBad = token("--bad");
  const cMuted = token("--muted");
  const cLine = token("--line");
  const cCard = token("--card");
  const fs = parseFloat(getComputedStyle(document.documentElement).fontSize) * 0.66;
  const font = `500 ${fs}px ${token("--num")}`;

  const labH = fs + 8;
  const sW = w / Math.max(4.2, Math.min(7, w / 120));
  const sH = (h - 2 * labH - 8) / (2 * (A + R) + 0.1);
  const s = Math.min(sW, sH);
  const cx = w / 2;
  const cy = h / 2;
  const X = (x) => cx + x * s;
  const Y = (y) => cy - y * s;
  const xl = -cx / s;
  const xr = cx / s;
  const t = state.t;

  ctx.clearRect(0, 0, w, h);

  ctx.strokeStyle = cLine;
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(0, Y(0));
  ctx.lineTo(w, Y(0));
  ctx.stroke();
  ctx.setLineDash([]);

  const balls = [];
  const j0 = Math.ceil((xl + R) / SPACING);
  const j1 = Math.floor((xr - R) / SPACING);
  for (let j = j0; j <= j1; j++) {
    const q = j * SPACING;
    const yn = naiveY(q, t);
    const ys = solvedY(q, t);
    const y = yn + (ys - yn) * state.mix;
    balls.push({ q, y, surf: surfaceY(q, t) });
  }

  for (const b of balls) {
    ctx.fillStyle = cBall;
    ctx.beginPath();
    ctx.arc(X(b.q), Y(b.y), R * s, 0, Math.PI * 2);
    ctx.fill();
  }

  const pts = [];
  const step = 2 / s;
  for (let p = xl - A - 1; p <= xr + A + 1; p += step) {
    pts.push([X(p + u(p, t)), Y(zeta(p, t))]);
  }
  ctx.beginPath();
  ctx.moveTo(pts[0][0], h);
  for (const [x, y] of pts) ctx.lineTo(x, y);
  ctx.lineTo(pts[pts.length - 1][0], h);
  ctx.closePath();
  ctx.globalAlpha = 0.42;
  ctx.fillStyle = cWater;
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.fillStyle = cCard;
  ctx.globalAlpha = 0.25;
  ctx.fill();
  ctx.globalAlpha = 1;

  ctx.beginPath();
  pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
  ctx.strokeStyle = cWater;
  ctx.lineWidth = 2;
  ctx.stroke();

  for (const b of balls) {
    ctx.strokeStyle = cBall;
    ctx.lineWidth = 1.25;
    ctx.beginPath();
    ctx.arc(X(b.q), Y(b.y), R * s, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = cCard;
    ctx.beginPath();
    ctx.arc(X(b.q), Y(b.y), Math.max(1.2, R * s * 0.14), 0, Math.PI * 2);
    ctx.fill();
    const gap = b.y - R - b.surf;
    if (gap > 0.01) {
      const x = X(b.q);
      ctx.strokeStyle = cBad;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, Y(b.y - R) + 1);
      ctx.lineTo(x, Y(b.surf) - 1);
      ctx.moveTo(x - 3, Y(b.surf) - 1);
      ctx.lineTo(x + 3, Y(b.surf) - 1);
      ctx.stroke();
    }
  }

  ctx.font = font;
  ctx.textAlign = "center";
  ctx.fillStyle = cMuted;
  const phase0 = OMEGA * t;
  const marks = [
    { name: "浪峰", ph: Math.PI / 2, y: A + R, dy: -6, base: "bottom" },
    { name: "浪谷", ph: (3 * Math.PI) / 2, y: -A - R, dy: 6, base: "top" },
  ];
  for (const m of marks) {
    const p0 = (m.ph + phase0) / K;
    const n0 = Math.ceil((xl + 0.3 - p0) / L);
    for (let n = n0; p0 + n * L <= xr - 0.3; n++) {
      const x = p0 + n * L;
      ctx.textBaseline = m.base;
      ctx.fillText(m.name, X(x), Y(m.y) + m.dy);
    }
  }

  bar.style.width = `${s}px`;
}

let tween = 0;
function setMode(mode) {
  if (state.mode === mode) return;
  state.mode = mode;
  syncUI();
  const target = mode === "solved" ? 1 : 0;
  cancelAnimationFrame(tween);
  if (REDUCED) {
    state.mix = target;
    draw();
    return;
  }
  const from = state.mix;
  const start = performance.now();
  const dur = 450;
  const step = (now) => {
    const k = Math.min(1, (now - start) / dur);
    const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
    state.mix = from + (target - from) * e;
    if (!anim.playing) draw();
    if (k < 1) tween = requestAnimationFrame(step);
  };
  tween = requestAnimationFrame(step);
}

const anim = animate(
  (dt) => {
    state.t += dt * SPEED;
    draw();
  },
  {
    onChange: (on) => {
      btnPlay.textContent = on ? "暫停" : "播放";
      btnPlay.setAttribute("aria-pressed", String(on));
    },
  }
);
btnPlay.textContent = anim.playing ? "暫停" : "播放";
btnPlay.setAttribute("aria-pressed", String(anim.playing));

btnNaive.addEventListener("click", () => setMode("naive"));
btnSolved.addEventListener("click", () => setMode("solved"));
btnPlay.addEventListener("click", () => anim.toggle());

syncUI();
onRedraw(draw);
