import { useTypewriter } from '@/hooks/useTypewriter';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  cursor?: boolean;
}

export function TypewriterText({
  text,
  speed = 30,
  startDelay = 350,
  className = '',
  cursor = true,
}: TypewriterTextProps) {
  const reduced = useReducedMotion();
  const { displayed } = useTypewriter(text, { speed, startDelay });

  return (
    <span className={className} aria-label={text} role="text">
      <span aria-hidden="true">{displayed}</span>
      {cursor && !reduced ? (
        <span className="typewriter-cursor" aria-hidden="true" />
      ) : null}
    </span>
  );
}