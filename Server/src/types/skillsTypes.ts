export type Skill = {
  name: string;
  icon: string; // path or URL of the image
};

export type Section = {
  id?: string;
  title: string;
  skills: Skill[];
};