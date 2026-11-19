import type { LucideIcon } from 'lucide-react';
import {
  Boxes,
  Cloud,
  Code2,
  GitBranch,
  Monitor,
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
    'Software engineer building production-oriented web, API, desktop and Android applications — C#, .NET, TypeScript, React, Kotlin and AI/LLM integration.',
  email: 'kunalsharma9321@gmail.com',
  github: 'https://github.com/kunalsharma0354',
  linkedin: 'https://linkedin.com/in/kunal-sharma-017000433',
  website: 'https://kunal-sharama-dev.vercel.app',
};

export const resume = {
  path: '/resume/Kunal_Sharma_Resume.pdf',
  filename: 'Kunal_Sharma_Resume.pdf',
};

export const photo = {
  alt: 'Kunal Sharma — Developer',
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'AI / Agents',
    icon: Sparkles,
    skills: [
      'Model Context Protocol (MCP)',
      'MCP Server Development',
      'Tool Calling',
      'AI Agent Workflows',
      'Prompt Engineering',
      'LLM Integration',
      'RAG',
      'AI Automation',
    ],
  },
  {
    title: 'Languages',
    icon: Code2,
    skills: ['C#', 'TypeScript', 'JavaScript', 'Python', 'Kotlin'],
  },
  {
    title: 'Frontend',
    icon: Monitor,
    skills: [
      'React 18/19',
      'Next.js 14',
      'Vite',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Accessibility (ARIA/WCAG)',
      'Web Application Development',
    ],
  },
  {
    title: 'Backend / API',
    icon: Server,
    skills: [
      'Node.js',
      'Express',
      'REST APIs',
      'Serverless',
      '.NET 8',
      'Dependency Injection',
      'Async/Await',
      'Authentication',
      'Rate Limiting',
    ],
  },
  {
    title: 'Android',
    icon: Smartphone,
    skills: [
      'Jetpack Compose',
      'Material 3',
      'MVVM',
      'Clean Architecture',
      'Hilt',
      'Room',
      'WorkManager',
      'Coroutines / Flow',
    ],
  },
  {
    title: 'Security',
    icon: ShieldCheck,
    skills: [
      'API Security',
      'HMAC-SHA256',
      'Timing-Safe Verification',
      'API Key Management',
      'CORS',
      'Path Traversal Prevention',
      'Vulnerability Research',
      'Reverse Engineering',
      'APK/Binary Analysis',
      'IDA Pro',
    ],
  },
  {
    title: 'Desktop / Automation',
    icon: Zap,
    skills: [
      'WinForms',
      'WebView2',
      'Browser Automation',
      'DOM Interaction',
      'JavaScript Evaluation',
      'Workflow Automation',
    ],
  },
  {
    title: 'Cloud / DevOps',
    icon: Cloud,
    skills: [
      'Vercel',
      'Vercel KV',
      'Upstash Redis',
      'CI/CD',
      'Git',
      'GitHub',
      'Unit & Integration Testing',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'nexora-mcp',
    title: 'NEXORA MCP',
    description:
      'A dual-mode Windows executable — a WinForms dashboard with an embedded WebView2 browser plus a stdio MCP server exposing 36 tools to AI coding assistants such as OpenCode.',
    longDescription:
      'An AI tooling platform shipped as a single Windows executable. One side is a WinForms dashboard with an embedded WebView2 browser; the other is a stdio Model Context Protocol server that exposes 36 tools to AI coding assistants. 29 of those tools drive real browser automation — selector and coordinate clicks, form fills, JS evaluation, accessibility snapshots, multi-tab control, uploads, drag-and-drop and proxying — all over one shared session.',
    challenges: [
      'Keeping 29 browser-automation tools stable over one shared WebView2 session',
      'Guarding a file-based skill registry with ID validation, path-traversal guards and dependency/cycle detection',
      'Delivering 10-second hot reload with auth that self-heals on HTTP 401',
    ],
    metrics: [
      { value: '36', label: 'MCP tools' },
      { value: '29', label: 'browser tools' },
      { value: '27', label: 'skills registered' },
      { value: '10s', label: 'hot reload' },
    ],
    details: [
      'C# + .NET 8 + WinForms + WebView2',
      'Stdio Model Context Protocol server',
      '36 tools for AI coding assistants',
      '29 browser-automation tools on one session',
      '27-skill registry · hot reload · 401 self-heal',
    ],
    techStack: ['C#', '.NET 8', 'WinForms', 'WebView2', 'MCP', 'Next.js 14'],
    category: 'AI & Tools',
    githubUrl: 'https://github.com/kunalsharma0354/NEXORA-MCP',
    featured: true,
  },
  {
    id: 'nexora-detective-ai',
    title: 'NEXORA Detective AI',
    description:
      'An AI case-investigation platform that maps cases, people, timelines, evidence and statements onto an interactive node graph — with AI-generated questions, hypotheses and next actions.',
    longDescription:
      'A canvas-based investigation workspace. Cases, people, timelines, evidence and statements live on one interactive node graph, while AI workflows read the case context and generate investigative questions, hypotheses with confidence levels and suggested next actions. Boards can also be built conversationally from natural language.',
    challenges: [
      'Mapping unstructured case notes into a readable, interactive node graph',
      'Generating hypotheses with confidence levels from incomplete case context',
      'Letting natural language build the board without breaking manual edits',
    ],
    metrics: [
      { value: '5', label: 'board entity types' },
      { value: '3', label: 'AI output types' },
      { value: '1', label: 'interactive canvas' },
      { value: 'Live', label: 'Vercel deployment' },
    ],
    details: [
      'React 19 + TypeScript + Vite',
      'Node graph: cases, people, timelines, evidence, statements',
      'AI questions, hypotheses & next actions',
      'Confidence levels on every hypothesis',
      'Conversational board-building from natural language',
    ],
    techStack: ['React 19', 'TypeScript', 'Vite', '@xyflow/react', 'Vercel'],
    category: 'AI & Tools',
    liveUrl: 'https://nexora-detective-ai.vercel.app',
    featured: true,
  },
  {
    id: 'nexora-api-security-lab',
    title: 'NEXORA API Security Lab',
    description:
      'A production-deployed API security platform with 7 interactive labs and 13 endpoints — rate limiting, authentication, validation, payload limits, timeouts and layered defense.',
    longDescription:
      'A hands-on educational platform that makes API security tangible. Each lab is a real, running endpoint you can attack, observe and fix — with live metrics, request logging with credential redaction, and a secure API key issuer. Built around one simple idea: you learn security by breaking and fixing things yourself.',
    challenges: [
      'Designing 7 labs that are realistic enough to teach, but safe enough to share publicly',
      'Redacting credentials from request logs without hurting debuggability',
      'Keeping fixed-window limits and lab state consistent on serverless + Upstash Redis',
    ],
    metrics: [
      { value: '7', label: 'interactive labs' },
      { value: '13', label: 'protected endpoints' },
      { value: '65', label: 'automated tests' },
      { value: '10/60s', label: 'rate limit' },
    ],
    details: [
      'React 18 + Vite + TypeScript (strict)',
      'Vercel Serverless backend + Upstash Redis',
      '7 labs · 13 endpoints · API key issuer',
      'HMAC-SHA256 timing-safe verification',
      'Metrics, request logs & health polling',
    ],
    techStack: ['React', 'TypeScript', 'Vite', 'Vercel', 'Upstash Redis', 'Node.js'],
    category: 'Web',
    liveUrl: 'https://nexoralab-phi.vercel.app',
    githubUrl: 'https://github.com/kunalsharma0354/Api-Security-Lab',
    featured: true,
  },
  {
    id: 'docly',
    title: 'Docly',
    description:
      'AI-powered document assistant for Android — extracts and summarizes 20+ formats with on-device OCR, then answers questions in 85+ languages via Mistral AI.',
    longDescription:
      'An all-in-one document AI assistant for Android. Open any document — PDF, Word, Excel, PowerPoint, e-book, CSV or scanned image — and Docly summarizes it, chats with its content across 85+ languages, and reads it aloud. Extraction happens fully on-device through ML Kit OCR; understanding happens through Mistral AI.',
    challenges: [
      'Extracting 20+ document formats entirely on-device',
      'Grounding answers in document content across 85+ languages',
      'Blocking tampering, re-signing, rooted devices and debugger attachment',
    ],
    metrics: [
      { value: '20+', label: 'document formats' },
      { value: '85+', label: 'languages supported' },
      { value: '100%', label: 'on-device extraction' },
      { value: 'AES-256', label: 'integrity blob' },
    ],
    details: [
      'Kotlin + Jetpack Compose (Material 3)',
      '20+ formats: PDF, Office, e-books, CSV & OCR images',
      '100% on-device extraction with ML Kit OCR',
      'Document-grounded Q&A in 85+ languages',
      'Per-build AES-256-GCM integrity binding',
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
      'A modern Android media downloader — paste a YouTube or Instagram link and Savora auto-detects the platform, resolves formats and saves 4K video with on-device DASH merging.',
    longDescription:
      'A pragmatic offline-first media downloader. Paste any YouTube (videos, Shorts) or Instagram (Reels) link and Savora auto-detects the platform, resolves available formats, and saves to the device — with video, video-only and audio modes, bitrate selection, 4K options and a live preview card. DASH streams are merged on-device through MediaExtractor and MediaMuxer.',
    challenges: [
      'Resolving YouTube and Instagram links through one auto-detect flow',
      'Merging DASH streams reliably on-device',
      'Keeping download state and previews accurate across concurrent jobs',
    ],
    metrics: [
      { value: '4K', label: 'max quality' },
      { value: '2', label: 'platforms auto-detected' },
      { value: 'DASH', label: 'on-device merging' },
      { value: '3', label: 'download modes' },
    ],
    details: [
      'Kotlin + Jetpack Compose (Material 3)',
      '4K YouTube videos, Shorts & Instagram Reels',
      'On-device DASH merging via MediaExtractor / MediaMuxer',
      'YouTube Innertube API + Instagram auto-resolver',
      'Video, video-only & audio download modes',
    ],
    techStack: ['Kotlin', 'Jetpack Compose', 'MediaExtractor', 'MediaMuxer', 'Innertube API'],
    category: 'Android',
    githubUrl: 'https://github.com/kunalsharma0354/Savora',
    featured: false,
  },
  {
    id: 'nexora-portfolio',
    title: 'NEXORA Portfolio',
    description:
      'This site — a monochrome brutalist portfolio built with React 19, Vite and Tailwind, deployed on Vercel and driven by a single content source.',
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
      'React 19 + Vite + TypeScript + Tailwind',
      'Data-driven sections from one content file',
      'Reduced-motion safe & keyboard navigable',
    ],
    techStack: ['React', 'Vite', 'TypeScript', 'Tailwind', 'Vercel'],
    category: 'Web',
    liveUrl: 'https://kunal-sharama-dev.vercel.app',
    featured: false,
  },
  {
    id: 'daily-reminder',
    title: 'Daily Reminder',
    description:
      'A habit tracker for Android built with Kotlin, Jetpack Compose and MVVM — streaks and consistency at a glance through a 16-week heatmap.',
    longDescription:
      'A focused habit tracker that keeps the feedback loop visual: each habit gets a 16-week heatmap so consistency is visible at a glance. Built with Kotlin, Jetpack Compose and MVVM as an exercise in clean state management and small, readable UI.',
    challenges: [
      'Rendering a readable 16-week heatmap at small screen sizes',
      'Keeping streak and completion state consistent through MVVM updates',
    ],
    metrics: [
      { value: '16', label: 'week heatmap' },
      { value: '1', label: 'habit tracker' },
      { value: 'MVVM', label: 'architecture' },
      { value: 'Kotlin', label: 'language' },
    ],
    details: [
      'Kotlin + Jetpack Compose',
      'MVVM state management',
      '16-week habit heatmap',
    ],
    techStack: ['Kotlin', 'Jetpack Compose', 'MVVM'],
    category: 'Android',
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
      'The curtain dropped. NEXORA MCP, Detective AI, the API Security Lab, Docly and Savora finally sync to a public address — kunalsharma0354.',
  },
  {
    year: '2026',
    title: 'THE SIGNAL IS LIVE',
    description:
      'Seven public repositories and four live deployments. This page is three-plus years compressed into a blinking cursor — everything before it was just what survived the wipe.',
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
  { title: 'AI agent & MCP tooling', icon: Sparkles },
  { title: 'Desktop automation (WinForms / WebView2)', icon: Monitor },
  { title: 'GitHub project management', icon: GitBranch },
  { title: 'Deployment and hosting', icon: Cloud },
];

/** Fallback placeholder icon — keeps imports stable without touching `any`. */
export const fallbackIcon: LucideIcon = Boxes;
