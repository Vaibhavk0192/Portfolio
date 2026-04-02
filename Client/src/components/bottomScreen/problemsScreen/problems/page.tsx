"use client"

import { MdKeyboardArrowDown } from "react-icons/md";
import { Problem } from "@/lib/types/problems";
import { useState } from "react";
import { HiSparkles } from "react-icons/hi";
import { useSelectedTab } from "@/context/selectedTabContext";
import { useFolder } from "@/context/selectedFolderContext";
import IconsMap from "@/utils/IconsMap";

function Problems({
  id: key,
  pageId,
  fileName,
  filePath,
  message,
}: Problem) {
  const [isOpen, setIsOpen] = useState(true);
  const { openTab, activeTab } = useSelectedTab();
  const { selectedFile, setSelectedFile } = useFolder();

  const Icon = IconsMap[fileName] || HiSparkles;

  const normalizedPageId = pageId.split(".").slice(0, 3).join(".");

  return (
    <div
      onClick={() => {
        openTab({ id: normalizedPageId, title: fileName });
        setSelectedFile(fileName);
      }}
    >
      {/* top line with arrow, icon, filename + path */}
      <div className="flex text-[0.8rem] items-center gap-2 px-5">
        {isOpen ? (
          <MdKeyboardArrowDown
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        ) : (
          <MdKeyboardArrowDown
            className="-rotate-90"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        )}
        {Icon && <Icon className="text-cyan-400" />}
        <p>{fileName}</p>
        <p className="text-gray-400">{filePath}</p>
      </div>
      {isOpen && (
        <div className="flex items-center gap-2 pt-0.5 ml-8 ">
          <HiSparkles className="h-3 w-3 text-amber-400" />
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default Problems;
