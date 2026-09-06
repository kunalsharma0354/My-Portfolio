import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Download, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { PulseBadge } from '@/components/ui/PulseBadge';
import { TypewriterText } from '@/components/ui/TypewriterText';
import { Reveal } from '@/components/common/Reveal';
import { Letters } from '@/components/common/Letters';
import { personalInfo, resume } from '@/data/portfolio';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Hero() {
  const reduced = useReducedMotion();
  const firstName = personalInfo.name.split(' ')[0];
  const lastName = personalInfo.name.split(' ').slice(1).join(' ');

  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollY } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const nameY = useTransform(scrollY, [0, 400], [0, -48]);
  const heroFade = useTransform(scrollY, [0, 260], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="top"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,theme(colors.mono.800/50),transparent_70%)]"
      />

      <Container className="relative z-10">
        <p className="eyebrow mb-8">
          <span className="text-white">$</span>
          <TypewriterText
            text=" welcome to my portfolio"
            speed={45}
            startDelay={400}
            className="inline-block"
          />
        </p>

        <motion.h1
          className="font-mono font-black tracking-tight text-white"
          style={reduced ? undefined : { y: nameY, opacity: heroFade }}
        >
          <Letters text={firstName} className="fluid-hero block" />
          <Letters text={lastName} className="fluid-hero block text-mono-500" glitch />
        </motion.h1>

        <Reveal delay={0.15}>
          <p className="mt-7 max-w-2xl fluid-base leading-relaxed text-mono-300 sm:mt-8 sm:text-lg lg:text-xl">
            {personalInfo.headline}
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-mono-500 sm:text-xs">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-white" aria-hidden="true" />
              {personalInfo.location}
            </span>
            <span>{personalInfo.education}</span>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Button href="#projects" variant="primary" size="lg" magnetic>
              View Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="#contact" variant="ghost" size="lg" magnetic>
              Contact Me
              <Send className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              href={resume.path}
              download={resume.filename}
              variant="primary"
              size="lg"
              magnetic
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download CV
            </Button>
            <PulseBadge text="Available for opportunities" />
          </div>
        </Reveal>
      </Container>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow" aria-hidden="true">
        <ChevronDown className="h-6 w-6 text-mono-500" />
      </div>
    </section>
  );
}