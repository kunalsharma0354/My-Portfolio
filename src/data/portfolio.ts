import type { LucideIcon } from 'lucide-react';
import {
  Boxes,
  Cloud,
  Code2,
  GitBranch,
  PlugZap,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TestTube2,
  Zap,
} from 'lucide-react';

export interface PersonalInfo {
  name: string;
  location: string;
  headline: string;
  email: string;
  github: string;
  linkedin: string;
  website: string;
}

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  challenges: string[];
  metrics: { value: string; label: string }[];
  details: string[];
  techStack: string[];
  category: 'Web' | 'Android' | 'AI & Tools' | 'Discord';
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface Strength {
  title: string;
  icon: LucideIcon;
}

export const personalInfo: PersonalInfo = {
  name: 'Kunal Sharma',
  location: 'Nagpur, Maharashtra, India',
  headline:
    'Building practical web and Android applications — React + TypeScript, Kotlin, and AI-assisted workflows for faster, cleaner engineering.',
  email: 'kunalsharma9321@gmail.com',
  github: 'https://github.com/kunalsharma0354',
  linkedin: 'https://linkedin.com/in/kunal-sharma-017000433',
  website: 'https://kunal-sharama-dev.vercel.app',
};

export const resume = {
  path: '/resume/Kunal_sharma.pdf',
  filename: 'Kunal_Sharma_Resume.pdf',
};

export const photo = {
  alt: 'Kunal Sharma — Developer',
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'AI / LLM',
    icon: Sparkles,
    skills: [
      'Prompt Engineering',
      'LLM Integration',
      'AI Application Development',
      'AI Automation',
      'AI Agents / Agentic Workflows',
      'RAG (Retrieval-Augmented Generation)',
      'AI-powered Document Q&A',
      'LLM API Integration',
    ],
  },
  {
    title: 'Development',
    icon: Code2,
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Vite',
      'Web Application Development',
      'API Development',
      'Serverless Development',
      'REST API Integration',
    ],
  },
  {
    title: 'Automation',
    icon: Zap,
    skills: [
      'Workflow Automation',
      'AI-driven Automation',
      'Automated Decision Workflows',
      'API-based Automation',
      'Web Automation',
    ],
  },
  {
    title: 'Security',
    icon: ShieldCheck,
    skills: [
      'API Security',
      'Authentication & Authorization',
      'API Key Authentication',
      'Rate Limiting',
      'Protected Routes',
      'Application Security',
      'Vulnerability Research',
      'Reverse Engineering',
      'APK/Binary Analysis',
      'Static Analysis',
      'Dynamic Analysis',
      'IDA Pro',
    ],
  },
  {
    title: 'Backend / API',
    icon: Server,
    skills: [
      'API Design',
      'API Integration',
      'Health Checks',
      'Logging & Monitoring',
      'Metrics',
      'Error Handling',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'nexora-api-security-lab',
    title: 'NEXORA API Security Lab',
    description:
      'A production-ready educational platform demonstrating seven core API protection mechanisms through interactive labs — rate limiting, authentication, validation, payload limits, timeouts and layered defense.',
    longDescription:
      'A hands-on educational platform that makes API security tangible. Each lab is a real, running endpoint you can attack, observe and fix — with live metrics, request logging with credential redaction, and a secure API key issuer. Built around one simple idea: you learn security by breaking and fixing things yourself.',
    challenges: [
      'Designing 7 labs that are realistic enough to teach, but safe enough to share publicly',
      'Redacting sensitive data from request logs without hurting debuggability',
      'Keeping latency and TTL across the full lab state on Vercel KV within free-tier limits',
    ],
    metrics: [
      { value: '7', label: 'interactive labs' },
      { value: '7', label: 'protection mechanisms' },
      { value: '65', label: 'automated tests' },
      { value: '0', label: 'secrets leaked in logs' },
    ],
    details: [
      'React 18 + Vite 5 + TypeScript (strict) frontend',
      'Vercel Serverless backend (TypeScript)',
      '7 interactive security labs + secure API key issuer',
      'Real-time metrics, request logging & redaction',
      'Vercel KV / Upstash Redis state',
      '65-test suite, deployed live',
    ],
    techStack: ['React', 'Vite', 'TypeScript', 'Vercel', 'Upstash Redis', 'REST API'],
    category: 'Web',
    featured: true,
    githubUrl: 'https://github.com/kunalsharma0354/Api-Security-Lab',
  },
  {
    id: 'nexora-portfolio',
    title: 'NEXORA Portfolio',
    description:
      'Personal developer portfolio showcasing projects, skills and workflows — built and deployed to Vercel.',
    longDescription:
      'The site you are on right now. A monochrome brutalist personal portfolio — terminal-first design with typewriter effects, glitch typography, scanlines and magnetic interactions. Built with React 19, Vite and Tailwind, fully responsive and reduced-motion safe. Every section is data-driven from a single source of truth.',
    challenges: [
      'Committing to a strictly monochrome brutalist identity — zero color, but still visually rich',
      'Making heavy interactions (tilt, ripple, typewriter) degrade gracefully on touch devices',
      'Rendering a large one-page site without a single horizontal-overflow bug on 320px phones',
    ],
    metrics: [
      { value: '~120 kB', label: 'JS bundle, gzip' },
      { value: '0', label: 'horizontal overflow bugs' },
      { value: '320px', label: 'smallest tested viewport' },
      { value: '100%', label: 'reduced-motion safe' },
    ],
    details: [
      'Personal developer portfolio',
      'Deployed on Vercel',
      'nexora-navy-omega.vercel.app',
    ],
    techStack: ['React', 'Vite', 'TypeScript', 'Vercel'],
    category: 'Web',
    featured: true,
    liveUrl: 'https://nexora-navy-omega.vercel.app',
  },
  {
    id: 'docly',
    title: 'Docly',
    description:
      'AI-powered document assistant for Android — one-tap summaries and chat for PDFs, Word, Excel, e-books and images, with on-device extraction powered by Mistral AI.',
    longDescription:
      'An all-in-one document AI assistant for Android. Open any document — PDF, Word, Excel, e-book or scanned image — and Docly summarizes it, chats with its content across 85+ languages, and reads it aloud with language-aware voices. Extraction happens on-device through ML Kit OCR; understanding happens through Mistral AI.',
    challenges: [
      'Bridging on-device OCR extraction with cloud LLM context cleanly on phone hardware',
      'Getting one-tap flows to feel instant despite multiple processing stages',
      'Protecting the build from tampering via an integrity blob (secgen plugin)',
    ],
    metrics: [
      { value: '85+', label: 'languages supported' },
      { value: '4', label: 'document types' },
      { value: '1-tap', label: 'summary flow' },
      { value: 'on-device', label: 'OCR extraction' },
    ],
    details: [
      'Kotlin + Jetpack Compose (Material 3)',
      'One-tap AI summaries from PDFs, Office, e-books & OCR images',
      'Chat with your document — 85+ languages via Mistral AI',
      'Read aloud (TTS) with language-aware voices',
      'Tamper-proof build via integrity blob (secgen plugin)',
    ],
    techStack: ['Kotlin', 'Jetpack Compose', 'Mistral AI', 'ML Kit OCR', 'Material 3'],
    category: 'Android',
    githubUrl: 'https://github.com/kunalsharma0354/Docly',
    featured: false,
  },
  {
    id: 'savora',
    title: 'Savora',
    description:
      'A modern Android media downloader — paste a YouTube (videos, Shorts) or Instagram (Reels) link and Savora detects the platform, resolves formats automatically and saves to Downloads.',
    longDescription:
      'A pragmatic offline-first media downloader. Paste any YouTube or Instagram link and Savora auto-detects the platform, resolves available formats, and saves to the device — with video, video-only and audio modes, bitrate selection, 4K options and a live preview card before you commit to a download.',
    challenges: [
      'Serving YouTube, Shorts and Instagram through one clean auto-resolver flow',
      'Processing media reliably on-device with MediaExtractor / MediaMuxer',
      'Keeping the preview card accurate and the UI state-safe across downloads',
    ],
    metrics: [
      { value: '2', label: 'platforms auto-detected' },
      { value: '4K', label: 'max quality' },
      { value: '3', label: 'download modes' },
      { value: '1 paste', label: 'to resolve a link' },
    ],
    details: [
      'Kotlin + Jetpack Compose (Material 3)',
      'Video, video-only & audio download modes',
      'YouTube via Innertube API, Instagram via auto-resolver',
      'Audio bitrate selection, 4K quality options',
      'On-device media processing via MediaExtractor / MediaMuxer',
      'Accurate preview card + state-safe UI',
    ],
    techStack: ['Kotlin', 'Jetpack Compose', 'MediaMuxer', 'YouTube Innertube API', 'MediaStore'],
    category: 'Android',
    githubUrl: 'https://github.com/kunalsharma0354/Savora',
    featured: false,
  },
];

export const milestones: Milestone[] = [
  {
    year: '2023',
    title: '$ mkdir --hidden .start',
    description:
      'An empty directory in a quiet room. No account, no history, no trace — the first signal appeared, committed to no one.',
  },
  {
    year: '2024',
    title: 'offline builds // NO SYNC',
    description:
      'First web stacks compiled in the dark. Android binaries flashed and wiped. Every line exists where nobody can find it — except me.',
  },
  {
    year: '2025',
    title: '> ACCESS DENIED',
    description:
      'Projects that never shipped publicly. An API security lab running on a private node. AI tools built for an audience of one. More happened here than this page will ever admit.',
  },
  {
    year: '2026',
    title: '$ git push --public',
    description:
      'The curtain dropped. Docly, Savora, NEXORA API Security Lab and the person behind them finally sync to a public address — kunalsharma0354.',
  },
  {
    year: '2026',
    title: 'THE SIGNAL IS LIVE',
    description:
      'This page. Three-plus years compressed into a blinking cursor. Everything before it was just what survived the wipe.',
  },
];

export const strengths: Strength[] = [
  { title: 'Building complete projects from idea → implementation', icon: Rocket },
  { title: 'Frontend development', icon: Code2 },
  { title: 'Backend / API development', icon: Server },
  { title: 'Android application development', icon: Smartphone },
  { title: 'API integration', icon: PlugZap },
  { title: 'Authentication & basic API security', icon: ShieldCheck },
  { title: 'Debugging and troubleshooting', icon: TestTube2 },
  { title: 'Rapid prototyping', icon: Zap },
  { title: 'AI-assisted development workflow', icon: Sparkles },
  { title: 'GitHub project management', icon: GitBranch },
  { title: 'Deployment and hosting', icon: Cloud },
];

/** Fallback placeholder icon — keeps imports stable without touching `any`. */
export const fallbackIcon: LucideIcon = Boxes;