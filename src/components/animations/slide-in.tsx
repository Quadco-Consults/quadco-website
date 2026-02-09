"use client";

import { motion } from "framer-motion";
import { ANIMATION } from "@/lib/animation-presets";
import { cn } from "@/lib/utils";

interface SlideInProps {
  children: React.ReactNode;
  from?: "left" | "right";
  delay?: number;
  className?: string;
}

export function SlideIn({
  children,
  from = "left",
  delay = 0,
  className,
}: SlideInProps) {
  const xOffset = from === "left" ? -100 : 100;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: xOffset,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={ANIMATION.viewport}
      transition={{
        duration: ANIMATION.duration.slow,
        delay,
        ease: ANIMATION.ease.smooth,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
