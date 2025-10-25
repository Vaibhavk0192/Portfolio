import {
  FaBriefcase,
  FaEnvelope,
  FaHome,
  FaProjectDiagram,
  FaTools,
  FaGraduationCap,
  FaFilePdf,
} from "react-icons/fa";

export const files = [
  {
    id: "1",
    title: "portfolio",
    icon: "folder",
    color: "#60a5fa", // Yellow
    children: [
      {
        id: "1.1",
        title: "src",
        icon: "folder",
        color: "#60a5fa", // Blue
        children: [
          {
            id: "1.1.1",
            title: "Home",
            icon: "folder",
            color: "#60a5fa", // Green
            children: [
              {
                id: "1.1.1.1",
                title: "Home",
                icon: FaHome,
                color: "#60a5fa",
              },
            ],
          },
          {
            id: "1.1.2",
            title: "Skills",
            icon: "folder",
            color: "#60a5fa", // Amber
            children: [
              {
                id: "1.1.2.1",
                title: "Skills",
                icon: FaTools,
                color: "#60a5fa",
              },
            ],
          },
          {
            id: "1.1.3",
            title: "Projects",
            icon: "folder",
            color: "#60a5fa", // Purple
            children: [
              {
                id: "1.1.3.1",
                title: "Projects",
                icon: FaProjectDiagram,
                color: "#60a5fa",
              },
            ],
          },
          {
            id: "1.1.4",
            title: "Experience",
            icon: "folder",
            color: "#60a5fa", // Red
            children: [
              {
                id: "1.1.4.1",
                title: "Experience",
                icon: FaBriefcase,
                color: "#60a5fa",
              },
            ],
          },
          {
            id: "1.1.5",
            title: "Education",
            icon: "folder",
            color: "#3b82f6", // Blue
            children: [
              {
                id: "1.1.5.1",
                title: "Education",
                icon: FaGraduationCap,
                color: "#60a5fa",
              },
            ],
          },
          {
            id: "1.1.6",
            title: "Contact",
            icon: "folder",
            color: "#60a5fa", // Emerald
            children: [
              {
                id: "1.1.6.1",
                title: "Contact",
                icon: FaEnvelope,
                color: "#60a5fa",
              },
            ],
          },
          {
            id: "1.1.7",
            title: "Resume",
            icon: "folder",
            color: "#e11d48", // Pinkish Red
            children: [
              {
                id: "1.1.7.1",
                title: "resume.pdf",
                icon: FaFilePdf,
                color: "#f43f5e",
              },
            ],
          },
        ],
      },
    ],
  },
];
