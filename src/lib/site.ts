// Single source of truth for absolute URLs (metadata, robots, sitemap, JSON-LD).
// Override NEXT_PUBLIC_APP_URL in the deploy env once a custom domain is connected.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_APP_URL || "https://chaitanyaparasana.com"
).replace(/\/$/, "");

export const SITE_NAME = "Chaitanya Parasana";
export const SITE_TITLE = "Chaitanya Parasana | Full-Stack & AI Engineer";
export const SITE_DESCRIPTION =
  "AI products that keep working after the demo is over. Assistants you can talk to, search that understands a plain question, and the quiet machinery that keeps both running in production.";

export const SOCIALS = {
  github: "https://github.com/Chaitanya299",
  linkedin: "https://www.linkedin.com/in/saichaitanyaparasana",
};
