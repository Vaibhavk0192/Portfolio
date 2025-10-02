"use client";

import Terminal from "@/components/bottomScreen/page";
import LeftPannel from "@/components/leftPannel/page";
import Navbar from "@/components/navbar/page";
import Pages from "@/components/pages/page";
import RightPannel from "@/components/rightPannel/page";
import { usePanel } from "@/context/panelContext";
import { useSelectedTab } from "@/context/selectedTabContext";

export default function Home() {
  const {
    leftOpen,
    rightOpen,
    bottomOpen,
    setBottomOpen,
    setRightOpen,
    setLeftOpen,
  } = usePanel();
  const {activeId}=useSelectedTab();
  return (
    <>
      <Navbar />
      <main className={`flex m-auto w-full ${!activeId&&"bg-bg"}`}>
        <LeftPannel leftPageToggle={leftOpen} />
        <Pages />
        {rightOpen && <RightPannel />}
      </main>
      <footer>
        <Terminal
          bottomPannelToggle={bottomOpen}
          setBottomPannelToggle={setBottomOpen}
        />
      </footer>
    </>
  );
}
