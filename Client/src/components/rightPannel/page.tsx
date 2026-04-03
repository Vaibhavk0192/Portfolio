"use client";

import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import FolderComponent from "./folderComponent/page";
import { FolderComponentProps } from "@/lib/types/files";
import { apiFetch } from "@/lib/api";

async function getFiles() {
  const res = await apiFetch("/api/files", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch files");
  }

  return res.json();
}

const RightPannel = () => {
  const [files, setFiles] = useState<FolderComponentProps[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const data = await getFiles();
        setFiles(data);
      } catch (error) {
        console.error("Failed to fetch files:", error);
      }
    };
    fetchFiles();
  }, []);

  return (
    <div>
      <div className="flex flex-2 flex-col h-screen  min-w-fit] w-[18vw]  ml-auto z-5 relative shadow-sm shadow-bg pt-8">
        <div className="text-highlight-green text-xs flex w-[10vw] px-4 py-2">
          <p className="w-full h-fit flex">FOLDERS</p>
        </div> 
        <div className="bg-bg h-4 w-full flex text-xs items-center font-bold p-1 py-2.5  text-white ">
          <MdKeyboardArrowDown className="text-lg" />
          <span>VAIBHAV_KAPOOR</span>
        </div>
        {files.map((file) => (
          <FolderComponent
            key={file.id}
            id={file.id}
            title={file.title}
            icon={file.icon}
            // eslint-disable-next-line react/no-children-prop
            children={file.children ?? []}
            color={file.color}
          />
        ))}
      </div>
    </div>
  );
};

export default RightPannel;
