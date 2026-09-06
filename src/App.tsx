import { useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TechTicker } from '@/components/common/TechTicker';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Hero } from '@/components/sections/Hero';
import { Journey } from '@/components/sections/Journey';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Strengths } from '@/components/sections/Strengths';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const shortcuts = [
  { key: 'g', action: 'projects' },
  { key: 's', action: 'skills' },
  { key: 'a', action: 'about' },
  { key: 'j', action: 'journey' },
  { key: 'k', action: 'contact' },
  { key: 'm', action: 'menu' },
  { key: '?', action: 'undo' },
];

function scrollToSection(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function App() {
  const [showShortcuts, setShowShortcuts] = useState(false);
  const reduced = useReducedMotion();

  const toggleHelp = useCallback(() => {
    setShowShortcuts((value) => !value);
  }, []);

  useKeyboardShortcuts({
    g: () => scrollToSection('#projects'),
    s: () => scrollToSection('#skills'),
    a: () => scrollToSection('#about'),
    j: () => scrollToSection('#journey'),
    k: () => scrollToSection('#contact'),
    '?': toggleHelp,
    '/': toggleHelp,
  });

  return (
    <div className="min-h-screen bg-mono-950 noise-overlay scanlines">
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-[0.2em] focus:text-black"
      >
        Skip to projects
      </a>

      <Header />
      <main>
        <Hero />
        <TechTicker />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Strengths />
        <Contact />
      </main>
      <Footer />

      <AnimatePresence>
        {showShortcuts ? (
          <motion.div
            role="dialog"
            aria-label="Keyboard shortcuts"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: reduced ? 0 : 0.25, ease: 'easeOut' }}
            className="fixed bottom-5 left-5 z-[60] border border-mono-700 bg-mono-950/95 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.15em] shadow-hard shadow-black/50 backdrop-blur-sm sm:bottom-8 sm:left-8"
          >
            <p className="mb-2 text-mono-500">// keyboard shortcuts</p>
            <ul className="space-y-1.5">
              {shortcuts.map((item) => (
                <li key={item.key}>
                  <span className="inline-block w-6 text-right text-white">{item.key}</span>
                  <span className="text-mono-600"> → </span>
                  <span className="text-mono-300">{item.action}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-mono-600">press ? to undo</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}