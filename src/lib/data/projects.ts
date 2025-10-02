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
      "AI-powered system for detecting diabetic retinopathy with deep learning models and U-Net segmentation for lesions.",
    tech: ["Python", "TensorFlow", "InceptionV3", "U-Net", "React.js"],
    image: "https://images2.imgbox.com/ab/cd/your_image1.png",
    link: "https://retinoscan-demo.com",
    github: "https://github.com/yourusername/retinoscan",
  },
  {
    id: "video-streaming",
    title: "Video Streaming Platform",
    description:
      "Full-stack platform for high-performance video streaming with Next.js and MongoDB, handling 10,000+ users.",
    tech: ["Next.js", "MongoDB", "Vercel"],
    image: "https://images2.imgbox.com/ef/gh/your_image2.png",
    link: "https://video-platform-demo.com",
    github: "https://github.com/yourusername/video-platform",
  },
  {
    id: "banking-app",
    title: "Banking Application",
    description:
      "Responsive banking app built with React and backend integration, improving user engagement and onboarding.",
    tech: ["React", "Node.js", "Express"],
    image: "https://images2.imgbox.com/ij/kl/your_image3.png",
    github: "https://github.com/yourusername/banking-app",
  },
  {
    id: "netflix",
    title: "Netflix Clone",
    description:
      "Dive into the world of streaming with our Netflix clone, providing an immersive entertainment experience.",
    tech: ["Next.js", "MongoDB", "Tailwind", "Prisma", "JavaScript"],
    image: "https://images2.imgbox.com/mn/op/netflix.jpg",
    link: "https://netflix-silk-ten.vercel.app",
    github: undefined,
  },
  {
    id: "urbane",
    title: "Urbane – E-commerce Clothing Platform",
    description:
      "Shop for clothing and accessories online with secure payment and product management.",
    tech: ["React.js", "MongoDB", "Javascript", "Figma"],
    image: "https://images2.imgbox.com/qr/st/urbane.png",
    link: undefined,
    github: "https://github.com/Vaibhavk0192/Urbane",
  },
  {
    id: "recipath",
    title: "Recipath – AI Recipe Generator",
    description:
      "Generate recipes based on keywords with AI; subscribe to newsletter for updates.",
    tech: ["React.js", "MongoDB", "Javascript", "Python", "Figma"],
    image: "https://images2.imgbox.com/uv/wx/recipath.png",
    github: "https://github.com/Vaibhavk0192/recipath",
  },
  {
    id: "mom2b",
    title: "Mom2B – Baby Movement Tracker",
    description:
      "Track baby movements and access manual guidance for the pregnancy period.",
    tech: ["Flutter", "Firebase", "Figma"],
    image: "https://images2.imgbox.com/yz/ab/mom2b.png",
  },
  {
    id: "spotify",
    title: "Spotify Clone",
    description:
      "Mobile app for music, podcasts, and audio content with personalized recommendations.",
    tech: ["Flutter"],
    image: "https://images2.imgbox.com/cd/ef/spotify.png",
    github: "https://github.com/Vaibhavk0192/Spotify",
  },
  {
    id: "punnya",
    title: "Punnya – NGO Community App",
    description:
      "Connects people and NGOs; NGOs can post campaigns and collaborate with users.",
    tech: ["Flutter", "Firebase"],
    image: "https://images2.imgbox.com/gh/ij/punnya.png",
    github: "https://github.com/Vaibhavk0192/punnya",
  },
];
