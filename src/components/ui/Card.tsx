import type { ElementType, ReactNode } from 'react';

type Variant = 'default' | 'inverted' | 'minimal';

interface CardProps {
  as?: ElementType;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

const variants: Record<Variant, string> = {
  default: 'border border-mono-800 bg-mono-900/70',
  inverted: 'border border-white bg-white text-black',
  minimal: 'border border-mono-800 bg-transparent',
};

export function Card({ as: Tag = 'div', variant = 'default', className = '', children }: CardProps) {
  return (
    <Tag className={`rounded-sm ${variants[variant]} transition-colors duration-200 ${className}`}>
      {children}
    </Tag>
  );
}