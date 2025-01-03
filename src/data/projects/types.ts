export interface ProjectMedia {
  id: string;
  url: string;
  darkUrl?: string;
  width: number;
  height: number;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  category: string;
  featured: boolean;
  featureMediaNarrow: ProjectMedia;
  featureMediaWide: ProjectMedia;
  media: ProjectMedia[];
  description: string;
  contribution: string[];
  date: string;
} 