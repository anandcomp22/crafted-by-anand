export type ViewMode = 'main' | 'privacy' | 'terms';

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  image: string;
  summary: string;
  techStack: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'Production' | 'Featured' | 'Completed';
}

export interface ExperienceItem {
  index: string;
  company: string;
  role: string;
  period: string;
  type: string;
  location: string;
  overview: string;
  highlights: string[];
  skills: string[];
}

export interface SkillCategory {
  index: string;
  title: string;
  description: string;
  technologies: {
    name: string;
    level: string;
    focus: string;
  }[];
}
