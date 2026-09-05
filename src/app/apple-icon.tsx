import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Same open-C monogram as icon.svg, drawn as an inline SVG on a wine field.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#f1ece2",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="150" height="150" viewBox="0 0 32 32">
          <path d="M22 10.71 A 8 8 0 1 0 22 21.29" fill="none" stroke="#241315" strokeWidth="2.8" strokeLinecap="round" />
          <circle cx="22" cy="10.71" r="2.1" fill="#241315" />
          <circle cx="22" cy="21.29" r="2.1" fill="#241315" />
          <circle cx="16" cy="16" r="2.5" fill="#8c2a35" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
