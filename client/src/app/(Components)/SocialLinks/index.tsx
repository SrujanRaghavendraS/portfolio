import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const socialLinks = [
  { href: "mailto:srujan9712@gmail.com", icon: <FaEnvelope /> },
  { href: "https://www.linkedin.com/in/srujan-raghavendra-s/", icon: <FaLinkedin /> },
  { href: "https://github.com/SrujanRaghavendraS", icon: <FaGithub /> },
  { href: "tel:(+91)9110415398", icon: <FaPhone /> }
];

const SocialLinks = ({ textColor }: { textColor: string }) => {
  return (
    <div className="flex space-x-6">
      {socialLinks.map(({ href, icon }, index) => (
        <a 
          key={index} 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`text-3xl transition-transform transform hover:scale-110 ${textColor}`}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
