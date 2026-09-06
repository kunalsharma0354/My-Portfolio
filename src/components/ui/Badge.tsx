import type { LucideIcon } from 'lucide-react';

interface BadgeProps {
  label: string;
  icon?: LucideIcon;
}

export function Badge({ label, icon: Icon }: BadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-sm border border-mono-700 bg-mono-900/80 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-mono-400">
      {Icon ? <Icon className="h-3 w-3" aria-hidden="true" /> : null}
      {label}
    </span>
  );
}