"use client";

import { useState, useEffect } from "react";

/**
 * SSR-safe mounted check.
 * Returns false during server rendering and the initial client render,
 * then true after the component has mounted.
 *
 * Use this to guard browser-only APIs and prevent hydration mismatches.
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
