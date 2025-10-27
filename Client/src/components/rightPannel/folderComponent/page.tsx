"use client";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { FaFolder } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa6";

import { useFolder } from "../../../context/selectedFolderContext";
import { useSelectedTab } from "../../../context/selectedTabContext";
import React from "react";
import IconMap from "@/utils/IconsMap";
import { FolderComponentProps } from "@/lib/data/files";




const FolderComponent = ({
  id,
  title,
  icon,
  children = [],
  color
}: FolderComponentProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const { openTab } = useSelectedTab();
  const { selectedFile, setSelectedFile } = useFolder();

  const toggleFolder = () => {
    if (icon === "folder") {
      setIsOpen((prev) => !prev);
    } else {
      setSelectedFile(title);
        if(title==="resume.pdf"){
          window.open('https://drive.google.com/file/d/1nniXZHKb_fdx__Z3hnFr9iBd6F3Dx4hO/view?usp=sharing', '_blank');
        }
        else{
          openTab({ id: id, title: title});
        }
    }
  };


  const iconComponent=IconMap[title];
  const Icon = icon === "folder" ? (isOpen ? FaFolderOpen : FaFolder) : iconComponent;
  return (
    <div className="pl-2 w-full ">
      <div
        className={` h-4 w-full flex text-[0.9rem]  items-center p-[0.6rem] mt-0.5   cursor-pointer hover:bg-indigo-300/10 rounded ${
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
          className="mr-2"
          style={icon === "folder" ? undefined : { color: color ?? undefined }}
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
            color={child.color}
          />
        ))}
    </div>
  );
};

export default FolderComponent;
