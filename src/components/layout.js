import * as React from "react";
import Tab from "./tab";
import Socials from "./socials";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="bg-blue-black h-screen w-screen relative">
      <main>
        <div className="flex flex-col p-16">
          <span className="text-[#FFFFFF] text-6xl font-bold">Eryn Seo</span>
          <span className="text-[#FFFFFF] text-xl">
            Tech Lead at MarinaChain
          </span>
          <span className="text-[#d7dde680] text-sm font-light">
            Inventive, elegant solutions for the web.
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

      <Socials />
    </div>
  );
};

export default Layout;
