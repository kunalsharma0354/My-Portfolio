import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface Options {
  speed?: number;
  startDelay?: number;
}

export function useTypewriter(text: string, { speed = 30, startDelay = 350 }: Options = {}) {
  const reduced = useReducedMotion();
  const [count, setCount] = useState(reduced ? text.length : 0);
  const intervalRef = useRef<number | null>(null);
  const done = count >= text.length;

  useEffect(() => {
    if (reduced) {
      setCount(text.length);
      return;
    }
    setCount(0);

    const timeout = window.setTimeout(() => {
      intervalRef.current = window.setInterval(() => {
        setCount((prev) => {
          if (prev >= text.length) {
            if (intervalRef.current) window.clearInterval(intervalRef.current);
            return prev;
          }
          return prev + 1;
        });
      }, speed);
    }, startDelay);

    return () => {
      window.clearTimeout(timeout);
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [text, speed, startDelay, reduced]);

  return { displayed: text.slice(0, count), done };
}