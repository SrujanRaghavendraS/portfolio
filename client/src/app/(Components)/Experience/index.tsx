import React, { useEffect, useState } from 'react';
import ExperienceCard from '@/app/(Components)/ExperienceCard';
import Timeline from '@/app/(Components)/Timeline';
import OpenForOpportunities from '@/app/(Components)/OpenForOppourtunities';

type Props = {
  darkMode: boolean;
};

type ExperienceData = {
  role: string;
  company: string;
  date: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo: string;
};

const Experience = ({ darkMode }: Props) => {
  const [experiences, setExperiences] = useState<ExperienceData[]>([]);

  useEffect(() => {
    fetch('data.json') // Adjust path if needed
      .then((response) => response.json())
      .then((data) => setExperiences(data))
      .catch((error) => console.error('Error fetching experience data:', error));
  }, []);

  const bgColor = darkMode ? 'bg-[#2C2F48] text-[#A7D7C5]' : 'bg-[#E5E7EB] text-[#1E293B]';
  const headingColor = darkMode
    ? 'bg-gradient-to-r from-[#50BFA5] to-[#A5F3FC] text-transparent bg-clip-text'
    : 'bg-gradient-to-r from-[#1E40AF] to-[#60A5FA] text-transparent bg-clip-text';
  const cardBgColor = darkMode ? 'bg-[#3A3E5B] text-[#A7D7C5]' : 'bg-white text-[#1E293B]';
  const dotColor = darkMode ? 'bg-[#50BFA5]' : 'bg-[#1E40AF]';

  return (
    <div className={`flex flex-col items-center justify-center p-8 rounded-lg transition-all duration-300 ${bgColor}`}>
      <h2 className={`text-4xl font-bold mb-8 text-center font-serif ${headingColor}`}>Experience</h2>
      <Timeline>
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            logo={exp.logo}
            role={exp.role}
            company={exp.company}
            date={exp.date}
            description={exp.description}
            achievements={exp.achievements}
            technologies={exp.technologies}
            cardBgColor={cardBgColor}
            dotColor={dotColor}
          />
        ))}
      </Timeline>
      <OpenForOpportunities cardBgColor={cardBgColor} />
    </div>
  );
};

export default Experience;
