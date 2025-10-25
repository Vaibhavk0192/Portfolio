// lib/data/projects.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: "retinoscan",
    title: "RetinoScan – Diabetic Retinopathy Detection",
    description:
      "Developed an AI-powered platform for automated diabetic retinopathy detection using deep learning. Integrated InceptionV3 for classification and U-Net for precise lesion segmentation to deliver accurate diagnostic insights.",
    tech: ["Python", "TensorFlow", "InceptionV3", "U-Net", "React.js"],
    image: "https://images2.imgbox.com/fc/7e/VA2OXKlG_o.png",
    github: "https://github.com/yourusername/retinoscan",
  },
  {
    id: "netflix",
    title: "Netflix Clone - Movie & Series Streaming Platform",
    description:
      "Engineered a full-stack streaming application replicating Netflix’s interface with secure authentication, dynamic content loading, and fully responsive design optimized for multi-device compatibility.",
    tech: ["Next.js", "MongoDB", "Tailwind CSS", "Prisma", "JavaScript"],
    image: "https://images2.imgbox.com/09/89/uqhjmYgL_o.jpg",
    link: "https://netflix-silk-ten.vercel.app",
    github: "https://github.com/yourusername/reeldeal",
  },
  {
    id: "reeldeal",
    title: "ReelDeal – Movie & Show Ticket Booking",
    description:
      "Built a ticket booking web platform enabling users to browse movies, check schedules, and book seats in real-time. Enhanced performance and user experience through optimized React components and REST API integration.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Figma"],
    image: "https://images2.imgbox.com/77/79/kY53JuJm_o.png",
    github: "https://github.com/yourusername/reeldeal",
  },
  {
    id: "urbane",
    title: "Urbane – E-commerce Clothing Platform",
    description:
      "Developed a responsive e-commerce web application for fashion and apparel with product management, payment integration, and interactive UI components to improve shopping experience and engagement.",
    tech: ["React.js", "MongoDB", "JavaScript", "Figma"],
    image: "https://images2.imgbox.com/d3/f9/gsL7VJk6_o.png",
    github: "https://github.com/Vaibhavk0192/Urbane",
  },
  {
    id: "recipath",
    title: "Recipath – AI Recipe Generator",
    description:
      "Created an AI-driven web app that generates personalized recipes from user-input ingredients using NLP models. Designed a modern interface with subscription and search features for enhanced usability.",
    tech: ["React.js", "MongoDB", "Python", "JavaScript", "Figma"],
    image: "https://images2.imgbox.com/7d/dd/SzlIHfmT_o.png",
    github: "https://github.com/Vaibhavk0192/recipath",
  },
];
