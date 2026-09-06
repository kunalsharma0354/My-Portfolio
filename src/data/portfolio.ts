import type { LucideIcon } from 'lucide-react';
import {
  Boxes,
  Cloud,
  Code2,
  GitBranch,
  Globe,
  PlugZap,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
  TestTube2,
  Zap,
} from 'lucide-react';

export interface PersonalInfo {
  name: string;
  location: string;
  education: string;
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
  details: string[];
  techStack: string[];
  category: 'Web' | 'Android' | 'AI & Tools' | 'Discord';
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Strength {
  title: string;
  icon: LucideIcon;
}

export const personalInfo: PersonalInfo = {
  name: 'Kunal Sharma',
  location: 'Nagpur, Maharashtra, India',
  education: 'Secondary School Education',
  headline:
    'Building practical web and Android applications — React + TypeScript, Kotlin, and AI-assisted workflows for faster, cleaner engineering.',
  email: 'kunalsharma9321@gmail.com',
  github: 'https://github.com/kunalsharma0354',
  linkedin: 'https://linkedin.com/in/kunal-sharma-017000433',
  website: 'https://nexora-navy-omega.vercel.app',
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
    title: 'Web Development',
    icon: Globe,
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Vite',
      'Node.js',
      'Express.js',
      'TypeScript',
      'REST APIs',
      'CORS',
      'dotenv',
      'API authentication',
      'Rate limiting',
    ],
  },
  {
    title: 'Android Development',
    icon: Smartphone,
    skills: [
      'Kotlin',
      'Jetpack Compose',
      'Android Studio / AndroidIDE workflow',
      'Android application development',
      'ADB',
    ],
  },
  {
    title: 'Other Tools & Workflows',
    icon: Terminal,
    skills: [
      'Python',
      'Git / GitHub',
      'API integration',
      'JSON',
      'Linux/Termux basics',
      'Debugging',
      'AI-assisted development',
      'Vercel deployment',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'nexora-api-security-lab',
    title: 'NEXORA API Security Lab',
    description:
      'A production-ready educational platform demonstrating seven core API protection mechanisms through interactive labs — rate limiting, authentication, validation, payload limits, timeouts and layered defense.',
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