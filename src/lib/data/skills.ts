import {
  FaCode,
  FaVials,
  FaBrain,
  FaPaintBrush,
  FaPython,
  FaJava,
  FaReact,
  FaNode,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTensorflow,
  SiJest,
  SiCucumber,
  SiPostman,
  SiAdobeillustrator,
  SiAdobepremierepro,
} from "react-icons/si";

export type Skill = {
  name: string;
  icon: React.ElementType;
};

export type Section = {
  id: string;
  title: string;
  icon: React.ElementType;
  skills: Skill[];
};

export const skillSections: Section[] = [
  {
    id: "dev",
    title: "Development",
    icon: FaCode,
    skills: [
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: FaCode },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React.js", icon: FaReact },
      { name: "Node.js", icon: FaNode },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
    ],
  },
  {
    id: "qa",
    title: "Testing & QA",
    icon: FaVials,
    skills: [
      { name: "Selenium", icon: FaVials },
      { name: "JUnit", icon: SiJest },
      { name: "Cucumber", icon: SiCucumber },
      { name: "Postman", icon: SiPostman },
    ],
  },
  {
    id: "ai",
    title: "AI & Data",
    icon: FaBrain,
    skills: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Machine Learning", icon: FaBrain },
      { name: "AWS", icon: FaAws },
      { name: "Azure", icon: FaAws },
    ],
  },
  {
    id: "design",
    title: "  Design",
    icon: FaPaintBrush,
    skills: [
      { name: "Figma", icon: FaFigma },
      { name: "Illustrator", icon: SiAdobeillustrator },
      { name: "Premiere Pro", icon: SiAdobepremierepro },
    ],
  },
];
