import { 
  FaPython, FaGithub, FaGitAlt, FaDocker, FaChartBar, FaNodeJs, FaJs, FaAws 
} from "react-icons/fa";
import { 
  SiFastapi, SiNextdotjs, SiTailwindcss, SiPostman, SiMysql, SiMongodb, SiRedis, SiVercel,SiC ,
  SiExpo, SiPostgresql, SiAmazons3,SiAmazonec2,SiGooglegemini,SiRobotframework,SiCplusplus
} from "react-icons/si";

const TechStack = ({ darkMode }: { darkMode: boolean }) => {
  const bgColor = darkMode ? "bg-[#1e293b] text-[#38bdf8]" : "bg-[#fef3c7] text-[#b45309]";
  const headingColor = darkMode ? "text-[#7dd3fc]" : "text-[#9a3412]";
  const textColor = darkMode ? "text-[#94a3b8]" : "text-[#92400e]";

  const techList = [
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "C", icon: <SiC className="text-blue-500" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-700" /> },
    { name: "FastAPI", icon: <SiFastapi className="text-green-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-gray" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-700 dark:text-gray" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Power BI", icon: <FaChartBar className="text-yellow-500" /> },
    { name: "SQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
    { name: "NoSQL", icon: <SiMongodb className="text-green-500" /> },
    { name: "Redis", icon: <SiRedis className="text-red-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
    { name: "Vercel", icon: <SiVercel className="text-black " /> },
    { name: "AWS Amplify", icon: <FaAws className="text-orange-500" /> },  
    { name: "S3", icon: <SiAmazons3 className="text-orange-500" /> },
    { name: "Gemini API", icon: <SiGooglegemini className="text-green-500" /> }, 
    { name: "AI Agents", icon: <SiRobotframework className="text-purple-400" /> },
    { name: "Expo", icon: <SiExpo className="text-blue-400" /> },
    { name: "EC2", icon: <SiAmazonec2 className="text-blue-400" /> },
  ];

  return (
    <section className={`py-8 px-6 sm:px-12 ${bgColor}`}>
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h1 className={`text-3xl sm:text-4xl font-extrabold mb-4 ${headingColor}`}>
          Notable Tech Stack I Have Worked With
        </h1>

        {/* Message about Problem Solving */}
        <p className={`text-lg mb-6 ${textColor}`}>
          🚀 Problem-solving is my main focus rather than a specific tech stack. I am always open to <b>learning and building</b> new things!
        </p>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-center items-center">
          {techList.map((tech, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="text-4xl">{tech.icon}</div>
              <p className="text-md font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
