"use client";

import { experiences } from "@/lib/data/experience";
import Image from "next/image";

function ExperiencePage() {
  return (
    <section className="text-white py-16 px-12">
      {/* Gradient Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-start bg-gradient-to-b from-blue-400 to-cyan-500 bg-clip-text text-transparent">
        Experience
      </h2>

      {/* Experience List */}
      <div className="flex flex-col gap-10 max-w-5xl mx-auto">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-br from-gray-900/70 to-gray-800/50 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Company Logo */}
            {exp.logo && (
              <div className="flex-shrink-0 w-16 h-16 rounded-md bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  width={50}
                  height={50}
                  className="object-contain rounded-md"
                />
              </div>
            )}

            {/* Content */}
            <div className="flex-1">
              {/* Role & Company */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-2xl font-semibold">{exp.role}</h3>
                  <p className="text-cyan-300 font-medium">{exp.company}</p>
                </div>

                {/* Duration & Location */}
                <div className="mt-2 md:mt-0 text-gray-400 text-sm text-right">
                  <p>{exp.duration}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              {/* Description */}
              <ul className="mt-4 space-y-2 text-gray-300 text-sm leading-relaxed">
                {exp.description.map((point, idx) => (
                  <li key={idx}>• {point}</li>
                ))}
              </ul>

              {/* Tech stack */}
              {exp.tech && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full bg-blue-600/20 text-cyan-300 border border-blue-500/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperiencePage;
