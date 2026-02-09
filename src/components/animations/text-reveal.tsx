"use client";

import { motion } from "framer-motion";
import { ANIMATION } from "@/lib/animation-presets";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  /** Words matching keys in this map get the corresponding class applied (e.g. gradient-text). */
  highlightWords?: Record<string, string>;
  /** Shorthand: apply this class to every word that should be highlighted. */
  highlightClass?: string;
  /** List of words (case-insensitive) that receive the highlightClass. */
  highlightTarget?: string[];
}

const containerVariants = (delay: number) => ({
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION.stagger.fast,
      delayChildren: delay,
    },
  },
});

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: ANIMATION.duration.normal,
      ease: ANIMATION.ease.smooth,
    },
  },
};

export function TextReveal({
  text,
  className,
  delay = 0,
  highlightWords,
  highlightClass,
  highlightTarget,
}: TextRevealProps) {
  const words = text.split(" ");

  const getWordClass = (word: string): string | undefined => {
    // Check the explicit highlightWords map first
    if (highlightWords) {
      const match = highlightWords[word] || highlightWords[word.toLowerCase()];
      if (match) return match;
    }

    // Then check the target list with the shorthand class
    if (highlightClass && highlightTarget) {
      const normalised = word.toLowerCase().replace(/[^a-z0-9]/g, "");
      if (
        highlightTarget.some(
          (t) => t.toLowerCase().replace(/[^a-z0-9]/g, "") === normalised
        )
      ) {
        return highlightClass;
      }
    }

    return undefined;
  };

  return (
    <motion.span
      variants={containerVariants(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={ANIMATION.viewport}
      className={cn("inline-flex flex-wrap", className)}
      aria-label={text}
    >
      {words.map((word, i) => {
        const extraClass = getWordClass(word);
        return (
          <motion.span
            key={`${word}-${i}`}
            variants={wordVariants}
            className={cn("mr-[0.25em] inline-block", extraClass)}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.span>
  );
}
