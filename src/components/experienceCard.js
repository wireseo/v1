import React from "react";
import { useExperienceContext } from "./experienceProvider";
import { useState } from "react";

const ExperienceCard = ({
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
    <a href={link} className="no-underline block">
      <div
        onMouseEnter={() => {
          setIsAnyCardHovered(true);
          setCardHovered(true);
        }}
        onMouseLeave={() => {
          setIsAnyCardHovered(false);
          setCardHovered(false);
        }}
        className={`flex items-start p-4 mb-5 rounded-xl transition-opacity transition-background-color duration-300 ${opacity} hover:opacity-100 hover:bg-[#1e293b]/[0.5] hover:drop-shadow-lg`}
      >
        {/* Date part */}
        <div className="mr-10">
          <span className="block text-sm text-[#4e596b] font-medium">{`${startDate} — ${endDate}`}</span>
        </div>

        {/* Main card */}
        <div className={`flex-grow rounded-xl`}>
          <div
            className={`flex items-center font-normal mb-2 transition-colors duration-300 ${
              isCardHovered ? "text-bright-blue" : ""
            }`}
          >
            <span className="mr-2">{company}</span>
            <span className="mx-1 text-gray-400">•</span>
            <span className="mr-2">{jobTitle}</span>
            {link && (
              <span
                className={`transform transition-transform ${
                  isCardHovered ? "translate-x-3" : ""
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
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ExperienceCard;
