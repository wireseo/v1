import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";

const Tab = ({ to, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="flex items-center w-1/6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`mr-4 h-px ${
          isHovered ? "w-12" : "w-4"
        } bg-bright-gray transition-width duration-300 ease-in-out`}
      ></div>
      <Link to={to} className="text-bright-gray">
        {text}
      </Link>
    </li>
  );
};

export default Tab;
