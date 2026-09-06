import { Reveal } from '@/components/common/Reveal';
import { Section } from '@/components/ui/Section';
import { Tilt } from '@/components/ui/Tilt';
import { strengths } from '@/data/portfolio';

export function Strengths() {
  return (
    <Section id="strengths" no="04" label="capabilities" title="My Strengths">
      <div className="grid gap-px overflow-hidden border border-mono-800 bg-mono-800 sm:grid-cols-2 lg:grid-cols-3">
        {strengths.map((strength, index) => {
          const Icon = strength.icon;
          return (
            <Reveal key={strength.title} delay={(index % 3) * 0.07} className="h-full">
              <Tilt className="h-full" maxTilt={4} lift={2}>
                <div className="group flex h-full items-center gap-4 bg-mono-950 p-5 transition-colors duration-200 hover:bg-mono-900 sm:gap-5 sm:p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-mono-700 transition-all duration-200 group-hover:border-white group-hover:bg-white group-hover:text-black sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-mono-600">
                      0{index + 1}
                    </span>
                    <p className="font-mono text-xs font-bold uppercase leading-snug tracking-wide text-white sm:text-sm">
                      {strength.title}
                    </p>
                  </div>
                </div>
              </Tilt>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}