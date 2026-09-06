import { useEffect, useState } from 'react';
import { useInViewOnce } from '@/hooks/useIntersectionObserver';

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

export function StatCounter({ value, label, suffix = '', duration = 1200 }: StatCounterProps) {
  const [ref, inView] = useInViewOnce<HTMLDivElement>();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <div ref={ref}>
      <p className="stat-num font-mono text-2xl font-black text-white sm:text-3xl lg:text-4xl">
        {display}
        <span className="text-mono-500">{suffix}</span>
      </p>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-mono-500 sm:text-[11px]">
        {label}
      </p>
    </div>
  );
}