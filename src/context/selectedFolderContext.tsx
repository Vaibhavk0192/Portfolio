"use client";

import React, { useContext } from "react";
import { createContext } from "react";

interface FolderContextType {
  selectedFile: string;
  setSelectedFile: React.Dispatch<React.SetStateAction<string>>;
}

const SelectedFolderContext = createContext<FolderContextType>({
  selectedFile: "Home.jsx",
  setSelectedFile: () => {},  
});

export const SelectedFolderProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [selectedFile, setSelectedFile] = React.useState<string>("Home.jsx");
  return (
    <SelectedFolderContext.Provider value={{ selectedFile, setSelectedFile }}>
      {children}
    </SelectedFolderContext.Provider>
  );
};

export const useFolder = () => {
  const context = useContext(SelectedFolderContext);
  if (!context) throw new Error("useLogs must be used within a LogsProvider");
  return context;
};
