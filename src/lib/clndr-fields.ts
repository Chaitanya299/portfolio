// Shared by Booking.tsx and /api/book. Hosts often add their own "Your Name" / "Your Email" questions
// (stafflo-ai does); those become the guest's name and email fields instead of being asked twice.
type Q = { id: string; question_text: string; question_type: string };

export function guestFields(questions: Q[]) {
  const email = questions.find((q) => q.question_type === "email");
  const name = questions.find((q) => q.question_type === "text" && /\bname\b/i.test(q.question_text));
  return { nameQ: name, emailQ: email };
}

// "Company website (we read it before the call)" -> ["Company website", "we read it before the call"]
export function splitHint(text: string): [string, string] {
  const m = text.match(/^(.+?)\s*\(([^()]+)\)\s*$/);
  return m ? [m[1], m[2]] : [text, ""];
}
