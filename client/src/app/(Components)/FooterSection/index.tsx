import React, { useState } from 'react';

type Props = {
  darkMode: boolean;
};

const FooterSection = ({ darkMode }: Props) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Message:', message);
    setName('');
    setMessage('');
  };

  // Apply color palette based on dark mode
  const bgColor = darkMode ? 'bg-[#1e293b]' : 'bg-[#fef3c7]';
  const textColor = darkMode ? 'text-[#38bdf8]' : 'text-[#b45309]';

  return (
    <div className={`flex flex-col md:flex-row ${bgColor} ${textColor} p-8`}>
      {/* Left Section */}
      <div className="flex flex-col w-full md:w-1/2 pr-4 mb-6 md:mb-0">
        <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>Contact Me</h2>
        <ul className="space-y-2">
          <li>
            <a href="srujan9712@gmail.com" className={`${textColor} hover:underline`}>
              Email: srujan9712@gmail.com
            </a>
          </li>
          <li>
            <a href="(+91)9110415398" className={`${textColor} hover:underline`}>
              Phone: (+91)9110415398
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/srujan-raghavendra-s/" className={`${textColor} hover:underline`}>
              LinkedIn: https://www.linkedin.com/in/srujan-raghavendra-s/
            </a>
          </li>
        </ul>
        <a
          href="srujanraghavendras2.1d.pdf" // Ensure `resume.pdf` is placed in the `public/` directory
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-6 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          📄 View Resume
        </a>
      </div>

      {/* Divider Line */}
      <div className="hidden md:block border-l border-gray-300 mx-6" />

      {/* Right Section */}
      <div className="flex flex-col w-full md:w-1/2 pl-4">
        <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>Want to Collaborate? Reach Out to Me!</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="name" className={`block text-sm font-medium mb-1 ${textColor}`}>Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={`w-full p-3 rounded-md border ${darkMode ? 'border-gray-600' : 'border-gray-300'} ${textColor} bg-transparent`}
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="message" className={`block text-sm font-medium mb-1 ${textColor}`}>Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className={`w-full p-3 rounded-md border ${darkMode ? 'border-gray-600' : 'border-gray-300'} ${textColor} bg-transparent`}
              rows={4}
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-green-500 to-emerald-400 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            🚀 Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default FooterSection;
