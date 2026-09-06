interface PulseBadgeProps {
  text: string;
  className?: string;
}

export function PulseBadge({ text, className = '' }: PulseBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-sm border border-mono-700 bg-mono-900/60 px-3.5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-mono-300 ${className}`}
    >
      <span className="pulse-dot" aria-hidden="true" />
      <span>{text}</span>
    </span>
  );
}