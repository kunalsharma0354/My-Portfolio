import type { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';

interface SectionProps {
  id: string;
  no: string;
  label: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, no, label, title, children, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`scroll-mt-24 py-14 sm:py-20 md:py-24 lg:py-28 ${className}`}
    >
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