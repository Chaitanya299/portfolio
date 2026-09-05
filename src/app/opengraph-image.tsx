import { ImageResponse } from "next/og";

export const alt = "Chaitanya Parasana, Full-Stack & AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Bone-paper-&-wine social card. 1200x630, built at deploy time.
export default function OgImage() {
  const bg = "#fbf8f1";
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
          padding: "70px 84px",
          color: ink,
          borderTop: `10px solid ${accent}`,
        }}
      >
        {/* kicker */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: `2px solid ${ink}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: accent }} />
          </div>
          <div style={{ fontSize: 23, letterSpacing: 7, textTransform: "uppercase", color: muted }}>
            Full-Stack &amp; AI Engineer · Hyderabad
          </div>
        </div>

        {/* name, stacked like the site headline */}
        <div style={{ display: "flex", flexDirection: "column", marginTop: -10 }}>
          <div style={{ display: "flex", fontSize: 138, fontWeight: 800, lineHeight: 0.92, letterSpacing: -6 }}>
            Chaitanya
          </div>
          <div style={{ display: "flex", fontSize: 138, fontWeight: 800, lineHeight: 0.92, letterSpacing: -6 }}>
            Parasana
          </div>
          <div style={{ display: "flex", marginTop: 30, fontSize: 38, color: muted, maxWidth: 940, lineHeight: 1.25 }}>
            AI products that keep working after the demo is over.
          </div>
        </div>

        {/* footer */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div style={{ width: 132, height: 5, background: accent }} />
          <div style={{ display: "flex", fontSize: 26, color: accent, letterSpacing: 2 }}>
            chaitanyaparasana.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
