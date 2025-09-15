"use client";

import { useState } from "react";
import { skillSections } from "@/lib/data/skills";

function Skills() {
  const [activeTab, setActiveTab] = useState<string>("dev");
  const activeSection = skillSections.find((section) => section.id === activeTab);

  return (
    <div className="text-white py-4">
      <div className="flex">
        {skillSections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveTab(section.id)}
            className={`flex max-w-fit  transition h-full pb-10 text-sm under ${
              activeTab === section.id
                ? " text-highlight-green underline underline-offset-10 "
                : "bg-secondary-bg text-gray-300 hover:text-highlight-green"
            }`}
          >
            <p className="pr-4">

            {section.title}
            </p>
          </button>
        ))}
      </div>

      {/* Active Skills */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {activeSection?.skills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 p-4 bg-secondary-bg rounded-xl shadow-md hover:scale-105 transition"
          >
            <skill.icon className="text-3xl" />
            <span className="text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
