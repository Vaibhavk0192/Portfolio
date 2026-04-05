"use client";

import { useEffect, useState, useRef } from "react";
import { Problem } from "@/lib/types/problems";
import Problems from "./problems/page";
import { useSelectedTab } from "@/context/selectedTabContext";
import IconsMap from "@/utils/IconsMap";
import NotFoundPage from "../../pages/notFoundPage/page";
import ServerErrorPage from "../../pages/serverErrorPage/page";
import { apiFetch } from "@/lib/api";

// Cache for problems data - persists across component remounts
const problemsCache = {
  data: null as Problem[] | null,
  error: null as { type: 'not-found' | 'server-error'; statusCode?: number } | null,
  isFetching: false,
};

async function getProblems() {
  const res = await apiFetch("/api/problems", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(res.status.toString());
  }

  return res.json();
}

const SkeletonLoader = () => (
  <div className="py-1 px-4 animate-pulse">
    <div className="flex text-[0.8rem] items-center gap-2 px-5 mb-3">
      <div className="w-5 h-5 bg-bg rounded"></div>
      <div className="w-5 h-5 bg-bg rounded"></div>
      <div className="h-3 bg-bg rounded w-1/4"></div>
    </div>
    <div className="px-10 space-y-2">
      <div className="h-3 bg-bg rounded w-2/4"></div>
    </div>
  </div>
);

export default function ProblemsScreen() {
  const { tabs, openTab } = useSelectedTab();
  const [problems, setProblems] = useState<Problem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<{ type: 'not-found' | 'server-error'; statusCode?: number } | null>(null);
  const fetchInitiatedRef = useRef(false);

  useEffect(() => {
    // If we already have cached data, use it immediately
    if (problemsCache.data) {
      setProblems(problemsCache.data);
      setError(problemsCache.error);
      setLoading(false);
      return;
    }

    // Prevent multiple simultaneous fetch requests
    if (problemsCache.isFetching || fetchInitiatedRef.current) {
      return;
    }

    const fetchProblems = async () => {
      fetchInitiatedRef.current = true;
      problemsCache.isFetching = true;
      setLoading(true);
      setError(null);
      try {
        const data = await getProblems();
        setProblems(data);
        problemsCache.data = data;
        problemsCache.error = null;
      } catch (error: unknown) {
        console.error("Failed to fetch problems:", error);
        const message = error instanceof Error ? error.message : String(error);
        const statusCode = parseInt(message);
        let errorObj: { type: 'not-found' | 'server-error'; statusCode?: number } | null = null;
        
        if (statusCode === 404) {
          errorObj = { type: 'not-found', statusCode: 404 };
        } else if (statusCode >= 500) {
          errorObj = { type: 'server-error', statusCode };
        } else {
          errorObj = { type: 'server-error', statusCode: 500 };
        }
        
        setError(errorObj);
        problemsCache.error = errorObj;
      } finally {
        setLoading(false);
        problemsCache.isFetching = false;
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
    <div className=" h-full mt-2 px-4">
      {loading ? (
        <div className="flex flex-col text-center">
          <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <SkeletonLoader key={i} />
            ))}
          </div>
        </div>
      ) : activeProblems.length === 0 ? (
        <div className="flex flex-col  py-5">
          <h3 className="text-lg font-semibold text-highlight-green mb-2 px-3">
            All Set!
          </h3>
          <p className="text-text text-sm max-w-md px-3">
            You&apos;ve explored all the sections. Great job!
          </p>
        </div>
      ) : (
        activeProblems.map((problem: Problem) => (
          <div key={problem.id} className="py-1">
            <Problems {...problem} />
          </div>
        ))
      )}
    </div>
  );
}
