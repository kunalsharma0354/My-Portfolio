import { useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowRight, ExternalLink, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/common/Reveal';
import { Section } from '@/components/ui/Section';
import { personalInfo, resume } from '@/data/portfolio';
import { hireComposeUrl } from '@/lib/gmail';

const FORMSPREE_ID = (import.meta.env.VITE_FORMSPREE_ID as string | undefined)?.trim() || '';

type Status = 'idle' | 'sending' | 'sent' | 'error';

function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get('website') || '')) {
      setStatus('sent');
      return;
    }

    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (!name || !message) {
      setError('name and message are required.');
      setStatus('error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('invalid email address.');
      setStatus('error');
      return;
    }

    setError('');
    setStatus('sending');

    try {
      if (FORMSPREE_ID) {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ name, email, message }),
        });
        if (!response.ok) throw new Error('formspree');
        setStatus('sent');
      } else {
        window.open(
          hireComposeUrl({ subject: `Portfolio message from ${name}`, body: `${message}\n\n— ${name} (${email})` }),
          '_blank',
          'noopener,noreferrer',
        );
        setStatus('sent');
      }
    } catch {
      setError('failed to send — use the direct email button below.');
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="border border-mono-700 bg-mono-900/50 px-5 py-4 font-mono text-sm sm:px-6">
        <p className="text-white">[ status: sent ]</p>
        <p className="mt-1 text-mono-400">
          {FORMSPREE_ID
            ? 'message delivered — I usually reply within 48 hours.'
            : 'message staged in Gmail — hit send there and I will get it.'}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-9 space-y-4 sm:mt-10">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow mb-2 block">
            <span className="text-white">$</span> name:
          </span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className="w-full min-h-[44px] border border-mono-700 bg-mono-950 px-3 py-2 font-mono text-sm text-white placeholder:text-mono-600 focus:border-white"
            placeholder="your name"
          />
        </label>
        <label className="block">
          <span className="eyebrow mb-2 block">
            <span className="text-white">$</span> email:
          </span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="w-full min-h-[44px] border border-mono-700 bg-mono-950 px-3 py-2 font-mono text-sm text-white placeholder:text-mono-600 focus:border-white"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="eyebrow mb-2 block">
          <span className="text-white">$</span> message:
        </span>
        <textarea
          name="message"
          required
          rows={4}
          className="w-full border border-mono-700 bg-mono-950 px-3 py-2 font-mono text-sm text-white placeholder:text-mono-600 focus:border-white"
          placeholder="what are we building?"
        />
      </label>

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex min-h-[44px] items-center gap-2 border border-mono-400 bg-white px-5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-black transition-all duration-200 hover:border-white hover:bg-mono-100 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === 'sending' ? 'sending...' : '$ send message'}
        </button>
        <a
          href={hireComposeUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs uppercase tracking-[0.2em] text-mono-500 underline-offset-4 transition-colors hover:text-white hover:underline"
        >
          or {personalInfo.email}
        </a>
      </div>

      <p aria-live="polite" className="font-mono text-xs uppercase tracking-[0.2em]">
        {status === 'error' ? <span className="text-white">// error: {error}</span> : null}
        {status === 'idle' ? <span className="text-mono-600">// send = instant ping, no account needed</span> : null}
        {status === 'sending' ? <span className="text-mono-400">// transmitting...</span> : null}
      </p>
    </form>
  );
}

export function Contact() {
  return (
    <Section id="contact" no="06" label="connect" title="Let's Build Together">
      <Reveal>
        <div className="mx-auto max-w-3xl border border-mono-800 bg-mono-900/50 p-8 sm:p-14 lg:p-16">
          <p className="fluid-contact font-mono font-black tracking-tight text-white">
            Have a project <span className="text-mono-500">in mind?</span>
          </p>
          <p className="mt-6 max-w-xl fluid-base leading-relaxed text-mono-400 sm:text-lg">
            From idea → implementation. Web, APIs, or Android — my inbox is always open.
          </p>

          <ContactForm />

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Button
              href={hireComposeUrl()}
              variant="primary"
              size="lg"
              className="max-w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="selectable truncate text-sm font-semibold sm:text-base sm:font-bold">
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

          <p className="selectable mt-9 border-t border-mono-800 pt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-mono-500 sm:text-xs">
            <span className="text-white">$</span> echo "based in {personalInfo.location}"
          </p>
        </div>
      </Reveal>
    </Section>
  );
}