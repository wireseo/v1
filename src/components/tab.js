import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";

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
          isHovered ? "w-16" : "w-6"
        } bg-bright-gray transition-width duration-300 ease-in-out`}
      ></div>
      <a href={to} className="text-bright-gray">
        {text}
      </a>
    </li>
  );
};

export default Tab;
