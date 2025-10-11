"use client";

import { TbPointFilled } from "react-icons/tb";
import { EducationData } from "@/lib/data/education";

export default function EducationPage() {
  return (
    <div className="p-6 text-text h-full overflow-y-auto">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-semibold mb-8 flex items-center gap-2 bg-gradient-to-bl from-[#cf483d] to-[#f9d24e] text-transparent bg-clip-text animate-fadeSlideDown">
        Education
      </h2>

      {/* Timeline Container */}
      <div className="relative">
        {EducationData.map((edu, index) => (
          <div
            key={index}
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
        ))}
      </div>
    </div>
  );
}
