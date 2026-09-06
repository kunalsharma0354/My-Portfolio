import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { GithubIcon } from '@/components/common/icons';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import type { Project } from '@/data/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const categoryTag: Record<Project['category'], string> = {
  Web: 'WEB',
  Android: 'ANDROID',
  'AI & Tools': 'AI / TOOLS',
  Discord: 'DISCORD',
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const reduced = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!project) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
      <motion.button
        type="button"
        aria-label="Close project details"
        className="absolute inset-0 cursor-default bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduced ? 0 : 0.2 }}
      />

      <motion.div
        className="relative w-full max-w-2xl overflow-hidden border border-mono-800 bg-mono-950 shadow-hard shadow-black/70"
        role="document"
        initial={reduced ? false : { opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reduced ? undefined : { opacity: 0, y: 16, scale: 0.98 }}
        transition={
          reduced
            ? undefined
            : { type: 'spring', stiffness: 180, damping: 22, mass: 0.8 }
        }
      >
        <div className="flex items-center justify-between gap-4 border-b border-mono-800 px-5 py-3.5 sm:px-6">
          <p className="selectable truncate font-mono text-[11px] uppercase tracking-[0.15em] text-mono-500">
            <span className="text-white">$</span> cat {project.id}.json | jq .
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-mono-700 text-mono-400 transition-colors hover:border-white hover:text-white"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-5 py-6 sm:px-6 sm:py-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-mono-500">
            [{categoryTag[project.category]}]
          </p>
          <h3 id="project-modal-title" className="mt-2 font-mono text-xl font-black text-white sm:text-2xl">
            {project.title}
          </h3>

          <div className="mt-5 space-y-5">
            <div>
              <p className="eyebrow mb-2">// overview</p>
              <p className="fluid-base leading-relaxed text-mono-300">{project.longDescription}</p>
            </div>

            {project.metrics.length > 0 ? (
              <div>
                <p className="eyebrow mb-3">// impact</p>
                <div className="grid grid-cols-2 gap-px overflow-hidden border border-mono-800 bg-mono-800 sm:grid-cols-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="bg-mono-950 p-4 sm:p-5">
                      <p className="font-mono text-lg font-black tracking-tight text-white sm:text-xl">
                        {metric.value}
                      </p>
                      <p className="mt-1 font-mono text-[10px] uppercase leading-snug tracking-[0.2em] text-mono-500">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div>
              <p className="eyebrow mb-3">// challenges solved</p>
              <ul className="space-y-2">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="flex items-start gap-2 text-sm leading-relaxed text-mono-400">
                    <span className="mt-[5px] font-mono text-mono-700" aria-hidden="true">
                      &gt;
                    </span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-3">// tech</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} label={tech} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 border-t border-mono-800 px-5 py-4 sm:px-6">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-white transition-colors hover:text-mono-400"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              Live
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-mono-400 transition-colors hover:text-white"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              Source
            </a>
          ) : null}
          <button
            type="button"
            onClick={onClose}
            className="ml-auto inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-mono-600 transition-colors hover:text-white"
          >
            <span>Esc</span>
            <span aria-hidden="true">→</span>
            <span>close</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}