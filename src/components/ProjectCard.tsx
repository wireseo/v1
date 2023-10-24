import React, { useState } from "react";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  techStack?: string[];
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  title,
  description,
  link,
  techStack,
}) => {
  const [isCardHovered, setCardHovered] = useState(false);
  const opacity = isCardHovered ? "opacity-100" : "opacity-90";

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline block"
    >
      <div
        onMouseEnter={() => setCardHovered(true)}
        onMouseLeave={() => setCardHovered(false)}
        className={`flex items-start p-4 mb-5 rounded-xl transition-all duration-300 ${opacity} hover:opacity-100 hover:bg-[#1e293b]/[0.5] hover:drop-shadow-lg`}
      >
        {/* Image part */}
        <div className="mr-5 min-w-[105px] max-w-[150px]">
          <img src={imageSrc} alt={title} className="rounded-lg" />
        </div>

        {/* Main card */}
        <div className={`flex-grow rounded-xl`}>
          <div
            className={`flex items-center font-normal mb-2 transition-colors duration-300 ${
              isCardHovered ? "text-bright-blue" : ""
            }`}
          >
            <div className="flex items-center text-blue-white hover:text-bright-blue font-mono font-medium tracking-wide">
              {" "}
              {/* Adjusted this div */}
              {title}
              {link && (
                <span
                  className={`ml-2 transform transition-transform ${
                    isCardHovered
                      ? "translate-x-2 text-bright-blue"
                      : "text-blue-white"
                  }`}
                >
                  →
                </span>
              )}
            </div>
          </div>
          {techStack && techStack.length > 0 && (
            <div className="mb-2 space-x-2">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block px-2 py-1 rounded-full bg-bright-blue bg-opacity-20 text-bright-blue hover:bg-opacity-40 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          <p className="mt-3 text-[15px] tracking-wide font-normal font-mono text-blue-white/[0.8] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
