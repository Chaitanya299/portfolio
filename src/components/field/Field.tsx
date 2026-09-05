"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CHAPTERS, type ChapterKey } from "./data";
import { FieldCanvas, type MotionMode } from "./canvas";
import { Home, Build, Work, Roadmap, Recognition, Contact } from "./chapters";
import { MobileChapterBar } from "./MobileChapterBar";

const FRAME = 1000 / 60;
const EASE = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const OUT = (t: number) => 1 - Math.pow(1 - t, 3);
const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const smooth = (rate: number, dt: number) => 1 - Math.pow(1 - rate, dt / FRAME);

interface Reveal {
  el: HTMLElement;
  units: HTMLElement[];
  top: number;
  rStart: number;
  rSpan: number;
  intro: boolean;
  iOrder: number;
  depth: number;
  p: number;
  ny: number;
}
interface Counter {
  el: HTMLElement;
  to: number;
  done: boolean;
  top: number;
  rStart: number;
  rSpan: number;
}
interface Branch {
  el: SVGPathElement;
  len: number;
  top: number;
  rStart: number;
  rSpan: number;
}
interface ChNum {
  el: HTMLElement;
  top: number;
  k: number;
  near: boolean;
}

const RING = { default: 34, link: 54, explore: 54, project: 84 } as const;
type CursorState = keyof typeof RING;

export default function Field() {
  const [pageIdx, setPageIdx] = useState(0);
  const pageRef = useRef(0);

  const viewportRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const railIndRef = useRef<HTMLSpanElement>(null);
  const progFillRef = useRef<HTMLDivElement>(null);
  const progHeadRef = useRef<HTMLDivElement>(null);
  const progPctRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef<HTMLSpanElement>(null);
  const cursorDotRef = useRef<HTMLSpanElement>(null);
  const tickerRef = useRef<HTMLSpanElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const curtainInnerRef = useRef<HTMLDivElement>(null);
  const curtainNumRef = useRef<HTMLDivElement>(null);
  const curtainTitleRef = useRef<HTMLDivElement>(null);
  const preloadRef = useRef<HTMLDivElement>(null);
  const preloadBarRef = useRef<HTMLSpanElement>(null);
  const preloadTxtRef = useRef<HTMLDivElement>(null);
  const preloadCountRef = useRef<HTMLDivElement>(null);

  const scroll = useRef({ target: 0, current: 0, prev: 0, max: 0, vel: 0 });
  const cf = useRef(0);
  const reveals = useRef<Reveal[]>([]);
  const counters = useRef<Counter[]>([]);
  const branches = useRef<Branch[]>([]);
  const chNums = useRef<ChNum[]>([]);
  const locked = useRef(true);
  const transitioning = useRef(false);
  const field = useRef<FieldCanvas | null>(null);
  const touch = useRef(false);
  const motionMode = useRef<MotionMode>("full");
  const introStart = useRef(0);
  const lastLocal = useRef(-1);
  const lastPct = useRef("");
  const firstNav = useRef(true);

  const navigateRef = useRef<(idx: number) => void>(() => {});
  const trackPanelRef = useRef<(panel: HTMLElement, getOpen: () => boolean) => void>(() => {});
  // Bridge for work rows: while a panel animates open/closed it changes the
  // chapter height, so the scroll range has to follow it (see trackPanel).
  const track = useCallback((panel: HTMLElement, getOpen: () => boolean) => {
    trackPanelRef.current(panel, getOpen);
  }, []);

  function revealWindow(top: number, lead: number, span: number) {
    const vh = window.innerHeight;
    const max = scroll.current.max;
    let a = top - vh * lead;
    let b = a + vh * span;
    if (b > max) {
      b = max;
      a = Math.min(a, Math.max(0, b - vh * span * 0.6));
    }
    return { s: a, d: Math.max(1, b - a) };
  }

  function measure() {
    const stage = stageRef.current;
    if (!stage) return;
    const active = stage.querySelector<HTMLElement>('.fld-chapter[data-active="true"]');
    if (!active) return;
    const vh = window.innerHeight;
    scroll.current.max = Math.max(0, active.offsetHeight - vh);
    const base = scroll.current.current;
    let io = 0;
    for (const r of reveals.current) {
      r.top = r.el.getBoundingClientRect().top + base;
      r.intro = r.el.dataset.reveal !== "scroll" && r.top < vh * 0.99;
      if (r.intro) r.iOrder = io++;
      const w = revealWindow(r.top, 0.92, 0.5);
      r.rStart = w.s;
      r.rSpan = w.d;
    }
    for (const c of counters.current) {
      c.top = c.el.getBoundingClientRect().top + base;
      const w = revealWindow(c.top, 0.75, 0.3);
      c.rStart = w.s;
      c.rSpan = w.d;
    }
    for (const b of branches.current) {
      b.top = b.el.getBoundingClientRect().top + base;
      const w = revealWindow(b.top, 0.8, 0.55);
      b.rStart = w.s;
      b.rSpan = w.d;
    }
    for (const n of chNums.current) n.top = n.el.getBoundingClientRect().top + base;
    field.current?.resize();
  }

  function collect() {
    const stage = stageRef.current;
    if (!stage) return;
    const active = stage.querySelector<HTMLElement>('.fld-chapter[data-active="true"]');
    if (!active) return;
    reveals.current = Array.from(active.querySelectorAll<HTMLElement>("[data-reveal]")).map((el, i) => ({
      el,
      units: Array.from(el.querySelectorAll<HTMLElement>(".fld-unit")),
      top: 0,
      rStart: 0,
      rSpan: 1,
      intro: false,
      iOrder: 0,
      depth: 0.16 + (i % 4) * 0.13,
      p: -1,
      ny: 0,
    }));
    counters.current = Array.from(active.querySelectorAll<HTMLElement>('[data-fld="count"]')).map((el) => {
      el.textContent = "0";
      return { el, to: Number(el.dataset.to), done: false, top: 0, rStart: 0, rSpan: 1 };
    });
    branches.current = Array.from(active.querySelectorAll<SVGPathElement>('[data-fld="branch-path"]')).map((el) => {
      const len = el.getTotalLength();
      el.style.strokeDasharray = String(len);
      el.style.strokeDashoffset = String(len);
      return { el, len, top: 0, rStart: 0, rSpan: 1 };
    });
    chNums.current = Array.from(active.querySelectorAll<HTMLElement>('[data-fld="chapter-num"]')).map((el) => ({
      el,
      top: 0,
      k: 2,
      near: false,
    }));
    measure();
  }

  function positionRail() {
    const rail = railRef.current;
    const ind = railIndRef.current;
    if (!rail || !ind) return;
    const wrapped = rail.offsetHeight > 62;
    rail.classList.toggle("fld-rail-wrapped", wrapped);
    const cell = rail.querySelector<HTMLElement>('.fld-rail-cell[data-active="true"]');
    if (!cell || wrapped) {
      ind.style.opacity = "0";
      return;
    }
    ind.style.opacity = "1";
    ind.style.left = `${cell.offsetLeft}px`;
    ind.style.width = `${cell.offsetWidth}px`;
    // keep the active cell in view on a narrow horizontal scroller
    if (cell.offsetLeft < rail.scrollLeft || cell.offsetLeft + cell.offsetWidth > rail.scrollLeft + rail.clientWidth) {
      rail.scrollLeft = cell.offsetLeft - (rail.clientWidth - cell.offsetWidth) / 2;
    }
  }

  // recompute + arm intro after a chapter swap (navigate owns the curtain itself)
  useEffect(() => {
    if (firstNav.current) return;
    requestAnimationFrame(() => {
      collect();
      positionRail();
      introStart.current = performance.now();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageIdx]);

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none)").matches;
    touch.current = isTouch;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    motionMode.current = reduced ? "still" : "full";
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const cursorOn = finePointer && !isTouch;

    const root = document.documentElement;
    root.classList.add("fld-js");
    if (reduced) root.classList.add("fld-motion-still");
    if (cursorOn) root.classList.add("fld-cursor-on");

    if (canvasRef.current) {
      field.current = new FieldCanvas(canvasRef.current, isTouch, reduced ? 0.6 : 1);
    }

    const timers: number[] = [];
    const later = (fn: () => void, ms: number) => {
      const id = window.setTimeout(fn, ms);
      timers.push(id);
      return id;
    };

    // ---------- custom cursor ----------
    const pointer = { x: -9999, y: -9999, sx: -9999, sy: -9999 };
    let cState: CursorState | "" = "";
    let cLabel = "";

    const setCursor = (state: CursorState, label: string) => {
      if (cState === state && cLabel === label) return;
      cState = state;
      cLabel = label;
      const ring = cursorRingRef.current;
      const lab = cursorLabelRef.current;
      const dot = cursorDotRef.current;
      if (!ring || !lab || !dot) return;
      const size = RING[state];
      ring.style.width = `${size}px`;
      ring.style.height = `${size}px`;
      ring.style.margin = `${-size / 2}px 0 0 ${-size / 2}px`;
      ring.style.background =
        state === "default" ? "transparent" : "color-mix(in oklab, var(--ac) 14%, transparent)";
      ring.style.borderColor =
        state === "default"
          ? "color-mix(in oklab, var(--ac) 60%, transparent)"
          : "color-mix(in oklab, var(--ac) 90%, transparent)";
      lab.textContent = label;
      lab.style.opacity = label ? "1" : "0";
      dot.style.opacity = state === "default" ? "1" : "0";
    };

    const onMove = (e: MouseEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      const c = cursorRef.current;
      if (c && c.style.opacity !== "1") c.style.opacity = "1";
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as Element | null;
      const tagged = t?.closest?.("[data-cursor]") as HTMLElement | null;
      if (tagged) {
        const state = (tagged.dataset.cursor || "link") as CursorState;
        setCursor(RING[state] ? state : "link", tagged.dataset.cursorLabel || "");
      } else if (t?.closest?.("a, button, [role='button']")) {
        setCursor("link", "");
      } else {
        setCursor("default", "");
      }
    };
    const onDocLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = "0";
      pointer.x = -9999;
      pointer.y = -9999;
    };

    if (cursorOn) {
      setCursor("default", "");
      window.addEventListener("mousemove", onMove, { passive: true });
      window.addEventListener("mouseover", onOver, { passive: true });
      document.addEventListener("mouseleave", onDocLeave);
    }

    // ---------- chapter transition ----------
    const navigate = (idx: number) => {
      const chapter = CHAPTERS[idx];
      if (!chapter || idx === pageRef.current || transitioning.current) return;
      transitioning.current = true;
      locked.current = true;

      const cur = curtainRef.current;
      const inner = curtainInnerRef.current;
      if (curtainNumRef.current) curtainNumRef.current.textContent = chapter.num;
      if (curtainTitleRef.current) curtainTitleRef.current.textContent = chapter.title;

      const [IN, HOLD, OUTT] = reduced ? [200, 80, 240] : [560, 190, 720];

      if (inner) {
        inner.style.transition = "none";
        inner.style.transform = "translateY(38px)";
      }
      if (cur) {
        cur.style.transition = `clip-path ${IN}ms cubic-bezier(0.76,0,0.24,1)`;
        cur.style.clipPath = "inset(0 0 0 0)";
      }
      requestAnimationFrame(() => {
        if (inner) {
          inner.style.transition = "transform 760ms cubic-bezier(0.16,1,0.3,1)";
          inner.style.transform = "translateY(0)";
        }
      });

      const outgoing = stageRef.current?.querySelector<HTMLElement>('.fld-chapter[data-active="true"]');
      if (outgoing && !reduced) {
        outgoing.style.transition = `transform ${IN}ms cubic-bezier(0.76,0,0.24,1), opacity ${IN}ms ease`;
        outgoing.style.transform = "translateY(-46px)";
        outgoing.style.opacity = "0";
      }

      later(() => {
        if (outgoing) {
          outgoing.style.transition = "none";
          outgoing.style.transform = "none";
          outgoing.style.opacity = "1";
        }

        // swap
        pageRef.current = idx;
        firstNav.current = false;
        setPageIdx(idx);
        scroll.current.target = 0;
        scroll.current.current = 0;
        scroll.current.prev = 0;
        if (stageRef.current) stageRef.current.style.transform = "translate3d(0,0,0)";
        setCursor("default", "");
        if (tickerRef.current) tickerRef.current.textContent = chapter.meta;

        const hash = idx === 0 ? "" : `#${chapter.key}`;
        if ((location.hash || "") !== hash) {
          history.replaceState(null, "", location.pathname + location.search + hash);
        }

        later(() => {
          if (cur) {
            cur.style.transition = `clip-path ${OUTT}ms cubic-bezier(0.76,0,0.24,1)`;
            cur.style.clipPath = "inset(0 0 100% 0)";
          }
          if (inner) {
            inner.style.transition = `transform ${OUTT}ms cubic-bezier(0.76,0,0.24,1)`;
            inner.style.transform = "translateY(-30px)";
          }
          locked.current = false;
          later(() => {
            if (cur) {
              cur.style.transition = "none";
              cur.style.clipPath = "inset(100% 0 0 0)";
            }
            transitioning.current = false;
          }, OUTT);
        }, HOLD);
      }, IN);
    };
    navigateRef.current = navigate;

    // ---------- work panel <-> scroll range bridge (section 1 fix) ----------
    /* A panel grows over ~620ms and makes the chapter taller. The scroll range
       is a single number, so it has to follow the panel every frame or the
       wheel clamps at the old maximum and the newly revealed text is out of
       reach. Only the range is touched per frame; the full measure (which also
       resizes the canvas) runs once, at the end. */
    let panelRaf = 0;
    const trackPanel = (panel: HTMLElement, getOpen: () => boolean) => {
      cancelAnimationFrame(panelRaf);
      const t0 = performance.now();
      const step = () => {
        const active = stageRef.current?.querySelector<HTMLElement>('.fld-chapter[data-active="true"]');
        if (active) {
          scroll.current.max = Math.max(0, active.offsetHeight - window.innerHeight);
          if (scroll.current.target > scroll.current.max) scroll.current.target = scroll.current.max;
        }
        if (performance.now() - t0 < 780) {
          panelRaf = requestAnimationFrame(step);
          return;
        }
        panel.style.height = getOpen() ? "auto" : "0px"; // survives resize + font swap
        measure();
      };
      panelRaf = requestAnimationFrame(step);
    };
    trackPanelRef.current = trackPanel;

    // start on the hash's chapter (deep link / reload) without a curtain
    const hashIdx = () => {
      const key = (location.hash || "").replace("#", "");
      const i = CHAPTERS.findIndex((c) => c.key === key);
      return i;
    };
    const startIdx = hashIdx();
    if (startIdx > 0) {
      pageRef.current = startIdx;
      cf.current = startIdx;
      setPageIdx(startIdx);
      if (tickerRef.current) tickerRef.current.textContent = CHAPTERS[startIdx].meta;
    }
    const onHash = () => {
      const i = hashIdx();
      if (i >= 0) navigate(i);
      else if (!location.hash) navigate(0);
    };
    window.addEventListener("hashchange", onHash);

    // ---------- input ----------
    const clampTarget = () => {
      const s = scroll.current;
      s.target = clamp(s.target, 0, s.max);
    };

    const onWheel = (e: WheelEvent) => {
      if (locked.current || isTouch) return;
      e.preventDefault();
      const d = e.deltaMode === 1 ? e.deltaY * 18 : e.deltaMode === 2 ? e.deltaY * window.innerHeight : e.deltaY;
      scroll.current.target = clamp(scroll.current.target + d, 0, scroll.current.max);
    };

    let ty = 0;
    let tt = 0;
    let tv = 0;
    const onTouchStart = (e: TouchEvent) => {
      ty = e.touches[0].clientY;
      tt = performance.now();
      tv = 0;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (locked.current) return;
      const y = e.touches[0].clientY;
      const now = performance.now();
      const d = (ty - y) * 1.7;
      const dtt = Math.max(1, now - tt);
      tv = (ty - y) / dtt;
      ty = y;
      tt = now;
      scroll.current.target = clamp(scroll.current.target + d, 0, scroll.current.max);
    };
    const onTouchEnd = () => {
      if (locked.current) return;
      const vh = window.innerHeight;
      const impulse = clamp(tv * 190, -1.1 * vh, 1.1 * vh);
      scroll.current.target = clamp(scroll.current.target + impulse, 0, scroll.current.max);
    };

    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      const s = scroll.current;
      const vh = window.innerHeight;
      if (e.key >= "1" && e.key <= "5") return navigate(Number(e.key));
      if (e.key === "0" || e.key === "Escape") return navigate(0);
      if (e.key === "ArrowDown") s.target += 90;
      else if (e.key === "ArrowUp") s.target -= 90;
      else if (e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        s.target += vh * 0.9;
      } else if (e.key === "PageUp") s.target -= vh * 0.9;
      else if (e.key === "Home") s.target = 0;
      else if (e.key === "End") s.target = s.max;
      else return;
      clampTarget();
    };

    const onFocusIn = (e: FocusEvent) => {
      const el = e.target as HTMLElement;
      if (!el || !viewportRef.current?.contains(el)) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.top < vh * 0.2 || r.bottom > vh * 0.85) {
        scroll.current.target = clamp(scroll.current.target + (r.top - vh * 0.4), 0, scroll.current.max);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKey);
    document.addEventListener("focusin", onFocusIn);
    const onResize = () => {
      field.current?.resize();
      measure();
      positionRail();
    };
    window.addEventListener("resize", onResize);

    // ---------- loop ----------
    let raf = 0;
    let lastTick = 0;
    const tick = (t: number) => {
      const dt = clamp(lastTick ? t - lastTick : FRAME, 1, 50);
      lastTick = t;

      const s = scroll.current;
      const mode = motionMode.current;
      const ease = mode === "still" ? 1 : smooth(0.085, dt);
      s.current += (s.target - s.current) * ease;
      if (Math.abs(s.target - s.current) < 0.05) s.current = s.target;
      s.vel = (s.current - s.prev) * (FRAME / dt);
      s.prev = s.current;
      if (stageRef.current) stageRef.current.style.transform = `translate3d(0,${(-s.current).toFixed(2)}px,0)`;

      // one smoothing pass, two consumers: the cursor group and the canvas repulsion
      if (cursorOn) {
        const k = reduced ? 1 : smooth(0.16, dt);
        pointer.sx = lerp(pointer.sx, pointer.x, k);
        pointer.sy = lerp(pointer.sy, pointer.y, k);
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${pointer.sx.toFixed(1)}px,${pointer.sy.toFixed(1)}px,0)`;
        }
      }

      const local = s.max > 0 ? clamp(s.current / s.max, 0, 1) : 0;
      cf.current = lerp(cf.current, pageRef.current + local * 0.42, smooth(0.055, dt));

      if (Math.abs(local - lastLocal.current) > 0.0004) {
        lastLocal.current = local;
        const pos = (local * 100).toFixed(2) + "%";
        if (progFillRef.current) progFillRef.current.style.height = pos;
        if (progHeadRef.current) progHeadRef.current.style.top = pos;
        if (progPctRef.current) {
          const pct = String(Math.round(local * 100)).padStart(2, "0");
          if (pct !== lastPct.current) {
            lastPct.current = pct;
            progPctRef.current.textContent = pct;
          }
        }
      }

      const drag = mode === "still" ? 0 : clamp(s.vel, -150, 150);

      for (const r of reveals.current) {
        let p = clamp((s.current - r.rStart) / r.rSpan, 0, 1);
        if (r.intro) {
          p = introStart.current
            ? Math.max(p, clamp((t - introStart.current - r.iOrder * 110) / 900, 0, 1))
            : 0;
        }
        const changed = Math.abs(p - r.p) >= 0.002;
        if (changed) {
          r.p = p;
          if (r.units.length) {
            const n = r.units.length;
            const span = 0.55;
            for (let j = 0; j < n; j++) {
              const wp = clamp((p - (j / n) * span) / (1 - span), 0, 1);
              const we = EASE(wp);
              const u = r.units[j];
              u.style.transform = `translateY(${((1 - we) * 112).toFixed(2)}%)`;
              u.style.opacity = (0.08 + we * 0.92).toFixed(3);
            }
            r.el.style.opacity = "1";
          } else {
            r.el.style.opacity = EASE(p).toFixed(3);
          }
        }
        const travel = r.units.length ? 0 : (1 - EASE(r.p)) * 64;
        const ny = travel + drag * r.depth;
        if (changed || Math.abs(ny - r.ny) > 0.12) {
          r.ny = ny;
          r.el.style.transform = `translate3d(0,${ny.toFixed(2)}px,0)`;
        }
      }

      const vh = window.innerHeight;
      for (const n of chNums.current) {
        const k = clamp((s.current - (n.top - vh * 0.6)) / vh, -1, 1);
        if (Math.abs(k - n.k) < 0.002) continue;
        n.k = k;
        n.el.style.transform = `translate3d(0,${(-k * 46).toFixed(1)}px,0)`;
        const near = Math.abs(k) < 0.35;
        if (n.near !== near) {
          n.near = near;
          n.el.style.webkitTextStroke = near ? "1px #8c2a35" : "1px color-mix(in oklab, var(--ac) 55%, transparent)";
        }
        n.el.style.opacity = (0.4 + (1 - Math.min(1, Math.abs(k))) * 0.6).toFixed(2);
      }

      for (const b of branches.current) {
        const p = clamp((s.current - b.rStart) / b.rSpan, 0, 1);
        b.el.style.strokeDashoffset = (b.len * (1 - OUT(p))).toFixed(1);
      }

      for (const c of counters.current) {
        if (c.done) continue;
        const p = clamp((s.current - c.rStart) / c.rSpan, 0, 1);
        c.el.textContent = String(Math.round(EASE(p) * c.to)).padStart(2, "0");
        if (p >= 1) c.done = true;
      }

      if (field.current) {
        const mx = cursorOn && pointer.x > -9000 ? pointer.sx : -9999;
        field.current.draw(t, cf.current, s.vel, mode, mx, pointer.sy);
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const watchdog = window.setInterval(() => {
      if (performance.now() - lastTick > 900) {
        cancelAnimationFrame(raf);
        lastTick = 0;
        raf = requestAnimationFrame(tick);
      }
    }, 1000);

    // ---------- preloader (fixed-duration eased ramp) ----------
    field.current?.resize();
    measure();

    let preDone = false;
    const preStart = performance.now();
    const preDur = reduced ? 500 : 1500;

    const paintPre = () => {
      if (preDone) return;
      const p = clamp((performance.now() - preStart) / preDur, 0, 1);
      const e = EASE(p);
      if (preloadCountRef.current) preloadCountRef.current.textContent = String(Math.round(e * 100)).padStart(3, "0");
      if (preloadBarRef.current) preloadBarRef.current.style.width = `${e * 100}%`;
      if (p > 0.55 && preloadTxtRef.current) preloadTxtRef.current.textContent = "Almost there";
      if (p < 1) requestAnimationFrame(paintPre);
    };
    requestAnimationFrame(paintPre);
    const prePaint = window.setInterval(paintPre, 120);

    const finishPre = () => {
      if (preDone) return;
      preDone = true;
      window.clearInterval(prePaint);
      const pre = preloadRef.current;
      if (preloadCountRef.current) preloadCountRef.current.textContent = "100";
      if (preloadBarRef.current) preloadBarRef.current.style.width = "100%";
      if (preloadTxtRef.current) preloadTxtRef.current.textContent = "Ready";
      if (pre) {
        pre.style.transition = "clip-path 1s cubic-bezier(0.76,0,0.24,1)";
        pre.style.clipPath = "inset(0 0 100% 0)";
        later(() => pre.remove(), 1100);
      }
      firstNav.current = false;
      locked.current = false;
      collect();
      positionRail();
      introStart.current = performance.now() + 200;
    };
    const preFinish = window.setTimeout(finishPre, preDur);

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(panelRaf);
      window.clearInterval(watchdog);
      window.clearInterval(prePaint);
      window.clearTimeout(preFinish);
      timers.forEach((id) => window.clearTimeout(id));
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("focusin", onFocusIn);
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onDocLeave);
      window.removeEventListener("resize", onResize);
      document.documentElement.classList.remove("fld-cursor-on");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nav = (key: ChapterKey) => {
    const idx = CHAPTERS.findIndex((c) => c.key === key);
    navigateRef.current(idx);
  };

  return (
    <div className="fld-viewport" ref={viewportRef}>
      <canvas className="fld-canvas" ref={canvasRef} aria-hidden />
      <div className="fld-vignette" aria-hidden />
      <div className="fld-grain" aria-hidden />

      <div className="fld-stage" ref={stageRef}>
        <div className="fld-chapter" data-active={pageIdx === 0}>
          <Home onNavigate={nav} />
        </div>
        <div className="fld-chapter" data-active={pageIdx === 1}>
          <Build onNavigate={nav} />
        </div>
        <div className="fld-chapter" data-active={pageIdx === 2}>
          <Work touch={touch.current} track={track} />
        </div>
        <div className="fld-chapter" data-active={pageIdx === 3}>
          <Roadmap />
        </div>
        <div className="fld-chapter" data-active={pageIdx === 4}>
          <Recognition />
        </div>
        <div className="fld-chapter" data-active={pageIdx === 5}>
          <Contact onNavigate={nav} />
        </div>
      </div>

      <header className="fld-header">
        <button className="fld-monogram" onClick={() => nav("home")} data-cursor="explore" data-cursor-label="Home">
          <span className="fld-monogram-mark" aria-hidden>
            <svg width="26" height="26" viewBox="0 0 26 26" style={{ display: "block", overflow: "visible" }}>
              <path d="M18.16 5.63 A 9 9 0 1 0 18.16 20.37" fill="none" stroke="var(--ink2)" strokeWidth="1.4" strokeLinecap="round" />
              <circle cx="18.16" cy="5.63" r="1.5" fill="var(--ink2)" />
              <circle cx="18.16" cy="20.37" r="1.5" fill="var(--ink2)" />
              <circle cx="13" cy="13" r="2.1" fill="var(--ac)" />
            </svg>
          </span>
          <span className="fld-monogram-name">Chaitanya</span>
        </button>

        <nav className="fld-rail" ref={railRef} aria-label="Chapters">
          <span className="fld-rail-ind" ref={railIndRef} aria-hidden />
          {CHAPTERS.slice(1).map((c, i) => (
            <button
              key={c.key}
              className="fld-rail-cell"
              data-active={pageIdx === i + 1}
              onClick={() => nav(c.key)}
              data-cursor="explore"
              data-cursor-label="Go"
            >
              <span className="n">{c.num}</span>
              {c.railLabel}
            </button>
          ))}
        </nav>

        <div className="fld-status">
          <span className="fld-keyhint" title="Press 1–5 to change chapter">
            <span className="kbd">1</span>
            <span className="kbd">5</span>
          </span>
          <span className="fld-ticker" ref={tickerRef}>
            Start here
          </span>
          <span className="fld-blink" aria-hidden />
        </div>
      </header>

      <MobileChapterBar active={CHAPTERS[pageIdx].key} onNavigate={nav} />

      <div className="fld-progress" aria-hidden>
        <div className="fld-progress-fill" ref={progFillRef} />
        <div className="fld-progress-head" ref={progHeadRef} />
        <div className="fld-progress-pct" ref={progPctRef}>
          00
        </div>
      </div>

      <div className="fld-cursor" ref={cursorRef} aria-hidden>
        <div className="fld-cursor-ring" ref={cursorRingRef}>
          <span className="fld-cursor-label" ref={cursorLabelRef} />
        </div>
        <span className="fld-cursor-dot" ref={cursorDotRef} />
      </div>

      <div className="fld-curtain" ref={curtainRef} aria-hidden>
        <div className="fld-curtain-inner" ref={curtainInnerRef}>
          <div className="fld-curtain-num" ref={curtainNumRef}>
            01
          </div>
          <div className="fld-curtain-title" ref={curtainTitleRef}>
            What I Can Build
          </div>
          <div className="fld-curtain-rule" />
        </div>
      </div>

      <div className="fld-preload" ref={preloadRef}>
        <div className="fld-preload-row">
          <div className="fld-preload-id">
            <span className="fld-preload-mark" aria-hidden>
              <svg width="34" height="34" viewBox="0 0 26 26" style={{ display: "block", overflow: "visible" }}>
                <path d="M18.16 5.63 A 9 9 0 1 0 18.16 20.37" fill="none" stroke="var(--ink2)" strokeWidth="1.4" strokeLinecap="round" />
                <circle cx="18.16" cy="5.63" r="1.5" fill="var(--ink2)" />
                <circle cx="18.16" cy="20.37" r="1.5" fill="var(--ink2)" />
                <circle cx="13" cy="13" r="2.1" fill="var(--ac)" />
              </svg>
            </span>
            <div>
              <div className="fld-preload-name">Chaitanya Parasana</div>
              <div className="fld-preload-txt" ref={preloadTxtRef}>
                Getting things ready
              </div>
            </div>
          </div>
          <div className="fld-preload-count" ref={preloadCountRef}>
            000
          </div>
        </div>
        <div className="fld-preload-bar">
          <span ref={preloadBarRef} />
        </div>
      </div>
    </div>
  );
}
