import { personalInfo } from '@/data/portfolio';

const fallbackSubject = 'Hiring Kunal Sharma — opportunity';

const fallbackBody = [
  'Hi Kunal,',
  '',
  'I came across your portfolio and was impressed by your work.',
  "I'd like to talk about an opportunity with you.",
  '',
  'Best,',
  '[Your name]',
  '[Your role] — [Company]',
].join('\n');

export function hireComposeUrl(options: { subject?: string; body?: string } = {}) {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    tf: '1',
    to: personalInfo.email,
    su: options.subject ?? fallbackSubject,
    body: options.body ?? fallbackBody,
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
}