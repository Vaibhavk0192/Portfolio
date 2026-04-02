import { addProblem } from "../models/problemsModel";
import { Problem } from "../types/problemsTypes";

const problemsData: Omit<Problem, "id">[] = [
  {
    pageId: "1.1.1.1", // Home
    fileName: "Home",
    filePath: "portfolio/src/Home",
    message:
      "Uncover my story—click Home now to see what drives me and what I can build for you!",
  },
  {
    pageId: "1.1.2.1", // Skills
    fileName: "Skills",
    filePath: "portfolio/src/Skills",
    message:
      "Want to see my toolkit? Click Skills to explore the exact technologies I deliver with.",
  },
  {
    pageId: "1.1.3.1", // Projects
    fileName: "Projects",
    filePath: "portfolio/src/Projects",
    message:
      "See real results—click Projects to review actual apps and solutions I built end-to-end.",
  },
  {
    pageId: "1.1.4.1", // Experience
    fileName: "Experience",
    filePath: "portfolio/src/Experience",
    message:
      "Curious how I got here? Click Experience for the timeline of my roles and major wins.",
  },
  {
    pageId: "1.1.5.1", // Education
    fileName: "Education",
    filePath: "portfolio/src/Education",
    message:
      "Learn about my academic edge—click Education for my training and achievements.",
  },
  {
    pageId: "1.1.6.1", // Contact
    fileName: "Contact",
    filePath: "portfolio/src/Contact",
    message:
      "Ready to connect? Click Contact to reach out and start a conversation today.",
  },
];

export const uploadProblems = async () => {
  try {
    for (const problem of problemsData) {
      await addProblem(problem);
      console.log(`Uploaded problem: ${problem.fileName}`);
    }
    console.log("All problems uploaded successfully!");
  } catch (error) {
    console.error("Error uploading problems:", error);
  }
};

uploadProblems();