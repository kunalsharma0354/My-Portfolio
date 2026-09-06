import type { ReactNode } from 'react';
import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SectionProps {
  id: string;
  no: string;
  label: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, no, label, title, children, className = '' }: SectionProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start start'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.3 });

  return (
    <section
      id={id}
      ref={ref}
      aria-labelledby={`${id}-title`}
      className={`relative scroll-mt-24 py-14 sm:py-20 md:py-24 lg:py-28 ${className}`}
    >
      {!reduced ? (
        <span
          aria-hidden="true"
          className="absolute right-4 top-10 bottom-10 hidden w-px overflow-hidden bg-mono-900 lg:block"
        >
          <motion.span className="block w-full origin-top bg-mono-300" style={{ scaleY: progress }} />
        </span>
      ) : null}
      <Container>
        <header className="mb-10 sm:mb-14">
          <p className="eyebrow">
            <span className="text-mono-100">{no}</span>
            <span className="mx-2 text-mono-600">/</span>
            {label}
          </p>
          <h2
            id={`${id}-title`}
            className="mt-4 border-b border-mono-800 pb-3 font-mono text-display-md font-bold uppercase tracking-tight text-white sm:pb-4"
          >
            {title}
          </h2>
        </header>
        {children}
      </Container>
    </section>
  );
}