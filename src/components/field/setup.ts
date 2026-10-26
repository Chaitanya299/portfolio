// FIELD v3 page scripts: TS port of the dc script in
// design_handoff_portfolio_field/v3/Portfolio - FIELD v3.dc.html (setupChapters, setupAsk, setupRich,
// setupPreview, setupLift). Design props are fixed at their defaults below.
// Changes from the design: ask streams from /api/ask instead of window.claude, the contact form posts to
// /api/contact, viewport-fit=cover lives in layout.tsx, and headings are split for the rise only once.
import { EMAIL } from "./engine";

const NAV_TRANSITION: "curtain" | "glide" = "curtain";
const SCROLL_CURTAIN = true;
const HEADER_AUTO_HIDE = true;

type Ctx = { dead: boolean; timers: ReturnType<typeof setTimeout>[]; offs: (() => void)[]; raf: number };
type El = HTMLElement;

function setupChapters(c: Ctx, root: El) {
  const CH: Record<string, [string, string]> = { home: ["00", "Start here"], about: ["00", "About"], build: ["01", "What I Can Build"], work: ["02", "Key Projects"], roadmap: ["03", "On the Roadmap"], recognition: ["04", "Recognition"], contact: ["05", "Contact"] };
  const CURTAIN = ["build", "work", "roadmap", "recognition", "contact"];
  const secs = Array.from(root.querySelectorAll<El>("[data-sec]"));
  const cur = root.querySelector<El>("[data-ch-curtain]")!, inner = root.querySelector<El>("[data-ch-inner]")!;
  const cNum = root.querySelector<El>("[data-ch-cnum]")!, cTitle = root.querySelector<El>("[data-ch-ctitle]")!;
  const nav = root.querySelector<El>("[data-ch-nav]")!, ind = root.querySelector<El>("[data-ch-ind]");
  const links = Array.from(root.querySelectorAll<El>("[data-ch-link]"));
  const hdr = root.querySelector<El>("[data-hdr]")!, main = root.querySelector<El>("main");
  const hdrCta = root.querySelector<El>('header > div > a[href="#contact"]'), hdrRight = hdr.querySelector<El>(":scope > div");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const on = (t: EventTarget, e: string, h: EventListener, o?: AddEventListenerOptions | boolean) => { t.addEventListener(e, h, o); c.offs.push(() => t.removeEventListener(e, h, o)); };
  const later = (f: () => void, ms: number) => { const id = setTimeout(f, ms); c.timers.push(id); return id; };
  let busy = false, curKey: string | null = null, glideUntil = 0;

  const mark = (key: string | null) => {
    let hit: El | null = null;
    links.forEach((l) => {
      const onK = l.dataset.chLink === key; if (onK) hit = l;
      l.style.color = onK ? "var(--ink)" : "var(--t2)";
      const n = l.querySelector<El>("[data-ch-num]"); if (n) n.style.color = onK ? "var(--ac)" : "color-mix(in oklab, var(--ac) 60%, transparent)";
    });
    if (!ind) return;
    const h = hit as El | null;
    if (h) { ind.style.left = h.offsetLeft + "px"; ind.style.width = h.offsetWidth + "px"; ind.style.opacity = "1"; if (nav.scrollWidth > nav.clientWidth + 2) nav.scrollTo({ left: h.offsetLeft - (nav.clientWidth - h.offsetWidth) / 2, behavior: "smooth" }); }
    else ind.style.opacity = "0";
  };
  const secEl = (k: string) => root.querySelector<El>('[data-sec="' + k + '"]');
  const topOf = (el: El) => el.getBoundingClientRect().top + window.scrollY;

  // input is only locked while a curtain runs, so everyday scrolling stays passive and native
  const KEYS = [" ", "PageDown", "PageUp", "ArrowDown", "ArrowUp", "Home", "End"];
  const block = (e: Event) => e.preventDefault();
  const blockKey = (e: Event) => { if (KEYS.includes((e as KeyboardEvent).key)) e.preventDefault(); };
  const lock = (v: boolean) => {
    if (v) { window.addEventListener("wheel", block, { passive: false }); window.addEventListener("touchmove", block, { passive: false }); window.addEventListener("keydown", blockKey); }
    else { window.removeEventListener("wheel", block); window.removeEventListener("touchmove", block); window.removeEventListener("keydown", blockKey); }
  };
  c.offs.push(() => lock(false));

  const play = (key: string, jump: () => void) => {
    if (busy) return; busy = true; lock(true);
    const ch = CH[key] || ["", ""];
    cNum.textContent = ch[0]; cTitle.textContent = ch[1];
    const done = () => { busy = false; lock(false); };
    if (reduced) { jump(); curKey = key; mark(key); done(); return; }
    const IN = 520, HOLD = 90, OUTT = 680, WIPE = "cubic-bezier(0.76,0,0.24,1)", OUT = "cubic-bezier(0.16,1,0.3,1)";
    // content under the curtain waits and reveals as it lifts
    window.__feRevealAt = performance.now() + IN + HOLD + OUTT * 0.3;
    cur.style.transition = "none"; cur.style.clipPath = "inset(100% 0 0 0)";
    inner.style.transition = "none"; inner.style.transform = "translate3d(0,48px,0)"; inner.style.opacity = "0";
    void cur.offsetWidth;
    cur.style.transition = "clip-path " + IN + "ms " + WIPE;
    cur.style.clipPath = "inset(0 0 0 0)";
    inner.style.transition = "transform 820ms " + OUT + " 70ms, opacity 460ms ease 70ms";
    inner.style.transform = "translate3d(0,0,0)"; inner.style.opacity = "1";
    mark(key);
    later(() => {
      jump(); curKey = key;
      later(() => {
        cur.style.transition = "clip-path " + OUTT + "ms " + WIPE;
        cur.style.clipPath = "inset(0 0 100% 0)";
        inner.style.transition = "transform " + OUTT + "ms " + WIPE + ", opacity " + Math.round(OUTT * 0.55) + "ms ease";
        inner.style.transform = "translate3d(0,-40px,0)"; inner.style.opacity = "0";
        later(() => { cur.style.transition = "none"; cur.style.clipPath = "inset(100% 0 0 0)"; done(); }, OUTT);
      }, HOLD);
    }, IN);
  };
  const goTo = (key: string) => {
    const el = secEl(key); if (!el || busy) return;
    const top = key === "home" ? 0 : Math.round(topOf(el));
    if (Math.abs(window.scrollY - top) < 4) return;
    if (NAV_TRANSITION === "glide" || reduced) {
      curKey = key; mark(key);
      const dist = Math.abs(window.scrollY - top);
      glideUntil = performance.now() + Math.min(1600, 500 + dist * 0.12);
      window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
      return;
    }
    play(key, () => window.scrollTo({ top, behavior: "auto" }));
  };

  links.forEach((l) => on(l, "click", () => goTo(l.dataset.chLink!)));
  on(root, "click", (e) => {
    const a = (e.target as El).closest?.("a[href^=\"#\"]"); if (!a) return;
    const id = a.getAttribute("href")!.slice(1) || "home";
    if (!secEl(id)) return;
    e.preventDefault(); e.stopPropagation(); goTo(id);
  }, true);
  // a user gesture cancels a glide lock so the indicator follows them right away
  const cancelGlide = () => { glideUntil = 0; };
  on(window, "wheel", cancelGlide, { passive: true }); on(window, "touchstart", cancelGlide, { passive: true });

  const current = () => {
    const vh = window.innerHeight; let k = secs[0] && secs[0].dataset.sec;
    for (const s of secs) if (s.getBoundingClientRect().top <= vh * 0.5) k = s.dataset.sec;
    return k || null;
  };
  curKey = current(); mark(curKey);
  let lastY = window.scrollY, seenY = NaN;
  const tick = () => {
    if (c.dead) return;
    const y = window.scrollY, dir = y > lastY ? 1 : y < lastY ? -1 : 0; lastY = y;
    if (!busy && y !== seenY && performance.now() > glideUntil) {
      seenY = y;
      const k = current();
      if (k && k !== curKey) {
        const el = secEl(k);
        if (SCROLL_CURTAIN && CURTAIN.includes(k) && el && curKey !== null) {
          play(k, () => {
            const vh = window.innerHeight, t = topOf(el);
            window.scrollTo({ top: dir < 0 ? Math.max(t, t + el.offsetHeight - vh) : t, behavior: "auto" });
          });
        } else { curKey = k; mark(k); }
      }
    }
    c.raf = requestAnimationFrame(tick);
  };
  c.raf = requestAnimationFrame(tick);

  // header: glass when scrolled, tucks away on small screens while reading down
  const asides = Array.from(root.querySelectorAll<El>("[data-sec] aside")).filter((a) => a.nextElementSibling);
  const mains = asides.map((a) => a.nextElementSibling as El), rows = asides.map((a) => a.parentNode as El);
  const h1 = root.querySelector<El>('[data-sec="home"] h1'), h1Fs = h1 ? h1.style.fontSize : "";
  const ctFs = cTitle.style.fontSize, curPad = cur.style.padding, rowGap = rows.map((r) => r.style.gap);
  const dualH = matchMedia("(horizontal-viewport-segments: 2)"), dualV = matchMedia("(vertical-viewport-segments: 2)");
  const PAD = "clamp(20px,5vw,88px)", SEG0R = "env(viewport-segment-right 0 0, 50vw)", SEG1L = "env(viewport-segment-left 1 0, 50vw)", SEG0B = "env(viewport-segment-bottom 0 0, 50vh)";
  hdr.style.transition += ", top 0.55s cubic-bezier(0.16,1,0.3,1)";
  let phone = false, compact = false, scrolled: boolean | null = null, tucked = false, hy = window.scrollY, acc = 0;
  const paintHdr = () => {
    const s = window.scrollY > 12; if (s === scrolled && !hdr.dataset.dirty) return; scrolled = s; delete hdr.dataset.dirty;
    hdr.style.background = s ? "color-mix(in oklab, var(--bg1) " + (phone ? 94 : 82) + "%, transparent)" : "linear-gradient(var(--bg1) 30%, color-mix(in oklab, var(--bg1) 0%, transparent))";
    hdr.style.boxShadow = s ? "0 1px 0 var(--ln1), 0 18px 40px -30px var(--shadow)" : "none";
    // no backdrop-filter on phones: it would trap the fixed bottom rail inside the header
    const glass = s && !phone ? "blur(14px) saturate(1.2)" : "";
    hdr.style.backdropFilter = glass; hdr.style.setProperty("-webkit-backdrop-filter", glass);
  };
  const tuck = (v: boolean) => { if (v === tucked) return; tucked = v; hdr.style.top = v ? (-hdr.offsetHeight - 2) + "px" : "0px"; };
  const onScrollHdr = () => {
    const y = window.scrollY, d = y - hy; hy = y;
    if (!HEADER_AUTO_HIDE || !compact || y < 90 || busy) { tuck(false); acc = 0; return; }
    acc = (d > 0) === (acc > 0) ? acc + d : d;
    if (acc > 28) tuck(true); else if (acc < -18) tuck(false);
  };
  let sig = "";
  const fitNav = () => {
    const w = window.innerWidth, h = window.innerHeight, span = dualH.matches, stack = dualV.matches;
    const s2 = [w, h < 560, span, stack].join("|"); if (s2 === sig) { mark(curKey); return; } sig = s2;
    phone = w < 760; compact = phone || h < 560;
    if (hdrCta) hdrCta.style.display = w < 1100 ? "none" : "inline-flex";
    links.forEach((l) => { const n = l.querySelector<El>("[data-ch-num]"); if (n) n.style.display = w < 1000 ? "none" : ""; l.style.minHeight = phone ? (h < 560 ? "40px" : "46px") : "42px"; });
    Object.assign(nav.style, phone
      ? { position: "fixed", left: "max(12px, env(safe-area-inset-left))", right: "max(12px, env(safe-area-inset-right))", bottom: "max(12px, env(safe-area-inset-bottom))", zIndex: "31", boxShadow: "var(--sh2)", background: "color-mix(in oklab, var(--bg0) 90%, transparent)", backdropFilter: "blur(14px) saturate(1.2)" }
      : { position: "relative", left: "", right: "", bottom: "", zIndex: "", boxShadow: "inset 0 1px 0 var(--hl), 0 18px 36px -24px var(--shadow)", background: "linear-gradient(color-mix(in oklab, var(--bg3) 88%, transparent), color-mix(in oklab, var(--bg2) 88%, transparent))", backdropFilter: "blur(10px)" });
    if (main) main.style.paddingBottom = phone ? "calc(76px + env(safe-area-inset-bottom))" : "0px";
    // dual-screen (Surface Duo, spanned foldables): chapter column left of the hinge, content right
    rows.forEach((r, i) => {
      r.style.gap = span ? "calc(" + SEG1L + " - " + SEG0R + " + 64px)" : rowGap[i];
      asides[i].style.flex = span ? "0 0 calc(" + SEG0R + " - " + PAD + " - 32px)" : "1 1 180px";
      asides[i].style.maxWidth = span ? "none" : "300px";
      if (mains[i]) mains[i].style.flex = span ? "1 1 0" : "999 1 560px";
    });
    if (h1) { h1.style.fontSize = span ? "calc((" + SEG0R + " - " + PAD + " - 32px) * 0.165)" : h1Fs; }
    if (hdrRight) hdrRight.style.maxWidth = span ? "calc(100vw - " + SEG1L + " - " + PAD + ")" : "";
    cur.style.padding = span ? "0 calc(100vw - " + SEG0R + " + " + PAD + ") 0 " + PAD : curPad;
    cTitle.style.fontSize = span ? "calc((" + SEG0R + " - " + PAD + " * 2) * 0.12)" : ctFs;
    // folded top/bottom (Flip in flex mode, Duo rotated): curtain title sits on the top half
    cur.style.alignItems = stack ? "flex-start" : "center";
    inner.style.marginTop = stack ? "max(24px, calc(" + SEG0B + " / 2 - 80px))" : "0px";
    tuck(false); hdr.dataset.dirty = "1"; paintHdr(); mark(curKey);
  };
  fitNav();
  on(window, "resize", fitNav);
  on(window, "orientationchange", () => later(fitNav, 250));
  on(window, "scroll", () => { paintHdr(); onScrollHdr(); }, { passive: true });
  const prog = nav.querySelector<El>("[data-ch-prog]");
  let lastP = -1;
  const paintProg = () => { if (!prog) return; const m = document.documentElement.scrollHeight - window.innerHeight; const p = m > 0 ? Math.min(1, window.scrollY / m) : 0; if (Math.abs(p - lastP) < 0.001) return; lastP = p; prog.style.transform = "scaleX(" + p.toFixed(4) + ")"; };
  paintProg(); on(window, "scroll", paintProg, { passive: true });
  on(dualH, "change", fitNav); on(dualV, "change", fitNav);
}

// Canned answers from the design, used when the live assistant is unreachable or rate-limited.
const FALLBACK: [RegExp, string][] = [
  [/stafflo|company|startup|co-?found|coding qa|module kit/i, "HEADLINE: He co-founded Stafflo.\nBODY: Stafflo builds AI tools for staffing, medical coding, lending and software delivery teams, run on machines the client owns. He built its Coding QA Copilot and Private AI Module Kit demos. See them at stafflo.ai."],
  [/vellum/i, "Vellum is a small Mac app that lays a paper texture over the screen. One borderless window per display draws a tint pass and a tiled soft-light grain over cached, procedurally generated textures, with twelve textures and a day and night schedule."],
  [/platform|deploy|kubernetes|hard/i, "The built-in assistant reads server logs, and a log can say anything. So it may suggest but never act, and a person clicks the final button. A booby-trapped log line cannot change the system."],
  [/freelance|available|hire|work with|price|cost/i, "Yes. He is available this quarter and usually replies the same day. It starts with a short call, then a written plan with a fixed price and a date."],
];
const fallback = (q: string) => {
  if (/cost|price|budget|charge|rate/i.test(q)) return "HEADLINE: A fixed price, agreed up front.\nBODY: Projects range from about ₹10k to ₹10L+, depending on scope. After a short call he writes a plan with one fixed number and a date, never an hourly meter.";
  if (/work|free|available|hire|taking/i.test(q)) return "HEADLINE: Yes, this quarter.\nBODY: He usually replies the same day. It starts with a short call, then a written plan with a fixed price and a date.";
  const hit = FALLBACK.find((f) => f[0].test(q));
  return hit ? hit[1] : "HEADLINE: The site doesn’t cover that yet.\nBODY: Email " + EMAIL + " and he will answer directly, usually the same day.";
};

function setupAsk(c: Ctx) {
  const root = document.querySelector<El>("[data-ask]"); if (!root) return;
  const g = <T extends El = El>(k: string) => root.querySelector<T>("[data-ask-" + k + "]")!;
  const idle = g("idle"), done = g("done"), form = g<HTMLFormElement>("form"), input = g<HTMLInputElement>("input");
  const echo = g("echo"), head = g("head"), body = g("body"), actions = g("actions"), cta = g("cta"), work = g("work"), again = g("again");
  const on = (t: EventTarget, e: string, h: EventListener) => { t.addEventListener(e, h); c.offs.push(() => t.removeEventListener(e, h)); };
  let busy = false, dots = 0;
  let hist: { role: "user" | "assistant"; content: string }[] = [];
  const fit = () => { input.size = Math.max(6, Math.min(34, (input.value || input.placeholder).length + 1)); };
  const split = (a: string): [string, string] => {
    a = String(a).trim();
    const m = a.match(/^HEADLINE:\s*(.+?)\s*\n+\s*BODY:\s*([\s\S]+)$/i);
    if (m) return [m[1].trim(), m[2].trim()];
    const k = a.search(/[.!?](\s|$)/);
    return k > 0 && k < 90 ? [a.slice(0, k + 1), a.slice(k + 1).trim()] : ["", a];
  };
  // mid-stream: show the headline as it types, then the body once "BODY:" has arrived
  const splitLive = (a: string): [string, string] | null => {
    if (/^\s*H(E(A(D(L(I(N(E(:)?)?)?)?)?)?)?)?$/i.test(a)) return null;
    const m = a.match(/^\s*HEADLINE:\s*([^\n]*)\n?([\s\S]*)$/i);
    if (!m) return split(a);
    let b = m[2].trimStart();
    if (/^B(O(D(Y(:)?)?)?)?$/i.test(b)) b = "";
    return [m[1].trim(), b.replace(/^BODY:\s*/i, "").trim()];
  };
  const show = ([h, b]: [string, string]) => {
    head.style.color = "var(--ac)"; head.textContent = h || b; body.textContent = h ? b : "";
    body.style.display = body.textContent ? "block" : "none";
  };
  const ask = async (raw: string) => {
    const q = (raw || "").trim().replace(/^[….]+/, "").slice(0, 200); if (!q || busy) return;
    busy = true;
    echo.textContent = q.replace(/[?.]*$/, "") + ".";
    idle.style.display = "none"; done.style.display = "block"; actions.style.display = "none";
    body.textContent = ""; head.style.color = "var(--t4)";
    const tick = setInterval(() => { dots = (dots + 1) % 4; head.textContent = "Thinking" + ".".repeat(dots); }, 280);
    head.textContent = "Thinking";
    const full = "I'd like to know " + q;
    let a = "";
    try {
      const res = await fetch("/api/ask", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: [...hist, { role: "user", content: full }] }) });
      if (res.ok && res.body) {
        const reader = res.body.getReader(), dec = new TextDecoder();
        for (;;) {
          const { done: end, value } = await reader.read();
          if (end || c.dead) break;
          a += dec.decode(value, { stream: true });
          const live = splitLive(a);
          if (live && (live[0] || live[1])) { clearInterval(tick); show(live); }
        }
      }
    } catch { /* keep whatever streamed; fall back below if nothing did */ }
    if (!a.trim()) a = fallback(q);
    clearInterval(tick); busy = false;
    if (c.dead) return;
    hist = hist.concat([{ role: "user" as const, content: full }, { role: "assistant" as const, content: a.trim() }]).slice(-6);
    show(split(a));
    const hire = /work|free|available|hire|taking|cost|price|budget|project for|build/i.test(q);
    const proj = /vellum|platform|scoreday|orient|project|deploy|kubernetes/i.test(q + " " + a);
    cta.style.display = hire ? "inline-flex" : "none";
    work.style.display = !hire && proj ? "inline-flex" : "none";
    actions.style.display = "flex";
  };
  on(input, "input", fit); fit();
  on(form, "submit", (e) => { e.preventDefault(); ask(input.value || input.placeholder); input.value = ""; fit(); });
  root.querySelectorAll<El>("[data-ask-chip]").forEach((ch) => on(ch, "click", () => ask(ch.dataset.askChip!)));
  on(again, "click", () => { if (busy) return; done.style.display = "none"; idle.style.display = "block"; input.focus(); });
}

function setupForm(c: Ctx, root: El) {
  const form = root.querySelector<HTMLFormElement>('[data-fe="form"]'), fst = root.querySelector<El>('[data-fe="form-status"]')!, fbtn = root.querySelector<HTMLButtonElement>('[data-fe="form-btn"]');
  if (!form) return;
  const ERR = "oklch(0.55 0.13 35)";
  const tone = (t: string, col: string) => { fst.textContent = t; fst.style.color = col; };
  const label = (t: string) => { if (fbtn?.firstChild) fbtn.firstChild.textContent = t; };
  let sending = false;
  const submit = async (e: Event) => {
    e.preventDefault();
    if (sending) return;
    const fd = new FormData(form), s = (k: string) => String(fd.get(k) || "").trim();
    if (!s("name")) return tone("Please add your name.", ERR);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s("email"))) return tone("That email does not look right. Please check it.", ERR);
    if (!s("message")) return tone("Please add a short message about what you need.", ERR);
    sending = true; tone("", ""); if (fbtn) fbtn.disabled = true;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: s("name"), email: s("email"), needs: fd.getAll("needs").map(String), budget: s("budget"), timeline: s("timeline"), message: s("message"), honeypot: s("honeypot") }),
      });
      const data = await res.json().catch(() => ({}));
      if (c.dead) return;
      if (!res.ok) { tone(data.error || "Could not send. Try again later.", ERR); return; }
      label("Got it ");
      tone("Thanks. I will reply to that address soon.", "var(--ac)"); form.reset();
      c.timers.push(setTimeout(() => { tone("", ""); label("Send it "); }, 4200));
    } catch {
      if (!c.dead) tone("Could not send. Check your connection and try again.", ERR);
    } finally {
      sending = false; if (fbtn) fbtn.disabled = false;
    }
  };
  form.addEventListener("submit", submit);
  c.offs.push(() => form.removeEventListener("submit", submit));
}

function setupRich(c: Ctx, root: El) {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const EASE = "cubic-bezier(0.16,1,0.3,1)";
  // masked line rise: wrap words, delay by visual line
  const heads = Array.from(root.querySelectorAll<El>("[data-rise]"));
  heads.forEach((h) => {
    if (h.dataset.riseDone) return; // dev StrictMode remounts: split once
    h.dataset.riseDone = "1";
    const walk = (n: Node) => Array.from(n.childNodes).forEach((ch) => {
      if (ch.nodeType === 3) {
        const parts = (ch.textContent || "").split(/(\s+)/); if (parts.length === 1 && !parts[0].trim()) return;
        const frag = document.createDocumentFragment();
        parts.forEach((p) => {
          if (!p) return;
          if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(p)); return; }
          const m = document.createElement("span");
          m.style.cssText = "display:inline-block;overflow:hidden;vertical-align:top;padding:0.08em 0 0.12em;margin:-0.08em 0 -0.12em;";
          const w = document.createElement("span");
          w.dataset.riseW = "1"; w.textContent = p;
          w.style.cssText = "display:inline-block;will-change:transform;" + (reduced ? "" : "transform:translateY(112%);");
          m.appendChild(w); frag.appendChild(m);
        });
        (ch as ChildNode).replaceWith(frag);
      } else if (ch.nodeType === 1 && (ch as El).tagName !== "BR") walk(ch);
    });
    walk(h);
  });
  const play = (h: El) => {
    const ws = Array.from(h.querySelectorAll<El>("[data-rise-w]"));
    const hold = Math.max(0, (window.__feRevealAt || 0) - performance.now()) / 1000;
    let line = -1, lastTop: number | null = null;
    ws.forEach((w) => {
      const t = Math.round((w.parentNode as El).offsetTop);
      if (lastTop === null || Math.abs(t - lastTop) > 4) { line++; lastTop = t; }
      w.style.transition = "transform 1.1s " + EASE + " " + (hold + line * 0.09).toFixed(2) + "s";
      w.style.transform = "translateY(0)";
    });
  };
  if (!reduced) {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { play(e.target as El); io.unobserve(e.target); } }), { threshold: 0.25, rootMargin: "0px 0px -8% 0px" });
    heads.forEach((h) => io.observe(h));
    c.offs.push(() => io.disconnect());
  }
}

function setupLift(c: Ctx) {
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const on = (t: EventTarget, e: string, h: EventListener) => { t.addEventListener(e, h); c.offs.push(() => t.removeEventListener(e, h)); };
  if (fine) document.querySelectorAll<El>("[data-now-tile]").forEach((t) => {
    const img = t.querySelector<El>("[data-now-img]"), ti = t.querySelector<El>("[data-now-title]");
    const set = (v: boolean) => { if (img) { img.style.transform = v ? "scale(1.035)" : ""; img.style.filter = v ? "saturate(1) contrast(1)" : "saturate(0.55) contrast(1.02)"; } if (ti) ti.style.transform = v ? "translateX(8px)" : ""; };
    on(t, "mouseenter", () => set(true)); on(t, "mouseleave", () => set(false));
  });
  if (!fine) return;
  const E = "cubic-bezier(0.16,1,0.3,1)";
  document.querySelectorAll<El>("[data-lift]").forEach((el) => {
    const arm = () => { if (!/box-shadow/.test(el.style.transition)) el.style.transition = (el.style.transition ? el.style.transition + ", " : "") + "box-shadow 0.6s " + E + ", translate 0.6s " + E + ", border-color 0.4s ease"; };
    on(el, "mouseenter", () => { arm(); el.style.boxShadow = "var(--sh2)"; el.style.translate = "0 -3px"; el.style.borderColor = "var(--ln2)"; });
    on(el, "mouseleave", () => { el.style.boxShadow = "var(--sh1)"; el.style.translate = "0 0"; el.style.borderColor = "var(--ln1)"; });
  });
}

function setupPreview(c: Ctx, root: El) {
  const card = root.querySelector<El>("[data-pv-card]")!, cimg = root.querySelector<HTMLImageElement>("[data-pv-cimg]")!, cap = root.querySelector<El>("[data-pv-cap]")!;
  const touch = !matchMedia("(hover: hover) and (pointer: fine)").matches;
  const on = (t: EventTarget, e: string, h: EventListener) => { t.addEventListener(e, h); c.offs.push(() => t.removeEventListener(e, h)); };
  const st = { x: 0, y: 0, tx: 0, ty: 0, s: 0.96, ts: 0.96, live: false };
  let raf = 0, last = 0;
  const paint = (t: number) => {
    const dt = Math.min(50, Math.max(1, last ? t - last : 16.7)); last = t;
    const k = 1 - Math.pow(1 - 0.2, dt / 16.7), ks = 1 - Math.pow(1 - 0.16, dt / 16.7);
    st.x += (st.tx - st.x) * k; st.y += (st.ty - st.y) * k; st.s += (st.ts - st.s) * ks;
    card.style.transform = "translate3d(" + st.x.toFixed(1) + "px," + st.y.toFixed(1) + "px,0) translate(-50%,-50%) scale(" + st.s.toFixed(4) + ")";
    if (Math.abs(st.tx - st.x) + Math.abs(st.ty - st.y) + Math.abs(st.ts - st.s) * 200 > 0.2) raf = requestAnimationFrame(paint); else { raf = 0; last = 0; }
  };
  const kick = () => { if (!raf) raf = requestAnimationFrame(paint); };
  c.offs.push(() => cancelAnimationFrame(raf));
  const aim = (e: MouseEvent) => { st.tx = Math.min(e.clientX + 150, window.innerWidth - 145); st.ty = Math.max(95, Math.min(e.clientY, window.innerHeight - 95)); };
  const show = (v: boolean, e?: MouseEvent) => {
    if (v && !st.live && e) { aim(e); st.x = st.tx; st.y = st.ty; }
    st.live = v; card.style.opacity = v ? "1" : "0"; st.ts = v ? 1 : 0.96; kick();
  };
  card.style.left = "0px"; card.style.top = "0px";
  root.querySelectorAll<El>("[data-pv-row]").forEach((row) => {
    const btn = row.querySelector<El>('[data-fe="work-toggle"]'), title = row.querySelector<El>("[data-pv-title]")!, plus = row.querySelector<El>("[data-pv-plus]")!;
    const isOpen = () => !!btn && btn.getAttribute("aria-expanded") === "true";
    on(row, "mouseenter", (ev) => {
      title.style.transform = "translateX(14px)"; title.style.color = "var(--ink)";
      plus.style.borderColor = "color-mix(in oklab, var(--ac) 70%, transparent)";
      if (touch || isOpen()) return;
      if (cimg.getAttribute("src") !== row.dataset.pvImg) cimg.src = row.dataset.pvImg!;
      cimg.style.display = "block"; cap.textContent = row.dataset.pvLabel || ""; show(true, ev as MouseEvent);
    });
    on(row, "mouseleave", () => { title.style.transform = ""; title.style.color = "var(--t1)"; plus.style.borderColor = "var(--ln2)"; show(false); });
    on(row, "mousemove", (ev) => { if (touch) return; aim(ev as MouseEvent); kick(); });
    const inner = row.querySelector<El>('[data-fe="work-panel"] > div');
    if (inner) { inner.style.opacity = "0"; inner.style.translate = "0 -10px"; inner.style.transition = "opacity 0.5s ease, translate 0.7s cubic-bezier(0.16,1,0.3,1)"; }
    if (btn) on(btn, "click", () => { c.timers.push(setTimeout(() => { const o = isOpen(); if (o) show(false); if (inner) { inner.style.transitionDelay = o ? "0.12s" : "0s"; inner.style.opacity = o ? "1" : "0"; inner.style.translate = o ? "0 0" : "0 -10px"; } }, 0)); });
  });
}

export function setup(root: El) {
  const c: Ctx = { dead: false, timers: [], offs: [], raf: 0 };
  const steps: [string, () => void][] = [
    ["setupChapters", () => setupChapters(c, root)],
    ["setupAsk", () => setupAsk(c)],
    ["setupForm", () => setupForm(c, root)],
    ["setupRich", () => setupRich(c, root)],
    ["setupPreview", () => setupPreview(c, root)],
    ["setupLift", () => setupLift(c)],
  ];
  steps.forEach(([name, f]) => { try { f(); } catch (err) { console.error(name, err); } });
  return () => { c.dead = true; c.timers.forEach(clearTimeout); cancelAnimationFrame(c.raf); c.offs.forEach((f) => f()); };
}
