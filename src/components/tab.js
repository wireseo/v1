import * as React from "react";
import { useState } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

const Tab = ({ to, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`mr-4 h-px ${
          isHovered ? "w-16 bg-bright-gray" : "w-6 bg-dark-gray"
        } transition-width duration-300 ease-in-out`}
      ></div>
      <button
        className={`btn-link ${
          isHovered ? "text-bright-gray" : "text-dark-gray"
        }`}
        onClick={() => scrollTo(to)}
      >
        {text}
      </button>
    </li>
  );
};

export default Tab;
