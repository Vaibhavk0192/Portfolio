// app/projects/page.tsx
import { useEffect, useState } from "react";
import ProjectsList from "./ProjectsList";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import NotFoundPage from "../notFoundPage/page";
import ServerErrorPage from "../serverErrorPage/page";
import { apiFetch } from "@/lib/api";

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Cache for projects data
const projectsCache = {
  data: null as any,
  error: null as any,
  isFetching: false,
  hasFetched: false, // Track if we've ever successfully fetched
};

async function getProjects() {
  const res = await apiFetch("/api/projects", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(res.status.toString());
  }

  return res.json();
}

export default function ProjectsPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<{ type: 'not-found' | 'server-error'; statusCode?: number } | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const projects = await getProjects();
      setData(projects);
      projectsCache.data = projects;
      projectsCache.error = null;
      projectsCache.hasFetched = true; // Mark as successfully fetched
    } catch (error: unknown) {
      console.error("Failed to fetch projects:", error);
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
      projectsCache.error = errorObj;
    }
    setLoading(false);
  };

  useEffect(() => {
    // If we already have cached data, use it immediately
    if (projectsCache.data) {
      setData(projectsCache.data);
      setError(projectsCache.error);
      setLoading(false);
      return;
    }

    // Prevent multiple simultaneous fetch requests - use global flag
    if (projectsCache.isFetching || projectsCache.hasFetched) {
      return;
    }

    projectsCache.isFetching = true;
    fetchData().then(() => {
      projectsCache.isFetching = false;
    });
  }, []);

  if (error) {
    return error.type === 'not-found' ? <NotFoundPage /> : <ServerErrorPage />;
  }

  return (
    <div className="p-6 text-white px-12">
      <h1 className="text-5xl font-extrabold mb-10 text-start from-[#ccfeb8] to-[#bcd1c4] text-transparent bg-gradient-to-b bg-clip-text animate-fadeSlideDown">
        Projects
      </h1>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonTheme
              key={`project-skeleton-${i}`}
              baseColor="#1a1d28"
              highlightColor="#25293648"
              duration={2}
              borderRadius={10}
              enableAnimation={true}
            >
              <Skeleton height={400} className="rounded-xl" />
            </SkeletonTheme>
          ))}
        </div>
      ) : (
        <ProjectsList projects={data ?? []} />
      )}
    </div>
  );
}
