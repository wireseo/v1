import React, { useState } from "react";
import { useExperienceContext } from "./experienceProvider";

export interface ExperienceCardProps {
  startDate: string;
  endDate: string;
  jobTitle: string;
  company: string;
  techStack: string[];
  link?: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  startDate,
  endDate,
  jobTitle,
  company,
  techStack,
  link,
  description,
}) => {
  const { isAnyCardHovered, setIsAnyCardHovered } = useExperienceContext();
  const [isCardHovered, setCardHovered] = useState(false);

  const opacity = isAnyCardHovered ? "opacity-60" : "opacity-90";

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline block"
    >
      <div
        onMouseEnter={() => {
          setIsAnyCardHovered(true);
          setCardHovered(true);
        }}
        onMouseLeave={() => {
          setIsAnyCardHovered(false);
          setCardHovered(false);
        }}
        className={`flex items-start p-4 mb-5 rounded-xl transition-all duration-300 ${opacity} hover:opacity-100 hover:bg-[#1e293b]/[0.5] hover:drop-shadow-lg`}
      >
        {/* Date part */}
        <div className="mr-5 min-w-[105px]">
          <span className="block w-full text-sm text-[#4e596b] font-medium">{`${startDate} — ${endDate}`}</span>
        </div>

        {/* Main card */}
        <div className={`flex-grow rounded-xl`}>
          <div
            className={`flex items-center font-normal mb-2 transition-colors duration-300 ${
              isCardHovered ? "text-bright-blue" : ""
            }`}
          >
            <div className="flex mr-2 text-blue-white hover:text-bright-blue">
              <span className=" font-mono font-medium tracking-wide">
                {company}
              </span>
              <span className="mx-1 text-gray-400">&nbsp;•&nbsp;</span>
              <span className="font-mono font-medium">{jobTitle}</span>
            </div>
            {link && (
              <span
                className={`transform transition-transform ${
                  isCardHovered
                    ? "translate-x-2 text-bright-blue"
                    : "text-blue-white "
                }`}
              >
                →
              </span>
            )}
          </div>
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
          <ul className="mt-3 list-disc leading-relaxed text-[15px] tracking-wide font-normal font-mono text-blue-white/[0.8] space-y-3">
            {description}
          </ul>
        </div>
      </div>
    </a>
  );
};

export default ExperienceCard;
