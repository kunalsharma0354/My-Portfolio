import { personalInfo } from '@/data/portfolio';

const subject = 'Hiring Kunal Sharma — opportunity';

const body = [
  'Hi Kunal,',
  '',
  'I came across your portfolio and was impressed by your work.',
  "I'd like to talk about an opportunity with you.",
  '',
  'Best,',
  '[Your name]',
  '[Your role] — [Company]',
].join('\n');

export function hireComposeUrl() {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    tf: '1',
    to: personalInfo.email,
    su: subject,
    body,
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
}