import {
  FaHome,
  FaTools,
  FaProjectDiagram,
  FaBriefcase,
  FaGraduationCap,
  FaEnvelope,
} from "react-icons/fa";
import { Tab } from "@/context/selectedTabContext";

export interface Problem {
  id: string;
  pageId: string;
  filePath: string;
  fileName: string;
  icon: React.ElementType;
  message: string;
}

export const problems: Problem[] = [
  {
    id: "home-problem",
    pageId: "1.1.1.1", // Home
    fileName: "Home",
    filePath: "portfolio/src/Home",
    icon: FaHome,
    message:
      "If you haven’t explored the Home section yet, click here to get an overview of who I am and what I do.",
  },
  {
    id: "skills-problem",
    pageId: "1.1.2.1", // Skills
    fileName: "Skills",
    filePath: "portfolio/src/Skills",
    icon: FaTools,
    message:
      "If you haven’t checked out my Skills yet, click here to see the tools and technologies I work with.",
  },
  {
    id: "projects-problem",
    pageId: "1.1.3.1", // Projects
    fileName: "Projects",
    filePath: "portfolio/src/Projects",
    icon: FaProjectDiagram,
    message:
      "If you haven’t seen my Projects yet, click here to explore how I’ve applied my skills to real-world work.",
  },
  {
    id: "experience-problem",
    pageId: "1.1.4.1", // Experience
    fileName: "Experience",
    filePath: "portfolio/src/Experience",
    icon: FaBriefcase,
    message:
      "If you haven’t visited my Experience section yet, click here to learn more about my professional journey.",
  },
  {
    id: "education-problem",
    pageId: "1.1.5.1", // Education
    fileName: "Education",
    filePath: "portfolio/src/Education",
    icon: FaGraduationCap,
    message:
      "If you haven’t reviewed my Education section yet, click here to know more about my academic background.",
  },
  {
    id: "contact-problem",
    pageId: "1.1.6.1", // Contact
    fileName: "Contact",
    filePath: "portfolio/src/Contact",
    icon: FaEnvelope,
    message:
      "If you haven’t reached out yet, click here to visit my Contact section and get in touch with me.",
  },
];
