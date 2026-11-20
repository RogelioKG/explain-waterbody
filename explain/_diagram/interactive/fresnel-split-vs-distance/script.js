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

const L_MAX = 30;
const EYE_H = 1.7;
const N1 = 1;
const N2 = 1.33;
const F0 = ((N2 - N1) / (N2 + N1)) ** 2;
const TH_TICKS = [60, 75, 80, 85];
const L_MIRROR = 10;

const cv = document.getElementById("cv");
const input = document.getElementById("in-l");
const outL = document.getElementById("o-l");

const state = { l: Number(input.value) };

const schlick = (th) => F0 + (1 - F0) * (1 - Math.cos(th)) ** 5;
const thetaAt = (l) => Math.atan2(l, EYE_H);
const deg = (r) => (r * 180) / Math.PI;

function derive(l) {
  const th = thetaAt(l);
  const F = schlick(th);
  const th2 = Math.asin(Math.sin(th) / N2);
  return { l, th, F, T: 1 - F, th2 };
}

function pxVar(name) {
  return parseFloat(token(name)) || 0;
}

function font(size, weight = 500, f = "num") {
  const it = f === "var" ? "italic " : "";
  const fam = f === "num" ? token("--num") : token("--sans");
  return `${it}${weight} ${size}px ${fam}`;
}

function remPx(name) {
  const v = token(name);
  const root = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
  return v.endsWith("rem") ? parseFloat(v) * root : parseFloat(v);
}

function rich(ctx, segs, x, y, { align = "left", size, weight = 600, color, halo, box, f = "sans" }) {
  const sub = size * 0.72;
  const parts = segs.map((s) => {
    ctx.font = font(s.sub ? sub : size, weight, s.f || f);
    return { ...s, w: ctx.measureText(s.t).width };
  });
  const total = parts.reduce((a, p) => a + p.w, 0);
  let cx = align === "right" ? x - total : align === "center" ? x - total / 2 : x;
  if (box) {
    ctx.globalAlpha = 0.88;
    ctx.fillStyle = box;
    ctx.beginPath();
    ctx.roundRect(cx - 4, y - size * 0.95, total + 8, size * 1.35, 4);
    ctx.fill();
    ctx.globalAlpha = 1;
  }
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  for (const p of parts) {
    ctx.font = font(p.sub ? sub : size, weight, p.f || f);
    const py = p.sub ? y + size * 0.22 : y;
    if (halo) {
      ctx.lineJoin = "round";
      ctx.lineWidth = 3;
      ctx.strokeStyle = halo;
      ctx.strokeText(p.t, cx, py);
    }
    ctx.fillStyle = color;
    ctx.fillText(p.t, cx, py);
    cx += p.w;
  }
  return total;
}

function text(ctx, t, x, y, opt) {
  return rich(ctx, [{ t }], x, y, opt);
}

function num(ctx, t, x, y, opt) {
  return rich(ctx, [{ t }], x, y, { ...opt, f: "num" });
}

function line(ctx, x1, y1, x2, y2, color, width, dash) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.setLineDash(dash || []);
  ctx.stroke();
  ctx.setLineDash([]);
}

function geometry(w, h) {
  const padL = pxVar("--padl");
  const padR = pxVar("--padr");
  const plotW = w - padL - padR;
  const s = plotW / L_MAX;
  const sideTop = 16;
  const sideH = Math.max(100, Math.min(s * 4.4, h * 0.46));
  const surfY = sideTop + sideH * 0.6;
  const bedY = sideTop + sideH;
  const chartTop = bedY + 26;
  const chartBot = h - 18;
  return { padL, padR, plotW, s, sideTop, surfY, bedY, chartTop, chartBot, X: (m) => padL + m * s };
}

function draw() {
  const fit = fitCanvas(cv);
  if (!fit) return;
  const { ctx, w, h } = fit;
  const g = geometry(w, h);
  const d = derive(state.l);
  const c = {
    text: token("--text"), muted: token("--muted"), line: token("--line"),
    card: token("--card"), card2: token("--card-2"), sky: token("--sky"), bed: token("--bed"),
  };
  const fs3 = remPx("--fs-3");
  const fs4 = remPx("--fs-4");
  ctx.clearRect(0, 0, w, h);

  const { X, surfY, bedY, sideTop, chartTop, chartBot, s } = g;
  const chartH = chartBot - chartTop;
  const px = X(d.l);
  const eyeX = X(0);
  const eyeY = surfY - EYE_H * s;

  ctx.fillStyle = c.card2;
  ctx.fillRect(X(0), surfY, w - X(0), bedY - surfY);
  line(ctx, X(0), surfY, w, surfY, c.muted, 1.5);
  line(ctx, X(0), bedY, w, bedY, c.line, 2);
  line(ctx, 0, surfY, X(0), surfY, c.line, 2);
  line(ctx, X(0), surfY, X(0), bedY, c.line, 2);

  line(ctx, px, surfY, px, chartBot, c.muted, 1, [3, 3]);

  const wMax = Math.max(6, Math.min(12, s * 0.42));
  const wr = Math.max(1.5, d.F * wMax);
  const wt = Math.max(1.5, d.T * wMax);
  ctx.lineCap = "butt";

  const sinT = Math.sin(d.th), cosT = Math.cos(d.th);
  ctx.font = font(fs4, 600, "sans");
  const rLab = "反射：天空";
  const rw = ctx.measureText(rLab).width;
  const xLim = w - rw - 12;
  const clip = px + 12 < xLim;
  let tr = (surfY - sideTop + 4) / Math.max(cosT, 1e-6);
  if (sinT > 1e-6) tr = Math.min(tr, ((clip ? xLim : w - 2) - px) / sinT);
  const rx = px + sinT * tr, ry = surfY - cosT * tr;
  line(ctx, px, surfY, rx, ry, c.sky, wr);

  const sin2 = Math.sin(d.th2), cos2 = Math.cos(d.th2);
  let tt = (bedY - surfY) / cos2;
  if (sin2 > 1e-6) tt = Math.min(tt, (w - 2 - px) / sin2);
  const tx = px + sin2 * tt, ty = surfY + cos2 * tt;
  line(ctx, px, surfY, tx, ty, c.bed, wt);

  line(ctx, eyeX, surfY, eyeX, eyeY, c.muted, 1.5);
  ctx.globalAlpha = 0.8;
  line(ctx, eyeX, eyeY, px, surfY, c.text, 1.5);
  ctx.globalAlpha = 1;
  ctx.beginPath();
  ctx.arc(eyeX, eyeY, 3.5, 0, Math.PI * 2);
  ctx.fillStyle = c.text;
  ctx.fill();
  text(ctx, "眼睛", eyeX - 7, eyeY - 2, { align: "right", size: fs4, weight: 500, color: c.muted });
  num(ctx, "1.7 m", eyeX - 7, Math.max(eyeY + fs4 + 1, surfY - 4), { align: "right", size: fs4, weight: 500, color: c.muted });

  const R = Math.max(16, Math.min(26, s));
  line(ctx, px, surfY, px, surfY - R - 8, c.muted, 1, [2, 3]);
  const thSegs = [{ t: "θ ", f: "var" }, { t: `${deg(d.th).toFixed(1)}°`, f: "num" }];
  ctx.font = font(fs3, 600, "num");
  const thW = ctx.measureText(thSegs[1].t).width + fs3 * 0.8;
  const leftX = px - Math.sin(d.th / 2) * (R + 6) - 2;
  const side = deg(d.th) < 25 ? 0 : leftX - thW > X(0) + 16 ? -1 : 1;
  if (d.th > 0.01) {
    ctx.beginPath();
    if (side >= 0) ctx.arc(px, surfY, R, -Math.PI / 2, -Math.PI / 2 + d.th);
    else ctx.arc(px, surfY, R, -Math.PI / 2 - d.th, -Math.PI / 2);
    ctx.strokeStyle = c.text;
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  if (side === 0) {
    rich(ctx, thSegs, px + 6, surfY - R - 2, { size: fs3, color: c.text, halo: c.card });
  } else {
    const ab = -Math.PI / 2 + (side * d.th) / 2;
    const ax = px + Math.cos(ab) * (R + 6) + side * 2;
    const ay = surfY + Math.sin(ab) * (R + 6) + 2;
    rich(ctx, thSegs, ax, ay, { align: side < 0 ? "right" : "left", size: fs3, color: c.text, halo: c.card });
  }
  rich(ctx, [{ t: "P", f: "var" }], px - 5, surfY + fs4 + 4, { align: "right", size: fs4, weight: 600, color: c.text });

  if (clip) {
    text(ctx, rLab, rx + 6, Math.min(surfY - 5, Math.max(ry + fs4 * 0.35, sideTop - 2 + fs4 * 0.5)), { size: fs4, color: c.sky, halo: c.card });
  } else {
    text(ctx, rLab, w - 4, ry - wr / 2 - 5, { align: "right", size: fs4, color: c.sky, halo: c.card });
  }
  const tLab = "透過：湖底";
  const tw = ctx.measureText(tLab).width;
  const tLeft = tx + 8 + tw <= w - 2;
  text(ctx, tLab, tLeft ? tx + 8 : tx - 8, bedY - 5, { align: tLeft ? "left" : "right", size: fs4, color: c.bed, halo: c.card2 });

  const yB = (l) => chartBot - schlick(thetaAt(l)) * chartH;
  const N = 240;
  const curve = [];
  for (let i = 0; i <= N; i++) {
    const l = (L_MAX * i) / N;
    curve.push([X(l), yB(l)]);
  }
  ctx.beginPath();
  ctx.moveTo(X(0), chartTop);
  ctx.lineTo(X(L_MAX), chartTop);
  for (let i = N; i >= 0; i--) ctx.lineTo(curve[i][0], curve[i][1]);
  ctx.closePath();
  ctx.globalAlpha = 0.2;
  ctx.fillStyle = c.bed;
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(X(0), chartBot);
  ctx.lineTo(X(L_MAX), chartBot);
  for (let i = N; i >= 0; i--) ctx.lineTo(curve[i][0], curve[i][1]);
  ctx.closePath();
  ctx.fillStyle = c.sky;
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.strokeStyle = c.line;
  ctx.lineWidth = 1;
  ctx.strokeRect(X(0) + 0.5, chartTop + 0.5, X(L_MAX) - X(0) - 1, chartH - 1);

  ctx.beginPath();
  curve.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
  ctx.strokeStyle = c.sky;
  ctx.lineWidth = 2;
  ctx.stroke();

  line(ctx, X(L_MIRROR), chartTop, X(L_MIRROR), chartBot, c.muted, 1, [4, 3]);
  const yMir = chartTop + fs4 + 5;
  text(ctx, "← 大致看得穿", X(L_MIRROR) - 5, yMir, { align: "right", size: fs4, weight: 500, color: c.text, halo: c.card });
  text(ctx, "越來越像鏡子 →", X(L_MIRROR) + 5, yMir, { size: fs4, weight: 500, color: c.text, halo: c.card });

  rich(ctx, [{ t: "θ", f: "var" }], X(0) - 7, chartTop - 6, { align: "right", size: fs4, weight: 500, color: c.muted });
  for (const t of TH_TICKS) {
    const x = X(EYE_H * Math.tan((t * Math.PI) / 180));
    line(ctx, x, chartTop - 4, x, chartTop, c.muted, 1);
    num(ctx, `${t}°`, x, chartTop - 6, { align: "center", size: fs4, weight: 500, color: c.muted });
  }
  for (let m = 0; m <= L_MAX; m += 5) {
    const x = X(m);
    line(ctx, x, chartBot, x, chartBot + 3, c.muted, 1);
    num(ctx, m === L_MAX ? `${m} m` : `${m}`, m === L_MAX ? x + 6 : x, chartBot + fs4 + 4, { align: m === L_MAX ? "right" : "center", size: fs4, weight: 500, color: c.muted });
  }

  const yb = yB(d.l);
  ctx.beginPath();
  ctx.arc(px, yb, 4.5, 0, Math.PI * 2);
  ctx.fillStyle = c.sky;
  ctx.fill();
  ctx.strokeStyle = c.card;
  ctx.lineWidth = 2;
  ctx.stroke();

  const right = d.l <= 20;
  const lx = right ? px + 9 : px - 9;
  const al = right ? "left" : "right";
  const skySegs = [{ t: "F", f: "var" }, { t: "r", sub: true, f: "var" }, { t: ` ${d.F.toFixed(2)}`, f: "num" }];
  const bedSegs = [{ t: "1 − ", f: "num" }, { t: "F", f: "var" }, { t: "r", sub: true, f: "var" }, { t: ` ${d.T.toFixed(2)}`, f: "num" }];
  const segW = (segs) => segs.reduce((a, p) => { ctx.font = font(p.sub ? fs3 * 0.72 : fs3, 600, p.f); return a + ctx.measureText(p.t).width; }, 0);
  const spanMinY = (wd) => {
    const x0 = right ? lx : lx - wd, x1 = right ? lx + wd : lx;
    let m = Infinity;
    for (const [x, y] of curve) if (x >= x0 - 2 && x <= x1 + 2) m = Math.min(m, y);
    return Math.min(m, yb);
  };
  const lab = fs3 + 6;
  const skyTop = spanMinY(segW(skySegs));
  let ySky = (yb + chartBot) / 2 + fs3 * 0.35;
  if (chartBot - yb < fs3 * 1.8) ySky = skyTop - 6;
  const bedW = segW(bedSegs);
  const bedLim = Math.min(spanMinY(bedW), ySky - fs3 - 4);
  let yBed = (chartTop + bedLim) / 2 + fs3 * 0.35;
  yBed = Math.min(yBed, bedLim - 6);
  const bx0 = right ? lx : lx - bedW, bx1 = right ? lx + bedW : lx;
  const mirFrom = X(L_MIRROR) - 80, mirTo = X(L_MIRROR) + 90;
  if (bx1 > mirFrom && bx0 < mirTo) yBed = Math.max(yBed, yMir + lab);
  rich(ctx, skySegs, lx, ySky, { align: al, size: fs3, color: c.sky, box: c.card });
  rich(ctx, bedSegs, lx, yBed, { align: al, size: fs3, color: c.bed, box: c.card });

  cv.setAttribute("aria-label", `側視圖與比例圖：看 ${d.l.toFixed(1)} m 外的水面，θ ${deg(d.th).toFixed(1)}°，反射 F_r ${d.F.toFixed(2)}，透過 ${d.T.toFixed(2)}`);
}

function setL(l) {
  state.l = Math.max(0, Math.min(L_MAX, Math.round(l * 2) / 2));
  input.value = state.l;
  outL.textContent = `${state.l.toFixed(1)} m`;
  draw();
}

input.addEventListener("input", () => setL(Number(input.value)));

function fromPointer(e) {
  const r = cv.getBoundingClientRect();
  const g = geometry(r.width, r.height);
  setL((e.clientX - r.left - g.padL) / g.s);
}
cv.addEventListener("pointerdown", (e) => {
  cv.setPointerCapture(e.pointerId);
  fromPointer(e);
});
cv.addEventListener("pointermove", (e) => {
  if (cv.hasPointerCapture(e.pointerId)) fromPointer(e);
});

onRedraw(draw);
setL(state.l);
