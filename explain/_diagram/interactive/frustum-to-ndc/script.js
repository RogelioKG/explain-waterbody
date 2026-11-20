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

const RES = { "2:1": [2160, 1080], "16:9": [1920, 1080], "4:3": [1440, 1080], "1:1": [1080, 1080] };
const NEAR = 0.5, FAR = 1.5, RAD = 0.25, DIST = 1, DEPTH = 1, K = 16, CN = 72, ARC = 20, ARC_R = 0.32;
const AZ0 = 0.8, EL0 = 0.38, SPLIT = 0.75, FOOT = 18;
const SIGNS = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
const state = { t: 0, res: "16:9", fov: 60, az: AZ0, el: EL0 };

const $ = (id) => document.getElementById(id);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const ease = (u) => u * u * (3 - 2 * u);
const f2 = (v) => v.toFixed(2);
const fmt = (v) => String(+v.toFixed(2));
const near = (t, s) => clamp(1 - (Math.abs(t - s) - 0.12) / 0.18, 0, 1);

function derive() {
  const [W, H] = RES[state.res];
  const aS = W / H;
  const aP = aS;
  const tn = Math.tan((state.fov * Math.PI) / 360);
  const sy = 1 / tn;
  const sx = sy / aP;
  const t = state.t;
  const stage = Math.round(t);
  const phase = Math.abs(t - stage) <= 0.04 ? ["fr", "ndc", "px"][stage] : t < SPLIT ? "proj" : t < 1 ? "depth" : "vp";
  return { W, H, aS, aP, tn, sy, sx, t, stage, phase };
}

function zn(d) {
  return (NEAR / (FAR - NEAR)) * (FAR / d - 1);
}

function place(k, x, y, d, t) {
  const nx = (k.sx * x) / d;
  const ny = (k.sy * y) / d;
  const nz = -(NEAR + (1 - zn(d)) * DEPTH);
  if (t <= 1) {
    const a = clamp(t / SPLIT, 0, 1), b = clamp((t - SPLIT) / (1 - SPLIT), 0, 1);
    return [lerp(x, nx, a), lerp(y, ny, a), lerp(-d, nz, b)];
  }
  const u = t - 1;
  return [nx * lerp(1, k.aS, u), ny, lerp(nz, -(NEAR + DEPTH / 2), u)];
}

const STEP = {
  fr: (k) => k.aP === 1 ? "螢幕 1:1，截面是正方" : `截面寬是高的 ${fmt(k.aP)} 倍`,
  proj: () => "每層 ÷ d，都變一樣大",
  depth: () => "depth 換成近 1、遠 0",
  ndc: (k) => k.aP === 1 ? "NDC：沒多壓，圓還是圓" : `NDC：水平多壓 ${fmt(k.aP)} 倍`,
  vp: (k) => k.aS === 1 ? "換像素：不必多拉" : `換像素：水平多拉 ${fmt(k.aS)} 倍`,
  px: (k) => k.aS === 1 ? "不壓也不拉，圓不變形" : "拉回原樣，圓不變形",
};
const STEP_TONE = { fr: "--fr", proj: "--ndc", depth: "--ndc", ndc: "--ndc", vp: "--px", px: "--px" };
const VALUETEXT = { fr: "frustum", proj: "投影中", depth: "換算 depth 中", ndc: "NDC", vp: "換成像素中", px: "螢幕" };
const TONES = ["--fr", "--ndc", "--px"];

function thumb(svg, asp, rx, ry) {
  const w = 100 * asp;
  svg.setAttribute("viewBox", `0 0 ${w} 100`);
  svg.style.aspectRatio = `${asp}`;
  svg.innerHTML = `<rect class="shape" x="0" y="0" width="${w}" height="100" /><ellipse class="ring" cx="${w / 2}" cy="50" rx="${rx * 50}" ry="${ry * 50}" />`;
}

let lastStep = "";
function drawDom(k) {
  const step = STEP[k.phase](k);
  if (step !== lastStep) { $("step").textContent = step; lastStep = step; }
  $("step").style.setProperty("--tone", `var(${STEP_TONE[k.phase]})`);

  thumb($("s0"), k.aP, RAD / k.tn, RAD / k.tn);
  thumb($("s1"), 1, k.sx * RAD, k.sy * RAD);
  thumb($("s2"), k.aS, k.sx * RAD * k.aS, k.sy * RAD);
  $("d0").textContent = `${f2(2 * k.aP * k.tn)} × ${f2(2 * k.tn)}`;
  $("d1").textContent = "2 × 2";
  $("d2").textContent = `${k.W} × ${k.H} px`;
  $("a1n").textContent = `÷${fmt(k.aP)}`;
  $("a1").classList.toggle("off", k.aP === 1);
  $("a2n").textContent = `×${fmt(k.aS)}`;
  $("a2").classList.toggle("off", k.aS === 1);

  document.querySelectorAll(".stg").forEach((b) => {
    if (+b.dataset.t === k.stage) b.setAttribute("aria-current", "step");
    else b.removeAttribute("aria-current");
  });
  const range = $("t");
  range.style.setProperty("--tone", `var(${TONES[k.stage]})`);
  range.setAttribute("aria-valuetext", VALUETEXT[k.phase]);

  document.querySelectorAll("[data-res]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.res === state.res)));
  $("o-a").textContent = `a = ${f2(k.aS)}`;
  $("o-fov").textContent = `${state.fov}°`;
}

let G = null;

function build(T, LineSegments2, LineSegmentsGeometry, LineMaterial) {
  const canvas = $("gl");
  const renderer = new T.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  const scene = new T.Scene();
  const camera = new T.OrthographicCamera(-1, 1, 1, -1, 0.1, 80);
  const mats = [];
  const lines = (n, width, opts = {}) => {
    const geo = new LineSegmentsGeometry();
    geo.setPositions(new Float32Array(n * 6));
    const mat = new LineMaterial({ linewidth: width, transparent: !!opts.fade, depthWrite: !opts.fade });
    const obj = new LineSegments2(geo, mat);
    obj.frustumCulled = false;
    obj.renderOrder = opts.order || 0;
    scene.add(obj);
    mats.push(mat);
    const buf = geo.attributes.instanceStart.data;
    return { mat, obj, set(arr) { buf.array.set(arr); buf.needsUpdate = true; } };
  };
  const mesh = (tris, order) => {
    const geo = new T.BufferGeometry();
    const attr = new T.BufferAttribute(new Float32Array(tris * 9), 3);
    geo.setAttribute("position", attr);
    const mat = new T.MeshBasicMaterial({ transparent: true, depthWrite: false, side: T.DoubleSide });
    const obj = new T.Mesh(geo, mat);
    obj.frustumCulled = false;
    obj.renderOrder = order;
    scene.add(obj);
    return { mat, obj, set(arr) { attr.array.set(arr); attr.needsUpdate = true; } };
  };
  const eye = new T.Mesh(new T.SphereGeometry(1, 24, 16), new T.MeshBasicMaterial({ transparent: true }));
  scene.add(eye);
  return {
    T, renderer, scene, camera, mats, eye,
    target: new T.Vector3(0, 0, -1.1),
    faces: mesh(4 * K * 2 + 4, 1),
    sliceFill: mesh(2, 2),
    ringFill: mesh(CN, 3),
    edges: lines(4 * K + 8, 1.6),
    slice: lines(4, 2),
    bars: lines(2, 3.5, { order: 4 }),
    ring: lines(CN, 2.6, { order: 5 }),
    ghost: lines(12, 1.2, { fade: true, order: 6 }),
    apex: lines(5, 1.2, { fade: true, order: 6 }),
    axis: lines(1, 1.2, { fade: true, order: 6 }),
    fov: lines(1 + ARC, 1.4, { fade: true, order: 6 }),
    v: new T.Vector3(),
    c1: new T.Color(),
    c2: new T.Color(),
  };
}

function draw3D(k) {
  const g = G, T = g.T;
  const view = $("view");
  const w = view.clientWidth, h = view.clientHeight;
  if (!w || !h) return;
  g.renderer.setSize(w, h, false);
  const t = k.t;
  const P = (x, y, d, tt = t) => place(k, x, y, d, tt);
  const hx = (d) => k.aP * k.tn * d;
  const hy = (d) => k.tn * d;
  const corner = (i, d, tt = t) => P(SIGNS[i][0] * hx(d), SIGNS[i][1] * hy(d), d, tt);

  const faces = [];
  const tri = (a, b, c) => faces.push(...a, ...b, ...c);
  const quad = (a, b, c, d) => { tri(a, b, c); tri(a, c, d); };
  const depthAt = (j) => NEAR + ((FAR - NEAR) * j) / K;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < K; j++) {
      const d0 = depthAt(j), d1 = depthAt(j + 1), n = (i + 1) % 4;
      quad(corner(i, d0), corner(n, d0), corner(n, d1), corner(i, d1));
    }
  }
  quad(corner(0, NEAR), corner(1, NEAR), corner(2, NEAR), corner(3, NEAR));
  quad(corner(0, FAR), corner(1, FAR), corner(2, FAR), corner(3, FAR));
  g.faces.set(faces);

  const seg = [];
  const line = (a, b) => seg.push(...a, ...b);
  for (let i = 0; i < 4; i++) for (let j = 0; j < K; j++) line(corner(i, depthAt(j)), corner(i, depthAt(j + 1)));
  for (let i = 0; i < 4; i++) line(corner(i, NEAR), corner((i + 1) % 4, NEAR));
  for (let i = 0; i < 4; i++) line(corner(i, FAR), corner((i + 1) % 4, FAR));
  g.edges.set(seg);

  seg.length = 0;
  for (let i = 0; i < 4; i++) line(corner(i, NEAR, 0), corner(i, FAR, 0));
  for (let i = 0; i < 4; i++) line(corner(i, NEAR, 0), corner((i + 1) % 4, NEAR, 0));
  for (let i = 0; i < 4; i++) line(corner(i, FAR, 0), corner((i + 1) % 4, FAR, 0));
  g.ghost.set(seg);

  seg.length = 0;
  for (let i = 0; i < 4; i++) line([0, 0, 0], corner(i, NEAR, 0));
  line([0, 0, 0], [0, 0, -NEAR]);
  g.apex.set(seg);

  g.axis.set([...P(0, 0, NEAR), ...P(0, 0, FAR)]);

  seg.length = 0;
  line([0, 0, 0], P(0, hy(DIST), DIST, 0));
  const half = Math.atan(k.tn);
  const arcPt = (i) => [0, ARC_R * Math.sin((half * i) / ARC), -ARC_R * Math.cos((half * i) / ARC)];
  for (let i = 0; i < ARC; i++) line(arcPt(i), arcPt(i + 1));
  g.fov.set(seg);

  const sc = [0, 1, 2, 3].map((i) => corner(i, DIST));
  g.sliceFill.set([...sc[0], ...sc[1], ...sc[2], ...sc[0], ...sc[2], ...sc[3]]);
  seg.length = 0;
  for (let i = 0; i < 4; i++) line(sc[i], sc[(i + 1) % 4]);
  g.slice.set(seg);
  const mid = P(0, 0, DIST);
  g.bars.set([...mid, ...P(0, hy(DIST), DIST), ...mid, ...P(hx(DIST), 0, DIST)]);

  const ring = [];
  for (let i = 0; i <= CN; i++) {
    const a = (i / CN) * Math.PI * 2;
    ring.push(P(RAD * Math.cos(a), RAD * Math.sin(a), DIST));
  }
  seg.length = 0;
  faces.length = 0;
  for (let i = 0; i < CN; i++) { line(ring[i], ring[i + 1]); tri(mid, ring[i], ring[i + 1]); }
  g.ring.set(seg);
  g.ringFill.set(faces);

  const col = (name) => g.c2.set(token(name));
  const u = t <= 1 ? 0 : t - 1;
  g.c1.set(token(t <= 1 ? "--fr" : "--ndc")).lerp(col(t <= 1 ? "--ndc" : "--px"), t <= 1 ? t : u);
  const vol = g.c1.clone();
  const fade1 = clamp(1 - t * 2.5, 0, 1);
  g.faces.mat.color.copy(vol); g.faces.mat.opacity = 0.09;
  g.sliceFill.mat.color.copy(vol); g.sliceFill.mat.opacity = 0.16;
  g.edges.mat.color.copy(vol);
  g.slice.mat.color.copy(vol);
  g.bars.mat.color.copy(vol);
  g.ring.mat.color.copy(col("--obj"));
  g.ringFill.mat.color.copy(col("--obj")); g.ringFill.mat.opacity = 0.28;
  g.ghost.mat.color.copy(col("--fr")); g.ghost.mat.opacity = 0.5 * clamp(t * 4, 0, 1) * clamp(1 - u * 2, 0, 1);
  g.ghost.obj.visible = g.ghost.mat.opacity > 0.01;
  g.apex.mat.color.copy(col("--muted")); g.apex.mat.opacity = fade1;
  g.apex.obj.visible = fade1 > 0.01;
  g.axis.mat.color.copy(col("--muted")); g.axis.mat.opacity = clamp(1 - u * 3, 0, 1);
  g.fov.mat.color.copy(col("--text")); g.fov.mat.opacity = 0.75 * fade1;
  g.fov.obj.visible = fade1 > 0.01;
  g.eye.material.color.copy(col("--text")); g.eye.material.opacity = fade1;
  g.eye.visible = fade1 > 0.01;
  g.mats.forEach((m) => m.resolution.set(w, h));
  g.renderer.setClearColor(col("--card"), 1);

  const ue = ease(u);
  const az = state.az - AZ0 * ue, el = state.el - EL0 * ue;
  const cam = g.camera;
  cam.position.copy(g.target).add(new T.Vector3(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el)).multiplyScalar(30));
  cam.up.set(0, 1, 0);
  cam.lookAt(g.target);
  cam.updateMatrixWorld();
  const bounds = (pts) => {
    const b = [Infinity, Infinity, -Infinity, -Infinity];
    pts.forEach((p) => {
      g.v.set(...p).applyMatrix4(cam.matrixWorldInverse);
      b[0] = Math.min(b[0], g.v.x); b[1] = Math.min(b[1], g.v.y);
      b[2] = Math.max(b[2], g.v.x); b[3] = Math.max(b[3], g.v.y);
    });
    return b;
  };
  const b0 = bounds([[0, 0, 0], ...[0, 1, 2, 3].flatMap((i) => [corner(i, FAR, 0), corner(i, NEAR, 1), corner(i, FAR, 1)])]);
  const b2 = bounds([0, 1, 2, 3].map((i) => corner(i, FAR, 2)));
  const b = b0.map((v, i) => lerp(v, b2[i], ue));
  const narrow = w < 480;
  const pad = narrow ? { l: 12, r: 12, t: 14, b: 20 + FOOT } : { l: 26, r: 26, t: 20, b: 22 + FOOT };
  const s = Math.min((w - pad.l - pad.r) / (b[2] - b[0]), (h - pad.t - pad.b) / (b[3] - b[1]));
  const cx = (b[0] + b[2]) / 2 - (pad.l - pad.r) / (2 * s);
  const cy = (b[1] + b[3]) / 2 - (pad.b - pad.t) / (2 * s);
  cam.left = cx - w / 2 / s; cam.right = cx + w / 2 / s;
  cam.top = cy + h / 2 / s; cam.bottom = cy - h / 2 / s;
  cam.updateProjectionMatrix();
  g.eye.scale.setScalar(4.5 / s);
  g.eye.position.set(0, 0, 0);

  g.renderer.render(g.scene, cam);

  const placed = [];
  const put = (id, op, cands) => {
    const el = $(id);
    el.style.opacity = op;
    el.style.visibility = op < 0.02 ? "hidden" : "visible";
    if (op < 0.02) return;
    const ew = el.offsetWidth, eh = el.offsetHeight;
    let best = null;
    for (const [p, ax, ay, dx, dy] of cands) {
      g.v.set(...p).project(cam);
      const x = ((g.v.x + 1) / 2) * w + dx, y = ((1 - g.v.y) / 2) * h + dy;
      const r = { l: clamp(x - ax * ew, 0, w - ew), t: clamp(y - ay * eh, 0, h - eh - FOOT) };
      r.r = r.l + ew; r.b = r.t + eh;
      const hit = placed.reduce((sum, q) => sum + Math.max(0, Math.min(r.r, q.r) - Math.max(r.l, q.l)) * Math.max(0, Math.min(r.b, q.b) - Math.max(r.t, q.t)), 0);
      if (!best || hit < best.hit) best = { r, hit };
      if (hit === 0) break;
    }
    placed.push(best.r);
    el.style.transform = `translate(${best.r.l.toFixed(1)}px, ${best.r.t.toFixed(1)}px)`;
  };
  const st = k.stage;
  $("l-h").textContent = st === 0 ? "半高 tan(FOV/2)" : st === 1 ? "半高 1" : `半高 ${k.H / 2} px`;
  $("l-w").textContent = st === 0 ? "半寬 a·tan(FOV/2)" : st === 1 ? "半寬 1" : `半寬 ${k.W / 2} px`;
  const lo = $("l-o");
  lo.textContent = st === 0 ? "正圓" : st === 1 ? (k.aP === 1 ? "還是圓" : "瘦長的橢圓") : "正圓";
  const tone = `var(${TONES[st]})`;
  $("l-h").style.setProperty("--tone", tone);
  $("l-w").style.setProperty("--tone", tone);
  const ns = near(t, st);
  const yMid = P(0, (RAD + hy(DIST)) / 2, DIST), xMid = P((RAD + hx(DIST)) / 2, 0, DIST);
  const c45 = Math.SQRT1_2 * RAD;
  const ze = [corner(1, NEAR), corner(1, FAR)].reduce((a, b) => a.map((v, i) => (v + b[i]) / 2));
  put("l-h", ns, [[yMid, 1, 0.5, -10, 0], [yMid, 0, 0.5, 10, 0]]);
  put("l-w", ns, [[xMid, 0.5, 0, 0, 6], [xMid, 0.5, 1, 0, -6]]);
  put("l-o", ns, [[P(c45, c45, DIST), 0, 1, 4, -2], [P(-c45, c45, DIST), 1, 1, -4, -2], [P(c45, -c45, DIST), 0, 0, 4, 2]]);
  const fa = Math.atan(k.tn) / 2, fr = ARC_R * 1.05;
  put("l-f", near(t, 0), [[[0, fr * Math.sin(fa), -fr * Math.cos(fa)], 0, 1, 6, -2], [[0, fr * Math.sin(fa), -fr * Math.cos(fa)], 1, 1, -6, -2], [[0, fr * Math.sin(fa), -fr * Math.cos(fa)], 0, 0, 6, 2]]);
  put("l-d", near(t, 0), [[P(0, -hy(DIST), DIST), 0.5, 0, 0, 6], [P(hx(DIST), -hy(DIST), DIST), 0, 0, 4, 4], [P(-hx(DIST), -hy(DIST), DIST), 1, 0, -4, 4]]);
  put("l-cam", near(t, 0), [[[0, 0, 0], 0.5, 0, 0, 9], [[0, 0, 0], 1, 0.5, -10, 0], [[0, 0, 0], 0.5, 1, 0, -9]]);
  put("l-z", near(t, 1), [[ze, 0, 0, 8, 4], [ze, 0, 0.5, 10, 0], [ze, 0.5, 0, 0, 10]]);
}

function draw() {
  const k = derive();
  drawDom(k);
  if (G) draw3D(k);
}

let tween = 0;
function setT(v) {
  state.t = clamp(v, 0, 2);
  $("t").value = state.t;
  draw();
}
function goTo(target) {
  cancelAnimationFrame(tween);
  const from = state.t;
  if (REDUCED || from === target) { setT(target); return; }
  const t0 = performance.now(), dur = 380 + 420 * Math.abs(target - from);
  const step = (now) => {
    const p = clamp((now - t0) / dur, 0, 1);
    setT(lerp(from, target, ease(p)));
    if (p < 1) tween = requestAnimationFrame(step);
  };
  tween = requestAnimationFrame(step);
}
const nextStage = (dir) => (dir > 0 ? Math.min(2, Math.floor(state.t + 1e-6) + 1) : Math.max(0, Math.ceil(state.t - 1e-6) - 1));

$("t").addEventListener("input", (e) => { cancelAnimationFrame(tween); setT(+e.target.value); });
$("t").addEventListener("keydown", (e) => {
  const map = { ArrowRight: 1, ArrowUp: 1, PageUp: 1, ArrowLeft: -1, ArrowDown: -1, PageDown: -1 };
  if (e.key === "Home" || e.key === "End") { e.preventDefault(); goTo(e.key === "Home" ? 0 : 2); return; }
  if (!(e.key in map)) return;
  e.preventDefault();
  goTo(nextStage(map[e.key]));
});
document.addEventListener("keydown", (e) => {
  if (document.activeElement && document.activeElement !== document.body) return;
  if (e.key === "ArrowRight") goTo(nextStage(1));
  if (e.key === "ArrowLeft") goTo(nextStage(-1));
});
document.querySelectorAll(".stg").forEach((b) => b.addEventListener("click", () => goTo(+b.dataset.t)));
document.querySelectorAll("[data-res]").forEach((b) => b.addEventListener("click", () => { state.res = b.dataset.res; draw(); }));
$("fov").addEventListener("input", (e) => { state.fov = +e.target.value; draw(); });

const canvas = $("gl");
let drag = null;
canvas.addEventListener("pointerdown", (e) => {
  if (!G) return;
  drag = { x: e.clientX, y: e.clientY, az: state.az, el: state.el };
  canvas.setPointerCapture(e.pointerId);
  canvas.classList.add("drag");
});
canvas.addEventListener("pointermove", (e) => {
  if (!drag) return;
  state.az = drag.az - (e.clientX - drag.x) * 0.008;
  state.el = clamp(drag.el + (e.clientY - drag.y) * 0.008, -0.2, 1.4);
  $("reset").hidden = false;
  draw();
});
const endDrag = () => { drag = null; canvas.classList.remove("drag"); };
canvas.addEventListener("pointerup", endDrag);
canvas.addEventListener("pointercancel", endDrag);
$("reset").addEventListener("click", () => { state.az = AZ0; state.el = EL0; $("reset").hidden = true; draw(); });

draw();
onRedraw(draw);

try {
  G = build(THREE, THREE.LineSegments2, THREE.LineSegmentsGeometry, THREE.LineMaterial);
  draw();
} catch (err) {
  console.warn(`3D 無法建立：${err}`);
  $("nogl").hidden = false;
  $("labels").hidden = true;
  document.querySelector(".viewctl").hidden = true;
}
