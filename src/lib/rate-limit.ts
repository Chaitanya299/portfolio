// ponytail: in-memory sliding window. Per-instance only (a serverless cold start or
// a second instance resets it), so it is a courtesy speed bump, not a hard guarantee.
// Fine for a portfolio; swap for Upstash/KV if real abuse shows up.
export function makeRateLimiter(windowMs: number, max: number) {
  const hits = new Map<string, number[]>();
  return function rateLimited(ip: string): boolean {
    const now = Date.now();
    const recent = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);
    recent.push(now);
    hits.set(ip, recent);
    if (hits.size > 5000) {
      for (const [k, v] of hits) if (!v.some((t) => now - t < windowMs)) hits.delete(k);
    }
    return recent.length > max;
  };
}

export function clientIp(headers: Headers): string {
  return (headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
}
