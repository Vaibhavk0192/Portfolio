// lib/data/experience.ts
export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  tech?: string[];
  logo?: string;
}

export const experiences: Experience[] = [
  {
    id: "spectramedix",
    logo:"https://images2.imgbox.com/87/46/D6vvq0yZ_o.jpeg",
    role: "Quality Assurance Analyst Intern",
    company: "SpectraMedix",
    duration: "Jan 2025 – Present",
    location: "Gurugram, India",
    description: [
      "Conducted functional, regression, and performance testing, improving test coverage by 30%.",
      "Automated test cases using Selenium, JUnit, and Cucumber, reducing manual testing effort by 40%.",
      "Executed performance testing with JMeter, optimizing application response time by 25%.",
      "Wrote complex SQL queries to validate data integrity, increasing backend reliability by 20%.",
    ],
    tech: ["Selenium", "JUnit", "Cucumber", "JMeter", "SQL"],
  },
  {
    id: "xebia",
    role: "Software Developer Intern",
    company: "Xebia IT Architects Pvt Ltd",
    duration: "Jun 2024 – Jul 2024",
    location: "Remote",
    description: [
      "Built a responsive banking application using React, improving user engagement by 35%.",
      "Integrated backend services for seamless customer onboarding, reducing processing time by 20%.",
      "Enhanced UI/UX based on user feedback, leading to a 15% increase in customer satisfaction.",
    ],
    tech: ["React.js", "Node.js", "Express"],
  },
];
