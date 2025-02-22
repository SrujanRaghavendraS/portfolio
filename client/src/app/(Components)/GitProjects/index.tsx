import { useState } from "react";
import { useGithubRepos } from "@/app/hooks/useGithubRepos";
import ProjectGrid from "@/app/(Components)/ProjectGrid";
import SeeMoreButton from "@/app/(Components)/SeeMoreButton";

const GITHUB_USERNAME = "SrujanRaghavendraS";

const GitProjects = ({ darkMode }: { darkMode: boolean }) => {
  const { repos, loading, error } = useGithubRepos();
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [clickCount, setClickCount] = useState(0);

  const handleSeeMore = () => {
    if (clickCount === 0) {
      setVisibleProjects(repos.length); // Show all projects
    }
    if (clickCount === 1) {
      window.open(`https://github.com/${GITHUB_USERNAME}`, "_blank");
    }
    setClickCount(1);
  };

  // 🌈 Apply Your Color Palette
  const bgColor = darkMode ? "bg-[#2C2F48] text-[#A7D7C5]" : "bg-[#E5E7EB] text-[#1E293B]";
  const headingColor = darkMode
    ? "bg-gradient-to-r from-[#50BFA5] to-[#A5F3FC] text-transparent bg-clip-text"
    : "bg-gradient-to-r from-[#1E40AF] to-[#60A5FA] text-transparent bg-clip-text";

  return (
    <section className={`py-12 px-6 sm:px-12 ${bgColor}`}>
      <div className="max-w-6xl mx-auto text-center">
        <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-wide mb-6 ${headingColor}`}>
          GitHub Pinned Projects
        </h1>

        {loading && <p className="text-lg text-gray-500">Loading projects...</p>}
        {error && <p className="text-lg text-red-500">{error}</p>}

        {!loading && !error && <ProjectGrid repos={repos} visibleProjects={visibleProjects} darkMode={darkMode} />}

        {clickCount < 2 && <SeeMoreButton clickCount={clickCount} onClick={handleSeeMore} darkMode={darkMode} />}
      </div>
    </section>
  );
};

export default GitProjects;
