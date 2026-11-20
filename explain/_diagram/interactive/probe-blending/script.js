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

const X0 = -8, X1 = 64;
const BD = 4;
const BOAT_L = 12, BOAT_W = 3;
const PROBES = [
  { id: "a", name: "探針 A", c: "--pa", x0: 0, x1: 40, z0: -40, z1: 40, importance: 1 },
  { id: "b", name: "探針 B", c: "--pb", x0: 30, x1: 50, z0: -25, z1: 25, importance: 1 },
];
const SKY = { id: "s", name: "天空盒", c: "--sky" };

const state = { x: 29 };

const $ = (id) => document.getElementById(id);
const cvOff = $("cv-off"), cvOn = $("cv-on"), inX = $("in-x"), oX = $("o-x");

const sat = (v) => Math.min(1, Math.max(0, v));
const area = (p) => (p.x1 - p.x0) * (p.z1 - p.z0);

function ranked() {
  return [...PROBES].sort((p, q) => q.importance - p.importance || area(p) - area(q));
}

function weightOf(p, x) {
  return sat(Math.min(x - p.x0, p.x1 - x) / BD);
}

function blendAt(x) {
  const [p0, p1] = ranked();
  const d0 = weightOf(p0, x), d1 = weightOf(p1, x);
  const w0 = d0, w1 = Math.min(d1, 1 - d0);
  const total = w0 + w1, norm = Math.max(total, 1);
  return [[p0, w0 / norm], [p1, w1 / norm], [SKY, 1 - Math.min(total, 1)]];
}

function pickPerObject(cx) {
  for (const p of ranked()) if (cx >= p.x0 && cx <= p.x1) return p;
  return SKY;
}

function derive() {
  const off = pickPerObject(state.x);
  const used = new Set();
  for (let x = state.x - BOAT_L / 2; x <= state.x + BOAT_L / 2; x += 0.05) {
    for (const [src, w] of blendAt(x)) if (w > 0.01) used.add(src.id);
  }
  const on = [...PROBES, SKY].filter((s) => used.has(s.id));
  return { off, on };
}

function rgb(hex) {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.replace(/./g, "$&$&") : h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function mix(parts) {
  const c = [0, 0, 0];
  for (const [src, w] of parts) {
    const k = rgb(token(src.c));
    for (let i = 0; i < 3; i++) c[i] += k[i] * w;
  }
  return `rgb(${c.map(Math.round).join(",")})`;
}

function chip(src) {
  return `<span class="src ${src.id}">${src.name}</span>`;
}

function boatPath(ctx, px, cy, s) {
  const x0 = px(state.x - BOAT_L / 2), x1 = px(state.x + BOAT_L / 2);
  const hw = (BOAT_W / 2) * s, bow = BOAT_W * 0.9 * s;
  ctx.beginPath();
  ctx.moveTo(x0 + hw * 0.4, cy - hw);
  ctx.lineTo(x1 - bow, cy - hw);
  ctx.quadraticCurveTo(x1 - bow * 0.25, cy - hw * 0.6, x1, cy);
  ctx.quadraticCurveTo(x1 - bow * 0.25, cy + hw * 0.6, x1 - bow, cy + hw);
  ctx.lineTo(x0 + hw * 0.4, cy + hw);
  ctx.quadraticCurveTo(x0, cy + hw, x0, cy);
  ctx.quadraticCurveTo(x0, cy - hw, x0 + hw * 0.4, cy - hw);
  ctx.closePath();
}

function drawScene(canvas, mode, d) {
  const f = fitCanvas(canvas);
  if (!f) return;
  const { ctx, w, h } = f;
  const s = w / (X1 - X0);
  const px = (x) => (x - X0) * s;
  const cy = h / 2;
  const font = (size, weight = 500) => `${weight} ${size}px ${token("--num")}`;
  const small = Math.max(10, Math.min(11, w / 60));

  ctx.clearRect(0, 0, w, h);
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(0, 0, w, h, 8);
  ctx.clip();
  ctx.fillStyle = token("--card-2");
  ctx.fillRect(0, 0, w, h);

  for (const p of PROBES) {
    const col = token(p.c);
    const l = px(p.x0), r = px(p.x1);
    ctx.fillStyle = col;
    if (mode === "on") {
      for (let c = Math.floor(l); c < Math.ceil(r); c++) {
        ctx.globalAlpha = 0.14 * weightOf(p, X0 + (c + 0.5) / s);
        ctx.fillRect(c, 0, 1, h);
      }
    } else {
      ctx.globalAlpha = 0.14;
      ctx.fillRect(l, 0, r - l, h);
    }
    ctx.globalAlpha = 1;
    ctx.strokeStyle = col;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(l, 0); ctx.lineTo(l, h);
    ctx.moveTo(r, 0); ctx.lineTo(r, h);
    ctx.stroke();
  }

  const label = (text, x, y, align, base, color, weight = 500, back = false) => {
    ctx.font = font(small, weight);
    ctx.textAlign = align;
    ctx.textBaseline = base;
    const tw = ctx.measureText(text).width;
    const lx = align === "left" ? x : align === "right" ? x - tw : x - tw / 2;
    const ty = base === "top" ? y : base === "bottom" ? y - small : y - small / 2;
    if (back) {
      ctx.fillStyle = token("--card-2");
      ctx.fillRect(lx - 3, ty - 2, tw + 6, small + 4);
    }
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
  };

  for (const p of PROBES) label(p.name, px(p.x0) + 5, 6, "left", "top", token(p.c), 600);
  label(SKY.name, px((PROBES[1].x1 + X1) / 2), 6, "center", "top", token(SKY.c), 600);

  if (mode === "on") {
    const b = PROBES[1];
    const xa = px(b.x1 - BD), xb = px(b.x1), y = h - 12;
    ctx.strokeStyle = token("--muted");
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(xa, y); ctx.lineTo(xb, y);
    ctx.moveTo(xa + 0.5, y - 4); ctx.lineTo(xa + 0.5, y + 4);
    ctx.moveTo(xb - 0.5, y - 4); ctx.lineTo(xb - 0.5, y + 4);
    ctx.stroke();
    ctx.font = font(small, 500);
    const room = w - xb - 8;
    if (ctx.measureText("Blend Distance").width <= room) {
      label("Blend Distance", xb + 5, y, "left", "middle", token("--muted"));
    } else {
      label("Blend", xb + 5, y - small * 0.6, "left", "middle", token("--muted"));
      label("Distance", xb + 5, y + small * 0.6, "left", "middle", token("--muted"));
    }
  }

  boatPath(ctx, px, cy, s);
  ctx.save();
  ctx.clip();
  if (mode === "off") {
    ctx.fillStyle = token(d.off.c);
    ctx.fillRect(0, 0, w, h);
  } else {
    const a = Math.floor(px(state.x - BOAT_L / 2)), b = Math.ceil(px(state.x + BOAT_L / 2));
    for (let c = a; c < b; c++) {
      ctx.fillStyle = mix(blendAt(X0 + (c + 0.5) / s));
      ctx.fillRect(c, 0, 1.2, h);
    }
  }
  ctx.restore();
  boatPath(ctx, px, cy, s);
  ctx.strokeStyle = token("--text");
  ctx.globalAlpha = 0.7;
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.globalAlpha = 1;

  if (mode === "off") {
    const bx0 = px(state.x - BOAT_L / 2) - 3, bx1 = px(state.x + BOAT_L / 2) + 3;
    const hb = (BOAT_W / 2) * s + 3;
    ctx.setLineDash([4, 3]);
    ctx.strokeStyle = token("--muted");
    ctx.lineWidth = 1;
    ctx.strokeRect(Math.round(bx0) + 0.5, Math.round(cy - hb) + 0.5, Math.round(bx1 - bx0), Math.round(hb * 2));
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.arc(px(state.x), cy, 3, 0, Math.PI * 2);
    ctx.fillStyle = token("--text");
    ctx.fill();
    ctx.strokeStyle = token("--card-2");
    ctx.lineWidth = 1.5;
    ctx.stroke();
    label("bounding box 中心", px(state.x), cy + hb + 5, "center", "top", token("--muted"), 500, true);
  }
  ctx.restore();
}

function placeSlider() {
  const w = cvOn.getBoundingClientRect().width;
  if (!w) return;
  const s = w / (X1 - X0), half = 7;
  inX.style.marginLeft = `${(+inX.min - X0) * s - half}px`;
  inX.style.width = `${(+inX.max - +inX.min) * s + half * 2}px`;
}

function render() {
  const d = derive();
  $("r-off").innerHTML = chip(d.off);
  $("r-on").innerHTML = d.on.map(chip).join("");
  oX.textContent = `x = ${state.x.toFixed(1)} m`;
  inX.value = state.x;
  placeSlider();
  drawScene(cvOff, "off", d);
  drawScene(cvOn, "on", d);
}

function setX(x) {
  state.x = Math.min(+inX.max, Math.max(+inX.min, Math.round(x * 2) / 2));
  render();
}

inX.addEventListener("input", () => setX(+inX.value));

for (const cv of [cvOff, cvOn]) {
  let dragging = false;
  const toX = (e) => {
    const r = cv.getBoundingClientRect();
    return X0 + ((e.clientX - r.left) / r.width) * (X1 - X0);
  };
  cv.addEventListener("pointerdown", (e) => {
    dragging = true;
    cv.setPointerCapture(e.pointerId);
    setX(toX(e));
  });
  cv.addEventListener("pointermove", (e) => { if (dragging) setX(toX(e)); });
  const stop = () => { dragging = false; };
  cv.addEventListener("pointerup", stop);
  cv.addEventListener("pointercancel", stop);
}

onRedraw(render);
render();
