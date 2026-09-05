import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO = "chaitanya.sai311@gmail.com";
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const esc = (s: string) =>
  s.replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" })[c] as string);
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " "); // no header/subject injection

// ponytail: in-memory sliding window. Per-instance only (a serverless cold start or
// a second instance resets it), so it is a courtesy speed bump, not a hard guarantee.
// Fine for a portfolio form; swap for Upstash/KV if real abuse shows up.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;
const hits = new Map<string, number[]>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (!v.some((t) => now - t < WINDOW_MS)) hits.delete(k);
  }
  return recent.length > MAX_HITS;
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many messages. Try again in a bit." }, { status: 429 });
  }

  // Honeypot: a filled hidden field means a bot. Pretend it worked, send nothing.
  if (typeof body.honeypot === "string" && body.honeypot.trim()) {
    return NextResponse.json({ success: true });
  }

  const name = oneLine(String(body.name ?? "").trim()).slice(0, 80);
  const email = String(body.email ?? "").trim().toLowerCase().slice(0, 160);
  const message = String(body.message ?? "").trim().slice(0, 2000);
  const needs = Array.isArray(body.needs) ? body.needs.map(String).slice(0, 12) : [];
  const budget = String(body.budget ?? "").trim().slice(0, 80);
  const timeline = String(body.timeline ?? "").trim().slice(0, 80);

  if (!name || !emailRe.test(email) || !message) {
    return NextResponse.json(
      { error: "Please add a name, a valid email, and a message." },
      { status: 400 },
    );
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Email is not configured." }, { status: 500 });
  }

  const resend = new Resend(key);
  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: [TO],
    replyTo: email,
    subject: `New portfolio inquiry from ${name}`,
    html: `
      <h3>New message from the portfolio contact form</h3>
      <p><strong>Name:</strong> ${esc(name)}</p>
      <p><strong>Email:</strong> ${esc(email)}</p>
      ${needs.length ? `<p><strong>Needs:</strong> ${esc(needs.join(", "))}</p>` : ""}
      ${budget ? `<p><strong>Budget:</strong> ${esc(budget)}</p>` : ""}
      ${timeline ? `<p><strong>Timeline:</strong> ${esc(timeline)}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${esc(message).replace(/\n/g, "<br />")}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Could not send. Try again later." }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}

// ponytail: no rate limiting. Serverless has no shared memory to hold a counter,
// the honeypot stops bots, and Resend enforces its own send limits.
