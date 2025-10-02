"use client";

import { projects } from "@/lib/data/projects";
import Image from "next/image";


function ProjectsPage() {
  return (
    <div className="py-20 text-white px-12">
      <h1 className="text-5xl font-extrabold mb-4 text-start from-red-400 to-yellow-400 text-transparent bg-gradient-to-b bg-clip-text ">Projects</h1>
      <p className="text-start text-gray-300 mb-12 max-w-2xl">
        A collection of my work spanning full-stack development, AI-powered
        solutions, and responsive applications.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                className="object-cover"
              />
            </div>
            <div className="p-5 flex flex-col gap-3">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-gray-300 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs bg-secondary-bg rounded-lg text-highlight-green"
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
                    className="flex items-center gap-1 text-sm text-blue-400 hover:underline"
                  >
                    {/* <ExternalLink size={16} />  */}
                    Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-1 text-sm text-gray-300 hover:underline"
                  >
                    {/* <Github size={16} />  */}
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
