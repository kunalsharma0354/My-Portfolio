import { Download } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/common/Reveal';
import { Section } from '@/components/ui/Section';
import { PhotoFrame } from '@/components/ui/PhotoFrame';
import { StatCounter } from '@/components/ui/StatCounter';
import { photo, projects, resume, skillGroups, strengths } from '@/data/portfolio';
import developerPhoto from '@/assets/images/developer.png';

const facts = [
  { label: 'location', value: 'Nagpur, Maharashtra, India' },
  { label: 'focus', value: 'Web · Android · APIs' },
  { label: 'education', value: 'Higher Secondary Education' },
  { label: 'motto', value: 'Ship fast, solve problems.' },
];

const stats = [
  { label: 'projects built', value: projects.length, suffix: '' },
  { label: 'strengths', value: strengths.length, suffix: '' },
  {
    label: 'skills',
    value: skillGroups.reduce((total, group) => total + group.skills.length, 0),
    suffix: '+',
  },
  { label: 'skill areas', value: skillGroups.length, suffix: '' },
];

export function About() {
  return (
    <Section id="about" no="01" label="about" title="About Me">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-5">
          <PhotoFrame
            src={developerPhoto}
            alt={photo.alt}
            caption="$ whoami --photo — developer portrait"
          />
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <div className="space-y-5 fluid-lg leading-relaxed text-mono-300">
              <p>
                <span className="font-mono text-white">&lt;intro&gt;</span>
              </p>
              <p>
                I'm <span className="font-semibold text-white">Kunal Sharma</span> — a
                developer from Nagpur building practical <span className="text-white">web</span>{' '}
                and <span className="text-white">Android</span> applications. My work spans
                React + TypeScript frontends, Vercel Serverless APIs, and Kotlin apps.
              </p>
              <p className="text-mono-400">
                I ship projects end-to-end — idea → implementation — using modern
                development tools and AI-assisted workflows to move faster, debug
                systematically, and solve problems at the intersection of frontend, backend,
                and mobile.
              </p>
              <p>
                <span className="font-mono text-white">&lt;/intro&gt;</span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 border border-mono-800">
              <p className="border-b border-mono-800 px-5 py-4 font-mono text-xs uppercase tracking-[0.25em] text-mono-500 sm:px-6">
                // facts
              </p>
              <dl className="divide-y divide-mono-800">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-baseline justify-between gap-4 px-5 py-4 transition-transform duration-200 hover:translate-x-1 sm:px-6 sm:py-5"
                  >
                    <dt className="shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] text-mono-600 sm:text-xs">
                      {fact.label}
                    </dt>
                    <dd className="text-right fluid-base font-semibold text-white">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 border-t border-mono-800 pt-6">
              <Button href={resume.path} download={resume.filename} variant="ghost" size="md">
                <Download className="h-4 w-4" aria-hidden="true" />
                $ download --resume
              </Button>
              <p className="mt-2 font-mono text-[11px] text-mono-600">
                // terminal: curl -O {resume.path}
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.15}>
        <div
          role="note"
          className="mt-10 flex flex-col gap-3 border-l-4 border-l-white bg-mono-900 p-5 shadow-hard shadow-white/10 sm:p-6 lg:mt-12"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-mono-500">
            <span className="text-white">$</span> whoami --brief
          </p>
          <p className="font-mono text-lg font-bold leading-snug text-white sm:text-xl lg:text-2xl">
            Self-taught developer —{' '}
            <span className="text-mono-300">2+ years of hands-on building</span> across{' '}
            <span className="underline decoration-white/50 underline-offset-4">web</span>,{' '}
            <span className="underline decoration-white/50 underline-offset-4">Android</span> and{' '}
            <span className="underline decoration-white/50 underline-offset-4">APIs</span>.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-mono-800 bg-mono-800 lg:grid-cols-4 lg:mt-14">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-mono-950 px-4 py-6 sm:px-6 sm:py-7">
              <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}