import { ArrowUp, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { GithubIcon, LinkedInIcon } from '@/components/common/icons';
import { personalInfo } from '@/data/portfolio';
import { hireComposeUrl } from '@/lib/gmail';
import { openLinkedInProfile } from '@/lib/linkedin';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Strengths', href: '#strengths' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-mono-800 bg-mono-950">
      <div className="section-shell grid gap-10 py-14 sm:py-16 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-mono text-lg font-extrabold text-white">
            <span className="text-mono-500">$</span> whoami
          </p>
          <p className="mt-3 font-mono text-sm text-mono-400">
            {personalInfo.name}
          </p>
          <p className="mt-1 font-mono text-xs text-mono-600">{personalInfo.location}</p>
        </div>

        <nav aria-label="Footer" className="md:col-span-1">
          <p className="eyebrow mb-4">Navigation</p>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-mono text-xs uppercase tracking-[0.2em] text-mono-500 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow mb-4">Terminal</p>
          <div className="space-y-1.5 font-mono text-sm">
            <p className="text-mono-600">
              <span className="text-mono-400">❯</span>{' '}
              <span className="selectable">click https://kunal-sharama-dev.vercel.app</span>
            </p>
            <p className="text-white">Welcome to the portfolio.</p>
            <p className="text-mono-600">
              <span className="text-mono-400">❯</span> _
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button href={hireComposeUrl()} variant="outline" size="sm" target="_blank" rel="noopener noreferrer">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              Email
            </Button>
            <Button href={personalInfo.github} variant="outline" size="sm" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-3.5 w-3.5" />
              GitHub
            </Button>
            <Button
              href={personalInfo.linkedin}
              variant="outline"
              size="sm"
              rel="noopener noreferrer"
              onClick={(event) => {
                event.preventDefault();
                openLinkedInProfile(personalInfo.linkedin);
              }}
            >
              <LinkedInIcon className="h-3.5 w-3.5" />
              LinkedIn
            </Button>
            <a
              href="#top"
              aria-label="Back to top"
              className="ml-auto inline-flex h-11 w-11 items-center justify-center border border-mono-700 text-mono-400 transition-colors hover:border-white hover:text-white"
            >
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-mono-800">
        <div className="section-shell flex flex-col items-center justify-between gap-2 py-6 font-mono text-xs text-mono-600 sm:flex-row">
          <p>© 2023 {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}