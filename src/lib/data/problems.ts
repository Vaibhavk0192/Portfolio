// lib/data/problems.ts
import { FaReact, FaTools, FaProjectDiagram, FaBriefcase, FaEnvelope, FaHome } from "react-icons/fa";
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
    message:" If you haven’t visited my Home page yet, click here to get an overview of who I am and what I do.",

  },
  {
    id: "skills-problem",
    pageId: "1.1.2.1", // Skills
    fileName: "Skills",
    filePath: "portfolio/src/Skills",
    icon: FaTools,
    message:
          "If you haven’t explored my Skills yet, click here to see the tools and technologies I work with.",

  },
  {
    id: "projects-problem",
    pageId: "1.1.3.1", // Projects
    fileName: "Projects",
    filePath: "portfolio/src/Projects",
    icon: FaProjectDiagram,
    message:
          "If you haven’t checked my Projects, head over to see how I’ve applied these skills in real work.",

  },
  {
    id: "experience-problem",
    pageId: "1.1.4.1", // Experience
    fileName: "Experience",
    filePath: "portfolio/src/Experience",
    icon: FaBriefcase,
    message:
          "If you haven’t gone through my Experience yet, check it out to learn more about my professional journey.",
  },
  {
    id: "contact-problem",
    pageId: "1.1.5.1", // Contact
    fileName: "Contact",
    filePath: "portfolio/src/Contact",
    icon: FaEnvelope,
    message:
      "If you haven’t reached out yet, don’t hesitate to drop me a message.",
  },
];
