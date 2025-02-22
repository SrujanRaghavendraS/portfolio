import React from "react";

const ProjectCard = ({ repo, darkMode }: { repo: any; darkMode: boolean }) => {
  const cardBg = darkMode ? "bg-[#1E223E]" : "bg-white";
  const textColor = darkMode ? "text-[#D1FAE5]" : "text-[#374151]";
  const badgeColor = darkMode ? "bg-[#50BFA5] text-[#1E223E]" : "bg-[#1E40AF] text-white";

  return (
    <div className={`relative p-6 rounded-xl shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105 ${cardBg}`}>
      {/* Repo Name & External Link */}
      <div className="flex items-center justify-between">
        <a
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-semibold hover:underline"
        >
          {repo.name}
        </a>
        <a href={repo.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400">
          🔗
        </a>
      </div>

      {/* Repo Description */}
      <p className={`text-sm mt-2 ${textColor}`}>{repo.description}</p>

      {/* Topics */}
      {repo.repositoryTopics?.nodes?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {repo.repositoryTopics.nodes.map((topic: any, i: number) => (
            <span key={i} className={`px-3 py-1 text-xs font-semibold rounded-full ${badgeColor}`}>
              {topic.topic.name}
            </span>
          ))}
        </div>
      )}

      {/* Stars & Forks */}
      <div className="flex justify-between mt-4 text-gray-400 text-sm">
        <span>⭐ {repo.stargazerCount} Stars</span>
        <span>🍴 {repo.forkCount} Forks</span>
      </div>
    </div>
  );
};

export default ProjectCard;
