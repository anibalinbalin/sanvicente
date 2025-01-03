import { Project } from './types';

export const projects: Project[] = [];

export function getProject(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getProjects(count: number = 25): Project[] {
  return projects
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
} 