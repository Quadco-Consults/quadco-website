"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

/**
 * Wraps children with a vertical parallax scroll effect.
 *
 * `speed` controls the intensity:
 *  - 0 = no parallax (moves with page)
 *  - 0.5 = moderate parallax (default)
 *  - 1 = heavy parallax
 *  - Negative values invert the direction
 */
export function Parallax({
  children,
  speed = 0.5,
  className,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map scroll progress [0, 1] to a vertical pixel offset.
  // A speed of 0.5 produces a range of roughly -75px to 75px.
  const range = 150 * speed;
  const y = useTransform(scrollYProgress, [0, 1], [-range, range]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
