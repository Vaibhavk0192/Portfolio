import React from "react";
import { useSelectedTab } from "@/context/selectedTabContext";

interface LogEntry {
  time: string;
  message: string;
}

interface TerminalScreenProps {
  currentUrl: string | null;
  logs: LogEntry[];
}

export default function TerminalScreen({ currentUrl, logs }: TerminalScreenProps) {
  const { openTab, activeId } = useSelectedTab();
  const [command, setCommand] = React.useState("");
  const [output, setOutput] = React.useState<string[]>([
    "Welcome to Portfolio Terminal. Type 'help' for available commands.",
  ]);
  const outputRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const runCommand = (input: string) => {
    const text = input.trim();
    if (!text) return;
    setOutput((prev) => [...prev, `$ ${text}`]);

    const cmd = text.toLowerCase();

    const navigate = (id: string, title: string, label: string) => {
      openTab({ id, title });
      setOutput((prev) => [...prev, `${label} page opened.`]);
    };

    switch (cmd) {
      case "help":
        setOutput((prev) => [
          ...prev,
          "Available commands:",
          "  help         - show this message",
          "  status       - show system status",
          "  system info  - show system info",
          "  home         - switch to Home page",
          "  skills       - switch to Skills page",
          "  projects     - switch to Projects page",
          "  experience   - switch to Experience page",
          "  education    - switch to Education page",
          "  contact      - switch to Contact page",
          "  clear        - clear terminal output",
        ]);
        break;
      case "status":
        setOutput((prev) => [
          ...prev,
          "System is running",
          `Server: ${currentUrl ?? "Not connected"}`,
          `Log entries: ${logs.length}`,
          `Current tab id: ${activeId ?? "undefined"}`,
        ]);
        break;
      case "system info":
        setOutput((prev) => [
          ...prev,
          "SYSTEM INFO:",
          `Platform: ${navigator.platform}`,
          `Browser: ${navigator.userAgent}`,
          `Language: ${navigator.language}`,
          `URL: ${currentUrl ?? "unknown"}`,
        ]);
        break;
      case "home":
        navigate("1.1.1", "Home", "Home");
        break;
      case "skills":
        navigate("1.1.2", "Skills", "Skills");
        break;
      case "projects":
        navigate("1.1.3", "Projects", "Projects");
        break;
      case "experience":
        navigate("1.1.4", "Experience", "Experience");
        break;
      case "education":
        navigate("1.1.5", "Education", "Education");
        break;
      case "contact":
        navigate("1.1.6", "Contact", "Contact");
        break;
      case "clear":
        setOutput([]);
        break;
      default:
        setOutput((prev) => [...prev, `Unknown command: '${text}'. Type 'help'.`]);
        break;
    }
  };

  React.useEffect(() => {
    // keep output in sync with logs if desired
    if (logs.length > 0) {
      setOutput((prev) => [...prev, ` New log: ${logs[logs.length - 1].message}`]);
    }
  }, [logs]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      runCommand(command);
      setCommand("");
    }
  };

  return (
    <div className="h-full w-full p-0 font-mono text-sm text-white bg-secondary-bg rounded-md flex flex-col border border-secondary-bg">
      <div className="flex items-center justify-between px-3 py-1 bg-[#2d2d2d] border-b border-[#333] text-xs text-[#d4d4d4]">
        <span>Terminal</span>
        <span className="text-[#6a9955]">● Connected</span>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-2" ref={outputRef}>
        {output.map((line, idx) => (
          <div key={idx} className="whitespace-pre-wrap text-xs leading-5 text-slate-200">
            {line}
          </div>
        ))}
      </div>

      <div className="flex items-center border-t border-bg bg-secondary-bg px-3 py-2">
        <span className="text-highlight-green mr-2 text-xs">user@portfolio</span>
        <span className="text-[#ce9178] mr-2 text-xs">~</span>
        <input
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none border-none text-sm text-white caret-cyan-400"
          placeholder="Type command and press Enter"
          autoComplete="off"
        />
      </div>

      <div className="px-3 pb-2 pt-1 text-xs text-[#9a9a9a] bg-bg">
        Quick commands: home, skills, projects, experience, education, contact, status, system info, help, clear
      </div>
    </div>
  );
}
