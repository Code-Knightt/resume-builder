import React from "react";
import { useSelector } from "react-redux";
import { LinkIcon, CodeBracketIcon } from "@heroicons/react/24/solid";

function ProjectsSection() {
  const projects = useSelector((state) => state.projects);

  if (projects.length !== 0) {
    return (
      <div className="relative">
        <h1 className="text-c-small mb-4 font-bold">Projects</h1>
        {projects.map((project) => {
          return (
            <div className="mb-6" key={project.id}>
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="font-light text-sm">{project.description}</p>

              <p className="text-sm font-normal">
                {project.start} {project.start && project.end ? "-" : undefined}{" "}
                {project.end}
              </p>

              {project["project-link"] && (
                <a
                  href={project["project-link"]}
                  target="_blank"
                  className="block text-xs underline mt-2"
                >
                  <LinkIcon className="h-3 w-3 inline-block mr-2" />
                  {project["project-link"]}
                </a>
              )}
              {project["code-link"] && (
                <a
                  href={project["code-link"]}
                  target="_blank"
                  className="block text-xs underline"
                >
                  <CodeBracketIcon className="h-3 w-3 inline-block mr-2" />

                  {project["code-link"]}
                </a>
              )}
            </div>
          );
        })}
        <div className="h-[1px] my-4 bg-gray-300 w-full" />
      </div>
    );
  } else {
    return undefined;
  }
}

export default ProjectsSection;
