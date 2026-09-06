import { ChevronRight, ExternalLink, Star } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Tilt } from '@/components/ui/Tilt';
import { GithubIcon } from '@/components/common/icons';
import type { Project } from '@/data/portfolio';

interface ProjectCardProps {
  project: Project;
  onViewDetails?: (project: Project) => void;
}

const categoryTag: Record<Project['category'], string> = {
  Web: 'WEB',
  Android: 'ANDROID',
  'AI & Tools': 'AI / TOOLS',
  Discord: 'DISCORD',
};

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  return (
    <Tilt className="h-full" maxTilt={4} lift={4}>
      <Card
        className={`group flex h-full flex-col p-5 transition-colors duration-300 hover:border-mono-400 hover:shadow-hard hover:shadow-white/20 sm:p-6 ${
          project.featured ? 'border-l-4 border-l-white' : 'border-l-2 border-l-mono-600'
        }`}
      >
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-mono-500">
          [{categoryTag[project.category]}]
        </span>
        {project.featured ? (
          <span className="inline-flex items-center gap-1.5">
            <Star className="h-3.5 w-3.5 text-white" aria-hidden="true" />
            <span className="sr-only">Featured</span>
          </span>
        ) : null}
      </div>

      <h3 className="font-mono text-lg font-bold text-white transition-colors group-hover:text-mono-300 sm:text-xl">
        {project.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-mono-400">{project.description}</p>

      {project.details.length > 0 ? (
        <ul className="mt-4 space-y-1.5">
          {project.details.map((detail) => (
            <li key={detail} className="flex items-start gap-2 font-mono text-xs text-mono-500">
              <span className="mt-[5px] font-mono text-mono-700" aria-hidden="true">
                &gt;
              </span>
              {detail}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <Badge key={tech} label={tech} />
        ))}
      </div>

      <div className="mt-8 flex items-center gap-4 border-t border-mono-800 pt-4">
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
        {onViewDetails ? (
          <button
            type="button"
            onClick={() => onViewDetails(project)}
            className="ml-auto inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.2em] text-mono-500 transition-colors hover:text-white"
          >
            Details
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        ) : null}
      </div>
      </Card>
    </Tilt>
  );
}