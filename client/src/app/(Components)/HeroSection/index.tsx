import SocialLinks from "@/app/(Components)/SocialLinks";
import HeroImages from "@/app/(Components)/HeroImages";

const HeroSection = ({ darkMode }: { darkMode: boolean }) => {
  const bgColor = darkMode ? "bg-[#1e293b] text-[#38bdf8]" : "bg-[#fef3c7] text-[#b45309]";
  const textColor = darkMode ? "text-[#94a3b8] hover:text-[#e0f2fe]" : "text-[#92400e] hover:text-[#ea580c]";

  return (
    <section className={`relative flex flex-col items-center justify-center h-[80vh] text-center px-6 overflow-hidden transition-all duration-300 ${bgColor}`}>
      <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${darkMode ? "text-[#7dd3fc]" : "text-[#9a3412]"}`}>
        Srujan Raghavendra S
      </h1>
      <SocialLinks textColor={textColor} />
      <HeroImages />
    </section>
  );
};

export default HeroSection;
