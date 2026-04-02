"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ExperienceInterface } from "@/lib/types/experience";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import NotFoundPage from "../notFoundPage/page";
import ServerErrorPage from "../serverErrorPage/page";

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

async function getExperience() {
  const res = await fetch("http://localhost:5000/api/experience", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(res.status.toString());
  }

  return res.json();
}

export default function ExperiencePage() {
  const [data, setData] = useState<ExperienceInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<{ type: 'not-found' | 'server-error'; statusCode?: number } | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const experience = await getExperience();
      setData(experience);
    } catch (error: any) {
      console.error("Failed to fetch experience:", error);
      const statusCode = parseInt(error.message);
      if (statusCode === 404) {
        setError({ type: 'not-found', statusCode: 404 });
      } else if (statusCode >= 500) {
        setError({ type: 'server-error', statusCode });
      } else {
        setError({ type: 'server-error', statusCode: 500 });
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return error.type === 'not-found' ? <NotFoundPage /> : <ServerErrorPage />;
  }

  return (
    <section className="text-white p-6">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-10 bg-gradient-to-tl from-blue-800/90 to-cyan-200 bg-clip-text text-transparent animate-fadeSlideDown">
        Experience
      </h2>

      {/* Experience Container */}
      <div className="space-y-4 max-w-full">
        {loading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <SkeletonTheme
              key={`experience-skeleton-${i}`}
              baseColor="#1a1d28"
              highlightColor="#25293648"
              duration={2}
              borderRadius={10}
              enableAnimation={true}
            >
              <Skeleton height={200} className="rounded-2xl" />
            </SkeletonTheme>
          ))
        ) : (
          data.map((exp, index) => (
            <div
              key={exp.id || index}
              className="relative py-3 px-4 rounded-2xl bg-gradient-to-r from-bg/50 to-secondary-bg shadow-md hover:shadow-lg transition-all duration-300 border border-blue-900/20 opacity-0 animate-fadeSlideUp"
              style={{
                animationDelay: `${index * 150 + 200}ms`,
                animationFillMode: "forwards",
              }}
            >
              {/* Header Section */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4">
                  {/* Logo */}
                  {exp.logo && (
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={50}
                        height={50}
                        className="w-full h-full object-scale-down rounded-md bg-white"
                      />
                    </div>
                  )}

                  {/* Role & Company */}
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                    <p className="text-blue-300 text-sm font-medium">{exp.company}</p>
                  </div>
                </div>

                {/* Duration & Location */}
                <div className="text-right text-gray-400 text-sm md:pr-2">
                  <p>{exp.duration}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-gradient-to-r from-blue-300/50 rounded-full to-transparent my-4"></div>

              {/* Description */}
              <ul className="space-y-2 text-gray-300 text-sm leading-relaxed pl-1">
                {exp.description.map((point, idx) => (
                  <li key={`${exp.id ?? exp.role}-desc-${idx}`} className="flex items-start gap-2">
                    <span className="text-blue-300">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              {exp.tech && exp.tech.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {exp.tech.map((t) => (
                    <span
                      key={`${exp.id ?? exp.role}-tech-${t}`}
                      className="px-3 py-1 text-xs rounded-full bg-secondary-bg text-blue-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
}
