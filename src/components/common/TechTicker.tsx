import { skillGroups } from '@/data/portfolio';

export function TechTicker() {
  const items = skillGroups.flatMap((group) => group.skills);

  return (
    <div
      aria-hidden="true"
      className="group/tic relative overflow-hidden border-y border-mono-800 bg-mono-950 py-3 select-none sm:py-4"
    >
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap motion-reduce:animate-none group-hover/tic:[animation-play-state:paused]">
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-10 font-mono text-xs uppercase tracking-[0.2em] text-mono-500 sm:text-sm lg:text-base"
          >
            {item}
            <span className="text-mono-700">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}