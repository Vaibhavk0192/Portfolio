import React from "react";

interface LeftPannelProps {
  leftPageToggle: boolean;
}

function LeftPannel({ leftPageToggle }: LeftPannelProps) {
  return (
    <>
      <div
        className={
          leftPageToggle
            ? "text-foreground flex  flex-col h-screen w-[1.2vw] overflow-hidden align-center text-center pt-16 ml-2 leading-5"
            : "hidden"
        }
      >
        <p className={leftPageToggle ? "" : "display fixed text-xs"}>
          1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
          27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44
        </p>
      </div>
      <div
        className={
          leftPageToggle
            ? "h-screen w-[0.08px] text-black ml-6 opacity-10 absolute -z-10"
            : ""
        }
      />
    </>
  );
}

export default LeftPannel;
