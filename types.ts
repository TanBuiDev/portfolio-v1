export interface Project {
  title: string;
  role: string;
  stack: string[];
  description: string;
  imageUrl?: string;
  link?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  grade: string;
}