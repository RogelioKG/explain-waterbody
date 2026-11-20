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

const WAVE = { lambda: 6, steep: 0.5, t: 0 };
const K = (2 * Math.PI) / WAVE.lambda;
const OMEGA = Math.sqrt(9.81 * K);
const A = WAVE.steep / K;
const N = 4;
const Q_MIN = 0, Q_MAX = 4.5;
const VIEW_C = 2.25, VIEW_W = 5.6;
const SUB = "₀₁₂₃₄₅₆₇₈₉";
const NS = "http://www.w3.org/2000/svg";

const state = { q: 1, n: 0 };

const phase = (p) => K * p - OMEGA * WAVE.t;
const u = (p) => A * Math.cos(phase(p));
const h = (p) => A * Math.sin(phase(p));
const solve = (x) => { let p = x; for (let i = 0; i < 80; i++) p = x - u(p); return p; };
const surfaceAt = (x) => h(solve(x));

function derive() {
  const q = state.q;
  const ps = [q];
  for (let i = 0; i < N; i++) ps.push(q - u(ps[i]));
  const lands = ps.map((p) => p + u(p));
  const devs = lands.map((x) => x - q);
  return { q, ps, lands, devs, hq: surfaceAt(q) };
}

const $ = (id) => document.getElementById(id);
const sv = $("sv"), errs = $("errs");
const sub = (i) => String(i).split("").map((c) => SUB[+c]).join("");
const f3 = (v) => v.toFixed(3);
const sgn3 = (v) => (Math.abs(v) < 0.0005 ? "" : v < 0 ? "−" : "+") + Math.abs(v).toFixed(3);

function el(tag, attrs, parent, text) {
  const e = document.createElementNS(NS, tag);
  for (const k in attrs) e.setAttribute(k, attrs[k]);
  if (text != null) e.textContent = text;
  (parent || sv).appendChild(e);
  return e;
}

function keepIn(t, W) {
  const b = t.getBBox();
  if (b.x + b.width > W - 2) { t.setAttribute("x", W - 2); t.setAttribute("text-anchor", "end"); }
  else if (b.x < 2) { t.setAttribute("x", 2); t.setAttribute("text-anchor", "start"); }
  return t;
}

function arrowHead(x1, y1, x2, y2, size, parent) {
  const ang = Math.atan2(y2 - y1, x2 - x1);
  const a1 = ang + Math.PI * 0.84, a2 = ang - Math.PI * 0.84;
  el("polygon", {
    class: "sv-head",
    points: `${x2},${y2} ${x2 + size * Math.cos(a1)},${y2 + size * Math.sin(a1)} ${x2 + size * Math.cos(a2)},${y2 + size * Math.sin(a2)}`,
  }, parent);
}

let geo = null;

function layout() {
  const r = sv.getBoundingClientRect();
  if (!r.width || !r.height) return null;
  const W = r.width, H = r.height;
  const axisY = H - 16;
  const top = 40;
  const pad = 6;
  const sW = (W - 2 * pad) / VIEW_W;
  const sH = (axisY - top - 30) / (2 * A);
  const s = Math.max(10, Math.min(sW, sH));
  const bottomNeed = Math.max(A * s + 10, 30);
  const slack = Math.max(0, axisY - top - A * s - bottomNeed);
  const y0 = top + A * s + slack * 0.5;
  const X = (x) => W / 2 + (x - VIEW_C) * s;
  const Y = (v) => y0 - v * s;
  const toX = (px) => VIEW_C + (px - W / 2) / s;
  return { W, H, axisY, s, y0, X, Y, toX, xmin: toX(0), xmax: toX(W) };
}

function draw() {
  geo = layout();
  if (!geo) return;
  const { W, H, axisY, s, y0, X, Y, xmin, xmax } = geo;
  const d = derive();
  const n = state.n;
  sv.replaceChildren();
  sv.setAttribute("viewBox", `0 0 ${W} ${H}`);

  const defs = el("defs", {});
  const cp = el("clipPath", { id: "clip" }, defs);
  el("rect", { x: 0, y: 0, width: W, height: axisY }, cp);

  el("line", { class: "sv-axis", x1: 0, x2: W, y1: axisY, y2: axisY });
  for (let m = Math.ceil(xmin); m <= Math.floor(xmax); m++) {
    el("line", { class: "sv-axis", x1: X(m), x2: X(m), y1: axisY, y2: axisY + 4 });
    el("text", { class: "sv-tick", x: X(m), y: H - 1, "text-anchor": "middle" }, null, m === Math.floor(xmax) ? `${m} m` : `${m}`);
  }

  const g = el("g", { "clip-path": "url(#clip)" });
  const pts = [];
  for (let xr = xmin - 1; xr <= xmax + 1; xr += 0.02) pts.push([X(xr + u(xr)), Y(h(xr))]);
  const line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join("");
  el("path", { class: "sv-fill", d: `${line}L${pts[pts.length - 1][0]},${axisY}L${pts[0][0]},${axisY}Z` }, g);
  el("line", { class: "sv-rest", x1: 0, x2: W, y1: y0, y2: y0 }, g);
  el("path", { class: "sv-surf", d: line }, g);

  const leftSide = d.q > VIEW_C;
  const ex = leftSide ? xmin + 0.08 : xmax - 0.08;
  const anchor = leftSide ? "start" : "end";
  const se = surfaceAt(ex);
  if (se >= 0) {
    el("text", { class: "sv-water", x: X(ex), y: Y(se) - 8, "text-anchor": anchor }, null, "水面");
    el("text", { class: "sv-lab", x: X(ex), y: y0 + 13, "text-anchor": anchor }, null, "靜水面");
  } else {
    el("text", { class: "sv-lab", x: X(ex), y: y0 - 6, "text-anchor": anchor }, null, "靜水面");
    el("text", { class: "sv-water", x: X(ex), y: Y(se) + 16, "text-anchor": anchor }, null, "水面");
  }

  const qx = X(d.q);
  el("line", { class: "sv-qline", x1: qx, x2: qx, y1: 20, y2: axisY });

  for (let i = 0; i < n; i++) {
    el("line", { class: "sv-push-old", x1: X(d.ps[i]), y1: y0, x2: X(d.lands[i]), y2: Y(h(d.ps[i])) });
  }
  for (let i = 0; i < n; i++) {
    el("circle", { class: "sv-g-old", cx: X(d.ps[i]), cy: y0, r: 3 });
    el("circle", { class: "sv-g-old", cx: X(d.lands[i]), cy: Y(h(d.ps[i])), r: 3 });
  }

  el("circle", { class: "sv-target", cx: qx, cy: Y(d.hq), r: 7 });

  const p = d.ps[n], lx = X(d.lands[n]), ly = Y(h(p)), px = X(p);
  const up = u(p);
  const len = Math.hypot(lx - px, ly - y0);
  if (len > 14) {
    const ux = (lx - px) / len, uy = (ly - y0) / len;
    const sx = px + ux * 6, sy = y0 + uy * 6, ex2 = lx - ux * 6, ey2 = ly - uy * 6;
    el("line", { class: "sv-push", x1: sx, y1: sy, x2: ex2 - ux * 4, y2: ey2 - uy * 4 });
    arrowHead(sx, sy, ex2, ey2, 7);
  }

  const placed = [];
  if (n > 0) {
    const ox = X(d.ps[n - 1]);
    const mlen = Math.abs(px - ox);
    if (mlen > 12) {
      const dir = Math.sign(px - ox);
      el("line", { class: "sv-move", x1: ox, y1: y0, x2: px - dir * 9, y2: y0 });
      arrowHead(ox, y0, px - dir * 5, y0, 6);
    }
    const left = p <= d.q;
    if (Math.abs(d.devs[n - 1]) >= 0.0005) {
      placed.push(keepIn(el("text", { class: "sv-gs", x: left ? Math.min(px, ox) - 4 : Math.max(px, ox) + 4, y: y0 + 15, "text-anchor": left ? "end" : "start" }, null, `往回 ${f3(Math.abs(d.devs[n - 1]))} m`), W).getBBox());
    }
  }

  el("circle", { class: "sv-g", cx: px, cy: y0, r: 4.5 });
  const side = up >= 0 ? 1 : -1;
  placed.push(keepIn(el("text", { class: "sv-gl", x: px - side * 10, y: y0 - 7, "text-anchor": side > 0 ? "end" : "start" }, null, n ? `p${sub(n)}` : "p₀ = q"), W).getBBox());

  const dev = d.devs[n];
  const gdx = qx - lx;
  if (Math.abs(gdx) > 3) {
    el("line", { class: "sv-gap", x1: lx, x2: qx, y1: ly, y2: ly });
    el("line", { class: "sv-gap", x1: qx, x2: qx, y1: ly - 4, y2: ly + 4 });
  }
  el("circle", { class: "sv-g", cx: lx, cy: ly, r: 4.5 });
  const gl = el("text", { class: "sv-gl", x: 0, y: 0 }, null, `${sgn3(dev)} m`);
  const tw = gl.getComputedTextLength();
  const hi = Math.max(lx, qx) + 12, lo = Math.min(lx, qx) - 12;
  const away = dev >= 0 ? 1 : -1;
  const yA = ly - 12;
  const cands = [];
  if (Math.abs(gdx) >= tw + 24) cands.push([(lx + qx) / 2, yA, "middle"]);
  const near = away > 0 ? [hi, "start"] : [lo, "end"];
  const far = away > 0 ? [lo, "end"] : [hi, "start"];
  for (const dy of [0, -16, 16, -32]) {
    cands.push([near[0], yA + dy, near[1]]);
    cands.push([far[0], yA + dy, far[1]]);
  }
  const hit = (b) => b.x < 2 || b.x + b.width > W - 2 || b.y < 24 || b.y + b.height > axisY
    || placed.some((o) => b.x < o.x + o.width + 3 && o.x < b.x + b.width + 3 && b.y < o.y + o.height && o.y < b.y + b.height);
  for (const [x, y, an] of cands) {
    gl.setAttribute("x", x);
    gl.setAttribute("y", y);
    gl.setAttribute("text-anchor", an);
    if (!hit(gl.getBBox())) break;
  }

  placed.push(gl.getBBox());
  if (len > 40) {
    const ux = (lx - px) / len, uy = (ly - y0) / len;
    let nx = -uy, ny = ux;
    if (ny < 0) { nx = -nx; ny = -ny; }
    const mx = (px + lx) / 2 + nx * 10, my = (y0 + ly) / 2 + ny * 10;
    const pl = el("text", { class: "sv-gs", x: mx, y: my + 4, "text-anchor": nx >= 0 ? "start" : "end" }, null, "被推");
    if (hit(pl.getBBox())) pl.remove();
  }

  const tabT = `q = ${d.q.toFixed(2)} m`;
  const tab = el("g", { class: "sv-qtab-g" });
  const tt = el("text", { class: "sv-qtab-t", x: 0, y: 14.5, "text-anchor": "middle" }, tab, tabT);
  const tabW = tt.getComputedTextLength() + 18;
  const cx = Math.min(W - tabW / 2, Math.max(tabW / 2, qx));
  const rect = el("rect", { class: "sv-qtab", x: cx - tabW / 2, y: 0, width: tabW, height: 20, rx: 10 }, tab);
  tab.insertBefore(rect, tt);
  tt.setAttribute("x", cx);
  el("rect", { class: "sv-qhit", x: qx - 12, y: 20, width: 24, height: axisY - 20 });
}

function drawErrs(d) {
  const n = state.n;
  errs.replaceChildren();
  d.devs.forEach((v, i) => {
    const li = document.createElement("li");
    li.className = i === n ? "cur" : i > n ? "todo" : "";
    const pct = Math.min(100, (Math.abs(v) / A) * 100);
    li.innerHTML = `<span class="v">${sgn3(v)}</span><span class="slot"><span class="bar" style="height:${pct.toFixed(1)}%"></span></span><span class="n">第 ${i} 次</span>`;
    if (i > n) li.setAttribute("aria-hidden", "true");
    errs.appendChild(li);
  });
}

function drawSay(d) {
  const n = state.n;
  const g = (s) => `<span class="g">${s}</span>`;
  const qq = (s) => `<span class="qq">${s}</span>`;
  if (n === 0) {
    $("sayF").innerHTML = `${g("p₀")} = ${qq("q")} = ${f3(d.q)}`;
    $("sayS").textContent = Math.abs(d.devs[0]) < 0.0005 ? "這裡沒被推走，直接代公式就對" : "第 0 次就是直接代公式";
  } else {
    const uv = u(d.ps[n - 1]);
    const op = uv < 0 ? "+" : "−";
    $("sayF").innerHTML = `${g("p" + sub(n))} = ${qq("q")} − u(${g("p" + sub(n - 1))}) = ${f3(d.q)} ${op} ${f3(Math.abs(uv))} = ${g(f3(d.ps[n]))}`;
    $("sayS").textContent = n < N ? "落點偏多少，就往回移多少" : `第 ${N} 次只偏 ${f3(Math.abs(d.devs[n]))} m`;
  }
}

function update() {
  const d = derive();
  $("qv").textContent = `${d.q.toFixed(2)} m`;
  $("stepno").textContent = `第 ${state.n} / ${N} 次`;
  $("prev").disabled = state.n === 0;
  $("next").disabled = state.n === N;
  $("reset").disabled = state.n === 0;
  drawErrs(d);
  drawSay(d);
  draw();
}

function go(n) {
  state.n = Math.max(0, Math.min(N, n));
  update();
}

$("prev").addEventListener("click", () => go(state.n - 1));
$("next").addEventListener("click", () => go(state.n + 1));
$("reset").addEventListener("click", () => go(0));
$("q").addEventListener("input", (e) => { state.q = +e.target.value; update(); });

document.addEventListener("keydown", (e) => {
  if (e.target.closest && e.target.closest("input, textarea, select")) return;
  if (e.key === "ArrowRight") { go(state.n + 1); e.preventDefault(); }
  if (e.key === "ArrowLeft") { go(state.n - 1); e.preventDefault(); }
});

let dragging = false;
function setQFromPointer(e) {
  if (!geo) return;
  const r = sv.getBoundingClientRect();
  const x = geo.toX(e.clientX - r.left);
  state.q = Math.round(Math.min(Q_MAX, Math.max(Q_MIN, x)) * 100) / 100;
  $("q").value = state.q;
  update();
}
sv.addEventListener("pointerdown", (e) => {
  const c = e.target.getAttribute && e.target.getAttribute("class");
  if (c !== "sv-qhit" && c !== "sv-qtab") return;
  dragging = true;
  sv.setPointerCapture(e.pointerId);
  document.body.classList.add("dragging");
  e.preventDefault();
});
sv.addEventListener("pointermove", (e) => { if (dragging) setQFromPointer(e); });
const endDrag = () => { dragging = false; document.body.classList.remove("dragging"); };
sv.addEventListener("pointerup", endDrag);
sv.addEventListener("pointercancel", endDrag);

onRedraw(draw);
update();
