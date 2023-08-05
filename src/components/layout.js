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

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="bg-blue-black h-screen w-screen">
      <main>
        <div className="flex flex-col p-5">
          <span className="text-[#FFFFFF] text-6xl font-bold">Eryn Seo</span>
          <span className="text-[#FFFFFF] text-xl">
            Tech Lead at MarinaChain
          </span>
        </div>

        {children}
      </main>
      <nav className="pl-16 pt-8">
        <ul className="flex flex-col space-y-4">
          <Tab to="/about" text="about" />
          <Tab to="/experience" text="experience" />
          <Tab to="/projects" text="projects" />
        </ul>
      </nav>
    </div>
  );
};

export default Layout;
