// Single source of truth for absolute URLs (metadata, robots, sitemap, JSON-LD).
// Override NEXT_PUBLIC_APP_URL in the deploy env once a custom domain is connected.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_APP_URL || "https://www.chaitanyaparasana.com"
).replace(/\/$/, "");

export const SITE_NAME = "Chaitanya Parasana";
export const SITE_TITLE = "Chaitanya Parasana | Full-Stack & AI Engineer";
// Meta description: kept under ~155 chars so Google does not truncate it.
export const SITE_DESCRIPTION =
  "Full-stack and AI engineer building AI products that keep working after the demo: voice agents, assistants, and the machinery that runs them.";
// Open Graph / social cards: shorter (~115) so mobile previews do not clip.
export const SITE_OG_DESCRIPTION =
  "AI products that keep working after the demo is over. Voice agents, assistants, and the machinery that runs them.";

export const SOCIALS = {
  github: "https://github.com/Chaitanya299",
  linkedin: "https://www.linkedin.com/in/saichaitanyaparasana",
};
