export interface FolderComponentProps {
  id: string;
  title: string;
  icon?:string;
  children?: FolderComponentProps[];
  link?: string;
  color: string;
}

export const files = [
  {
    id: "1",
    title: "portfolio",
    icon: "folder",
    color: "#60a5fa",
    children: [
      {
        id: "1.1",
        title: "src",
        icon: "folder",
        color: "#60a5fa",
        children: [
              {
                id: "1.1.1",
                title: "Home",
                color: "#60a5fa",
              },
              {
                id: "1.1.2",
                title: "Skills",
                color: "#60a5fa",
              },
  
              {
                id: "1.1.3",
                title: "Projects",
                color: "#60a5fa",
              },
              {
                id: "1.1.4",
                title: "Experience",
                color: "#60a5fa",
              },
              {
                id: "1.1.5",
                title: "Education",
                color: "#60a5fa",
              },
              {
                id: "1.1.6",
                title: "Contact",
                color: "#60a5fa",
              },
            ],
          },
          {
            id: "1.2",
            title: "Resume",
            icon: "folder",
            color: "#e11d48",
            children: [
              {
                id: "1.2.1",
                title: "resume.pdf",
                color: "#f43f5e",
              },
            ],
          },
        ],
      },
];
