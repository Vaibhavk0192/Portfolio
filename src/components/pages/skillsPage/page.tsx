"use client";

import { useState } from "react";
import { skillSections } from "@/lib/data/skills";
import Image from "next/image";

function Skills() {
  const [activeTab, setActiveTab] = useState<string>("dev");
  const activeSection = skillSections.find(
    (section) => section.id === activeTab
  );

  return (
    <div className="text-white py-8">

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-12">
        {skillSections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveTab(section.id)}
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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
        {activeSection?.skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col w-36 text-center items-center justify-center gap-2 p-6 bg-bg rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Image src={skill.icon} alt={skill.name} width={55} height={55} />
            <p className="mt-2 text-sm font-medium text-gray-200">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
