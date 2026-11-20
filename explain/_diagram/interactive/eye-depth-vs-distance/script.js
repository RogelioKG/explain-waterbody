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

const RAD = Math.PI / 180;
const CLARITY = 5;
const K = 4.605 / CLARITY;
const HALF_H = Math.atan(Math.tan(30 * RAD) * 16 / 9);
const FISH_STEP = 30;
const FISH_LEN = 0.4;

const $ = (id) => document.getElementById(id);
const els = {
  th: $("s-th"), r: $("s-r"),
  oTh: $("o-th"), oR: $("o-r"), oD: $("o-d"), oZ: $("o-z"), oTauD: $("o-taud"), oTauZ: $("o-tauz"),
  badge: $("b-ratio"), plan: $("c-plan"), planWrap: $("plan-wrap"), screen: $("c-screen"),
  chart: $("c-chart"), tTop: $("t-top"), tZero: $("t-zero"), lCD: $("l-cd"), lCZ: $("l-cz"),
  lD: $("l-d"), lZ: $("l-z"), lTh: $("l-th"), lIsoD: $("l-isod"), lIsoZ: $("l-isoz"),
};

const maxDeg = Math.floor(HALF_H / RAD * 10) / 10;
els.th.min = String(-maxDeg);
els.th.max = String(maxDeg);
$("ax-l").textContent = `左緣 ${(HALF_H / RAD).toFixed(0)}°`;
$("ax-r").textContent = `右緣 ${(HALF_H / RAD).toFixed(0)}°`;

const state = { theta: maxDeg, R: 4 };
let V = null;

function derive() {
  const th = state.theta * RAD;
  const d = state.R;
  const z = d * Math.cos(th);
  const tauD = Math.exp(-K * d);
  const tauZ = Math.exp(-K * z);
  V = { th, d, z, tauD, tauZ, ratio: tauZ / tauD };
}

const pct = (t) => (t >= 0.1 ? (t * 100).toFixed(0) : (t * 100).toFixed(1)) + "%";

function updateText() {
  els.th.value = String(state.theta);
  els.r.value = String(state.R);
  els.oTh.textContent = `θ ${Math.abs(state.theta).toFixed(1)}°`;
  els.oR.textContent = `${state.R.toFixed(1)} m`;
  els.oD.textContent = `${V.d.toFixed(2)} m`;
  els.oZ.textContent = `${V.z.toFixed(2)} m`;
  els.oTauD.textContent = pct(V.tauD);
  els.oTauZ.textContent = pct(V.tauZ);
  const show = V.ratio >= 1.05;
  els.badge.hidden = !show;
  if (show) els.badge.textContent = `清楚 ${V.ratio.toFixed(1)} 倍`;
}

function hexRgb(c) {
  const h = c.replace("#", "");
  const n = h.length === 3 ? h.split("").map((x) => x + x).join("") : h;
  return [0, 2, 4].map((i) => parseInt(n.slice(i, i + 2), 16));
}
function mix(a, b, t) {
  const A = hexRgb(a), B = hexRgb(b);
  return `rgb(${A.map((v, i) => Math.round(v + (B[i] - v) * t)).join(",")})`;
}
function alpha(c, a) {
  return `rgba(${hexRgb(c).join(",")},${a})`;
}

function fishPath(ctx, x, y, len, dir) {
  const bl = len * 0.72, bh = len * 0.34;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(dir);
  ctx.beginPath();
  ctx.ellipse(len * 0.14, 0, bl / 2, bh / 2, 0, 0, Math.PI * 2);
  ctx.moveTo(-len * 0.16, 0);
  ctx.lineTo(-len * 0.5, -bh * 0.5);
  ctx.lineTo(-len * 0.5, bh * 0.5);
  ctx.closePath();
  ctx.restore();
}

function fishList() {
  const out = [];
  for (let i = 0; i < 360 / FISH_STEP; i++) {
    let phi = state.theta - FISH_STEP * i;
    phi = ((phi + 540) % 360) - 180;
    out.push({ i, beta: (90 + FISH_STEP * i) * RAD, phi: phi * RAD });
  }
  return out;
}

function place(el, x, y, w, h) {
  const r = el.getBoundingClientRect();
  const hw = r.width / 2 + 3, hh = r.height / 2 + 2;
  el.style.left = `${Math.max(hw, Math.min(w - hw, x))}px`;
  el.style.top = `${Math.max(hh, Math.min(h - hh, y))}px`;
}

function planGeom(w, h) {
  const s = Math.min((h - 44) / (V.d * 1.12), (w / 2 - 10) / (V.d * 1.02));
  return { s, cx: w / 2, cy: Math.min(h - 20, h / 2 + V.d * s * 0.56 + 10) };
}

function drawPlan() {
  const c = fitCanvas(els.plan);
  if (!c) return;
  const { ctx, w, h } = c;
  const col = { text: token("--text"), muted: token("--muted"), line: token("--line"), d: token("--dist"), z: token("--eye"), fish: token("--fish"), fog: token("--fog") };
  ctx.clearRect(0, 0, w, h);
  const { s, cx, cy } = planGeom(w, h);
  const P = (x, y) => [cx + x * s, cy - y * s];
  const alphaCam = (90 * RAD) + V.th;
  const f = [Math.cos(alphaCam), Math.sin(alphaCam)];
  const right = [Math.sin(alphaCam), -Math.cos(alphaCam)];
  const far = Math.hypot(w, h) / s;

  ctx.strokeStyle = col.line;
  ctx.lineWidth = 1;
  ctx.globalAlpha = 0.7;
  ctx.beginPath();
  for (let g = Math.ceil(-cx / s); g * s <= cx; g++) { ctx.moveTo(cx + g * s, 0); ctx.lineTo(cx + g * s, h); }
  for (let g = Math.ceil(-cy / s); g * s <= h - cy; g++) { ctx.moveTo(0, cy + g * s); ctx.lineTo(w, cy + g * s); }
  ctx.stroke();
  ctx.globalAlpha = 1;

  const a1 = alphaCam - HALF_H, a2 = alphaCam + HALF_H;
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(...P(far * Math.cos(a1), far * Math.sin(a1)));
  ctx.lineTo(...P(far * Math.cos(alphaCam), far * Math.sin(alphaCam)));
  ctx.lineTo(...P(far * Math.cos(a2), far * Math.sin(a2)));
  ctx.closePath();
  ctx.fillStyle = alpha(col.text, theme() === "light" ? 0.05 : 0.05);
  ctx.fill();
  ctx.strokeStyle = col.muted;
  ctx.globalAlpha = 0.6;
  ctx.beginPath();
  ctx.moveTo(cx, cy); ctx.lineTo(...P(far * Math.cos(a1), far * Math.sin(a1)));
  ctx.moveTo(cx, cy); ctx.lineTo(...P(far * Math.cos(a2), far * Math.sin(a2)));
  ctx.stroke();
  ctx.globalAlpha = 1;

  ctx.setLineDash([2, 4]);
  ctx.strokeStyle = col.muted;
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(...P(far * f[0], far * f[1]));
  ctx.stroke();

  ctx.setLineDash([5, 5]);
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = alpha(col.d, 0.75);
  ctx.beginPath();
  ctx.arc(cx, cy, V.d * s, 0, Math.PI * 2);
  ctx.stroke();

  const foot = [f[0] * V.z, f[1] * V.z];
  const half = V.z * Math.tan(HALF_H) * 1.0;
  const e1 = [foot[0] - right[0] * half, foot[1] - right[1] * half];
  const e2 = [foot[0] + right[0] * half, foot[1] + right[1] * half];
  ctx.strokeStyle = alpha(col.z, 0.9);
  ctx.beginPath();
  ctx.moveTo(...P(...e1));
  ctx.lineTo(...P(...e2));
  ctx.stroke();
  ctx.setLineDash([]);

  const fishP = [0, V.d];
  const thr = 28;
  if (Math.abs(V.th) > 0.5 * RAD) {
    ctx.strokeStyle = col.text;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    const s0 = -alphaCam, s1 = -(90 * RAD);
    ctx.arc(cx, cy, thr, Math.min(s0, s1), Math.max(s0, s1));
    ctx.stroke();
  }

  ctx.lineCap = "round";
  ctx.lineWidth = 4;
  ctx.strokeStyle = col.z;
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(...P(...foot));
  ctx.stroke();

  ctx.lineWidth = 3;
  ctx.strokeStyle = col.d;
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(...P(...fishP));
  ctx.stroke();
  ctx.lineCap = "butt";

  if (Math.abs(V.th) > 4 * RAD) {
    const m = 7;
    const [fx, fy] = P(...foot);
    const ux = -f[0], uy = f[1], vx = right[0] * Math.sign(V.th), vy = -right[1] * Math.sign(V.th);
    ctx.strokeStyle = col.z;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(fx + ux * m, fy + uy * m);
    ctx.lineTo(fx + ux * m + vx * m, fy + uy * m + vy * m);
    ctx.lineTo(fx + vx * m, fy + vy * m);
    ctx.stroke();
  }

  const lenPx = Math.max(10, Math.min(16, V.d * s * 0.09));
  for (const fi of fishList()) {
    const wx = V.d * Math.cos(fi.beta), wy = V.d * Math.sin(fi.beta);
    const [px, py] = P(wx, wy);
    const inView = Math.abs(fi.phi) <= HALF_H;
    ctx.globalAlpha = fi.i === 0 ? 1 : inView ? 0.85 : 0.3;
    ctx.fillStyle = col.fish;
    fishPath(ctx, px, py, fi.i === 0 ? lenPx * 1.35 : lenPx, -(fi.beta + Math.PI / 2));
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(-alphaCam);
  ctx.fillStyle = col.text;
  ctx.beginPath();
  ctx.roundRect(-9, -6, 13, 12, 2.5);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(3, -3); ctx.lineTo(10, -6); ctx.lineTo(10, 6); ctx.lineTo(3, 3);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  const [fx, fy] = P(...fishP);
  const dm = [(cx + fx) / 2, (cy + fy) / 2];
  const nD = [-(fy - cy), fx - cx];
  const nl = Math.hypot(...nD) || 1;
  const side = V.th >= 0 ? 1 : -1;
  const [zx, zy] = P(...foot);
  const zm = [(cx + zx) / 2, (cy + zy) / 2];
  const zN = [right[0] * -side, -right[1] * -side];
  place(els.lD, dm[0] + nD[0] / nl * 12 * side, dm[1] + nD[1] / nl * 12 * side, w, h);
  place(els.lZ, zm[0] + zN[0] * 13, zm[1] + zN[1] * 13, w, h);
  const mid = (90 * RAD + alphaCam) / 2;
  const showTh = Math.abs(V.th) > 6 * RAD;
  els.lTh.style.visibility = showTh ? "visible" : "hidden";
  els.lTh.textContent = "θ";
  place(els.lTh, cx + Math.cos(mid) * (thr + 10), cy - Math.sin(mid) * (thr + 10), w, h);
  const roomy = V.d * s > 70;
  els.lIsoD.style.visibility = els.lIsoZ.style.visibility = roomy ? "visible" : "hidden";
  const ia = 90 * RAD - side * 40 * RAD;
  place(els.lIsoD, cx + Math.cos(ia) * (V.d * s + 4) , cy - Math.sin(ia) * (V.d * s + 4) - 8, w, h);
  const [ex, ey] = P(...(side > 0 ? e1 : e2));
  place(els.lIsoZ, ex + 14 * side, ey - 16, w, h);
}

function drawScreen() {
  const c = fitCanvas(els.screen);
  if (!c) return;
  const { ctx, w, h } = c;
  const fogBase = mix(token("--card-2"), token("--fog"), theme() === "light" ? 0.5 : 0.32);
  const fogHex = "#" + fogBase.match(/\d+/g).map((v) => (+v).toString(16).padStart(2, "0")).join("");
  const fishCol = token("--fish");
  const focal = (w / 2) / Math.tan(HALF_H);
  const cy = h / 2;
  ctx.fillStyle = fogBase;
  ctx.fillRect(0, 0, w, h);
  let tracked = null;
  for (const half of [0, 1]) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, half ? cy : 0, w, cy);
    ctx.clip();
    for (const fi of fishList()) {
      if (Math.abs(fi.phi) >= 89 * RAD) continue;
      const zf = V.d * Math.cos(fi.phi);
      const x = w / 2 + focal * Math.tan(fi.phi);
      const len = Math.min(h * 1.8, FISH_LEN / zf * focal);
      if (x < -len || x > w + len) continue;
      const tau = Math.exp(-K * (half ? zf : V.d));
      ctx.fillStyle = mix(fogHex, fishCol, tau);
      fishPath(ctx, x, cy, len, fi.i % 2 ? Math.PI : 0);
      ctx.fill();
      if (fi.i === 0) tracked = { x, len };
    }
    ctx.restore();
  }
  ctx.fillStyle = token("--card-2");
  ctx.fillRect(0, cy - 0.75, w, 1.5);
  ctx.fillStyle = token("--dist");
  ctx.fillRect(0, 0, 4, cy - 1);
  ctx.fillStyle = token("--eye");
  ctx.fillRect(0, cy + 1, 4, h - cy - 1);
  if (tracked) {
    const tx = Math.max(6, Math.min(w - 6, tracked.x));
    guide(ctx, tx, h);
  }
}

function guide(ctx, x, h) {
  ctx.save();
  ctx.setLineDash([2, 3]);
  ctx.strokeStyle = token("--text");
  ctx.globalAlpha = 0.45;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(x, h);
  ctx.stroke();
  ctx.restore();
}

function niceTop(v) {
  const steps = [0.01, 0.02, 0.05, 0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.8, 1];
  for (const s of steps) if (s >= v) return s;
  return 1;
}

function drawChart() {
  const c = fitCanvas(els.chart);
  if (!c) return;
  const { ctx, w, h } = c;
  const col = { line: token("--line"), d: token("--dist"), z: token("--eye"), bad: token("--bad"), text: token("--text"), card: token("--card-2") };
  ctx.clearRect(0, 0, w, h);
  const focal = (w / 2) / Math.tan(HALF_H);
  const top = niceTop(Math.exp(-K * V.d * Math.cos(HALF_H)) * 1.08);
  const y0 = h - 15, y1 = 17;
  const Y = (t) => y0 - (t / top) * (y0 - y1);
  const phiAt = (x) => Math.atan((x - w / 2) / focal);
  const tz = (x) => Math.exp(-K * V.d * Math.cos(phiAt(x)));

  ctx.strokeStyle = col.line;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, Y(0)); ctx.lineTo(w, Y(0));
  ctx.moveTo(0, Y(top)); ctx.lineTo(w, Y(top));
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, Y(V.tauD));
  for (let x = 0; x <= w; x += 2) ctx.lineTo(x, Y(tz(x)));
  ctx.lineTo(w, Y(V.tauD));
  ctx.closePath();
  ctx.fillStyle = alpha(col.bad, 0.2);
  ctx.fill();

  ctx.lineWidth = 2.5;
  ctx.strokeStyle = col.d;
  ctx.beginPath();
  ctx.moveTo(0, Y(V.tauD)); ctx.lineTo(w, Y(V.tauD));
  ctx.stroke();
  ctx.strokeStyle = col.z;
  ctx.beginPath();
  for (let x = 0; x <= w; x += 2) x === 0 ? ctx.moveTo(x, Y(tz(x))) : ctx.lineTo(x, Y(tz(x)));
  ctx.stroke();

  let tracked = null;
  for (const fi of fishList()) {
    if (Math.abs(fi.phi) > HALF_H + 1e-6) continue;
    const x = w / 2 + focal * Math.tan(fi.phi);
    const big = fi.i === 0;
    if (big) tracked = x;
    for (const [t, cc] of [[V.tauD, col.d], [Math.exp(-K * V.d * Math.cos(fi.phi)), col.z]]) {
      ctx.beginPath();
      ctx.arc(Math.max(4, Math.min(w - 4, x)), Y(t), big ? 5 : 3, 0, Math.PI * 2);
      ctx.fillStyle = cc;
      ctx.fill();
      if (big) { ctx.lineWidth = 2; ctx.strokeStyle = col.card; ctx.stroke(); }
    }
  }
  if (tracked !== null) guide(ctx, Math.max(1, Math.min(w - 1, tracked)), h);

  els.tTop.textContent = `τ ${Math.round(top * 100)}%`;
  els.tTop.style.top = `${Y(top) - 8}px`;
  els.tTop.style.left = `${w / 2}px`;
  els.tZero.style.top = `${Y(0) + 8}px`;
  els.tZero.style.left = `${w / 2}px`;
  const lx = w * 0.16;
  const yd = Y(V.tauD) + 10;
  const yz = Math.min(Y(tz(lx)) - 10, yd - 17);
  place(els.lCD, lx, yd, w, h);
  place(els.lCZ, lx, yz, w, h);
}

function render() {
  drawPlan();
  drawScreen();
  drawChart();
}

function update() {
  derive();
  updateText();
  render();
}

els.th.addEventListener("input", () => { state.theta = +els.th.value; update(); });
els.r.addEventListener("input", () => { state.R = +els.r.value; update(); });

function clampTheta(deg) {
  return Math.round(Math.max(-maxDeg, Math.min(maxDeg, deg)) * 10) / 10;
}

function dragger(el, toTheta) {
  el.addEventListener("pointerdown", (e) => {
    el.setPointerCapture(e.pointerId);
    el.classList.add("dragging");
    const move = (ev) => {
      const r = el.getBoundingClientRect();
      const t = toTheta(ev.clientX - r.left, ev.clientY - r.top, r.width, r.height);
      if (t === null) return;
      state.theta = clampTheta(t);
      update();
    };
    move(e);
    const up = () => {
      el.classList.remove("dragging");
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", up);
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
  });
}

dragger(els.planWrap, (x, y, w, h) => {
  const g = planGeom(w, h);
  const dx = x - g.cx, dy = g.cy - y;
  if (Math.hypot(dx, dy) < 6) return null;
  let deg = Math.atan2(dy, dx) / RAD - 90;
  deg = ((deg + 540) % 360) - 180;
  return deg;
});
[els.screen, els.chart].forEach((cv) => dragger(cv.parentElement, (x, y, w) => Math.atan(((x - w / 2) / (w / 2)) * Math.tan(HALF_H)) / RAD));

derive();
updateText();
onRedraw(render);
