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
  const [activeTab, setActiveTab] = React.useState("EXPLORE");
  const [currentUrl, setCurrentUrl] = React.useState<string | null>(null);
  const { logs, setLogs } = useLogs();
  const [terminalFUllscreen, setTerminalFullscreen] = React.useState(false);
  const [height, setHeight] = React.useState(192); // Default height in pixels
  const [isResizing, setIsResizing] = React.useState(false);
  const tabs: string[] = ["EXPLORE", "TERMINAL"];

  const handleMouseDown = React.useCallback((e: React.MouseEvent) => {
    setIsResizing(true);
    e.preventDefault();
  }, []);

  const handleMouseMove = React.useCallback((e: MouseEvent) => {
    if (!isResizing) return;
    const newHeight = window.innerHeight - e.clientY;
    const minHeight = 100;
    const maxHeight = window.innerHeight - 100;
    if (newHeight >= minHeight && newHeight <= maxHeight) {
      setHeight(newHeight);
    }
  }, [isResizing]);

  const handleMouseUp = React.useCallback(() => {
    setIsResizing(false);
  }, []);

  React.useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isResizing, handleMouseMove, handleMouseUp]);

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
            ? "fixed top-8 z-10 mt-auto h-screen bg-secondary-bg flex animate-[slideUp_0.2s_ease-out_forwards] ease-in-out duration-300  w-full flex-col"
            : "fixed bottom-0 w-full bg-secondary-bg flex mt-auto z-10 flex-col"
          : "hidden"
      }
      style={!terminalFUllscreen ? { height: `${height}px` } : {}}
    >
      {/* Resize handle - positioned at the top of the terminal */}
      {!terminalFUllscreen && (
        <div
          className={`absolute left-0 right-0 cursor-n-resize transition-colors z-40 ${
            isResizing && 'bg-bg'
          }`}
          style={{
            top: '-4px',
            height: '8px',
            userSelect: 'none'
          }}
          onMouseDown={handleMouseDown}
        />
      )}
      <div className="flex mt-auto items-center h-10 w-full bg-[var(--bg)] pl-10 pr-4 text-sm border-t-1 border-secondary-bg shadow-t-2xl shadow-amber-50">
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
      <div className="px- text-text text-xs overflow-y-scroll max-h-full h-full w-full">
        {activeTab === "EXPLORE" && <ProblemsScreen />}
        {activeTab === "TERMINAL" && (
          <TerminalScreen
            currentUrl={currentUrl}
            logs={logs}
          />
        )}
      </div>
    </div>
  );
}

export default Terminal;
