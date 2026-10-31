// /api/book against a fake clndr API (no keys, no network). Run from the repo root: bun run tests/book-route.test.ts .
import { resolve } from "node:path";
const repo = resolve(process.argv[2] ?? ".");
process.env.CLNDR_PUBLISHABLE_KEY = "clndr_pk_test";
process.env.CLNDR_BOOKING_SLUG = "intro-call";

const calls: { url: string; init?: RequestInit }[] = [];
const page = {
  bookingPage: { id: "bp1", title: "Intro", duration_minutes: 15, booking_type: "approval", max_days_ahead: 3 },
  userProfile: { username: "chai", full_name: "Chaitanya", timezone: "Asia/Kolkata" },
  questions: [
    { id: "q2", question_text: "Site", question_type: "text", options: null, is_required: false, order_index: 2 },
    { id: "q1", question_text: "What to build", question_type: "textarea", options: null, is_required: true, order_index: 1 },
    { id: "qn", question_text: "Your Name", question_type: "text", options: null, is_required: true, order_index: 0 },
    { id: "qe", question_text: "Your Work Email", question_type: "email", options: null, is_required: true, order_index: 0 },
  ],
};
let taken = false;
globalThis.fetch = (async (url: string, init?: RequestInit) => {
  calls.push({ url, init });
  const ok = (data: unknown, status = 200) => new Response(JSON.stringify(status < 400 ? { data } : data), { status });
  if (url.endsWith("/booking-pages/intro-call")) return ok(page);
  const m = url.match(/slots\?date=(\d{4}-\d{2}-\d{2})/);
  if (m) {
    const s = new Date(m[1] + "T08:30:00.000Z").toISOString();
    return ok([{ start: s, end: new Date(Date.parse(s) + 9e5).toISOString() }, { start: s, end: s }]); // duplicate on purpose
  }
  if (url.endsWith("/bookings")) return taken ? ok({ error: "This time slot is not available." }, 409) : ok({ status: "pending", google_meet_link: null });
  return ok({ error: "nope" }, 404);
}) as typeof fetch;

const { GET, POST } = await import(repo + "/src/app/api/book/route.ts");
const assert = (c: unknown, msg: string) => { if (!c) { console.log("FAIL", msg); process.exit(1); } console.log("ok  ", msg); };
const req = (body: unknown, ip = "1.1.1.1") => new Request("http://x/api/book", { method: "POST", body: JSON.stringify(body), headers: { "x-forwarded-for": ip } });

const g = await GET();
const gj = await g.json();
assert(g.status === 200, "GET 200");
assert(gj.slots.length === 4, "4 days (today + max_days_ahead 3), one slot each after dedupe: " + gj.slots.length);
assert(gj.questions.at(-1).id === "q2", "questions sorted by order_index");
assert(calls.every((c) => c.url.startsWith("https://api.clndr.pro/v1/")), "api.clndr.pro base");
assert((calls[0].init?.headers as Record<string, string>).Authorization === "Bearer clndr_pk_test", "bearer key");
const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata" }).format(new Date());
assert(calls.some((c) => c.url.endsWith("date=" + today)), "starts at host today " + today);

const slot = gj.slots[0];
let r = await POST(req({ name: "A", email: "bad", start: slot.start, end: slot.end }));
assert(r.status === 400, "bad email 400");
r = await POST(req({ name: "A", email: "a@b.co", start: slot.start, end: slot.end, answers: {} }, "2.2.2.2"));
assert(r.status === 400 && (await r.json()).error.includes("What to build"), "required question enforced");
r = await POST(req({ name: "A\nB", email: "A@B.co", start: slot.start, end: slot.end, answers: { q1: " voice agent ", q2: "" } }, "3.3.3.3"));
const sent = JSON.parse(String(calls.at(-1)!.init!.body));
assert(r.status === 200 && (await r.json()).status === "pending", "booking 200 pending");
assert(sent.bookingPageId === "bp1" && sent.guestName === "A B" && sent.guestEmail === "a@b.co", "body camelCase, name/email cleaned");
const ans = Object.fromEntries(sent.responses.map((x: { questionId: string; answer: string }) => [x.questionId, x.answer]));
assert(ans.q1 === "voice agent" && !("q2" in ans), "empty answers dropped, trimmed");
assert(ans.qn === "A B" && ans.qe === "a@b.co", "host's name/email questions answered from the guest fields");
taken = true;
r = await POST(req({ name: "A", email: "a@b.co", start: slot.start, end: slot.end, answers: { q1: "x" } }, "4.4.4.4"));
assert(r.status === 409 && (await r.json()).taken === true, "409 -> taken");
const before = calls.length;
r = await POST(req({ name: "A", email: "a@b.co", start: slot.start, end: slot.end, answers: { q1: "x" }, honeypot: "bot" }, "5.5.5.5"));
assert(r.status === 200 && calls.length === before, "honeypot: fake success, no upstream call");
for (let i = 0; i < 5; i++) await POST(req({}, "9.9.9.9"));
assert((await POST(req({}, "9.9.9.9"))).status === 429, "6th try from one IP -> 429");
console.log("all passed");
