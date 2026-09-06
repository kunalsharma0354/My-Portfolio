import { Reveal } from '@/components/common/Reveal';
import { Section } from '@/components/ui/Section';
import { milestones } from '@/data/portfolio';

export function Journey() {
  return (
    <Section id="journey" no="02" label="journey" title="The Journey">
      <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-mono-500 sm:mb-10">
        <span className="text-white">$</span> git log --oneline --classified
      </p>

      <ol className="relative space-y-8 border-l border-mono-800 pl-6 sm:pl-8">
        {milestones.map((milestone, index) => (
          <Reveal key={`${milestone.year}-${milestone.title}`} delay={index * 0.05}>
            <li className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[31px] top-1.5 h-3 w-3 border border-white bg-mono-950 sm:-left-[39px]"
              />
              <div className="group flex flex-col gap-1 border-b border-mono-800/70 pb-5 transition-colors duration-200 group-hover:border-mono-600">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-mono-500 transition-colors group-hover:text-white">
                  // {milestone.year}
                </span>
                <h3 className="font-mono text-base font-bold text-white transition-transform duration-200 group-hover:translate-x-1 sm:text-lg">
                  {milestone.title}
                </h3>
                <p className="text-sm leading-relaxed text-mono-400 transition-transform duration-200 group-hover:translate-x-1 sm:text-base">
                  {milestone.description}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={0.15}>
        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-mono-600">
          // tip: not everything fits on a resume.
        </p>
      </Reveal>
    </Section>
  );
}