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
  } as const,
  viewport: {
    once: true,
    margin: '-10% 0px -10% 0px',
    amount: 0.15,
  } as const,
} as const;