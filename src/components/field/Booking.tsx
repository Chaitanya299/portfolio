"use client";

// Contact "Book a call": the stafflo.ai/book flow (pick a day, a time, then your details) on clndr.pro,
// dressed in FIELD. Data comes from /api/book; the clndr key never reaches the browser.
// Renders nothing until clndr is configured (the route answers 503), so the section stays clean.
import { useCallback, useEffect, useMemo, useState } from "react";
import { guestFields, splitHint } from "@/lib/clndr-fields";

type Question = { id: string; question_text: string; question_type: string; options: string[] | null; is_required: boolean | null };
type Slot = { start: string; end: string };
type Data = { title: string; duration: number; approval: boolean; host: string; questions: Question[]; slots: Slot[] };

const pad = (n: number) => String(n).padStart(2, "0");
const dayKey = (iso: string | number, tz: string) => new Intl.DateTimeFormat("en-CA", { timeZone: tz }).format(new Date(iso));
const keyDate = (k: string) => Date.parse(k + "T12:00:00Z"); // a calendar key as a UTC instant, for labels
const fmt = (o: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat("en-GB", o);
const WEEK = ["M", "T", "W", "T", "F", "S", "S"];

async function fetchBooking(): Promise<{ kind: "ready"; data: Data } | { kind: "error"; error: string } | { kind: "off" }> {
  try {
    const res = await fetch("/api/book");
    const json = await res.json().catch(() => ({}));
    if (res.status === 503) return { kind: "off" };
    if (!res.ok) return { kind: "error", error: json.error || "Couldn't load open times." };
    return { kind: "ready", data: json };
  } catch {
    return { kind: "error", error: "Couldn't load open times. Check your connection." };
  }
}

// Question label with its "(hint)" moved to a quieter second line, like stafflo.ai/book.
function Label({ text, req }: { text: string; req: boolean }) {
  const [main, hint] = splitHint(text);
  return <span>{main}{req ? null : <em> (optional)</em>}{hint ? <small>{hint}</small> : null}</span>;
}

export default function Booking() {
  const [data, setData] = useState<Data | null>(null);
  const [state, setState] = useState<"loading" | "ready" | "error" | "off">("loading");
  const [error, setError] = useState("");
  // Only read in the "ready" branch, which never server-renders, so the guest's zone can't mismatch hydration.
  const [tz, setTz] = useState(() => (typeof window === "undefined" ? "UTC" : Intl.DateTimeFormat().resolvedOptions().timeZone));
  const [now] = useState(() => Date.now());
  const [monthPick, setMonth] = useState<[number, number] | null>(null); // [year, monthIndex]
  const [dayPick, setDay] = useState<string | null>(null);
  const [slot, setSlot] = useState<Slot | null>(null);
  const [step, setStep] = useState<"pick" | "details" | "done">("pick");
  const [note, setNote] = useState("");
  const [sending, setSending] = useState(false);
  const [doneMsg, setDoneMsg] = useState("");

  const load = useCallback(() => {
    fetchBooking().then((r) => {
      if (r.kind === "ready") setData(r.data);
      if (r.kind === "error") setError(r.error);
      setState(r.kind);
    });
  }, []);
  useEffect(load, [load]);
  const retry = () => { setState("loading"); load(); };

  // Slots regrouped by the guest's chosen timezone, so a day means their day.
  const byDay = useMemo(() => {
    const m = new Map<string, Slot[]>();
    if (data) for (const s of data.slots) {
      const k = dayKey(s.start, tz);
      m.set(k, [...(m.get(k) || []), s]);
    }
    return m;
  }, [data, tz]);
  const days = useMemo(() => [...byDay.keys()].sort(), [byDay]);
  const today = dayKey(now, tz);
  // Open on the month of the first open day; drop the picked day once it has no times (zone change, reload).
  const first = days[0] || today;
  const month: [number, number] = monthPick || [Number(first.slice(0, 4)), Number(first.slice(5, 7)) - 1];
  const day = dayPick && byDay.has(dayPick) ? dayPick : null;

  const zones = useMemo(() => {
    const all = typeof Intl.supportedValuesOf === "function" ? Intl.supportedValuesOf("timeZone") : [];
    return all.includes(tz) ? all : [tz, ...all];
  }, [tz]);

  if (state === "off") return null;

  const time = fmt({ hour: "2-digit", minute: "2-digit", hourCycle: "h23", timeZone: tz });
  const short = fmt({ weekday: "short", day: "numeric", month: "short", timeZone: tz });
  const picked = slot ? `${short.format(new Date(slot.start))}, ${time.format(new Date(slot.start))}` : "";
  const meta = data ? `${data.duration} minutes, confirmed by email` : "";
  const guest = guestFields(data?.questions || []);

  const grid = (() => {
    const [y, m] = month;
    const lead = (new Date(Date.UTC(y, m, 1)).getUTCDay() + 6) % 7;
    const count = new Date(Date.UTC(y, m + 1, 0)).getUTCDate();
    return [...Array(lead).fill(null), ...Array.from({ length: count }, (_, i) => `${y}-${pad(m + 1)}-${pad(i + 1)}`)];
  })();
  const monthKey = `${month[0]}-${pad(month[1] + 1)}`;
  const canPrev = monthKey > today.slice(0, 7);
  const canNext = days.length > 0 && monthKey < days[days.length - 1].slice(0, 7);
  const shift = (n: number) => { const d = new Date(Date.UTC(month[0], month[1] + n, 1)); setMonth([d.getUTCFullYear(), d.getUTCMonth()]); };

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!slot || !data || sending) return;
    const fd = new FormData(e.currentTarget);
    const answers = Object.fromEntries(data.questions.map((q) => [q.id, q.question_type === "checkbox" ? (fd.get(q.id) ? "Yes" : "No") : String(fd.get(q.id) || "")]));
    setSending(true);
    setNote("");
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: fd.get("name"), email: fd.get("email"), start: slot.start, end: slot.end, answers, honeypot: fd.get("honeypot") }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.status === 409 && json.taken) {
        setSlot(null);
        setStep("pick");
        setNote(json.error);
        load();
        return;
      }
      if (!res.ok) return setNote(json.error || "Couldn't book that. Try again, or email me instead.");
      const email = String(fd.get("email"));
      setDoneMsg(json.status === "pending"
        ? `Request sent for ${picked}. ${data.host} will confirm by email at ${email}.`
        : `You're booked for ${picked}. A confirmation is on its way to ${email}.`);
      setStep("done");
    } catch {
      setNote("Couldn't reach the booking service. Check your connection and try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="bk" data-rv="0">
      <div className="bk-kicker"><span className="bk-letter ck"></span><span className="bk-rule"></span><span>Book a call</span></div>
      <div className="bk-grid">
        <div className="bk-info">
          <h3 className="bk-title">Free {data ? `${data.duration}-minute` : "short"} call</h3>
          <p className="bk-role">Full-stack and AI engineer</p>
          <p className="bk-lead">A short look at what you want built, and the closest thing I have already shipped.</p>
          <ol className="bk-steps">
            <li><span>1</span><p><b>Before.</b> I read what you send and pick the project closest to it.</p></li>
            <li><span>2</span><p><b>During.</b> Your idea, then the closest build, including what happens when something goes wrong.</p></li>
            <li><span>3</span><p><b>After.</b> If it is worth going further, you get a written plan with a fixed price and a date. If it isn&apos;t, I&apos;ll say so.</p></li>
          </ol>
        </div>

        <div className="bk-card">
          {state !== "ready" || !data ? (
            <>
              <div className="bk-head"><h4>Pick a time</h4></div>
              <p className="bk-muted" role="status">{state === "error" ? error : "Loading open times…"}</p>
              {state === "error" ? (
                <button type="button" className="bk-link" onClick={retry} data-cursor="explore" data-cursor-label="Retry">Try again</button>
              ) : null}
            </>
          ) : step === "pick" ? (
            <>
              <div className="bk-head"><h4>Pick a time</h4><span>{meta}</span></div>
              <div className="bk-month">
                <span>{fmt({ month: "long", year: "numeric", timeZone: "UTC" }).format(Date.UTC(month[0], month[1], 1))}</span>
                <div>
                  <button type="button" className="bk-nav" onClick={() => shift(-1)} disabled={!canPrev} aria-label="Previous month" data-cursor="explore" data-cursor-label="Prev">‹</button>
                  <button type="button" className="bk-nav" onClick={() => shift(1)} disabled={!canNext} aria-label="Next month" data-cursor="explore" data-cursor-label="Next">›</button>
                </div>
              </div>
              <div className="bk-cal" role="grid" aria-label="Days with open times">
                {WEEK.map((w, i) => <span key={"w" + i} className="bk-dow" aria-hidden="true">{w}</span>)}
                {grid.map((k, i) =>
                  !k ? <span key={"b" + i} /> : byDay.has(k) ? (
                    <button key={k} type="button" className="bk-day" data-on={k === day || undefined} data-today={k === today || undefined}
                      onClick={() => { setDay(k); setSlot(null); setNote(""); }}
                      aria-label={fmt({ weekday: "long", day: "numeric", month: "long", timeZone: "UTC" }).format(keyDate(k))} aria-pressed={k === day}
                      data-cursor="explore" data-cursor-label="Pick">{Number(k.slice(8))}</button>
                  ) : (
                    <span key={k} className="bk-day" data-off data-today={k === today || undefined}>{Number(k.slice(8))}</span>
                  ),
                )}
              </div>
              <div className="bk-slots-wrap">
                {note ? <p className="bk-note" role="status">{note}</p> : null}
                {day ? (
                  <>
                    <p className="bk-dayname">{fmt({ weekday: "long", day: "numeric", month: "long", timeZone: "UTC" }).format(keyDate(day))}</p>
                    <div className="bk-slots">
                      {(byDay.get(day) || []).map((s) => (
                        <button key={s.start} type="button" className="bk-slot" onClick={() => { setSlot(s); setStep("details"); setNote(""); }}
                          data-cursor="explore" data-cursor-label="Book">{time.format(new Date(s.start))}</button>
                      ))}
                    </div>
                  </>
                ) : (
                  <p className="bk-muted">{days.length ? "Pick a day to see its times." : "No open times right now. Email me and I'll send some."}</p>
                )}
              </div>
              <div className="bk-tz">
                <span>Times shown in {tz}.</span>
                <label>Time zone
                  <select value={tz} onChange={(e) => { setTz(e.target.value); setSlot(null); setMonth(null); }}>
                    {zones.map((z) => <option key={z} value={z}>{z}</option>)}
                  </select>
                </label>
              </div>
            </>
          ) : step === "details" ? (
            <>
              <div className="bk-head"><h4>Your details</h4><span>{meta}</span></div>
              <div className="bk-picked">
                <span>{picked}</span>
                <button type="button" className="bk-link" onClick={() => { setStep("pick"); setNote(""); }} data-cursor="explore" data-cursor-label="Back">Pick another time</button>
              </div>
              <form className="bk-form" onSubmit={submit}>
                <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" className="bk-hp" />
                <label><Label text={guest.nameQ?.question_text || "Your name"} req /><input name="name" type="text" autoComplete="name" required maxLength={80} /></label>
                <label><Label text={guest.emailQ?.question_text || "Your email"} req /><input name="email" type="email" autoComplete="email" required maxLength={160} /></label>
                {data.questions.filter((q) => q !== guest.nameQ && q !== guest.emailQ).map((q) => {
                  const req = !!q.is_required;
                  const label = <Label text={q.question_text} req={req} />;
                  if (q.question_type === "checkbox") return <label key={q.id} className="bk-check"><input type="checkbox" name={q.id} required={req} />{label}</label>;
                  if (q.question_type === "textarea") return <label key={q.id}>{label}<textarea name={q.id} rows={3} required={req} maxLength={2000} /></label>;
                  if (q.question_type === "select") return (
                    <label key={q.id}>{label}
                      <select name={q.id} required={req} defaultValue=""><option value="" disabled>Choose one</option>{(q.options || []).map((o) => <option key={o} value={o}>{o}</option>)}</select>
                    </label>
                  );
                  const type = q.question_type === "email" ? "email" : q.question_type === "phone" ? "tel" : "text";
                  return <label key={q.id}>{label}<input name={q.id} type={type} required={req} maxLength={2000} /></label>;
                })}
                <div className="bk-submit">
                  <button type="submit" className="bk-btn" disabled={sending} data-cursor="explore" data-cursor-label="Book">
                    {sending ? "Booking" : data.approval ? "Request this call" : "Book this call"} <span>↗</span>
                  </button>
                  {note ? <p className="bk-note" role="status">{note}</p> : null}
                </div>
              </form>
            </>
          ) : (
            <>
              <div className="bk-head"><h4>{data.approval ? "Request sent" : "You're booked"}</h4><span>{meta}</span></div>
              <p className="bk-done" role="status">{doneMsg}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
