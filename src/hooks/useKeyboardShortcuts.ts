import { useEffect, useRef } from 'react';

export type ShortcutHandlers = Record<string, (event: KeyboardEvent) => void>;

export function useKeyboardShortcuts(handlers: ShortcutHandlers) {
  const ref = useRef<ShortcutHandlers>(handlers);

  useEffect(() => {
    ref.current = handlers;
  }, [handlers]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable)
      ) {
        return;
      }
      const handler = ref.current[event.key.toLowerCase()];
      if (handler) {
        event.preventDefault();
        handler(event);
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
}