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
          isHovered ? "w-16 bg-bright-gray" : "w-6 bg-dark-gray"
        } transition-width duration-300 ease-in-out`}
      ></div>
      <a
        href={to}
        className={`${isHovered ? ` text-bright-gray` : `text-dark-gray`}`}
      >
        {text}
      </a>
    </li>
  );
};

export default Tab;
