"use client";

import { useState } from "react";
import Terminal from "../bottomScreen/page";
import LeftPannel from "../leftPannel/page";
import TopPannel from "./topPannel/page";
import RightPannel from "../rightPannel/page";

export default function Navbar() {
  const [leftPannelToggle, setLeftPannelToggle] = useState(true);
  const [bottomPannelToggle, setBottomPannelToggle] = useState(true);
  const [rightPannelToggle, setRightPannelToggle] = useState(true);
  return (
    <header>
      <TopPannel
        leftPannelToggle={leftPannelToggle}
        setLeftPannelToggle={setLeftPannelToggle}
        bottomPannelToggle={bottomPannelToggle}
        setBottomPannelToggle={setBottomPannelToggle}
        rightPannelToggle={rightPannelToggle}
        setRightPannelToggle={setRightPannelToggle}
      />
    </header>
  );
}
