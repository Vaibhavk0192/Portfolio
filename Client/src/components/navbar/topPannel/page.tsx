interface TopPannelProps {
  leftPannelToggle: boolean;
  setLeftPannelToggle: React.Dispatch<React.SetStateAction<boolean>>;
  bottomPannelToggle: boolean;
  setBottomPannelToggle: React.Dispatch<React.SetStateAction<boolean>>;
  rightPannelToggle: boolean;
  setRightPannelToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

import { BiDockLeft } from "react-icons/bi";
import { BiSolidDockLeft } from "react-icons/bi";
import { BiDockBottom } from "react-icons/bi";
import { BiSolidDockBottom } from "react-icons/bi";
import { BiDockRight } from "react-icons/bi";
import { BiSolidDockRight } from "react-icons/bi";
import { logToTerminal } from "../../bottomScreen/logToTerminal/logToTerminal";
import TopbarTab from "./topbarTab/page";
import { useSelectedTab } from "@/context/selectedTabContext";
import { usePanel } from "@/context/panelContext";
import IconsMap from "@/utils/IconsMap";

function TopPannel() {
  const {
    leftOpen,
    rightOpen,
    bottomOpen,
    setBottomOpen,
    setRightOpen,
    setLeftOpen,
  } = usePanel();
  const { tabs, activeId } = useSelectedTab();
  return (
    <div className="flex flex-col w-screen bg-bg absolute  rounded-t-xl  shadow-xs shadow-bg z-10">
      <div className="w-screen flex justify-between items-center align-middle  mt-1.5 border-b-[0.1px] border-secondary-bg pb-1 z-10">
        <div className="w-14 h-5 ml-2 flex  items-center justify-evenly">
          <div className="h-2.5 w-2.5 bg-red-500 rounded-4xl" />
          <div className="h-2.5 w-2.5 bg-yellow-400 rounded-4xl" />
          <div className="h-2.5 w-2.5 bg-green-700 rounded-4xl" />
        </div>
        <div className="w-[30rem] flex justify-center text-gray-100 text-[0.6rem] items-center  rounded-sm h-5 opacity-80">
          Vaibhav Kapoor - Portfolio
        </div>
        <div className="w-16 h-5 mr-4 flex justify-evenly items-center">
          <div
            onClick={() => {
              logToTerminal("left pannel toggle clicked!");
              setLeftOpen(!leftOpen);
            }}
          >
            {activeId ? (
              leftOpen ? (
                <BiSolidDockLeft className="text-white text-lg flex " />
              ) : (
                <BiDockLeft className="text-white text-lg flex" />
              )
            ) : (
              <BiDockLeft className="text-white text-lg flex" />
            )}
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              logToTerminal("bottom pannel toggle clicked!");
              setBottomOpen(!bottomOpen);
            }}
          >
            {bottomOpen ? (
              <BiSolidDockBottom className="text-white text-lg  flex" />
            ) : (
              <BiDockBottom className="text-white text-lg  flex" />
            )}
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              setRightOpen(!rightOpen);
              logToTerminal("right pannel toggle clicked!");
            }}
          >
            {!rightOpen ? (
              <BiDockRight className="text-white text-lg  flex" />
            ) : (
              <BiSolidDockRight className="text-white text-lg  flex" />
            )}
          </div>
        </div>
      </div>
      <div className="flex w-[80vw] bg-bg -z-10 h-8  my-0 py-0 overflow-x-scroll no-scrollbar">
        {tabs.map((tab) => (
          <TopbarTab
            key={tab.id}
            id={tab.id}
            title={tab.title}
            icons={IconsMap[tab.title]}
          />
        ))}
      </div>
    </div>
  );
}

export default TopPannel;