import { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const EASE_OUT = 'cubic-bezier(0.23, 1, 0.32, 1)';

export function useTilt3D<T extends HTMLElement>(
  maxTilt = 5,
  perspective = 900,
  lift = 3,
) {
  const ref = useRef<T | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (!finePointer) return;

    let raf = 0;

    const onEnter = () => {
      el.style.transition = 'transform 0.12s ease-out';
    };

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      const rx = (0.5 - py) * maxTilt;
      const ry = (px - 0.5) * maxTilt;

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform =
          `perspective(${perspective}px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(${lift}px)`;
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(raf);
      el.style.transition = `transform 0.5s ${EASE_OUT}`;
      el.style.transform = '';
    };

    el.addEventListener('pointerenter', onEnter);
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      el.removeEventListener('pointerenter', onEnter);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(raf);
      el.style.transform = '';
    };
  }, [reduced, maxTilt, perspective, lift]);

  return ref;
}