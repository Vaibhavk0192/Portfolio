"use client";

import Terminal from "@/components/bottomScreen/page";
import LeftPannel from "@/components/leftPannel/page";
import Navbar from "@/components/navbar/page";
import Pages from "@/components/pages/page";
import RightPannel from "@/components/rightPannel/page";
import { useState } from "react";

export default function Home() {
  const [leftPannelToggle, setLeftPannelToggle] = useState(true);
  const [bottomPannelToggle, setBottomPannelToggle] = useState(true);
  const [rightPannelToggle, setRightPannelToggle] = useState(true);
  return (
    <>
      <Navbar />
      <main className="flex m-auto">
        <LeftPannel leftPageToggle={leftPannelToggle} />
        <Pages />
        {rightPannelToggle && <RightPannel />}
      </main>
      <footer>
        <Terminal
          bottomPannelToggle={bottomPannelToggle}
          setBottomPannelToggle={setBottomPannelToggle}
        />
      </footer>
    </>
  );
}
