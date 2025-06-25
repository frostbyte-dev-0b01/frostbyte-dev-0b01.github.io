import React from "react";
import { projects } from "../data/projects";

const Projects: React.FC = () => {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <ul className="space-y-8">
        {projects.map((project) => (
          <li
            key={project.name}
            className={`${project.bg_color} shadow-md rounded-xl p-6`}
          >
            <strong className="text-xl block mb-2">{project.name}</strong>
            <span className="block text-gray-700 mb-2">
              {project.description}
            </span>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View on GitHub
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
