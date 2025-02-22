// components/SeeMoreButton.tsx
import React from "react";

interface SeeMoreButtonProps {
  clickCount: number;
  onClick: () => void;
  darkMode: boolean;
}

const SeeMoreButton: React.FC<SeeMoreButtonProps> = ({ clickCount, onClick, darkMode }) => {
  return (
    <button
      onClick={onClick}
      className={`mt-8 px-6 py-3 font-semibold rounded-lg shadow-md transition ${
        darkMode ? "bg-[#1E223E] text-[#A7D7C5] hover:bg-[#2C2F48]" : "bg-[#60A5FA] text-white hover:bg-[#1E40AF]"
      }`}
    >
      {clickCount === 0 ? "See More" : "Visit GitHub Profile"}
    </button>
  );
};

export default SeeMoreButton;
