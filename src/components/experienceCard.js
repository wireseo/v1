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
    <div
      onMouseEnter={() => {
        setIsAnyCardHovered(true);
        setCardHovered(true);
      }}
      onMouseLeave={() => {
        setIsAnyCardHovered(false);
        setCardHovered(false);
      }}
      className={`p-4 mb-4 rounded-xl hover:bg-[#1e293b]/[0.5] transition-opacity ${opacity} hover:opacity-100 hover:bg-slate-800 hover:drop-shadow-lg`}
    >
      <span className="block mb-2">{`${startDate} - ${endDate}`}</span>

      <div className="p-4">
        <h3 className="font-semibold text-xl text-bright-blue mb-2">
          {jobTitle}
        </h3>
        <span className="block mb-2">{company}</span>
        <div className="mb-2 space-x-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 rounded text-white hover:bg-[#1e293b]/[0.5] rounded-2xl text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        {link && (
          <div className="flex justify-end items-center mb-2">
            <a
              href={link}
              className={`flex items-center space-x-1 transform transition-transform ${
                isCardHovered ? "translate-x-4" : ""
              } text-blue-500 hover:text-blue-700 border-b-2 border-blue-500 no-underline`}
            >
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
