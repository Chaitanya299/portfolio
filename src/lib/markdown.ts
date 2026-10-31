// Plain-text copies of the page for /llms.txt and /index.md, generated from the same data.ts
// that grounds /api/ask, so there is no third hand-kept copy of the copy.
import { HERO, NOW, ABOUT, BUILD, WORK, ROADMAP, CERTS, CONTACT, LINKS } from "@/components/field/data";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, CONTENT_UPDATED } from "@/lib/site";

const strip = (s: string) => s.replace(/<[^>]+>/g, "");

export function llmsTxt() {
  return `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

The whole site is one page. For a plain Markdown copy of everything on it, read ${SITE_URL}/index.md, which is generated from the same content as the page.

## Pages

- [Portfolio](${SITE_URL}/): services, shipped projects, roadmap, booking and contact
- [Markdown copy of the portfolio](${SITE_URL}/index.md): the same content as plain Markdown

## Elsewhere

- [Stafflo](${NOW.link}): ${NOW.title}
- [GitHub](${LINKS.github})
- [LinkedIn](${LINKS.linkedin})
`;
}

export function pageMarkdown() {
  const s: string[] = [];
  s.push(`# ${SITE_NAME}`, "", `${HERO.eyebrow.join(" · ")}`, "", `**${HERO.proposition}** ${HERO.propositionSub}`, "", `${HERO.availability}. Canonical page: ${SITE_URL}/ (updated ${CONTENT_UPDATED}).`);
  s.push("", `## Now: ${NOW.title}`, "", NOW.about, "", NOW.body, "");
  for (const d of NOW.demos) s.push(`- [${d.title}](${d.link}) (${d.tag}): ${d.desc}`);
  s.push("", "## About", "", ...ABOUT.paragraphs.flatMap((p) => [p, ""]));
  for (const a of ABOUT.services) s.push(`- **${a.t}.** ${a.d}`);
  s.push("", "## Services", "", strip(BUILD.lead), "");
  for (const b of BUILD.services) s.push(`- **${b.title}** (${b.tl}): ${b.desc}`);
  s.push("", `${BUILD.footnote}.`, "");
  for (const c of BUILD.closing) s.push(`- **${c.label}:** ${c.body}`);
  s.push("", "## Key projects");
  for (const w of WORK) {
    s.push("", `### ${w.title}`, "", w.summary, "", `- How it works: ${w.how}`, `- Why it matters: ${w.why}`, `- The tricky part: ${w.tricky}`, `- Stack: ${w.tags.join(", ")}`, `- Code: ${w.github}`);
  }
  s.push("", "## Roadmap", "");
  for (const r of ROADMAP) s.push(`- **${r.title}** (${r.status}, ${r.date}): ${r.lead}`);
  s.push("", "## Certifications", "");
  for (const c of CERTS) s.push(`- ${c.title}, ${c.issuer}`);
  s.push("", "## Contact", "", CONTACT.trust, "", CONTACT.availability, "");
  s.push(`- Email: ${LINKS.email}`, `- Book a call: ${SITE_URL}/#contact`, `- GitHub: ${LINKS.github}`, `- LinkedIn: ${LINKS.linkedin}`, "");
  return s.join("\n");
}
