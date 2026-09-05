"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import {
  ABOUT,
  BUILD,
  CERTS,
  CONTACT,
  HERO,
  LINKS,
  RECOGNITION,
  ROADMAP,
  WORK,
  type ChapterKey,
} from "./data";

type Nav = (key: ChapterKey) => void;

// Split text into reveal units. Engine drives .fld-unit transforms.
function Split({ text, by = "words" }: { text: string; by?: "words" | "chars" }) {
  const parts = by === "words" ? text.split(" ") : Array.from(text);
  return (
    <>
      {parts.map((p, i) => (
        <Fragment key={i}>
          <span className="fld-line">
            <span className="fld-unit">{p}</span>
          </span>
          {by === "words" && i < parts.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </>
  );
}

function ChapterHead({ num, title, meta }: { num: string; title: string; meta: string }) {
  return (
    <div className="fld-head">
      <div className="fld-head-l">
        <span className="fld-num-chapter" data-fld="chapter-num" aria-hidden>
          {num}
        </span>
        <h2 className="fld-head-title">{title}</h2>
      </div>
      <span className="fld-head-meta">{meta}</span>
    </div>
  );
}

/* ============================= 00 HOME ============================= */
export function Home({ onNavigate }: { onNavigate: Nav }) {
  return (
    <div className="fld-col">
      {/* hero */}
      <div className="fld-hero-eyebrow fld-eyebrow" data-reveal>
        <span className="rule" />
        <span>{HERO.eyebrow[0]}</span>
        <span className="sep">/</span>
        <span>{HERO.eyebrow[1]}</span>
      </div>

      <h1 className="fld-h1" data-reveal data-split="chars" aria-label={`${HERO.name[0]} ${HERO.name[1]}, ${HERO.eyebrow[0]}`}>
        <Split text={HERO.name[0]} by="chars" />
        <br />
        <Split text={HERO.name[1]} by="chars" />
      </h1>

      <div className="fld-intro-row">
        <div className="fld-intro-l">
          <p className="fld-prop" data-reveal data-split="words">
            <Split text={HERO.proposition} />
          </p>
          <p className="fld-prop-sub fld-body" data-reveal>
            {HERO.propositionSub}
          </p>
        </div>
        <div className="fld-intro-r" data-reveal>
          <button
            className="fld-btn-primary"
            onClick={() => onNavigate("contact")}
            data-cursor="explore"
            data-cursor-label={"Say\nhello"}
          >
            Start a project
            <span className="dot" />
          </button>
          <span className="fld-avail">
            <span className="fld-avail-dot" />
            {HERO.availability}
          </span>
        </div>
      </div>

      <button className="fld-next" onClick={() => onNavigate("build")} data-reveal data-cursor="explore" data-cursor-label="Go">
        <span className="fld-next-cue" />
        <span className="fld-next-mid">
          <span className="fld-next-eyebrow">Chapter 01 of 05 · next</span>
          <span className="fld-next-title">What I Can Build →</span>
        </span>
        <span className="fld-next-r">Or keep scrolling</span>
      </button>

      <div className="fld-metrics">
        {HERO.metrics.map((m, i) => (
          <div className="fld-metric" data-reveal="scroll" key={i}>
            <div className="fld-stat-num num">{m.num}</div>
            <div className="cap">{m.cap}</div>
          </div>
        ))}
      </div>

      {/* about, folded in */}
      <div className="fld-band">
        <div className="fld-head fld-about-band">
          <div className="fld-head-l">
            <span className="fld-head-title fld-about-label">About</span>
          </div>
          <span className="fld-head-meta">Who I am</span>
        </div>
        <div className="fld-two">
          <div>
            <h2
              className="fld-h2 fld-about-statement"
              data-reveal
              data-split="words"
            >
              <Split text="Most AI demos fall apart the first time a real person uses them. I build the " />
              <em>
                <Split text="version that holds" />
              </em>
              <Split text="." />
            </h2>
            <p className="fld-about-p" data-reveal data-split="words">
              <Split text={ABOUT.paragraphs[0]} />
            </p>
            {(() => {
              const [a, b] = ABOUT.paragraphs[1].split("5 projects");
              return (
                <p className="fld-about-p p2" data-reveal>
                  {a}
                  <span style={{ color: "var(--ac)" }}>5 projects</span>
                  {b}
                </p>
              );
            })()}
            <div className="fld-tags" data-reveal>
              {ABOUT.tags.map((t) => (
                <span className="fld-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="fld-mono-label fld-do-eyebrow" data-reveal>
              What I do
            </span>
            <div className="fld-do">
              {ABOUT.services.map((s, i) => (
                <div className="fld-do-row" data-reveal data-last={i === ABOUT.services.length - 1} key={s.n}>
                  <span className="n">{s.n}</span>
                  <div>
                    <h3>{s.t}</h3>
                    <p>{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================= 01 BUILD ============================= */
export function Build({ onNavigate }: { onNavigate: Nav }) {
  return (
    <div className="fld-col">
      <ChapterHead num="01" title="What I Can Build" meta="For you" />

      <div className="fld-intro-flex">
        <h2
          className="fld-h2 lead"
          data-reveal
          data-split="words"
          style={{ fontSize: "clamp(1.8rem,3.6vw,3.1rem)", lineHeight: 1.04, letterSpacing: "-0.03em", maxWidth: "22ch" }}
        >
          <Split text="Five things I get asked for, in " />
          <em>
            <Split text="plain words" />
          </em>
          <Split text="." />
        </h2>
        <p className="fld-body desc" data-reveal>
          {BUILD.desc}
        </p>
      </div>

      <div className="fld-services">
        {BUILD.services.map((s) => (
          <div className="fld-service" data-reveal key={s.n}>
            <span className="n">{s.n}</span>
            <div className="fld-service-body">
              <span className="fld-service-title">{s.title}</span>
              <span className="fld-service-desc fld-body-sm">{s.desc}</span>
            </div>
            <span className="tl">{s.tl}</span>
          </div>
        ))}
      </div>
      <div className="fld-footnote" data-reveal>
        <span className="rule" />
        {BUILD.footnote}
      </div>

      <div className="fld-numbers-band" data-reveal>
        {BUILD.numbers.map((num, i) => (
          <span key={i}>
            <span className="num">{num.split(" ")[0]}</span> {num.split(" ").slice(1).join(" ")}
            {i < BUILD.numbers.length - 1 ? <span className="sep"> · </span> : null}
          </span>
        ))}
      </div>

      <div className="fld-threeup">
        {BUILD.closing.map((c) => (
          <div className="fld-threeup-cell" data-reveal key={c.label}>
            <span className="fld-mono-label">{c.label}</span>
            <p className="fld-body-sm">{c.body}</p>
            {c.cta ? (
              <button className="fld-btn-secondary" onClick={() => onNavigate("contact")} data-cursor="explore" data-cursor-label="Say hello">
                Start a project ↗
              </button>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================= 02 WORK ============================= */
type PreviewState = { label: string; x: number; y: number; show: boolean };

function WorkRow({
  item,
  open,
  onToggle,
  setPreview,
  touch,
  track,
}: {
  item: (typeof WORK)[number];
  open: boolean;
  onToggle: () => void;
  setPreview: (p: Partial<PreviewState>) => void;
  touch: boolean;
  track: (panel: HTMLElement, getOpen: () => boolean) => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);

  // Drive the panel height imperatively so the collapse animates (auto -> px ->
  // 0) and so the engine can follow the growing chapter (see track/trackPanel).
  useEffect(() => {
    const panel = panelRef.current;
    const inner = innerRef.current;
    if (!panel || !inner) return;
    if (!mounted.current) {
      mounted.current = true;
      panel.style.height = open ? "auto" : "0px";
      return;
    }
    if (open) {
      panel.style.height = inner.offsetHeight + "px";
    } else {
      panel.style.height = panel.offsetHeight + "px";
      void panel.offsetHeight; // reflow so auto/px -> 0 animates
      panel.style.height = "0px";
    }
    track(panel, () => open);
  }, [open, track]);

  return (
    <div
      className="fld-work-row"
      onMouseEnter={() => !touch && !open && setPreview({ label: item.preview, show: true })}
      onMouseLeave={() => !touch && setPreview({ show: false })}
      onMouseMove={(e) => !touch && setPreview({ x: e.clientX, y: e.clientY })}
    >
      <button
        className="fld-work-head"
        aria-expanded={open}
        onClick={onToggle}
        data-cursor="project"
        data-cursor-label={"Read\nmore"}
      >
        <span className="n">{item.n}</span>
        <span className="fld-work-main">
          <span className="fld-work-title">{item.title}</span>
          <span className="fld-work-summary fld-body" style={{ display: "block" }}>
            {item.summary}
          </span>
          <span className="fld-work-tags">
            {item.tags.map((t, i) => (
              <Fragment key={t}>
                <span>{t}</span>
                {i < item.tags.length - 1 ? <span className="sep">·</span> : null}
              </Fragment>
            ))}
          </span>
        </span>
        <span className="fld-work-plus" aria-hidden>
          <span className="glyph">
            <span className="bar-h" />
            <span className="bar-v" data-open={open} />
          </span>
        </span>
      </button>
      <div className="fld-work-panel" ref={panelRef}>
        <div className="fld-work-panel-inner" ref={innerRef}>
          <div>
            <span className="fld-mono-label">How it works</span>
            <p className="fld-body-sm" style={{ marginTop: 10 }}>
              {item.how}
            </p>
          </div>
          <div>
            <span className="fld-mono-label">Why it matters</span>
            <p className="fld-body-sm" style={{ marginTop: 10 }}>
              {item.why}
            </p>
          </div>
          <div>
            <span className="fld-mono-label">The tricky part</span>
            <p className="fld-body-sm" style={{ marginTop: 10 }}>
              {item.tricky}
            </p>
          </div>
          <div className="fld-work-cta">
            <a className="fld-work-link" href={item.github} target="_blank" rel="noreferrer" data-cursor="link" data-cursor-label={"Open\ncode"}>
              See the code <span>↗</span>
            </a>
            <div className="fld-work-frame">{item.shot}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Work({ touch, track }: { touch: boolean; track: (panel: HTMLElement, getOpen: () => boolean) => void }) {
  const [open, setOpen] = useState<number | null>(null);
  const [preview, setPreview] = useState<PreviewState>({ label: "", x: 0, y: 0, show: false });
  const patch = (p: Partial<PreviewState>) => setPreview((s) => ({ ...s, ...p }));

  return (
    <div className="fld-col">
      <ChapterHead num="02" title="Selected Work" meta="What I built" />
      <div className="fld-work-list">
        {WORK.map((item, i) => (
          <WorkRow
            key={item.n}
            item={item}
            open={open === i}
            onToggle={() => {
              const next = open === i ? null : i;
              setOpen(next);
              if (next !== null) patch({ show: false }); // hide the hover card when a row opens
            }}
            setPreview={patch}
            touch={touch}
            track={track}
          />
        ))}
      </div>
      {!touch ? (
        <div
          className="fld-preview-card"
          data-show={preview.show}
          style={{ left: preview.x + 150, top: preview.y }}
        >
          {preview.label}
        </div>
      ) : null}
    </div>
  );
}

/* ============================= 03 ROADMAP ============================= */
export function Roadmap() {
  return (
    <div className="fld-col">
      <ChapterHead num="03" title="On the Roadmap" meta="What comes next" />
      <h2
        className="fld-h2"
        data-reveal
        data-split="words"
        style={{ fontSize: "clamp(1.7rem,3.9vw,3.2rem)", lineHeight: 1.04, letterSpacing: "-0.03em", maxWidth: "24ch", marginBottom: "clamp(36px,6vh,72px)" }}
      >
        <Split text="Four things I am building " />
        <em>
          <Split text="right now" />
        </em>
        <Split text="." />
      </h2>

      <div className="fld-roadmap">
        <svg className="fld-roadmap-svg" viewBox="0 0 1000 300" preserveAspectRatio="none" aria-hidden>
          <path data-fld="branch-path" d="M8 292 L8 200 C8 160 40 150 90 150 L992 150" vectorEffect="non-scaling-stroke" />
          <path data-fld="branch-path" d="M170 150 C230 150 250 130 250 86 L250 8" vectorEffect="non-scaling-stroke" />
          <path data-fld="branch-path" d="M520 150 C580 150 600 170 600 214 L600 292" vectorEffect="non-scaling-stroke" />
          <path data-fld="branch-path" d="M860 150 C920 150 940 130 940 86 L940 8" vectorEffect="non-scaling-stroke" />
        </svg>
        <div className="fld-cards">
          {ROADMAP.map((c) => (
            <article className="fld-card" data-reveal key={c.title}>
              <div className="fld-card-status">
                <span className="left">
                  <span className={"fld-card-dot" + (c.status === "Planning" ? " hollow" : "")} />
                  {c.status}
                </span>
                <span>{c.date}</span>
              </div>
              <h3 className="fld-card-title">{c.title}</h3>
              <p className="fld-card-lead">{c.lead}</p>
              <p className="fld-card-body fld-body-sm">{c.body}</p>
              <div className="fld-card-tags">
                {c.tags.map((t, i) => (
                  <span key={t}>
                    {t}
                    {i < c.tags.length - 1 ? <span className="sep"> · </span> : null}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================= 04 RECOGNITION ============================= */
export function Recognition() {
  return (
    <div className="fld-col">
      <ChapterHead num="04" title="Recognition" meta="Receipts" />

      <div className="fld-counters">
        {RECOGNITION.counters.map((c, i) => (
          <div className="fld-counter" data-reveal key={i}>
            <div className="fld-stat-num num" data-fld="count" data-to={c.target}>
              0
            </div>
            <div className="cap">{c.cap}</div>
          </div>
        ))}
        <div className="fld-counter" data-reveal>
          <div className="fld-stat-num num" style={{ color: "var(--ac)" }}>
            ●
          </div>
          <div className="cap">Brown belt, martial arts</div>
        </div>
      </div>

      <div style={{ marginTop: "clamp(28px,4vh,48px)" }}>
        {CERTS.map((c) => (
          <a className="fld-cert" href={c.link} target="_blank" rel="noreferrer" data-reveal key={c.n} data-cursor="link" data-cursor-label="View">
            <span className="n">{c.n}</span>
            <span>
              <span className="fld-cert-title" style={{ display: "block" }}>
                {c.title}
              </span>
              <span className="fld-cert-desc fld-body-sm" style={{ display: "block" }}>
                {c.desc}
              </span>
            </span>
            <span className="fld-cert-issuer">
              {c.issuer} ↗
            </span>
          </a>
        ))}
      </div>

      <div className="fld-threeup">
        {RECOGNITION.closing.map((c) => (
          <div className="fld-threeup-cell" data-reveal key={c.label} style={{ borderTop: "1px solid color-mix(in oklab, var(--ac) 30%, var(--ln2))", paddingTop: 16 }}>
            <span className="fld-mono-label">{c.label}</span>
            <p className="fld-body-sm" style={{ marginTop: 10 }}>
              {c.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================= 05 CONTACT ============================= */
function CopyEmail() {
  const [label, setLabel] = useState("Copy");
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(LINKS.email);
    } catch {
      /* clipboard blocked; label still cycles */
    }
    setLabel("Copying");
    setTimeout(() => setLabel("Copied"), 180);
    setTimeout(() => setLabel("Copy"), 1900);
  };
  return (
    <button className="fld-copy-btn" onClick={copy} data-cursor="explore" data-cursor-label="Copy">
      <span className="email">{LINKS.email}</span>
      <span className="lbl">{label}</span>
    </button>
  );
}

function ContactForm() {
  const [needs, setNeeds] = useState<string[]>([]);
  const [status, setStatus] = useState<{ text: string; tone: "" | "error" | "ok" }>({ text: "", tone: "" });
  const [phase, setPhase] = useState<"idle" | "sending" | "done">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const toggleNeed = (n: string) =>
    setNeeds((s) => (s.includes(n) ? s.filter((x) => x !== n) : [...s, n]));

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();

    // Field-specific checks so the visitor knows exactly what to fix.
    if (!name) {
      setStatus({ text: "Please add your name.", tone: "error" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ text: "That email does not look right. Please check it.", tone: "error" });
      return;
    }
    if (!message) {
      setStatus({ text: "Please add a short message about what you need.", tone: "error" });
      return;
    }

    setPhase("sending");
    setStatus({ text: "Sending your message", tone: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, needs, budget: fd.get("budget"), timeline: fd.get("timeline") }),
      });

      if (res.ok) {
        setPhase("done");
        setStatus({ text: "Thanks. I will reply to that address soon.", tone: "ok" });
        formRef.current?.reset();
        setNeeds([]);
        setTimeout(() => {
          setPhase("idle");
          setStatus({ text: "", tone: "" });
        }, 4200);
        return;
      }

      // Map the failure to a message the visitor can act on.
      const data = await res.json().catch(() => ({}));
      setPhase("idle");
      if (res.status === 429) {
        setStatus({ text: "You have sent a few already. Please try again in a few minutes.", tone: "error" });
      } else if (res.status >= 500) {
        setStatus({ text: "Something went wrong on my end. Please email me directly instead.", tone: "error" });
      } else {
        setStatus({ text: data?.error || "Please check the form and try again.", tone: "error" });
      }
    } catch {
      setPhase("idle");
      setStatus({ text: "Could not reach the server. Please try again, or email me directly.", tone: "error" });
    }
  };

  return (
    <form className="fld-form-panel" ref={formRef} onSubmit={submit} noValidate>
      <div className="fld-field-pair">
        <div className="fld-field">
          <label htmlFor="c-name">Name</label>
          <input className="fld-input" id="c-name" name="name" type="text" autoComplete="name" placeholder="Ada Lovelace" />
        </div>
        <div className="fld-field">
          <label htmlFor="c-email">Email</label>
          <input className="fld-input" id="c-email" name="email" type="email" autoComplete="email" placeholder="ada@example.com" />
        </div>
      </div>

      <fieldset className="fld-fieldset">
        <legend>What you need</legend>
        <div className="fld-checks">
          {CONTACT.needs.map((n) => (
            <label className="fld-check" key={n} data-cursor="explore" data-cursor-label="Pick">
              <input type="checkbox" checked={needs.includes(n)} onChange={() => toggleNeed(n)} />
              {n}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="fld-field">
        <label htmlFor="c-budget">Budget</label>
        <select className="fld-select" id="c-budget" name="budget" defaultValue={CONTACT.budgets[0]}>
          {CONTACT.budgets.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </div>

      <div className="fld-field">
        <label htmlFor="c-timeline">Timeline (optional)</label>
        <select className="fld-select" id="c-timeline" name="timeline" defaultValue={CONTACT.timelines[0]}>
          {CONTACT.timelines.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="fld-field">
        <label htmlFor="c-message">Message</label>
        <textarea
          className="fld-textarea"
          id="c-message"
          name="message"
          rows={4}
          placeholder="One or two lines about the project. What it is, and what you're stuck on."
        />
      </div>

      <button className="fld-submit" type="submit" disabled={phase === "sending"} data-cursor="explore" data-cursor-label="Send">
        {phase === "sending" ? "Sending" : phase === "done" ? "Got it" : "Send it"}
        {phase === "sending" ? <span className="spinner" /> : <span>{phase === "done" ? "✓" : "↗"}</span>}
      </button>
      <div className="fld-form-status" data-tone={status.tone}>
        {status.text}
      </div>
    </form>
  );
}

export function Contact({ onNavigate }: { onNavigate: Nav }) {
  return (
    <div className="fld-col">
      <ChapterHead num="05" title="Contact" meta="Say hello" />

      <div className="fld-contact-head">
        <h2 className="fld-talk" data-reveal data-split="chars">
          <Split text="Let's" by="chars" />
          <br />
          <Split text="talk" by="chars" />
        </h2>
        <p className="fld-trust" data-reveal>
          {CONTACT.trust}
        </p>
      </div>

      <div className="fld-contact-two">
        <div>
          <p className="fld-body" data-reveal>
            {CONTACT.availability}
          </p>
          <CopyEmail />
          <a className="fld-social" href={LINKS.github} target="_blank" rel="noreferrer" data-cursor="link" data-cursor-label="Open">
            <span className="lbl">GitHub</span>
            <span className="meta">github.com/Chaitanya299 ↗</span>
          </a>
          <a className="fld-social" href={LINKS.linkedin} target="_blank" rel="noreferrer" data-cursor="link" data-cursor-label="Open">
            <span className="lbl">LinkedIn</span>
            <span className="meta">Chaitanya Parasana ↗</span>
          </a>

          <div className="fld-whatnext">
            <span className="fld-mono-label">What happens next</span>
            <div className="fld-numbered">
              {CONTACT.whatNext.map((w) => (
                <div className="fld-numbered-row" key={w.n}>
                  <span className="n">{w.n}</span>
                  <span className="t" style={{ fontWeight: 400, fontSize: "clamp(0.95rem,1.2vw,1.1rem)", color: "var(--t1)" }}>
                    {w.t}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ContactForm />
      </div>

      <div className="fld-footer">
        <span>© 2026 Chaitanya Parasana</span>
        <button onClick={() => onNavigate("home")} data-cursor="explore" data-cursor-label="Go">
          Back to the start ↑
        </button>
      </div>
    </div>
  );
}
