import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface LettersProps {
  text: string;
  className?: string;
  glitch?: boolean;
}

export function Letters({ text, className = '', glitch = false }: LettersProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <span className={`${glitch ? 'glitch-parent' : ''} ${className}`}>{text}</span>;
  }

  return (
    <span className={`${glitch ? 'glitch-parent' : ''} ${className}`} aria-label={text} role="text">
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          aria-hidden="true"
          data-glitch={glitch && char !== ' ' ? char : undefined}
          className={`inline-block whitespace-pre ${glitch && char !== ' ' ? 'glitch-char' : ''}`}
          initial={{ opacity: 0, y: '0.6em' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.03, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}