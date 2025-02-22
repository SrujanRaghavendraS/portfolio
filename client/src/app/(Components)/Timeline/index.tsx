import React from 'react';

type TimelineProps = {
  children: React.ReactNode;
};

const Timeline: React.FC<TimelineProps> = ({ children }) => {
  return (
    <div className="relative w-full max-w-2xl">
      <div className="absolute border-l-2 border-gray-400 h-full left-[55%] transform -translate-x-1/2"></div>
      {children}
    </div>
  );
};

export default Timeline;
