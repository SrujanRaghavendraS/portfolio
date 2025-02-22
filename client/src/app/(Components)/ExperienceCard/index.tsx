import React from 'react';
import Image from 'next/image';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

type ExperienceCardProps = {
  logo: string;
  role: string;
  company: string;
  date: string;
  description: string;
  achievements: string[];
  technologies: string[];
  cardBgColor: string;
  dotColor: string;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  logo,
  role,
  company,
  date,
  description,
  achievements,
  technologies,
  cardBgColor,
  dotColor,
}) => {
  return (
    <div className="flex items-start mb-8 relative">
      {/* Timeline Dot */}
      <div className={`flex-shrink-0 w-4 h-4 rounded-full ${dotColor} absolute left-[55%] transform -translate-x-1/2 top-2`}></div>
      
      {/* Experience Card */}
      <div className={`ml-8 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 ${cardBgColor}`} style={{ width: 'calc(50% - 2rem)' }}>
        <div className="flex items-center mb-4">
          {logo && (
            <Image 
              src={logo} 
              alt={`${company} logo`} 
              width={48} 
              height={48} 
              className="rounded-full mr-4"
            />
          )}
          <div className="overflow-hidden">
            <h3 className="font-semibold text-xl flex items-center">
              <FaBriefcase className="mr-2" />
              {role}
            </h3>
            <p className="text-lg font-medium mt-1">{company}</p> {/* Company name in new line */}
            <p className="text-sm text-gray-500 flex items-center">
              <FaCalendarAlt className="mr-1" />
              {date}
            </p>
          </div>
        </div>
        <p className="mb-4">{description}</p>
        {achievements && (
          <ul className="list-disc list-inside mb-4">
            {achievements.map((achievement, i) => (
              <li key={i} className="text-sm mb-2">{achievement}</li>
            ))}
          </ul>
        )}
        {technologies && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <span key={i} className="px-3 py-1 rounded-full text-sm bg-blue-500 text-white">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
