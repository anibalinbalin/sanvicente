import { css } from 'ds/css';
import { grid, stack } from 'ds/patterns';
import { getProjects } from '@/app/_utils/helpers/projects.helpers';
import { ProjectCard } from '@/app/_components/project-card';

interface MoreProjectsProps {
  current: string;
}

export async function MoreProjects({ current }: MoreProjectsProps) {
  const { projects } = await getProjects();
  const otherProjects = projects
    .filter((project) => project.slug !== current)
    .slice(0, 3);

  if (otherProjects.length === 0) return null;

  return (
    <section className={stack({ gap: 'm' })}>
      <h2 className={css({ textStyle: 'base', lineHeight: 'tight' })}>
        More images
      </h2>
      <div
        className={grid({
          gap: 'm',
          columns: { base: 1, bp1: 2, bp2: 3 },
        })}
      >
        {otherProjects.map((project) => {
          return (
            <div key={project.id}>
              <ProjectCard
                project={project}
                sizes='(max-width: 449px) 100vw, (max-width: 767px) 50vw, 33vw'
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
