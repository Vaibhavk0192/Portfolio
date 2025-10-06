"use client";

import { useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { EducationData } from "@/lib/data/education";

export default function EducationPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="p-6 text-text h-full overflow-y-auto">
      <h2
        className={`text-3xl font-semibold mb-8 flex items-center gap-2 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <FaGraduationCap className="text-cyan-400" /> Education
      </h2>

      {/* Timeline container */}
      <div className="relative ml-3">
        {/* Animated vertical line */}
        <div
          className={`absolute left-[2rem] w-0.5 top-2 bg-gradient-to-b from-blue-400 to-cyan-400 origin-top transition-all duration-1000 ease-out ${
            visible ? "h-full" : "h-0"
          }`}
        ></div>

        {/* Timeline items */}
        {EducationData.map((edu, index) => (
          <div
            key={index}
            className={`mb-10 ml-6 transition-all duration-700 ease-out delay-[${
              index * 150
            }ms] ${
              visible
                ? "opacity-100 -translate-y-0"
                : "opacity-0 -translate-y-5"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="flex items-center gap-2 font-stretch-50%">
              <FaGraduationCap fontSize={18} fontStretch={"expanded"} className="text-white"/>
              <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
            </div>
            <div className="ml-6 mt-1">
                
            {/* Education content */}
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
