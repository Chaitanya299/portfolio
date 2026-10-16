"use client";

import { useRef, useState } from "react";

type Turn = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "How does Vellum work?",
  "What was hard about the AI platform?",
  "Are you taking freelance work?",
];

// Hero assistant: streams an answer from /api/ask and shows the measured time to the
// first word, so the "500ms live answer" claim above is checked live, not just stated.
export default function Ask({ track }: { track: (el: HTMLElement, getOpen: () => boolean) => void }) {
  const [history, setHistory] = useState<Turn[]>([]);
  const [q, setQ] = useState("");
  const [asked, setAsked] = useState("");
  const [answer, setAnswer] = useState("");
  const [ms, setMs] = useState<number | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const boxRef = useRef<HTMLDivElement>(null);

  // The answer makes the chapter taller; the scroll range has to follow it (Field.tsx trackPanel).
  const grow = () => boxRef.current && track(boxRef.current, () => true);

  async function ask(question: string) {
    const text = question.trim().slice(0, 500);
    if (!text || busy) return;
    const turns: Turn[] = [...history, { role: "user" as const, content: text }].slice(-6);
    setBusy(true);
    setError("");
    setAnswer("");
    setMs(null);
    setAsked(text);
    setQ("");
    const t0 = performance.now();
    let full = "";
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: turns }),
      });
      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Try again.");
      }
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        if (!full) setMs(Math.round(performance.now() - t0));
        full += dec.decode(value, { stream: true });
        setAnswer(full);
        grow();
      }
      setHistory([...turns, { role: "assistant" as const, content: full }].slice(-6));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Try again.");
    } finally {
      setBusy(false);
      grow();
    }
  }

  return (
    <div className="fld-ask" ref={boxRef} data-reveal>
      <span className="fld-mono-label">Ask about my work</span>
      <form
        className="fld-ask-row"
        onSubmit={(e) => {
          e.preventDefault();
          ask(q);
        }}
      >
        <input
          className="fld-input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          maxLength={500}
          placeholder="Anything about my projects, stack or availability"
          aria-label="Ask a question about Chaitanya's work"
          disabled={busy}
        />
        <button className="fld-ask-btn" type="submit" disabled={busy || !q.trim()} data-cursor="explore" data-cursor-label="Ask">
          {busy ? "Asking" : "Ask"}
        </button>
      </form>

      {!asked ? (
        <div className="fld-ask-sugg">
          {SUGGESTIONS.map((s) => (
            <button key={s} type="button" onClick={() => ask(s)} data-cursor="link" data-cursor-label="Ask">
              {s}
            </button>
          ))}
        </div>
      ) : null}

      <div aria-live="polite">
        {asked ? <p className="fld-ask-q">{asked}</p> : null}
        {answer ? <p className="fld-ask-a fld-body">{answer}</p> : busy ? <p className="fld-ask-meta">Answering</p> : null}
        {ms !== null ? <p className="fld-ask-meta">First word in {ms}ms</p> : null}
        {error ? (
          <p className="fld-ask-meta" data-tone="error">
            {error}
          </p>
        ) : null}
      </div>
      <p className="fld-ask-note">Answered by an AI assistant from this site&apos;s content.</p>
    </div>
  );
}
