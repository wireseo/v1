import React from "react";
import { useExperienceContext } from "./experienceProvider";

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

  const opacity = isAnyCardHovered ? "opacity-60" : "opacity-90";

  return (
    <div
      onMouseEnter={() => setIsAnyCardHovered(true)}
      onMouseLeave={() => setIsAnyCardHovered(false)}
      className={`p-4 rounded transition-opacity ${opacity} hover:opacity-100`}
    >
      <div className="p-4">
        <span className="block mb-2">{`${startDate} - ${endDate}`}</span>
        <h3 className="font-semibold text-xl text-bright-blue mb-2">
          {jobTitle}
        </h3>
        <span className="block mb-2">{company}</span>
        <div className="mb-2 space-x-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 rounded text-white bg-bright-blue rounded-2xl text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        {link && (
          <div className="flex justify-end items-center mb-2">
            <a
              href={link}
              className="flex items-center space-x-1 transform transition-transform hover:translate-x-1 text-blue-500 hover:text-blue-700 border-b-2 border-blue-500"
            >
              <span>Learn more</span>
              <span>→</span>
            </a>
          </div>
        )}
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
