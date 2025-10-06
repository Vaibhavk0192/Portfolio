import {
  FaBriefcase,
  FaEnvelope,
  FaHome,
  FaProjectDiagram,
  FaTools,
  FaGraduationCap,
} from "react-icons/fa";

export const files = [
  {
    id: "1",
    title: "portfolio",
    icon: "folder",
    children: [
      {
        id: "1.1",
        title: "src",
        icon: "folder",
        children: [
          {
            id: "1.1.1",
            title: "Home",
            icon: "folder",
            children: [
              {
                id: "1.1.1.1",
                title: "Home",
                icon: FaHome,
              },
            ],
          },
          {
            id: "1.1.2",
            title: "Skills",
            icon: "folder",
            children: [
              {
                id: "1.1.2.1",
                title: "Skills",
                icon: FaTools,
              },
            ],
          },
          {
            id: "1.1.3",
            title: "Projects",
            icon: "folder",
            children: [
              {
                id: "1.1.3.1",
                title: "Projects",
                icon: FaProjectDiagram,
              },
            ],
          },
          {
            id: "1.1.4",
            title: "Experience",
            icon: "folder",
            children: [
              {
                id: "1.1.4.1",
                title: "Experience",
                icon: FaBriefcase,
              },
            ],
          },
          {
            id: "1.1.5",
            title: "Education",
            icon: "folder",
            children: [
              {
                id: "1.1.5.1",
                title: "Education",
                icon: FaGraduationCap,
              },
            ],
          },
          {
            id: "1.1.6",
            title: "Contact",
            icon: "folder",
            children: [
              {
                id: "1.1.6.1",
                title: "Contact",
                icon: FaEnvelope,
              },
            ],
          },
        ],
      },
    ],
  },
];
