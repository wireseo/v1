import * as React from "react";
import { useState } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

const Tab = ({ to, text, isActive, setActiveTab }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`mr-4 h-px ${
          isHovered || isActive ? "w-16 bg-bright-gray" : "w-6 bg-dark-gray"
        } transition-width duration-300 ease-in-out`}
      ></div>
      <button
        className={`btn-link ${
          isHovered || isActive ? "text-bright-gray" : "text-dark-gray"
        }`}
        onClick={() => {
          scrollTo(to);
          setActiveTab(to.slice(1));
        }}
      >
        {text}
      </button>
    </li>
  );
};

export default Tab;
