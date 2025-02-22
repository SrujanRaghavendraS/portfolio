import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle = ({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (mode: boolean) => void }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`fixed top-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full shadow-xl transition-all duration-300
        ${darkMode ? "bg-[#1E40AF] text-[#FACC15] hover:shadow-blue-500" : "bg-[#FFD700] text-[#4B0082] hover:shadow-yellow-500"}
      `}
    >
      {darkMode ? <FaSun className="text-3xl" /> : <FaMoon className="text-3xl" />}
    </button>
  );
};

export default DarkModeToggle;
