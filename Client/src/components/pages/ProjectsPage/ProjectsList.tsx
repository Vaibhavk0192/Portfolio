'use client';

import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { IoMdOpen } from "react-icons/io";
import { Project } from "@/lib/types/projects";
import { useState } from "react";

interface Props {
  projects: Project[];
}

export default function ProjectsList({ projects }: Props) {
  const [filter, setFilter] = useState("all");

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 opacity-0 animate-fadeSlideUp">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-bg rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform"
        >
          <div className="relative w-full h-48">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-t-xl"
            />
          </div>
          <div className="p-5 flex flex-col gap-3 items-start justify-end">
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p className="text-gray-300 text-sm">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((t) => (
                <span
                  key={`${project.id}-tech-${t}`}
                  className="px-2 py-1 text-xs bg-secondary-bg rounded-lg text-[#ccfeb8]"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="flex items-center gap-1 text-sm text-[#ccfeb8] hover:underline"
                >
                  <IoMdOpen size={16} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-1 text-sm text-gray-300 hover:underline"
                >
                  <BsGithub size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
