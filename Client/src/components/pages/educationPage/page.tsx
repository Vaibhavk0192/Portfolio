"use client";

import { useEffect, useState } from "react";
import { TbPointFilled } from "react-icons/tb";
import { EducationInterface } from "@/lib/types/education";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import NotFoundPage from "../notFoundPage/page";
import ServerErrorPage from "../serverErrorPage/page";
import { apiFetch } from "@/lib/api";

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Cache for education data
const educationCache = {
  data: null as EducationInterface[] | null,
  error: null as any,
  isFetching: false,
  hasFetched: false, // Track if we've ever successfully fetched
};

async function getEducation() {
  const res = await apiFetch("/api/education", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(res.status.toString());
  }

  return res.json();
}

export default function EducationPage() {
  const [data, setData] = useState<EducationInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<{ type: 'not-found' | 'server-error'; statusCode?: number } | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const education = await getEducation();
      setData(education);
      educationCache.data = education;
      educationCache.error = null;
      educationCache.hasFetched = true; // Mark as successfully fetched
    } catch (error: unknown) {
      console.error("Failed to fetch education:", error);
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
      educationCache.error = errorObj;
    }
    setLoading(false);
  };

  useEffect(() => {
    // If we already have cached data, use it immediately
    if (educationCache.data) {
      setData(educationCache.data);
      setError(educationCache.error);
      setLoading(false);
      return;
    }

    // Prevent multiple simultaneous fetch requests - use global flag
    if (educationCache.isFetching || educationCache.hasFetched) {
      return;
    }

    educationCache.isFetching = true;
    fetchData().then(() => {
      educationCache.isFetching = false;
    });
  }, []);

  if (error) {
    return error.type === 'not-found' ? <NotFoundPage /> : <ServerErrorPage />;
  }

  return (
    <div className="p-6 text-text h-full overflow-y-auto">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-semibold mb-8 flex items-center gap-2 bg-gradient-to-bl from-[#cf483d] to-[#f9d24e] text-transparent bg-clip-text animate-fadeSlideDown">
        Education
      </h2>

      {/* Timeline Container */}
      <div className="relative">
        {loading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <SkeletonTheme
              key={`education-skeleton-${i}`}
              baseColor="#1a1d28"
              highlightColor="#25293648"
              duration={2}
              borderRadius={10}
              enableAnimation={true}
            >
              <Skeleton height={100} className="mb-10 rounded-xl" />
            </SkeletonTheme>
          ))
        ) : (
          data.map((edu, index) => (
            <div
              key={edu.id || index}
              className="mb-10 opacity-0 animate-fadeSlideUp"
              style={{
                animationDelay: `${index * 150 + 200}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="flex items-center gap-2">
                <TbPointFilled fontSize={24} className="text-[#f9d24e]" />
                <h3 className="text-lg font-semibold text-white">
                  {edu.degree}
                </h3>
              </div>

              <div className="ml-6 mt-1">
                <p className="text-sm text-gray-400 mt-1">{edu.institution}</p>
                <p className="text-xs text-gray-500 mb-2">{edu.duration}</p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
