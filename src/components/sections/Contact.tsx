import { ArrowRight, ExternalLink, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/common/Reveal';
import { Section } from '@/components/ui/Section';
import { personalInfo, resume } from '@/data/portfolio';
import { hireComposeUrl } from '@/lib/gmail';

export function Contact() {
  return (
    <Section id="contact" no="05" label="connect" title="Let's Build Together">
      <Reveal>
        <div className="mx-auto max-w-3xl border border-mono-800 bg-mono-900/50 p-8 sm:p-14 lg:p-16">
          <p className="fluid-contact font-mono font-black tracking-tight text-white">
            Have a project <span className="text-mono-500">in mind?</span>
          </p>
          <p className="mt-6 max-w-xl fluid-base leading-relaxed text-mono-400 sm:text-lg">
            From idea → implementation. Web, APIs, or Android — my inbox is always open.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Button
              href={hireComposeUrl()}
              variant="primary"
              size="lg"
              className="max-w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="truncate text-sm font-semibold sm:text-base sm:font-bold">
                {personalInfo.email}
              </span>
            </Button>
            <Button href="#projects" variant="ghost" size="lg">
              View Work Again
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              href={resume.path}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              View Resume
            </Button>
          </div>

          <p className="mt-9 border-t border-mono-800 pt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-mono-500 sm:text-xs">
            <span className="text-white">$</span> echo "based in {personalInfo.location}"
          </p>
        </div>
      </Reveal>
    </Section>
  );
}