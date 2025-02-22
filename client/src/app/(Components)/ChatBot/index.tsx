import { useState } from "react";
import { FaRobot } from "react-icons/fa"; // Import the robot icon

const Chatbot = ({ darkMode }: { darkMode: boolean }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage chat window visibility

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleChat} // Toggle chat window on button click
        className={`fixed top-24 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full shadow-xl transition-all duration-300
          ${darkMode ? "bg-[#1E40AF] text-[#FACC15] hover:shadow-blue-500" : "bg-[#FFD700] text-[#4B0082] hover:shadow-yellow-500"}
        `}
      >
        <FaRobot className="text-3xl" />
      </button>

      {isOpen && ( // Render chat window if isOpen is true
        <div className={`fixed top-40 right-6 z-40 w-80 p-4 rounded-lg shadow-lg transition-all duration-300
          ${darkMode ? "bg-[#334155] text-white" : "bg-[#fef3c7] text-black"} // Lighter tone for background
        `}>
          <div className="h-60 overflow-y-auto p-2 border-b">
            <p>AI Agent Powered By Gemini,<br></br> Coming soon...</p>
          </div>
          <div className="flex mt-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 p-2 border rounded-l-lg"
            />
            <button className="bg-blue-500 text-white rounded-r-lg px-4">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
