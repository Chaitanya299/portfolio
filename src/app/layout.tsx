import "./globals.css";
import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION, SITE_OG_DESCRIPTION, SOCIALS } from "@/lib/site";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  keywords: [
    "Chaitanya Parasana",
    "Sai Chaitanya Parasana",
    "Full-stack engineer",
    "AI engineer",
    "AI agents",
    "voice agents",
    "Next.js developer",
    "freelance developer",
    "Hyderabad",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_OG_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_OG_DESCRIPTION,
  },
  category: "technology",
  verification: {
    google: "oJ_EOZdT1d7S5uI54MEOEf2jVUq_yEHzS4B12rlv_58",
    other: { "msvalidate.01": "806BB57F36CEEB7A77B7D6EB23F99AA5" },
  },
};

// JSON-LD: describe the site owner as a Person so search engines resolve the entity.
const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  alternateName: "Sai Chaitanya Parasana",
  url: SITE_URL,
  jobTitle: "Full-Stack & AI Engineer",
  description: SITE_DESCRIPTION,
  address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" },
  knowsAbout: [
    "AI agents",
    "Voice assistants",
    "Small language models",
    "Full-stack web development",
    "Next.js",
    "Kubernetes",
    "macOS and mobile apps",
  ],
  sameAs: [SOCIALS.github, SOCIALS.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${jetbrainsMono.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
