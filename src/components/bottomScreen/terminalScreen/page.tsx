import React from "react";

interface LogEntry {
  time: string;
  message: string;
}

interface TerminalScreenProps {
  currentUrl: string | null;
  logs: LogEntry[];
}

export default function TerminalScreen(
  terminalScreenProps: TerminalScreenProps
) {

  return (
    <div className="">
      <div className="text-text pt-10 ">
        Five Server <span className="text-cyan-200">running at:</span>
      </div>
      <div>
        {"> "}Network :{" "}
        <span className="text-highlight-green">
          {terminalScreenProps.currentUrl}
        </span>
      </div>
      {terminalScreenProps.logs.map((log, i) => (
        <p key={i} className="text-xs">
          <span className="text-text-gray text-[0.7rem]">{log.time + " "}</span>
          <span className="text-cyan-200">[File Server]</span>
          <span className="text-highlight-green">{" " + log.message}</span>
        </p>
      ))}
    </div>
  );
}
