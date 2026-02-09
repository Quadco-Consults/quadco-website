"use client";

import { useEffect, useRef } from "react";
import {
  useMotionValue,
  useTransform,
  animate,
  useInView,
  motion,
} from "framer-motion";
import { ANIMATION } from "@/lib/animation-presets";
import { cn } from "@/lib/utils";

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function Counter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: ANIMATION.viewport.margin,
  });

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, target, {
        duration,
        ease: ANIMATION.ease.out,
      });
      return () => controls.stop();
    }
  }, [isInView, motionValue, target, duration]);

  // Keep the DOM text in sync with the motion value
  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${latest}${suffix}`;
      }
    });
    return () => unsubscribe();
  }, [rounded, prefix, suffix]);

  return (
    <motion.span
      ref={ref}
      className={cn("tabular-nums", className)}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={ANIMATION.viewport}
      transition={{
        duration: ANIMATION.duration.fast,
        ease: ANIMATION.ease.default,
      }}
    >
      {prefix}0{suffix}
    </motion.span>
  );
}
