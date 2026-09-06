import { useCallback, useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';
import { hireComposeUrl } from '@/lib/gmail';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Strengths', href: '#strengths' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    if (!open) return;
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const toggleMenu = useCallback(() => {
    if (window.matchMedia('(max-width: 1023px)').matches) {
      setOpen((value) => !value);
    }
  }, []);

  useKeyboardShortcuts({ m: toggleMenu });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-mono-800 bg-mono-950/90 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[2px] bg-white/10"
      >
        {!reduced ? (
          <motion.div
            className="h-full origin-left bg-white"
            style={{ scaleX: progress }}
          />
        ) : null}
      </div>

      <nav aria-label="Primary" className="section-shell flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-3 font-mono text-base font-extrabold tracking-tight text-white sm:text-lg">
          <span className="glitch-parent flex h-9 w-9 items-center justify-center border border-white text-sm">
            <span className="glitch-char" data-glitch="K">
              K
            </span>
            <span className="glitch-char" data-glitch="S">
              S
            </span>
          </span>
          <span className="hidden text-mono-500 sm:inline">
            <span className="text-white">kunal</span>_sharma()
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item, index) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="nav-link group font-mono text-xs uppercase tracking-[0.2em] text-mono-400 transition-colors hover:text-white"
              >
                <span className="text-mono-600">0{index + 1}.</span> {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href={hireComposeUrl()} variant="outline" size="sm" target="_blank" rel="noopener noreferrer">
            Hire Me
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-sm border border-mono-700 p-2 text-mono-200 active:scale-95 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      {open ? (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-mono-800 bg-mono-950 lg:hidden">
          <ul className="section-shell flex flex-col gap-1 py-6">
            {navItems.map((item, index) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 border-b border-mono-800 py-5 font-mono text-2xl uppercase tracking-tight text-white active:text-mono-400"
                >
                  <span className="text-sm text-mono-600">0{index + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-6">
              <Button
                href={hireComposeUrl()}
                variant="primary"
                block
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                Hire Me
              </Button>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}