import { projects as projectsData } from '@/data/projects/data';
import type { Project } from '@/data/projects/types';

export const getProjects = (count?: number): Project[] => {
  const sortedProjects = projectsData.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  return count ? sortedProjects.slice(0, count) : sortedProjects;
};

export const getProject = (slug: string): Project | undefined => {
  return projectsData.find(p => p.slug === slug);
};
