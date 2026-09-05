import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found | Chaitanya Parasana",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "1.5rem",
        padding: "clamp(24px, 8vw, 96px)",
        background: "var(--bg1)",
        color: "var(--t2)",
        fontFamily: "var(--font-sans)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--ac)",
        }}
      >
        Error 404
      </div>
      <h1
        style={{
          margin: 0,
          fontSize: "clamp(2.4rem, 8vw, 5rem)",
          fontWeight: 600,
          letterSpacing: "-0.04em",
          lineHeight: 0.95,
          color: "var(--ink)",
        }}
      >
        This page
        <br />
        drifted off.
      </h1>
      <p style={{ maxWidth: "46ch", fontSize: "1.05rem", lineHeight: 1.6 }}>
        The address you followed does not lead anywhere here. Head back to the start.
      </p>
      <Link
        href="/"
        style={{
          alignSelf: "flex-start",
          display: "inline-flex",
          alignItems: "center",
          gap: "12px",
          minHeight: "48px",
          padding: "14px 24px",
          background: "var(--ac)",
          color: "var(--bg0)",
          fontFamily: "var(--font-mono)",
          fontSize: "10.5px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        }}
      >
        Back to the portfolio →
      </Link>
    </main>
  );
}
