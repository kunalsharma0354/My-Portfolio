import { Reveal } from '@/components/common/Reveal';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { Tilt } from '@/components/ui/Tilt';
import { skillGroups } from '@/data/portfolio';

export function Skills() {
  return (
    <Section id="skills" no="02" label="stack" title="Skills & Technologies">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        {skillGroups.map((group, groupIndex) => (
          <Reveal key={group.title} delay={groupIndex * 0.1} className="h-full">
            <Tilt className="h-full">
              <Card className="group h-full p-5 transition-colors duration-300 hover:border-mono-500 sm:p-6">
                <div className="mb-5 flex items-center justify-between border-b border-mono-800 pb-4 sm:mb-6">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white sm:text-sm">
                    {group.title}
                  </h3>
                  <span className="font-mono text-xs text-mono-600">[{group.skills.length}]</span>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <Badge label={skill} />
                    </li>
                  ))}
                </ul>
              </Card>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}