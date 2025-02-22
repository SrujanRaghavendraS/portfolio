import React from "react";
import ProjectCard from "@/app/(Components)/ProjectCard";

interface Repository {
  name: string;
  description: string;
  url: string;
  stargazerCount: number;
  forkCount: number;
  repositoryTopics: {
    nodes: { topic: { name: string } }[];
  };
}

interface ProjectGridProps {
  repos: Repository[];
  visibleProjects: number;
  darkMode: boolean;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ repos, visibleProjects, darkMode }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.slice(0, visibleProjects).map((repo) => (
        <ProjectCard key={repo.url} repo={repo} darkMode={darkMode} />
      ))}
    </div>
  );
};

export default ProjectGrid;
