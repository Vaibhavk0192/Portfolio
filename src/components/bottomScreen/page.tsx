import React from "react";
import ProblemsScreen from "./problemsScreen/page";
import TerminalScreen from "./terminalScreen/page";
import { MdFullscreen } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { logToTerminal } from "./logToTerminal/logToTerminal";
import { useLogs } from "@/context/logContext";

interface TerminalProps {
  bottomPannelToggle: boolean;
  setBottomPannelToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

function Terminal({
  bottomPannelToggle,
  setBottomPannelToggle,
}: TerminalProps) {
  const [activeTab, setActiveTab] = React.useState("PROBLEMS");
  const [currentUrl, setCurrentUrl] = React.useState<string | null>(null);
  const { logs, setLogs } = useLogs();
  const [terminalFUllscreen, setTerminalFullscreen] = React.useState(false);
  const tabs: string[] = ["PROBLEMS", "TERMINAL", " OUTPUT"];

  React.useEffect(() => {
    setCurrentUrl(window.location.href);
  }, [1]);
  React.useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setLogs((prevLogs) => [
        ...prevLogs,
        {
          time: new Date().toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
          message: customEvent.detail,
        },
      ]);
    };
    window.addEventListener("terminal-log", handler);
    return () => window.removeEventListener("terminal-log", handler);
  }, []);

  return (
    <div
      className={
        bottomPannelToggle
          ? terminalFUllscreen
            ? "fixed top-8 z-10 mt-auto h-screen bg-secondary-bg flex animate-[slideUp_0.2s_ease-out_forwards] ease-in-out duration-300  w-full"
            : "h-48 fixed bottom-0 w-full bg-secondary-bg flex animate-[slideUp_0.2s_ease-out_forwards] ease-in-out duration-300 mt-auto z-10"
          : "hidden"
      }
    >
      <div className=" flex mt-auto items-center fixed h-8 w-full bg-[var(--bg)] pl-10 pr-4 text-sm ">
        <div className="flex-grow flex">
          {tabs.map((tab: string) => (
            <p
              className={`text-gray text-sm mr-8 ${
                activeTab == tab
                  ? "border-b text-highlight-green border-highlight-green pb-1"
                  : ""
              } cursor-pointer hover:text-white`}
              key={tabs.indexOf(tab)}
              onClick={() => {
                setActiveTab(tab);
              }}
            >
              {tab}
            </p>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <div className="cursor-pointer  rounded-sm ">
            <MdFullscreen
              className={
                terminalFUllscreen ? "bg-gray-300/10  rounded-sm" : ""
              }
              size={"20px"}
              color="white"
              opacity={1}
              onClick={() => {
                logToTerminal("toggled fullscreen mode");
                terminalFUllscreen
                  ? setTerminalFullscreen(false)
                  : setTerminalFullscreen(true);
              }}
            />
          </div>

          <IoClose
            className="cursor-pointer"
            size={"16px"}
            color="white"
            onClick={() => {  
              setBottomPannelToggle(false);
              logToTerminal("bottom Pannel closed!");
            }}
          />
        </div>
      </div>
      <div className="px-10 text-text text-xs overflow-y-scroll max-h-full h-full w-full">
        {activeTab === "PROBLEMS" && <ProblemsScreen />}
        {activeTab === "TERMINAL" && (
          <TerminalScreen currentUrl={currentUrl} logs={logs} />
        )}
      </div>
    </div>
  );
}

export default Terminal;
