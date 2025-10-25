"use client";

import { experiences } from "@/lib/data/experience";
import Image from "next/image";

export default function ExperiencePage() {
  return (
    <section className="text-white p-6">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-10 bg-gradient-to-tl from-blue-800/90 to-cyan-200 bg-clip-text text-transparent animate-fadeSlideDown">
        Experience
      </h2>

      {/* Experience Container */}
      <div className="space-y-4 max-w-full">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
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
                <li key={idx} className="flex items-start gap-2">
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
                    key={t}
                    className="px-3 py-1 text-xs rounded-full bg-secondary-bg text-blue-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
