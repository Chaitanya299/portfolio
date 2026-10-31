// /llms.txt and /index.md, generated from data.ts. Run from the repo root: bun run tests/seo-routes.test.ts .
import { resolve } from "node:path";
const repo = resolve(process.argv[2] ?? ".");
const llms = await import(repo + "/src/app/llms.txt/route.ts");
const md = await import(repo + "/src/app/index.md/route.ts");
const { WORK, BUILD } = await import(repo + "/src/components/field/data.ts");
const assert = (c: unknown, msg: string) => { if (!c) { console.log("FAIL", msg); process.exit(1); } console.log("ok  ", msg); };

const l = llms.GET() as Response;
const lt = await l.text();
assert(llms.dynamic === "force-static" && md.dynamic === "force-static", "both routes are static");
assert(l.headers.get("content-type") === "text/plain; charset=utf-8", "llms.txt is UTF-8 plain text");
assert(lt.startsWith("# Chaitanya Parasana") && lt.includes("/index.md"), "llms.txt names the site and points to /index.md");

const m = md.GET() as Response;
const mt = await m.text();
assert(m.headers.get("content-type") === "text/markdown; charset=utf-8", "index.md is UTF-8 markdown");
assert(/rel="canonical"/.test(m.headers.get("link") ?? "") && m.headers.get("link")!.includes("chaitanyaparasana.com/>"), "index.md points canonical at the HTML page");
assert(WORK.every((w: { title: string; github: string }) => mt.includes(`### ${w.title}`) && mt.includes(w.github)), "index.md has every project with its code link");
assert(BUILD.services.every((b: { title: string }) => mt.includes(b.title)), "index.md has every service");
assert(!/<[a-z]/i.test(mt) && !mt.includes("—"), "index.md has no HTML tags or em dashes");
console.log("all passed");
