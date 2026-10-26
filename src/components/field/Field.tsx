"use client";

import { useEffect } from "react";
import { mount } from "./engine";
import { setup } from "./setup";

// Wraps the server-rendered v3 markup and runs the design's scripts against it once fonts are in
// (capped at 900ms) so the first paint never reflows mid-reveal, then fades the root in.
export default function Field({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-fe-root]");
    if (!root) return;
    let dead = false, started = false;
    let unmount: (() => void) | undefined, unsetup: (() => void) | undefined;
    const start = () => {
      if (started || dead) return;
      started = true;
      try {
        unmount = mount(root);
        unsetup = setup(root);
      } finally {
        if (document.visibilityState === "hidden") root.style.opacity = "1";
        else { root.style.transition = "opacity 0.7s cubic-bezier(0.16,1,0.3,1)"; void root.offsetWidth; root.style.opacity = "1"; }
      }
    };
    document.fonts?.ready.then(start);
    const t = setTimeout(start, 900);
    return () => { dead = true; clearTimeout(t); unsetup?.(); unmount?.(); };
  }, []);
  return children;
}
