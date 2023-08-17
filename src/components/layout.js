import * as React from "react";
import Tab from "./tab";
import Socials from "./socials";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="bg-blue-black h-screen w-screen relative flex">
      <div className="basis-1/3">
        <main>
          <div className="flex flex-col p-16">
            <h1 className="text-[#FFFFFF] text-6xl font-bold">Eryn Seo</h1>
            <h2 className="text-[#FFFFFF] text-xl">Tech Lead at MarinaChain</h2>
            <h3 className="text-[#d7dde680] text-sm font-light">
              Inventive, elegant solutions for the web.
            </h3>
          </div>

          <nav className="pl-16 pt-8">
            <ul className="flex flex-col space-y-4">
              <Tab to="#about" text="about" />
              <Tab to="#experience" text="experience" />
              <Tab to="#projects" text="projects" />
            </ul>
          </nav>
          <Socials />
        </main>
      </div>
      <div className="overflow-auto basis-2/3">{children}</div>
    </div>
  );
};

export default Layout;
