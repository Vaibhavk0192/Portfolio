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
    id: "spectramedix-jrqa",
    logo: "https://images2.imgbox.com/87/46/D6vvq0yZ_o.jpeg",
    role: "Jr. Quality Assurance Analyst",
    company: "SpectraMedix",
    duration: "Aug 2025 – Present",
    location: "Gurugram, India",
    description: [
      "Performed performance testing to evaluate portal scalability, load handling, and robustness, improving reliability by 32%.",
      "Migrated existing data-fetching setup to Tableau portal using Tableau API, enhancing real-time reporting.",
      "Transitioned automation framework to Playwright (Python), reducing test execution time by 41%.",
      "Enhanced Selenium-based automation framework efficiency by 38% through optimized waits and reusable test modules.",
    ],
    tech: ["Selenium", "Java", "Playwright", "Python", "JMeter", "JavaScript"],
  },
  {
    id: "spectramedix-intern",
    logo: "https://images2.imgbox.com/87/46/D6vvq0yZ_o.jpeg",
    role: "Quality Assurance Analyst Intern",
    company: "SpectraMedix",
    duration: "Jan 2025 – Jul 2025",
    location: "Gurugram, India",
    description: [
      "Learned and implemented functional, regression, and smoke testing methodologies.",
      "Gained in-depth understanding of U.S. healthcare systems for accurate data validation.",
      "Improved automation framework maintainability through modularization of test components.",
      "Participated in sprint testing cycles to ensure consistent portal data integrity.",
    ],
    tech: ["Java", "Selenium", "MS SQL", "Manual Testing", "Regression Testing"],
  },
  {
    id: "xebia",
    logo: "https://images2.imgbox.com/33/e4/dpxlaDSg_o.png",
    role: "Software Developer Intern",
    company: "Xebia IT Architects Pvt. Ltd.",
    duration: "Jun 2024 – Jul 2024",
    location: "Remote",
    description: [
      "Built a responsive banking application, improving UI responsiveness and user engagement by 35%.",
      "Integrated backend services, reducing data retrieval latency by 20%.",
      "Strengthened team collaboration using Git and GitHub for structured version control and agile development.",
    ],
    tech: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: "checkipo",
    role: "Frontend Developer Intern",
    company: "CheckIPO",
    duration: "Jul 2024 – Aug 2024",
    location: "Remote",
    description: [
      "Developed a financial web application displaying upcoming and active IPOs with real-time updates.",
      "Designed and prototyped responsive UI layouts in Figma, ensuring optimal experience across web and mobile platforms.",
      "Collaborated with mentors to incorporate financial data insights and enhance user data visualization.",
    ],
    tech: ["React.js", "JavaScript", "Figma"],
  },
];
