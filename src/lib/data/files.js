import { FaReact } from "react-icons/fa";

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
                title: "Home.jsx",
                icon: FaReact,
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
                title: "Skill.jsx",
                icon: FaReact,
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
                title: "Projects.jsx",
                icon: FaReact,
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
                title: "Experience.jsx",
                icon: FaReact,
              },
            ],
          },
          {
            id: "1.1.5",
            title: "Contact",
            icon: "folder",
            children: [
              {
                id: "1.1.5.1",
                title: "Contact.jsx",
                icon: FaReact,
              },
            ],
          },
        ],
      },
    ],
  },
];
