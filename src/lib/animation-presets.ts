export const ANIMATION = {
  ease: {
    default: [0.25, 0.1, 0.25, 1] as const,
    smooth: [0.43, 0.13, 0.23, 0.96] as const,
    out: [0, 0, 0.2, 1] as const,
  },
  spring: {
    default: { type: "spring" as const, stiffness: 100, damping: 15 },
    bouncy: { type: "spring" as const, stiffness: 300, damping: 10 },
    gentle: { type: "spring" as const, stiffness: 80, damping: 20 },
  },
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 0.9,
    verySlow: 1.2,
  },
  viewport: {
    once: true,
    margin: "-100px" as const,
  },
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
} as const;
