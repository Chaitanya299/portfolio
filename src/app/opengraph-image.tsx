import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const alt = "Chaitanya Parasana — Full-Stack & AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Bone-paper-&-wine social card. Rendered at build time; system fonts only.
export default function OgImage() {
  const bg = "#fdfbf6";
  const ink = "#241315";
  const accent = "#8c2a35";
  const muted = "#6f5a54";
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: bg,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "Georgia, 'Times New Roman', serif",
          color: ink,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              border: `2px solid ${ink}`,
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              fontFamily: "monospace",
              color: muted,
            }}
          >
            Full-Stack &amp; AI Engineer · Hyderabad
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 128, fontWeight: 700, lineHeight: 1, letterSpacing: -4 }}>
            {SITE_NAME}
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 40, color: muted, maxWidth: 900 }}>
            AI products that keep working after the demo is over.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 120, height: 4, background: accent }} />
          <div style={{ display: "flex", fontSize: 24, fontFamily: "monospace", color: accent, letterSpacing: 2 }}>
            saichaitanyadev.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
