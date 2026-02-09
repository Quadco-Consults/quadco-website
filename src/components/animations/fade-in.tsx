"use client";

import { motion } from "framer-motion";
import { ANIMATION } from "@/lib/animation-presets";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
}

const directionOffset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = ANIMATION.duration.normal,
  className,
}: FadeInProps) {
  const offset = directionOffset[direction];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={ANIMATION.viewport}
      transition={{
        duration,
        delay,
        ease: ANIMATION.ease.default,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
