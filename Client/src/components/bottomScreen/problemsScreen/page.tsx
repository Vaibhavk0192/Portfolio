"use client";

import { problems, Problem } from "@/lib/data/problems";
import Problems from "./problems/page";
import { useSelectedTab } from "@/context/selectedTabContext";
import IconsMap from "@/utils/IconsMap";

export default function ProblemsScreen() {
  const { tabs,openTab } = useSelectedTab();
  const activeProblems = problems.filter((p) => !tabs.map(t=>t.id).includes(p.pageId));

  return (
    <div className="p-4 overflow-y-auto h-full mt-4">
      {activeProblems.length === 0 ? (
        <div className="text-text pt-2 text-sm">
          No problems found in workspace.
        </div>
      ) : (
        activeProblems.map((problem: Problem) => (
          <Problems key={problem.id} {...problem} icon={IconsMap[problem.fileName]}/>
        ))
      )}
    </div>
  );
}
