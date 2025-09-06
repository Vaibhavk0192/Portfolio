"use client";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { FaFolder } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa6";

import { useFolder } from "@/context/selectedFolderContext";
import { useSelectedTab } from "@/context/selectedTabContext";
import React from "react";

interface FolderComponentProps {
  id: string;
  title: string;
  icon: React.ElementType | string;
  children?: FolderComponentProps[];
  link?: string;
}

const FolderComponent = ({
  id,
  title,
  icon,
  children = [],
  link,
}: FolderComponentProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const { openTab } = useSelectedTab();
  const { selectedFile, setSelectedFile } = useFolder();

  const toggleFolder = () => {
    if (icon === "folder") {
      setIsOpen((prev) => !prev);
    } else {
      setSelectedFile(title);

      if (typeof icon === "function") {
        openTab({ id: id, title: title, icon: icon });
      }
    }
  };

  const Icon = icon === "folder" ? (isOpen ? FaFolderOpen : FaFolder) : icon;

  return (
    <div className="pl-2 w-full">
      <div
        className={` h-4 w-full flex text-[0.8rem] items-center p-1  mt-0.5 cursor-pointer hover:bg-indigo-300/10 rounded ${
          selectedFile === title
            ? "bg-indigo-300/20 text-white"
            : "text-text-gray"
        }`}
        onClick={toggleFolder}
      >
        {icon === "folder" ? (
          isOpen ? (
            <MdKeyboardArrowDown className="text-lg w-4 h-4 mr-1" />
          ) : (
            <MdKeyboardArrowRight className="text-lg w-4 h-4 mr-1" />
          )
        ) : (
          <span className="w-4 h-4 mr-1" /> // spacer for files
        )}
        <Icon
          className={`mr-2 
            ${icon === "folder" ? "text-text-gray" : "text-blue-400"}
            `}
        />
        <span>{title}</span>
      </div>

      {isOpen &&
        children.map((child) => (
          <FolderComponent
            key={child.id}
            id={child.id}
            title={child.title}
            icon={child.icon}
            children={child.children}
            link={child.link}
          />
        ))}
    </div>
  );
};

export default FolderComponent;
