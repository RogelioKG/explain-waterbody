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

const LAMBDA = 6;
const K = (2 * Math.PI) / LAMBDA;
const X0 = -1.5, X1 = 4.5, XC = 1.5;
const Y_HALF = 1.42;
const N_SHOW = 13;
const N_PROG = 4;
const R_TOP = 2, R_FLOOR = 1e-4;

const state = { S: 0.5, q: 1.0 };
let d = null;

const $ = (id) => document.getElementById(id);
const inS = $("in-s"), oS = $("o-s"), oQ = $("o-q"), oErr = $("o-err"), oLeftLabel = $("o-left-label");
const handle = $("q-handle"), badge = $("badge-fold"), wavePlot = $("wave-plot");
const cWave = $("c-wave"), cBars = $("c-bars");

function rem(name) {
  return parseFloat(token(name)) * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function findRoots(S, q) {
  const a = S / K;
  const g = (p) => p + a * Math.cos(K * p) - q;
  const lo = q - a - 0.2, hi = q + a + 0.2, step = 0.002;
  const roots = [];
  let x0 = lo, g0 = g(x0);
  while (x0 < hi) {
    const x1 = x0 + step, g1 = g(x1);
    if (g0 === 0) roots.push(x0);
    else if (g0 * g1 < 0) {
      let l = x0, r = x1, gl = g0;
      for (let i = 0; i < 60; i++) {
        const m = (l + r) / 2, gm = g(m);
        if (gl * gm <= 0) r = m; else { l = m; gl = gm; }
      }
      roots.push((l + r) / 2);
    }
    x0 = x1; g0 = g1;
  }
  return roots;
}

function derive() {
  const { S, q } = state;
  const a = S / K;
  const u = (p) => a * Math.cos(K * p);
  const h = (p) => a * Math.sin(K * p);
  const ps = [q];
  for (let n = 1; n < N_SHOW; n++) ps.push(q - u(ps[n - 1]));
  const land = ps.map((p) => p + u(p));
  const rs = land.map((x) => Math.abs(x - q));
  const roots = findRoots(S, q);
  const multi = roots.length > 1;
  const stuck = !multi && S * Math.abs(Math.sin(K * roots[0])) >= 1;
  const hErr = multi || stuck ? null : Math.abs(h(ps[N_PROG]) - h(roots[0]));
  d = { S, q, a, u, h, ps, land, rs, roots, multi, stuck, folded: S > 1, hErr };
}

function fmtLen(m) {
  if (m >= 0.01) return (m * 100).toFixed(1) + " cm";
  if (m >= 0.0001) return (m * 1000).toFixed(1) + " mm";
  return "< 0.1 mm";
}

function updateDom() {
  oS.textContent = d.S.toFixed(2);
  oQ.textContent = d.q.toFixed(2);
  handle.setAttribute("aria-valuenow", d.q.toFixed(2));
  handle.setAttribute("aria-valuetext", d.q.toFixed(2) + " 公尺");
  if (d.multi) {
    oLeftLabel.textContent = "4 次後";
    oErr.textContent = "沒有唯一答案";
  } else if (d.stuck) {
    oLeftLabel.textContent = "4 次後";
    oErr.textContent = "不收斂";
  } else {
    oLeftLabel.textContent = "4 次後高度差";
    oErr.textContent = fmtLen(d.hErr);
  }
  badge.textContent = d.multi ? "浪峰打結，答案不只一個" : d.stuck ? "浪峰打結，猜測來回跳、不收斂" : "浪峰打結";
  badge.hidden = !d.folded;
}

function waveGeom(w, h) {
  const top = 24, bot = 26;
  const ah = Math.max(10, h - top - bot);
  const scale = Math.max(1, Math.min((w - 8) / (X1 - X0), ah / (2 * Y_HALF)));
  const cy = top + ah / 2;
  return {
    top, bot, scale,
    X: (x) => w / 2 + (x - XC) * scale,
    Y: (y) => cy - y * scale,
    inv: (px) => XC + (px - w / 2) / scale,
  };
}

function drawWave() {
  const f = fitCanvas(cWave);
  if (!f) return;
  const { ctx, w, h } = f;
  ctx.clearRect(0, 0, w, h);
  const G = waveGeom(w, h);
  const water = token("--water"), target = token("--target"), guess = token("--guess");
  const line = token("--line");
  const xl = G.X(X0), xr = G.X(X1);

  ctx.save();
  ctx.beginPath();
  ctx.rect(xl, 0, xr - xl, h);
  ctx.clip();

  ctx.strokeStyle = line;
  ctx.lineWidth = 1;
  ctx.setLineDash([3, 4]);
  ctx.beginPath();
  ctx.moveTo(xl, G.Y(0));
  ctx.lineTo(xr, G.Y(0));
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.strokeStyle = water;
  ctx.lineWidth = 2;
  ctx.lineJoin = "round";
  ctx.beginPath();
  const p0 = X0 - d.a - 0.3, p1 = X1 + d.a + 0.3, steps = 900;
  for (let i = 0; i <= steps; i++) {
    const p = p0 + ((p1 - p0) * i) / steps;
    const x = G.X(p + d.u(p)), y = G.Y(d.h(p));
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.restore();

  const qx = G.X(d.q);
  ctx.strokeStyle = target;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(qx, G.Y(Y_HALF));
  ctx.lineTo(qx, G.Y(-Y_HALF));
  ctx.stroke();

  const fs = rem("--fs-3");
  const placed = [];
  const free = (b) => placed.every((o) => b.x1 < o.x0 || b.x0 > o.x1 || b.y1 < o.y0 || b.y0 > o.y1);
  const ringR = 7;
  d.roots.forEach((r) => placed.push({ x0: qx - ringR, x1: qx + ringR, y0: G.Y(d.h(r)) - ringR, y1: G.Y(d.h(r)) + ringR }));

  if (d.folded) {
    const bw = badge.offsetWidth || 120, bx = G.X(XC), by = G.Y(Y_HALF) - 22;
    placed.push({ x0: bx - bw / 2 - 2, x1: bx + bw / 2 + 2, y0: by - 2, y1: by + 20 });
  }

  ctx.font = `600 ${fs}px ${token("--sans")}`;
  let ansLabel = null;
  if (!d.multi) {
    const ay = G.Y(d.h(d.roots[0]));
    const tw = ctx.measureText("答案").width;
    const right = qx + ringR + 4 + tw < xr;
    const lx = right ? qx + ringR + 4 : qx - ringR - 4 - tw;
    const ly = ay + ringR + fs;
    ansLabel = { x: lx, y: ly, tw };
    placed.push({ x0: lx - 2, x1: lx + tw + 2, y0: ly - fs, y1: ly + 2 });
  }

  const dots = [];
  for (let n = 0; n <= N_PROG; n++) dots.push({ n, x: G.X(d.land[n]), y: G.Y(d.h(d.ps[n])) });
  dots.forEach(({ n, x, y }) => {
    ctx.globalAlpha = 0.4 + (0.6 * n) / N_PROG;
    ctx.fillStyle = guess;
    ctx.beginPath();
    ctx.arc(x, y, n === N_PROG ? 5 : 4, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;

  ctx.lineWidth = 2;
  ctx.strokeStyle = guess;
  d.roots.forEach((r) => {
    ctx.beginPath();
    ctx.arc(qx, G.Y(d.h(r)), ringR, 0, Math.PI * 2);
    ctx.stroke();
  });

  if (ansLabel) {
    ctx.fillStyle = guess;
    ctx.textBaseline = "alphabetic";
    ctx.fillText("答案", ansLabel.x, ansLabel.y);
  }

  ctx.font = `600 ${fs}px ${token("--num")}`;
  const sub = "₀₁₂₃₄";
  [0].forEach((n) => {
    const { x, y } = dots[n];
    const t = "p" + sub[n];
    const tw = ctx.measureText(t).width;
    for (const [dx, dy] of [[-tw / 2, -9], [-tw / 2, 9 + fs], [-tw - 8, 4], [8, 4]]) {
      const b = { x0: x + dx - 1, x1: x + dx + tw + 1, y0: y + dy - fs * 0.85, y1: y + dy + 2 };
      if (b.x0 < 0 || b.x1 > w || b.y0 < 0 || b.y1 > h - G.bot) continue;
      if (!free(b)) continue;
      placed.push(b);
      ctx.fillStyle = guess;
      ctx.fillText(t, x + dx, y + dy);
      break;
    }
  });

  const hw = handle.offsetWidth / 2;
  handle.style.left = Math.min(w - hw, Math.max(hw, qx)) + "px";
  handle.style.top = G.Y(-Y_HALF) + 4 + "px";
  badge.style.left = G.X(XC) + "px";
  badge.style.top = G.Y(Y_HALF) - 22 + "px";
}

function drawBars() {
  const f = fitCanvas(cBars);
  if (!f) return;
  const { ctx, w, h } = f;
  ctx.clearRect(0, 0, w, h);
  const fs4 = rem("--fs-4");
  const top = 20, left = 44, right = 4, bottom = 18;
  const pw = w - left - right, ph = h - top - bottom;
  if (pw < 20 || ph < 20) return;
  const lTop = Math.log10(R_TOP), lBot = Math.log10(R_FLOOR);
  const Y = (r) => top + ((lTop - Math.log10(Math.min(R_TOP, Math.max(r, R_FLOOR)))) / (lTop - lBot)) * ph;
  const slot = pw / N_SHOW;
  const cx = (n) => left + slot * (n + 0.5);
  const water = token("--water"), guess = token("--guess");
  const line = token("--line"), muted = token("--muted");

  ctx.font = `500 ${fs4}px ${token("--num")}`;
  ctx.textBaseline = "middle";
  [[1, "1 m"], [0.1, "10 cm"], [0.01, "1 cm"], [0.001, "1 mm"], [0.0001, "0.1 mm"]].forEach(([r, t]) => {
    const y = Math.round(Y(r)) + 0.5;
    ctx.strokeStyle = line;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(left, y);
    ctx.lineTo(w - right, y);
    ctx.stroke();
    ctx.fillStyle = muted;
    ctx.textAlign = "right";
    ctx.fillText(t, left - 6, y);
  });

  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  const step = slot < 16 ? 2 : 1;
  for (let n = 0; n < N_SHOW; n++) {
    if (n % step && n !== N_PROG) continue;
    ctx.fillStyle = n === N_PROG ? guess : muted;
    ctx.fillText(String(n), cx(n), h - 4);
  }
  ctx.textAlign = "right";
  ctx.fillStyle = muted;
  ctx.font = `500 ${fs4}px ${token("--sans")}`;
  ctx.fillText("第幾次", left - 6, h - 4);

  const bw = Math.max(4, Math.min(18, slot * 0.62));
  const base = Y(R_FLOOR);
  for (let n = 0; n < N_SHOW; n++) {
    const r = d.rs[n];
    ctx.globalAlpha = n <= N_PROG ? 1 : 0.38;
    ctx.fillStyle = guess;
    const y = r > R_FLOOR ? Y(r) : base - 2;
    ctx.fillRect(cx(n) - bw / 2, y, bw, base - y);
  }
  ctx.globalAlpha = 1;

  const mx = Math.round(left + slot * (N_PROG + 1)) + 0.5;
  ctx.strokeStyle = muted;
  ctx.lineWidth = 1;
  ctx.setLineDash([2, 3]);
  ctx.beginPath();
  ctx.moveTo(mx, top - 4);
  ctx.lineTo(mx, base);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.font = `500 ${fs4}px ${token("--sans")}`;
  ctx.fillStyle = muted;
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  ctx.fillText("程式算到這", mx + 4, top - 6);

  const r0 = d.rs[0];
  if (r0 > R_FLOOR && d.S > 0) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(left, top, pw, ph);
    ctx.clip();
    ctx.strokeStyle = water;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 4]);
    ctx.beginPath();
    for (let n = 0; n < N_SHOW; n++) {
      const v = r0 * Math.pow(d.S, n);
      const y = top + ((lTop - Math.log10(Math.max(v, 1e-9))) / (lTop - lBot)) * ph;
      if (n === 0) ctx.moveTo(cx(n), y); else ctx.lineTo(cx(n), y);
    }
    ctx.stroke();
    ctx.restore();

    ctx.font = `600 ${fs4}px ${token("--num")}`;
    const t = "上限 ×" + d.S.toFixed(2) + "/次";
    ctx.strokeStyle = water;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 4]);
    ctx.beginPath();
    ctx.moveTo(left, top - 10);
    ctx.lineTo(left + 14, top - 10);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = water;
    ctx.textAlign = "left";
    ctx.fillText(t, left + 18, top - 6);
  }
}

function render() {
  derive();
  updateDom();
  drawWave();
  drawBars();
}

inS.addEventListener("input", () => {
  state.S = parseFloat(inS.value);
  render();
});

const clampQ = (q) => Math.min(4.45, Math.max(-1.45, Math.round(q * 100) / 100));
function qFromEvent(e) {
  const r = cWave.getBoundingClientRect();
  const G = waveGeom(r.width, r.height);
  return clampQ(G.inv(e.clientX - r.left));
}
let dragging = false;
wavePlot.addEventListener("pointerdown", (e) => {
  dragging = true;
  wavePlot.setPointerCapture(e.pointerId);
  state.q = qFromEvent(e);
  render();
});
wavePlot.addEventListener("pointermove", (e) => {
  if (!dragging) return;
  state.q = qFromEvent(e);
  render();
});
const stopDrag = () => { dragging = false; };
wavePlot.addEventListener("pointerup", stopDrag);
wavePlot.addEventListener("pointercancel", stopDrag);

handle.addEventListener("keydown", (e) => {
  const big = e.shiftKey ? 0.25 : 0.05;
  let q = state.q;
  if (e.key === "ArrowLeft" || e.key === "ArrowDown") q -= big;
  else if (e.key === "ArrowRight" || e.key === "ArrowUp") q += big;
  else if (e.key === "PageDown") q -= 0.5;
  else if (e.key === "PageUp") q += 0.5;
  else if (e.key === "Home") q = -1.45;
  else if (e.key === "End") q = 4.45;
  else return;
  e.preventDefault();
  state.q = clampQ(q);
  render();
});

state.S = parseFloat(inS.value);
render();
onRedraw(() => { drawWave(); drawBars(); });
