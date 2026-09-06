export const motionTokens = {
  duration: {
    instant: 0.12,
    fast: 0.2,
    base: 0.35,
    slow: 0.55,
    slower: 0.8,
  } as const,
  ease: {
    standard: [0.22, 1, 0.36, 1] as const,
    sharp: [0.4, 0, 1, 1] as const,
    gentle: [0, 0, 0.2, 1] as const,
  },
  stagger: {
    tight: 0.035,
    base: 0.06,
    loose: 0.1,
    section: 0.08,
    card: 0.08,
    list: 0.04,
    nav: 0.02,
  } as const,
  spring: {
    snappy: { stiffness: 450, damping: 28, mass: 0.6 } as const,
    gentle: { stiffness: 180, damping: 22, mass: 0.8 } as const,
    bouncy: { stiffness: 350, damping: 20, mass: 0.7 } as const,
  },
  viewport: {
    once: true,
    margin: '-10% 0px -10% 0px',
    amount: 0.15,
  } as const,
} as const;