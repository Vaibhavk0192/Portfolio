"use client";

import { useEffect, useState } from "react";
import { Problem } from "@/lib/types/problems";
import Problems from "./problems/page";
import { useSelectedTab } from "@/context/selectedTabContext";
import IconsMap from "@/utils/IconsMap";
import NotFoundPage from "../../pages/notFoundPage/page";
import ServerErrorPage from "../../pages/serverErrorPage/page";

async function getProblems() {
  const res = await fetch("http://localhost:5000/api/problems", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(res.status.toString());
  }

  return res.json();
}

export default function ProblemsScreen() {
  const { tabs, openTab } = useSelectedTab();
  const [problems, setProblems] = useState<Problem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<{ type: 'not-found' | 'server-error'; statusCode?: number } | null>(null);

  useEffect(() => {
    const fetchProblems = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getProblems();
        setProblems(data);
      } catch (error: unknown) {
        console.error("Failed to fetch problems:", error);
        const message = error instanceof Error ? error.message : String(error);
        const statusCode = parseInt(message);
        if (statusCode === 404) {
          setError({ type: 'not-found', statusCode: 404 });
        } else if (statusCode >= 500) {
          setError({ type: 'server-error', statusCode });
        } else {
          setError({ type: 'server-error', statusCode: 500 });
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProblems();
  }, []);

  if (error) {
    return error.type === 'not-found' ? <NotFoundPage /> : <ServerErrorPage />;
  }

  const activeProblems = problems.filter((p) => {
    const normalizedPageId = p.pageId.split(".").slice(0, 3).join(".");
    return !tabs.map((t) => t.id).includes(normalizedPageId);
  });

  return (
    <div className=" overflow-y-auto h-full mt-8 px-4">
      {loading ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-highlight-green mb-4"></div>
          <p className="text-text text-sm">Loading suggestions...</p>
        </div>
      ) : activeProblems.length === 0 ? (
        <div className="flex flex-col  py-5">
          <div className="text-4xl mb-4">🎉</div>
          <h3 className="text-lg font-semibold text-highlight-green mb-2">
            All Set!
          </h3>
          <p className="text-text text-sm max-w-md">
            You&apos;ve explored all the sections. Great job!
          </p>
        </div>
      ) : (
        activeProblems.map((problem: Problem) => (
          <div key={problem.id} className="py-2">
            <Problems {...problem} />
          </div>
        ))
      )}
    </div>
  );
}
