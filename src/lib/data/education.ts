export interface EducationInterface {
  degree: string;
  institution: string;
  duration: string;
  details: string;
}

export const EducationData: EducationInterface[] = [
  {
    degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
    institution: "Thapar Institute of Engineering & Technology, Patiala",
    duration: "2021 – 2025",
    details:
      "Pursuing a comprehensive curriculum emphasizing problem-solving, analytical thinking, and engineering fundamentals. Actively engaged in academic projects and practical learning experiences.",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Ryan International School, Amritsar",
    duration: "2019 – 2021",
    details:
      "Completed higher secondary education in the Science stream with distinction, building a strong foundation in logical reasoning and quantitative aptitude.",
  },
  {
    degree: "Secondary Education",
    institution: "Shri Ram Ashram Public School, Amritsar",
    duration: "2006 – 2019",
    details:
      "Received a well-rounded education fostering discipline, leadership, and a consistent commitment to academic excellence.",
  },
];
