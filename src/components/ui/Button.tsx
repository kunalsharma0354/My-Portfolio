import type { ComponentPropsWithRef, PointerEvent as ReactPointerEvent } from 'react';
import { motion } from 'framer-motion';
import { useMagnetic } from '@/hooks/useMagnetic';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type Variant = 'primary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps
  extends Omit<
    ComponentPropsWithRef<'a'>,
    'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd'
  > {
  variant?: Variant;
  size?: Size;
  block?: boolean;
  magnetic?: boolean;
  ripple?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    'bg-white text-black shadow-hard-sm shadow-white/20 hover:bg-mono-200 hover:-translate-y-0.5 active:translate-x-px active:translate-y-px',
  ghost:
    'border border-mono-700 text-mono-200 hover:border-mono-400 hover:text-white hover:-translate-y-0.5',
  outline:
    'border-2 border-white text-white hover:bg-white hover:text-black hover:-translate-y-0.5',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-[11px] font-mono uppercase tracking-[0.2em]',
  md: 'px-6 py-3 text-sm font-semibold',
  lg: 'px-8 py-4 text-base font-bold sm:px-10',
};

export function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  magnetic = false,
  ripple = true,
  className = '',
  onPointerDown,
  children,
  ...props
}: ButtonProps) {
  const magneticRef = useMagnetic<HTMLAnchorElement>(magnetic ? 0.25 : 0);
  const reduced = useReducedMotion();

  const handleRipple = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    onPointerDown?.(event);
    if (!ripple || reduced) return;

    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.6;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const rippleSpan = document.createElement('span');
    rippleSpan.className = 'btn-ripple';
    rippleSpan.style.width = `${size}px`;
    rippleSpan.style.height = `${size}px`;
    rippleSpan.style.left = `${x}px`;
    rippleSpan.style.top = `${y}px`;
    el.appendChild(rippleSpan);

    window.setTimeout(() => rippleSpan.remove(), 550);
  };

  const needsWrap = magnetic || ripple;
  const interactive = magnetic || ripple;

  return (
    <motion.a
      ref={magnetic ? magneticRef : undefined}
      onPointerDown={interactive ? handleRipple : onPointerDown}
      className={`btn inline-flex min-h-[44px] items-center justify-center gap-2 rounded-sm transition-all duration-200 ${variants[variant]} ${sizes[size]} ${block ? 'w-full' : ''} ${interactive ? 'relative overflow-hidden' : ''} ${className}`}
      whileTap={reduced ? undefined : { scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 450, damping: 28, mass: 0.6 }}
      {...props}
    >
      {needsWrap ? (
        <span className="relative z-[1] inline-flex items-center gap-2">{children}</span>
      ) : (
        children
      )}
    </motion.a>
  );
}