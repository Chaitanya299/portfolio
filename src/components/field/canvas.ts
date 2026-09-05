// FIELD canvas — faithful port of the design's generative field.
// 2D particle system, no WebGL. Six formations, "Nodes and threads" (the default) render.
// Ink colours come from the palette (canvas cannot read CSS variables).

const SIGNAL = "#8c2a35"; // pal.ac — accent nodes + near-numeral stroke
const INK = "#7d3540"; // fieldInk
const WEB = "140,42,53"; // fieldWeb

const EASE = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

type Pt = [number, number];

/* ── formations: normalised point sets, one per chapter ── */
function nucleus(n: number): Pt[] {
  const p: Pt[] = [];
  const GA = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const r = Math.sqrt((i + 0.5) / n) * 0.34;
    const a = i * GA;
    p.push([0.5 + Math.cos(a) * r * 0.62, 0.5 + Math.sin(a) * r]);
  }
  return p;
}
function lattice(n: number): Pt[] {
  const p: Pt[] = [];
  const cols = Math.ceil(Math.sqrt(n * 1.7));
  const rows = Math.ceil(n / cols);
  for (let i = 0; i < n; i++) {
    const c = i % cols;
    const r = Math.floor(i / cols);
    p.push([0.04 + (c / (cols - 1)) * 0.92, 0.08 + (r / Math.max(1, rows - 1)) * 0.84]);
  }
  return p;
}
function branch(n: number): Pt[] {
  const p: Pt[] = [];
  const trunkY = 0.5;
  const limbs: Pt[] = [[0.24, 0.12], [0.56, 0.88], [0.87, 0.12]];
  const trunkN = Math.max(1, Math.floor(n * 0.46));
  const limbN = Math.max(1, Math.floor((n - trunkN) / 3));
  for (let i = 0; i < n; i++) {
    if (i < trunkN) {
      const t = i / trunkN;
      p.push([0.03 + t * 0.94, trunkY + (((i * 53) % 7) - 3) * 0.0013]);
    } else {
      const j = i - trunkN;
      const li = Math.min(2, Math.floor(j / limbN));
      const t = clamp((j - li * limbN) / limbN, 0, 1);
      const L = limbs[li];
      p.push([L[0] + t * 0.05, lerp(trunkY, L[1], EASE(t)) + (((i * 29) % 9) - 4) * 0.0014]);
    }
  }
  return p;
}
function rings(n: number): Pt[] {
  const p: Pt[] = [];
  const R = 4;
  const per = Math.ceil(n / R);
  for (let i = 0; i < n; i++) {
    const ri = Math.min(R - 1, Math.floor(i / per));
    const k = i - ri * per;
    const rad = 0.11 + (ri / (R - 1)) * 0.29;
    const a = (k / per) * Math.PI * 2 + ri * 0.55;
    p.push([0.5 + Math.cos(a) * rad * 0.6, 0.5 + Math.sin(a) * rad]);
  }
  return p;
}
function converge(n: number): Pt[] {
  const p: Pt[] = [];
  for (let i = 0; i < n; i++) {
    const s = i / n;
    if (s < 0.7) {
      const t = s / 0.7;
      const a = t * Math.PI * 14;
      const r = (1 - t) * 0.3;
      p.push([0.5 + Math.cos(a) * r * 0.5, 0.5 + Math.sin(a) * r * 0.8]);
    } else {
      const t = (s - 0.7) / 0.3;
      p.push([0.5 + (((i * 41) % 13) - 6) * 0.0022, 0.5 + (t - 0.5) * 0.9]);
    }
  }
  return p;
}
// one source opening into five arms: the formation for what I can build
function splay(n: number): Pt[] {
  const p: Pt[] = [];
  const arms = 5;
  const per = Math.ceil(n / arms);
  for (let i = 0; i < n; i++) {
    const a = Math.min(arms - 1, Math.floor(i / per));
    const t = EASE(clamp((i - a * per) / per, 0, 1));
    const ang = -0.54 + (a / (arms - 1)) * 1.08;
    p.push([0.13 + Math.cos(ang) * t * 0.76, 0.5 + Math.sin(ang) * t * 0.64 + (((i * 31) % 9) - 4) * 0.0015]);
  }
  return p;
}
const FORMS = [nucleus, splay, lattice, branch, rings, converge];

interface P {
  x: number;
  y: number;
  z: number;
  ph: number;
  sig: boolean;
}

export type MotionMode = "full" | "calm" | "still";

export class FieldCanvas {
  private ctx: CanvasRenderingContext2D;
  private canvas: HTMLCanvasElement;
  private cw = 0;
  private ch = 0;
  private bw = 0;
  private bh = 0;
  private N = 300;
  private forms: Pt[][] = [];
  private parts: P[] = [];
  private touch: boolean;
  private density: number;

  constructor(canvas: HTMLCanvasElement, touch: boolean, density = 1) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d", { alpha: true })!;
    this.touch = touch;
    this.density = density;
    this.init();
  }

  private init() {
    const wide = window.innerWidth;
    const n = wide > 1400 ? 900 : wide > 900 ? 680 : 300;
    this.N = Math.max(90, Math.round(n * this.density));
    this.forms = FORMS.map((f) => f(this.N));
    this.parts = new Array(this.N).fill(0).map((_, i) => ({
      x: 0.5,
      y: 0.5,
      z: 0.35 + (((i * 71) % 100) / 100) * 0.65,
      ph: (((i * 131) % 628) / 100),
      sig: i % 13 === 0,
    }));
    this.resize();
  }

  resize() {
    const c = this.canvas;
    const dpr = Math.min(window.devicePixelRatio || 1, this.touch ? 1.4 : 1.75);
    this.cw = c.clientWidth;
    this.ch = c.clientHeight;
    c.width = Math.round(this.cw * dpr);
    c.height = Math.round(this.ch * dpr);
    this.bw = c.width;
    this.bh = c.height;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // particle count follows breakpoints
    const wide = window.innerWidth;
    const n = Math.max(90, Math.round((wide > 1400 ? 900 : wide > 900 ? 680 : 300) * this.density));
    if (n !== this.N) this.init();
  }

  // cf: continuous formation index (0..5). vel: 60Hz-normalised scroll velocity.
  // mode: motion tier. mx/my: smoothed pointer in CSS px (or -9999 when absent).
  draw(t: number, cf: number, vel: number, mode: MotionMode, mx: number, my: number) {
    const ctx = this.ctx;
    const c = this.canvas;
    if (this.cw !== c.clientWidth || this.ch !== c.clientHeight || c.width !== this.bw || c.height !== this.bh) {
      this.resize();
    }
    const w = this.cw;
    const h = this.ch;
    if (w < 2 || h < 2) return;
    ctx.clearRect(0, 0, w, h);

    const cfc = clamp(cf, 0, FORMS.length - 1);
    const i0 = Math.floor(cfc);
    const i1 = Math.min(FORMS.length - 1, i0 + 1);
    const mt = EASE(cfc - i0);
    const A = this.forms[i0];
    const B = this.forms[i1];
    const drift = mode === "still" ? 0 : mode === "calm" ? 0.4 : 1;
    const stretch = clamp((Math.abs(clamp(vel, -70, 70)) - 3) * 0.14, 0, 7);
    const R = 170;
    const R2 = R * R;

    for (let i = 0; i < this.N; i++) {
      const p = this.parts[i];
      let px = lerp(A[i][0], B[i][0], mt) * w;
      let py = lerp(A[i][1], B[i][1], mt) * h;
      if (drift) {
        px += Math.sin(t * 0.00028 + p.ph) * 11 * drift * p.z;
        py += Math.cos(t * 0.00023 + p.ph * 1.7) * 9 * drift * p.z;
      }
      if (!this.touch && mx > -9000) {
        const dx = px - mx;
        const dy = py - my;
        const d2 = dx * dx + dy * dy;
        if (d2 < R2 && d2 > 0.01) {
          const d = Math.sqrt(d2);
          const f = (1 - d / R) * 46;
          px += (dx / d) * f;
          py += (dy / d) * f;
        }
      }
      p.x = px;
      p.y = py;
    }

    const near = Math.min(w, h) * 0.14;

    // "Nodes and threads": faint threads between consecutive nodes, then dots.
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(" + WEB + ",0.075)";
    ctx.beginPath();
    for (let i = 0; i < this.N - 1; i++) {
      if ((i + 1) % 14 === 0) continue;
      const a = this.parts[i];
      const b = this.parts[i + 1];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      if (dx * dx + dy * dy > near * near) continue;
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
    }
    ctx.stroke();

    for (let i = 0; i < this.N; i++) {
      const p = this.parts[i];
      const s = 0.7 + p.z * 1.5;
      if (p.sig) {
        ctx.fillStyle = SIGNAL;
        ctx.globalAlpha = 0.5 + p.z * 0.4;
      } else {
        ctx.fillStyle = INK;
        ctx.globalAlpha = 0.12 + p.z * 0.3;
      }
      if (stretch > 0.6) ctx.fillRect(p.x - s / 2, p.y - stretch * 0.5 * p.z, s, stretch * p.z + s);
      else ctx.fillRect(p.x - s / 2, p.y - s / 2, s, s);
    }
    ctx.globalAlpha = 1;
  }
}
