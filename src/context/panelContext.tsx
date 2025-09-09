"use client";

import { createContext, useContext, useState } from "react";

type PanelToggleContextType = {
  leftOpen: boolean;
  setLeftOpen: React.Dispatch<React.SetStateAction<boolean>>;
  rightOpen: boolean;
  setRightOpen: React.Dispatch<React.SetStateAction<boolean>>;
  bottomOpen: boolean;
  setBottomOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const PanelContext = createContext<PanelToggleContextType | undefined>(
  undefined
);

export const PanelProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);
  const [bottomOpen, setBottomOpen] = useState(true);
  return (
    <PanelContext.Provider
      value={{
        leftOpen,
        setLeftOpen,
        rightOpen,
        setRightOpen,
        bottomOpen,
        setBottomOpen,
      }}
    >
      {children}
    </PanelContext.Provider>
  );
};

export const usePanel = () => {
  const context = useContext(PanelContext);
  if (!context) throw new Error("usePanel must be used inside PanelProvider");
  return context;
};
