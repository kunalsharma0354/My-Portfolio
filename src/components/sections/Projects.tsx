import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ProjectCard } from '@/components/common/ProjectCard';
import { ProjectModal } from '@/components/common/ProjectModal';
import { Section } from '@/components/ui/Section';
import { listSwap } from '@/components/ui/MotionPrimitives';
import { projects, type Project } from '@/data/portfolio';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type Filter = 'All' | Project['category'];

const filters: Filter[] = ['All', 'Web', 'Android'];

export function Projects() {
  const [active, setActive] = useState<Filter>('All');
  const [selected, setSelected] = useState<Project | null>(null);
  const reduced = useReducedMotion();
  const swapVariant = listSwap(reduced);

  const visible = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <Section id="projects" no="04" label="work" title="Featured Projects">
      <div
        role="tablist"
        aria-label="Filter projects by category"
        className="mb-8 flex flex-wrap gap-2 sm:mb-10"
      >
        {filters.map((filter) => {
          const selected = filter === active;
          return (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(filter)}
              className={`filter-tab min-h-[44px] rounded-sm px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] transition-all duration-200 active:scale-95 ${
                selected
                  ? 'bg-white text-black shadow-hard-sm shadow-white/20'
                  : 'border border-mono-700 text-mono-400 hover:border-mono-400 hover:text-white'
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {visible.length > 0 ? (
          <motion.ul
            key={active}
            variants={swapVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          >
            {visible.map((project) => (
              <li key={project.id} className="h-full">
                <ProjectCard project={project} onViewDetails={setSelected} />
              </li>
            ))}
          </motion.ul>
        ) : (
          <motion.p
            key="empty"
            variants={swapVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            className="py-16 text-center font-mono text-sm text-mono-500"
          >
            No projects match this filter.
          </motion.p>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selected ? (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        ) : null}
      </AnimatePresence>
    </Section>
  );
}