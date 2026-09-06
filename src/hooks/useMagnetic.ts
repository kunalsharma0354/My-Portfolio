import { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const EASE_OUT = 'cubic-bezier(0.23, 1, 0.32, 1)';

export function useMagnetic<T extends HTMLElement>(strength = 0.3) {
  const ref = useRef<T | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced || strength <= 0) return;

    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (!finePointer) return;

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      el.style.transition = 'transform 0.16s ease-out';
      el.style.transform = `translate3d(${dx * strength}px, ${dy * strength}px, 0)`;
    };

    const onLeave = () => {
      el.style.transition = `transform 0.45s ${EASE_OUT}`;
      el.style.transform = 'translate3d(0, 0, 0)';
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
      el.style.transform = '';
    };
  }, [reduced, strength]);

  return ref;
}