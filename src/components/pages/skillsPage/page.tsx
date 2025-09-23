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
            <p className="pr-4">{section.title}</p>
          </button>
        ))}
      </div>

      {/* Active Skills */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
        {activeSection?.skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col min-w-36 w-fit items-center justify-center gap-2 p-4 bg-bg rounded-2xl hover:scale-105 transition-transform"
          >
            <Image src={skill.icon} alt={skill.name} width={50} height={50} />
            <p className="mt-2 text-sm">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
