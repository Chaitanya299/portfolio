// clndr.pro REST client for the Contact "Book a call" block (server only: never import from a client file).
// Docs: https://docs.clndr.pro/api-reference. A publishable key is enough (pages, slots, create booking);
// it stays server-side anyway so slot lookups are cached once for every visitor.

const API = "https://api.clndr.pro/v1"; // not the bare clndr.pro: its redirect drops the Authorization header
const KEY = process.env.CLNDR_PUBLISHABLE_KEY;
export const SLUG = process.env.CLNDR_BOOKING_SLUG;
export const configured = Boolean(KEY && SLUG);

export type QuestionType = "text" | "email" | "textarea" | "phone" | "select" | "checkbox";
export interface Question {
  id: string;
  question_text: string;
  question_type: QuestionType;
  options: string[] | null;
  is_required: boolean | null;
  order_index: number;
}
export interface PageDetail {
  bookingPage: { id: string; title: string; duration_minutes: number; booking_type: "direct" | "approval"; max_days_ahead: number | null };
  userProfile: { username: string; full_name: string | null; timezone: string };
  questions: Question[];
}
export interface Slot { start: string; end: string }

export class ClndrError extends Error {
  constructor(message: string, readonly status: number) { super(message); }
}

async function api<T>(path: string, init?: RequestInit & { next?: { revalidate: number } }): Promise<T> {
  const res = await fetch(API + path, {
    ...init,
    headers: { Authorization: `Bearer ${KEY}`, ...(init?.body ? { "Content-Type": "application/json" } : {}) },
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new ClndrError(json.error ?? `clndr ${res.status}`, res.status);
  return json.data as T;
}

const CACHE = { next: { revalidate: 60 } }; // one upstream call per URL per minute, shared by all visitors
const MAX_DAYS = 30; // ponytail: one slots call per day; raise only if the booking window really is longer

export const getPage = () => api<PageDetail>(`/booking-pages/${encodeURIComponent(SLUG!)}`, CACHE);

// For the server log when CLNDR_BOOKING_SLUG doesn't resolve: what the key's account actually has.
export const listPages = () =>
  api<{ slug: string; is_active: boolean | null; visibility: string }[]>("/booking-pages", { cache: "no-store" });

// "YYYY-MM-DD" for today in the host's timezone, then the next n days as plain calendar dates.
function hostDays(tz: string, n: number) {
  const [y, m, d] = new Intl.DateTimeFormat("en-CA", { timeZone: tz }).format(new Date()).split("-").map(Number);
  return Array.from({ length: n + 1 }, (_, i) => new Date(Date.UTC(y, m - 1, d + i)).toISOString().slice(0, 10));
}

// Every open slot in the booking window, sorted. The API answers per host day; the browser regroups by
// the guest's timezone, so no day boundary is assumed here.
export async function getSlots(page: PageDetail): Promise<Slot[]> {
  const n = Math.min(page.bookingPage.max_days_ahead ?? MAX_DAYS, MAX_DAYS);
  const days = hostDays(page.userProfile.timezone, n);
  const lists = await Promise.all(
    days.map((day) => api<Slot[]>(`/booking-pages/${encodeURIComponent(SLUG!)}/slots?date=${day}`, CACHE).catch(() => [] as Slot[])),
  );
  const seen = new Set<string>();
  return lists.flat().filter((s) => !seen.has(s.start) && seen.add(s.start)).sort((a, b) => Date.parse(a.start) - Date.parse(b.start));
}

export const createBooking = (body: {
  bookingPageId: string; guestName: string; guestEmail: string; startTime: string; endTime: string;
  responses: { questionId: string; answer: string }[];
}) => api<{ status: string; google_meet_link: string | null }>("/bookings", { method: "POST", body: JSON.stringify(body), cache: "no-store" });
