// lib/data/experience.ts
export interface ExperienceInterface {
  id?: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  tech?: string[];
  logo?: string;
}
