import { NextRequest, NextResponse } from "next/server";
import { makeRateLimiter, clientIp } from "@/lib/rate-limit";
import { guestFields } from "@/lib/clndr-fields";
import { configured, SLUG, getPage, getSlots, listPages, createBooking, ClndrError } from "@/lib/clndr";

const rateLimited = makeRateLimiter(10 * 60 * 1000, 5); // 5 booking attempts per 10 min per IP
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const notSetUp = () => NextResponse.json({ error: "Booking isn't set up yet." }, { status: 503 });

// The booking page, its questions and every open slot in the window (upstream calls cached 60s).
export async function GET() {
  if (!configured) return notSetUp();
  try {
    const page = await getPage();
    const slots = await getSlots(page);
    const { bookingPage: b, userProfile: u } = page;
    return NextResponse.json({
      title: b.title,
      duration: b.duration_minutes,
      approval: b.booking_type === "approval",
      host: u.full_name || u.username,
      questions: [...page.questions].sort((x, y) => x.order_index - y.order_index),
      slots,
    });
  } catch (e) {
    console.error("clndr GET", e);
    if (e instanceof ClndrError && e.status === 404) {
      const pages = await listPages().catch(() => []);
      console.error(`CLNDR_BOOKING_SLUG "${SLUG}" not found among active pages. This key's pages:`,
        pages.map((p) => `${p.slug} (${p.is_active ? "active" : "inactive"}, ${p.visibility})`).join(", ") || "none");
    }
    return NextResponse.json({ error: "Couldn't load open times. Try again in a moment." }, { status: 502 });
  }
}

export async function POST(req: NextRequest) {
  if (!configured) return notSetUp();
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }
  if (rateLimited(clientIp(req.headers))) {
    return NextResponse.json({ error: "Too many tries. Try again in a bit." }, { status: 429 });
  }
  if (typeof body.honeypot === "string" && body.honeypot.trim()) return NextResponse.json({ status: "confirmed" });

  const name = String(body.name ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, 80);
  const email = String(body.email ?? "").trim().toLowerCase().slice(0, 160);
  const start = String(body.start ?? ""), end = String(body.end ?? "");
  if (!name || !emailRe.test(email)) {
    return NextResponse.json({ error: "Please add your name and a valid email." }, { status: 400 });
  }
  if (Number.isNaN(Date.parse(start)) || Number.isNaN(Date.parse(end))) {
    return NextResponse.json({ error: "Pick a time first." }, { status: 400 });
  }

  try {
    const page = await getPage();
    const raw = (body.answers ?? {}) as Record<string, unknown>;
    const { nameQ, emailQ } = guestFields(page.questions);
    const responses = page.questions
      .map((q) => ({ questionId: q.id, answer: q === nameQ ? name : q === emailQ ? email : String(raw[q.id] ?? "").trim().slice(0, 2000) }))
      .filter((r) => r.answer);
    // The API accepts unanswered required questions, so hold the line here.
    const missing = page.questions.find((q) => q.is_required && !responses.some((r) => r.questionId === q.id));
    if (missing) return NextResponse.json({ error: `Please answer: ${missing.question_text}` }, { status: 400 });

    const booking = await createBooking({
      bookingPageId: page.bookingPage.id, guestName: name, guestEmail: email, startTime: start, endTime: end, responses,
    });
    return NextResponse.json({ status: booking.status, meet: booking.google_meet_link });
  } catch (e) {
    if (e instanceof ClndrError && e.status === 409) {
      return NextResponse.json({ error: "Someone booked that time a moment ago. Pick another one.", taken: true }, { status: 409 });
    }
    if (e instanceof ClndrError && (e.status === 400 || e.status === 429)) {
      return NextResponse.json({ error: e.message }, { status: e.status });
    }
    console.error("clndr POST", e);
    return NextResponse.json({ error: "Couldn't book that. Try again, or email me instead." }, { status: 502 });
  }
}
