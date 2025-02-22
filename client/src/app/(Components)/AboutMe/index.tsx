import Image from "next/image";

const AboutMe = ({ darkMode }: { darkMode: boolean }) => {
  const bgColor = darkMode ? "bg-[#2C2F48] text-[#A7D7C5]" : "bg-[#E5E7EB] text-[#1E293B]";
  const headingColor = darkMode 
    ? "bg-gradient-to-r from-[#50BFA5] to-[#A5F3FC] text-transparent bg-clip-text"
    : "bg-gradient-to-r from-[#1E40AF] to-[#60A5FA] text-transparent bg-clip-text";
  const textColor = darkMode ? "text-[#D1FAE5]" : "text-[#374151]";

  return (
    <section className={`py-8 px-6 sm:px-12 flex items-center font-[Poppins,sans-serif] ${bgColor}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-center">
        
        {/* Left Side - Image (Scales on All Screens) */}
        <div className="flex justify-center">
          <Image 
            src="/objective.png"
            alt="About Me"
            width={280}
            height={280}
            className="rounded-lg w-3/4 sm:w-3/4 md:w-full h-auto object-contain "
          />
        </div>

        {/* Right Side - Career Objective */}
        <div className="flex flex-col justify-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-wide mb-4 ${headingColor}`}>
            Career Objective
          </h1>
          <p className={`text-md sm:text-lg text-justify leading-relaxed ${textColor}`}>
            🚀 Passionate software developer & data enthusiast with a strong foundation in <b>AI/ML, data analysis, and full-stack development</b>.  
            I thrive on solving real-world challenges through innovative and efficient solutions.  
            Always eager to explore emerging technologies and deliver high-impact projects.  
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default AboutMe;
