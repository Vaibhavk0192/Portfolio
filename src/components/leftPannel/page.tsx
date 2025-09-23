import { useSelectedTab } from "@/context/selectedTabContext";
import React from "react";

interface LeftPannelProps {
  leftPageToggle: boolean;
}

function LeftPannel({ leftPageToggle }: LeftPannelProps) {
  const { activeId } = useSelectedTab();
  return (
    <>
      <p
        className={
          leftPageToggle && activeId!="1.1.2.1"
            ? "flex flex-col w-6  items-center content-center mt-18 ml-5 pl-1 text-end overflow-y-hidden h-[calc(100vh-11vh)]"
            : "hidden w-6  justify-center items-center content-center mt-18 ml-5 pl-1 text-end"
        }
      >
        1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27
        28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44
      </p>
    </>
  );
}

export default LeftPannel;
