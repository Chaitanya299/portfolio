"use client";

import { useEffect, useRef, useState } from "react";
import type { ChapterKey } from "./data";

// Shorter labels than the desktop rail so six cells fit at 375px / 320px.
const CHAPTERS: { key: ChapterKey; num: string; label: string }[] = [
  { key: "home", num: "00", label: "Start" },
  { key: "build", num: "01", label: "Build" },
  { key: "work", num: "02", label: "Work" },
  { key: "roadmap", num: "03", label: "Roadmap" },
  { key: "recognition", num: "04", label: "Awards" },
  { key: "contact", num: "05", label: "Contact" },
];

export function MobileChapterBar({
  active,
  onNavigate,
}: {
  active: ChapterKey;
  onNavigate: (key: ChapterKey) => void;
}) {
  const barRef = useRef<HTMLElement>(null);
  const [ind, setInd] = useState({ left: 0, width: 0, on: false });

  // Re-measure on active change and whenever the bar's box changes. A
  // ResizeObserver (fired post-layout) catches both cell reflow and the bar
  // going display:none -> flex across the 720px breakpoint, so the indicator
  // lands on the right cell instead of parking at left:0 while it was hidden.
  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const measure = () => {
      const cell = bar.querySelector<HTMLElement>(`[data-chapter="${active}"]`);
      if (!cell || !cell.offsetWidth) {
        setInd((s) => ({ ...s, on: false }));
        return;
      }
      setInd({ left: cell.offsetLeft, width: cell.offsetWidth, on: true });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(bar);
    return () => ro.disconnect();
  }, [active]);

  return (
    <nav ref={barRef} aria-label="Chapters" className="fld-mnav">
      <span
        aria-hidden
        className="fld-mnav-ind"
        style={{ left: ind.left, width: ind.width, opacity: ind.on ? 1 : 0 }}
      />
      {CHAPTERS.map((c) => (
        <a
          key={c.key}
          href={`#${c.key}`}
          data-chapter={c.key}
          aria-current={c.key === active ? "page" : undefined}
          className={`fld-mnav-cell${c.key === active ? " is-active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            onNavigate(c.key);
          }}
        >
          <span className="fld-mnav-num">{c.num}</span>
          <span className="fld-mnav-label">{c.label}</span>
        </a>
      ))}
    </nav>
  );
}
