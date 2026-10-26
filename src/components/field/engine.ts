// FIELD v3 engine: TS port of design_handoff_portfolio_field/v3/field-engine.js mount().
// Live particle field, cursor, reveals, counters, work panels, copy email, progress.
// Dropped from the design file: its canned ask + fake contact form (real ones live in setup.ts)
// and its anchor smooth-scroll (dead in v3: setupChapters intercepts every #anchor first).

const FRAME = 1000 / 60;
const EASE = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const smooth = (r: number, dt: number) => 1 - Math.pow(1 - r, dt / FRAME);
const SIGNAL = "#8c2a35", INK = "#7d3540", WEB = "140,42,53";
export const EMAIL = "chaitanya.sai311@gmail.com";

type Pt = [number, number];
const nuc = (n: number) => { const p: Pt[] = [], GA = Math.PI * (3 - Math.sqrt(5)); for (let i = 0; i < n; i++) { const r = Math.sqrt((i + 0.5) / n) * 0.34, a = i * GA; p.push([0.5 + Math.cos(a) * r * 0.62, 0.5 + Math.sin(a) * r]); } return p; };
const lat = (n: number) => { const p: Pt[] = [], cols = Math.ceil(Math.sqrt(n * 1.7)), rows = Math.ceil(n / cols); for (let i = 0; i < n; i++) { const c = i % cols, r = Math.floor(i / cols); p.push([0.04 + (c / (cols - 1)) * 0.92, 0.08 + (r / Math.max(1, rows - 1)) * 0.84]); } return p; };
const bra = (n: number) => { const p: Pt[] = [], tY = 0.5, L: Pt[] = [[0.24, 0.12], [0.56, 0.88], [0.87, 0.12]], tN = Math.max(1, Math.floor(n * 0.46)), lN = Math.max(1, Math.floor((n - tN) / 3));
  for (let i = 0; i < n; i++) { if (i < tN) { const t = i / tN; p.push([0.03 + t * 0.94, tY + (((i * 53) % 7) - 3) * 0.0013]); } else { const j = i - tN, li = Math.min(2, Math.floor(j / lN)), t = clamp((j - li * lN) / lN, 0, 1), l = L[li]; p.push([l[0] + t * 0.05, lerp(tY, l[1], EASE(t)) + (((i * 29) % 9) - 4) * 0.0014]); } } return p; };
const rin = (n: number) => { const p: Pt[] = [], R = 4, per = Math.ceil(n / R); for (let i = 0; i < n; i++) { const ri = Math.min(R - 1, Math.floor(i / per)), k = i - ri * per, rad = 0.11 + (ri / (R - 1)) * 0.29, a = (k / per) * Math.PI * 2 + ri * 0.55; p.push([0.5 + Math.cos(a) * rad * 0.6, 0.5 + Math.sin(a) * rad]); } return p; };
const con = (n: number) => { const p: Pt[] = []; for (let i = 0; i < n; i++) { const s = i / n; if (s < 0.7) { const t = s / 0.7, a = t * Math.PI * 14, r = (1 - t) * 0.3; p.push([0.5 + Math.cos(a) * r * 0.5, 0.5 + Math.sin(a) * r * 0.8]); } else { const t = (s - 0.7) / 0.3; p.push([0.5 + (((i * 41) % 13) - 6) * 0.0022, 0.5 + (t - 0.5) * 0.9]); } } return p; };
const spl = (n: number) => { const p: Pt[] = [], arms = 5, per = Math.ceil(n / arms); for (let i = 0; i < n; i++) { const a = Math.min(arms - 1, Math.floor(i / per)), t = EASE(clamp((i - a * per) / per, 0, 1)), ang = -0.54 + (a / (arms - 1)) * 1.08; p.push([0.13 + Math.cos(ang) * t * 0.76, 0.5 + Math.sin(ang) * t * 0.64 + (((i * 31) % 9) - 4) * 0.0015]); } return p; };
const FORMS = [nuc, spl, lat, bra, rin, con];

type Part = { x: number; y: number; z: number; ph: number; sig: boolean };

class Field {
  c: HTMLCanvasElement; ctx: CanvasRenderingContext2D; touch: boolean; density: number;
  N = 0; forms: Pt[][] = []; parts: Part[] = []; cw = 0; ch = 0; bw = 0; bh = 0;
  constructor(c: HTMLCanvasElement, touch: boolean, density: number) { this.c = c; this.ctx = c.getContext("2d", { alpha: true })!; this.touch = touch; this.density = density; this.init(); }
  count() { const w = window.innerWidth; return Math.max(90, Math.round((w > 1400 ? 900 : w > 900 ? 680 : 300) * this.density)); }
  init() {
    this.N = this.count();
    this.forms = FORMS.map((f) => f(this.N));
    this.parts = new Array(this.N).fill(0).map((_, i) => ({ x: 0.5, y: 0.5, z: 0.35 + (((i * 71) % 100) / 100) * 0.65, ph: ((i * 131) % 628) / 100, sig: i % 13 === 0 }));
    this.resize();
  }
  resize() {
    const c = this.c, dpr = Math.min(window.devicePixelRatio || 1, this.touch ? 1.4 : 1.75);
    this.cw = c.clientWidth; this.ch = c.clientHeight;
    c.width = Math.round(this.cw * dpr); c.height = Math.round(this.ch * dpr);
    this.bw = c.width; this.bh = c.height;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (this.count() !== this.N) this.init();
  }
  draw(t: number, cf: number, vel: number, still: boolean, mx: number, my: number) {
    const ctx = this.ctx, c = this.c;
    if (this.cw !== c.clientWidth || this.ch !== c.clientHeight || c.width !== this.bw) this.resize();
    const w = this.cw, h = this.ch; if (w < 2 || h < 2) return;
    ctx.clearRect(0, 0, w, h);
    const cfc = clamp(cf, 0, FORMS.length - 1), i0 = Math.floor(cfc), i1 = Math.min(FORMS.length - 1, i0 + 1), mt = EASE(cfc - i0);
    const A = this.forms[i0], B = this.forms[i1], drift = still ? 0 : 1;
    const stretch = clamp((Math.abs(clamp(vel, -70, 70)) - 3) * 0.14, 0, 7);
    const R = 170, R2 = R * R;
    for (let i = 0; i < this.N; i++) {
      const p = this.parts[i];
      let px = lerp(A[i][0], B[i][0], mt) * w, py = lerp(A[i][1], B[i][1], mt) * h;
      if (drift) { px += Math.sin(t * 0.00028 + p.ph) * 11 * p.z; py += Math.cos(t * 0.00023 + p.ph * 1.7) * 9 * p.z; }
      if (!this.touch && mx > -9000) { const dx = px - mx, dy = py - my, d2 = dx * dx + dy * dy; if (d2 < R2 && d2 > 0.01) { const d = Math.sqrt(d2), f = (1 - d / R) * 46; px += (dx / d) * f; py += (dy / d) * f; } }
      p.x = px; p.y = py;
    }
    const near = Math.min(w, h) * 0.14;
    ctx.lineWidth = 1; ctx.strokeStyle = "rgba(" + WEB + ",0.075)"; ctx.beginPath();
    for (let i = 0; i < this.N - 1; i++) {
      if ((i + 1) % 14 === 0) continue;
      const a = this.parts[i], b = this.parts[i + 1], dx = b.x - a.x, dy = b.y - a.y;
      if (dx * dx + dy * dy > near * near) continue;
      ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
    }
    ctx.stroke();
    for (let i = 0; i < this.N; i++) {
      const p = this.parts[i], s = 0.7 + p.z * 1.5;
      if (p.sig) { ctx.fillStyle = SIGNAL; ctx.globalAlpha = 0.5 + p.z * 0.4; } else { ctx.fillStyle = INK; ctx.globalAlpha = 0.12 + p.z * 0.3; }
      if (stretch > 0.6) ctx.fillRect(p.x - s / 2, p.y - stretch * 0.5 * p.z, s, stretch * p.z + s);
      else ctx.fillRect(p.x - s / 2, p.y - s / 2, s, s);
    }
    ctx.globalAlpha = 1;
  }
}

declare global { interface Window { __feRevealAt?: number } }

export function mount(root: HTMLElement) {
  const off: (() => void)[] = [], timers: ReturnType<typeof setTimeout>[] = [];
  const on = (t: EventTarget, e: string, h: EventListener, o?: AddEventListenerOptions) => { t.addEventListener(e, h, o); off.push(() => t.removeEventListener(e, h, o)); };
  const q = (s: string) => root.querySelector<HTMLElement>('[data-fe="' + s + '"]');
  const qa = (s: string) => Array.from(root.querySelectorAll<HTMLElement>('[data-fe="' + s + '"]'));
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const touch = matchMedia("(hover: none)").matches;
  const cursorOn = matchMedia("(pointer: fine)").matches && !touch;
  let dead = false;

  /* background layer */
  const layer = document.createElement("div");
  layer.setAttribute("aria-hidden", "true");
  layer.style.cssText = "position:fixed;left:0;top:0;width:100%;height:100vh;height:100lvh;z-index:0;pointer-events:none;";
  layer.innerHTML = '<canvas style="position:absolute;inset:0;width:100%;height:100%;display:block;"></canvas>' +
    '<div style="position:absolute;inset:0;background:radial-gradient(120% 100% at 50% 0%, transparent 55%, color-mix(in oklab, var(--ac) 6%, transparent) 100%);"></div>';
  root.prepend(layer);
  const grain = document.createElement("div");
  grain.setAttribute("aria-hidden", "true");
  grain.style.cssText = "position:fixed;inset:0;z-index:40;pointer-events:none;opacity:0.045;background-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.86' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\");";
  root.appendChild(grain);
  const field = new Field(layer.firstChild as HTMLCanvasElement, touch, reduced ? 0.6 : 1);

  /* cursor */
  const RING: Record<string, number> = { default: 34, link: 54, explore: 54, project: 84 };
  const cur = document.createElement("div");
  cur.setAttribute("aria-hidden", "true");
  cur.style.cssText = "position:fixed;top:0;left:0;z-index:50;pointer-events:none;opacity:0;transition:opacity 0.3s ease;will-change:transform;";
  cur.innerHTML = '<div style="position:absolute;left:0;top:0;width:34px;height:34px;margin:-17px 0 0 -17px;border:1px solid color-mix(in oklab, var(--ac) 60%, transparent);border-radius:50%;display:flex;align-items:center;justify-content:center;transition:width 0.42s cubic-bezier(0.16,1,0.3,1),height 0.42s cubic-bezier(0.16,1,0.3,1),margin 0.42s cubic-bezier(0.16,1,0.3,1),background-color 0.42s ease,border-color 0.42s ease;"><span style="font-family:var(--font-mono),ui-monospace,monospace;font-size:8.5px;line-height:1.25;letter-spacing:0.16em;text-transform:uppercase;text-align:center;white-space:pre;color:var(--ink);opacity:0;transition:opacity 0.3s ease;"></span></div><span style="position:absolute;left:0;top:0;width:5px;height:5px;margin:-2.5px 0 0 -2.5px;border-radius:50%;background:var(--ac);transition:opacity 0.3s ease;"></span>';
  const ring = cur.firstChild as HTMLElement, lab = ring.firstChild as HTMLElement, dot = cur.lastChild as HTMLElement;
  const ptr = { x: -9999, y: -9999, sx: -9999, sy: -9999 };
  let cState = "", cLabel = "";
  const setCursor = (state: string, label: string) => {
    if (cState === state && cLabel === label) return;
    cState = state; cLabel = label;
    const s = RING[state];
    ring.style.width = s + "px"; ring.style.height = s + "px"; ring.style.margin = (-s / 2) + "px 0 0 " + (-s / 2) + "px";
    ring.style.background = state === "default" ? "transparent" : "color-mix(in oklab, var(--ac) 14%, transparent)";
    ring.style.borderColor = state === "default" ? "color-mix(in oklab, var(--ac) 60%, transparent)" : "color-mix(in oklab, var(--ac) 90%, transparent)";
    lab.textContent = label; lab.style.opacity = label ? "1" : "0";
    dot.style.opacity = state === "default" ? "1" : "0";
  };
  let cssCursor: HTMLStyleElement | null = null;
  if (cursorOn) {
    root.appendChild(cur);
    cssCursor = document.createElement("style");
    cssCursor.textContent = "[data-fe-root],[data-fe-root] a,[data-fe-root] button,[data-fe-root] label{cursor:none!important}[data-fe-root] input,[data-fe-root] textarea,[data-fe-root] select{cursor:auto!important}";
    document.head.appendChild(cssCursor);
    setCursor("default", "");
    on(window, "mousemove", (e) => { const m = e as MouseEvent; ptr.x = m.clientX; ptr.y = m.clientY; if (cur.style.opacity !== "1") cur.style.opacity = "1"; }, { passive: true });
    on(window, "mouseover", (e) => {
      const t = e.target as HTMLElement, tg = t.closest?.<HTMLElement>("[data-cursor]");
      if (tg) { const st = tg.dataset.cursor || "link"; setCursor(RING[st] ? st : "link", (tg.dataset.cursorLabel || "").replace(/\\n/g, "\n")); }
      else if (t.closest?.("a,button")) setCursor("link", "");
      else setCursor("default", "");
    }, { passive: true });
    on(document, "mouseleave", () => { cur.style.opacity = "0"; ptr.x = ptr.y = -9999; });
  }

  /* reveals */
  const rv = Array.from(root.querySelectorAll<HTMLElement>("[data-rv]"));
  if (!reduced) rv.forEach((el) => { el.style.opacity = "0"; el.style.transform = "translate3d(0,28px,0)"; });
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target as HTMLElement, d = Math.round(Number(el.dataset.rv || 0) * 90 + Math.max(0, (window.__feRevealAt || 0) - performance.now()));
    el.style.transition = "opacity 1s cubic-bezier(0.16,1,0.3,1) " + d + "ms, transform 1.1s cubic-bezier(0.16,1,0.3,1) " + d + "ms";
    el.style.opacity = "1"; el.style.transform = "none";
    io.unobserve(el);
  }), { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  rv.forEach((el) => io.observe(el));

  /* counters */
  const cio = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target as HTMLElement, to = Number(el.dataset.count), t0 = performance.now() + Math.max(0, (window.__feRevealAt || 0) - performance.now());
    const step = () => { const p = clamp((performance.now() - t0) / 1400, 0, 1); el.textContent = String(Math.round(EASE(p) * to)).padStart(2, "0"); if (p < 1 && !dead) requestAnimationFrame(step); };
    step(); cio.unobserve(el);
  }), { threshold: 0.6 });
  root.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => { el.textContent = "00"; cio.observe(el); });

  /* sections -> formation + progress */
  const secs = Array.from(root.querySelectorAll<HTMLElement>("[data-sec]"));
  const prog = q("progress");
  let cf = 0, lastY = window.scrollY, vel = 0;

  /* work rows */
  qa("work-row").forEach((row) => {
    const btn = row.querySelector<HTMLElement>('[data-fe="work-toggle"]'), panel = row.querySelector<HTMLElement>('[data-fe="work-panel"]'), pv = row.querySelector<HTMLElement>('[data-fe="plus-v"]');
    if (!btn || !panel) return;
    let open = false;
    on(btn, "click", () => {
      open = !open; btn.setAttribute("aria-expanded", String(open));
      const inner = panel.firstElementChild as HTMLElement;
      if (open) { panel.style.height = inner.offsetHeight + "px"; timers.push(setTimeout(() => { if (open) panel.style.height = "auto"; }, 650)); }
      else { panel.style.height = panel.offsetHeight + "px"; void panel.offsetHeight; panel.style.height = "0px"; }
      if (pv) pv.style.transform = open ? "scaleY(0)" : "none";
    });
  });

  /* copy email */
  qa("copy-email").forEach((b) => {
    const l = b.querySelector<HTMLElement>('[data-fe="copy-label"]');
    on(b, "click", async () => {
      try { await navigator.clipboard.writeText(EMAIL); } catch {}
      if (!l) return; l.textContent = "Copying";
      timers.push(setTimeout(() => (l.textContent = "Copied"), 180), setTimeout(() => (l.textContent = "Copy"), 1900));
    });
  });

  let rw = window.innerWidth; on(window, "resize", () => { if (window.innerWidth !== rw) { rw = window.innerWidth; field.resize(); } });

  let raf = 0, last = 0;
  const tick = (t: number) => {
    if (dead) return;
    const dt = clamp(last ? t - last : FRAME, 1, 50); last = t;
    const y = window.scrollY, vh = window.innerHeight;
    vel = lerp(vel, (y - lastY) * (FRAME / dt), 0.35); lastY = y;
    let idx = 0, local = 0;
    for (let i = 0; i < secs.length; i++) {
      const r = secs[i].getBoundingClientRect();
      if (r.top <= vh * 0.5) { idx = i; local = clamp((vh * 0.5 - r.top) / Math.max(1, r.height), 0, 1); }
    }
    const form = secs[idx] ? Number(secs[idx].dataset.form || idx) : 0;
    cf = lerp(cf, form + local * 0.42, smooth(0.055, dt));
    if (prog) { const max = Math.max(1, document.documentElement.scrollHeight - vh); prog.style.transform = "scaleX(" + clamp(y / max, 0, 1).toFixed(4) + ")"; }
    if (cursorOn) {
      const k = reduced ? 1 : smooth(0.16, dt);
      ptr.sx = lerp(ptr.sx, ptr.x, k); ptr.sy = lerp(ptr.sy, ptr.y, k);
      cur.style.transform = "translate3d(" + ptr.sx.toFixed(1) + "px," + ptr.sy.toFixed(1) + "px,0)";
    }
    field.draw(t, cf, reduced ? 0 : vel, reduced, cursorOn && ptr.x > -9000 ? ptr.sx : -9999, ptr.sy);
    raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);

  return () => {
    dead = true; cancelAnimationFrame(raf); io.disconnect(); cio.disconnect();
    timers.forEach(clearTimeout); off.forEach((f) => f());
    layer.remove(); grain.remove(); cur.remove(); if (cssCursor) cssCursor.remove();
  };
}
