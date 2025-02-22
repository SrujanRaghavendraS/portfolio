import Image from "next/image";

const GITHUB_USERNAME = "SrujanRaghavendraS"; 
const LEETCODE_USERNAME = "Srujan_Raghavendra_S"; 

interface StatCardProps {
  title: string;
  imgSrc: string;
  imgAlt: string;
  link: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, imgSrc, imgAlt, link }) => (
  <div className="flex flex-col items-center">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={500} // Adjust based on your design
        height={250} // Adjust based on your design
        className="rounded-lg shadow-lg cursor-pointer"
        unoptimized // Allows external images without Next.js optimization
      />
    </a>
  </div>
);



const Stats = ({ darkMode }: { darkMode: boolean }) => {
  
  const bgColor = darkMode ? "bg-[#1e293b] text-[#38bdf8]" : "bg-[#fef3c7] text-[#b45309]";
  const headingColor = darkMode
    ? "bg-gradient-to-r from-[#50BFA5] to-[#A5F3FC] text-transparent bg-clip-text"
    : "bg-gradient-to-r from-[#1E40AF] to-[#60A5FA] text-transparent bg-clip-text";

  return (
    <section className={`py-12 px-6 sm:px-12 ${bgColor}`}>
      <div className="max-w-6xl mx-auto text-center">
        <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-wide mb-6 ${headingColor}`}>
          Stats Overview
        </h1>

        {/* LeetCode Stats */}
        <div className="mt-12 flex flex-col items-center">
          <StatCard
            title="LeetCode Stats"
            imgSrc={`https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=${darkMode ? "dark" : "light"}&font=Montserrat`}
            imgAlt="LeetCode Stats"
            link={`https://leetcode.com/u/${LEETCODE_USERNAME}`}
          />
        </div>

        {/* GitHub Stats */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-6">
          <StatCard
            title="GitHub Stats"
            imgSrc={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=${darkMode ? "tokyonight" : "default"}`}
            imgAlt="GitHub Stats"
            link={`https://github.com/${GITHUB_USERNAME}`}
          />
          <StatCard
            title="GitHub Contribution Graph"
            imgSrc={`https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=${GITHUB_USERNAME}&theme=${darkMode ? "tokyonight" : "default"}`}
            imgAlt="GitHub Contribution Graph"
            link={`https://github.com/${GITHUB_USERNAME}`}
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
