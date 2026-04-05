"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Section } from "@/lib/types/skills";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import NotFoundPage from "../notFoundPage/page";
import ServerErrorPage from "../serverErrorPage/page";
import { apiFetch } from "@/lib/api";

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Cache for skills data
const skillsCache = {
  data: null as Section[] | null,
  error: null as any,
  isFetching: false,
  hasFetched: false, // Track if we've ever successfully fetched
};

async function getSkills() {
  const res = await apiFetch("/api/skills", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(res.status.toString());
  }

  return res.json();
}

function Skills() {
  const [data, setData] = useState<Section[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<{ type: 'not-found' | 'server-error'; statusCode?: number } | null>(null);
  const [activeTab, setActiveTab] = useState<string>("");

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const skills = await getSkills();
      setData(skills);
      skillsCache.data = skills;
      skillsCache.error = null;
      skillsCache.hasFetched = true; // Mark as successfully fetched
      if (skills.length > 0) {
        setActiveTab(skills[0].id || "");
      }
    } catch (error: unknown) {
      console.error("Failed to fetch skills:", error);
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
      skillsCache.error = errorObj;
    }
    setLoading(false);
  };

  useEffect(() => {
    // If we already have cached data, use it immediately
    if (skillsCache.data) {
      setData(skillsCache.data);
      setError(skillsCache.error);
      if (skillsCache.data.length > 0) {
        setActiveTab(skillsCache.data[0].id || "");
      }
      setLoading(false);
      return;
    }

    // Prevent multiple simultaneous fetch requests - use global flag
    if (skillsCache.isFetching || skillsCache.hasFetched) {
      return;
    }

    skillsCache.isFetching = true;
    fetchData().then(() => {
      skillsCache.isFetching = false;
    });
  }, []);

  if (error) {
    return error.type === 'not-found' ? <NotFoundPage /> : <ServerErrorPage />;
  }

  const activeSection = data.find(
    (section) => section.id === activeTab
  );

  return (
    <div className="text-white py-8">

      {/* Tabs */}
      {loading ? (
        <div className="flex ml-10 gap-6 mb-12">
          {Array.from({ length: 3 }).map((_, i) => (
            <SkeletonTheme
              key={`tab-skeleton-${i}`}
              baseColor="#1a1d28"
              highlightColor="#25293648"
              duration={2}
              borderRadius={10}
              enableAnimation={true}
            >
              <Skeleton width={100} height={40} className="rounded-md" />
            </SkeletonTheme>
          ))}
        </div>
      ) : (
        <div className="flex ml-10 gap-6 mb-12">
          {data.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id || "")}
              className={`px-2 py-2 rounded-md font-medium text-sm transition-all duration-300 ${
                activeTab === section.id
                  ? "bg-highlight-green text-black shadow-lg"
                  : "bg-secondary-bg text-gray-300 hover:text-highlight-green hover:bg-bg/60"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
        {loading ? (
          Array.from({ length: 10 }).map((_, i) => (
            <SkeletonTheme
              key={`skill-skeleton-${i}`}
              baseColor="#1a1d28"
              highlightColor="#25293648"
              duration={2}
              borderRadius={10}
              enableAnimation={true}
            >
              <Skeleton width={144} height={120} className="rounded-2xl" />
            </SkeletonTheme>
          ))
        ) : (
          activeSection?.skills.map((skill) => (
            <div
              key={`${activeSection?.id ?? activeTab}-${skill.name}`}
              className="flex flex-col w-36 text-center items-center justify-center gap-2 p-6 bg-bg rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Image src={skill.icon} alt={skill.name} width={55} height={55} />
              <p className="mt-2 text-sm font-medium text-gray-200">
                {skill.name}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Skills;
