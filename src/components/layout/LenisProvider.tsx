"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const handle = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(handle);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
