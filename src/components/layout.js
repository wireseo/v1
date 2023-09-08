import * as React from "react";
import Tab from "./tab";
import Socials from "./socials";

import { useEffect, useState } from "react";
import "../styles/global.css";

const Layout = ({ pageTitle, children }) => {
  const [activeTab, setActiveTab] = useState("about");

  const handleScroll = (scrollableDiv) => {
    const about = document.getElementById("about");
    const experience = document.getElementById("experience");

    if (scrollableDiv.scrollTop < about.offsetHeight) {
      setActiveTab("about");
    } else if (
      scrollableDiv.scrollTop >= about.offsetHeight &&
      scrollableDiv.scrollTop < about.offsetHeight + experience.offsetHeight
    ) {
      setActiveTab("experience");
    } else {
      setActiveTab("projects");
    }
  };

  useEffect(() => {
    const scrollableDiv = document.querySelector(".overflow-auto");

    if (scrollableDiv) {
      scrollableDiv.addEventListener("scroll", () =>
        handleScroll(scrollableDiv)
      );

      return () => {
        scrollableDiv.removeEventListener("scroll", () =>
          handleScroll(scrollableDiv)
        );
      };
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;

      const gradient = `radial-gradient(500px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 70%)`;

      document.querySelector(".gradient-spot").style.background = gradient;
    });
  }, []);

  return (
    <div className="bg-blue-black mx-auto min-h-screen min-w-screen px-24">
      <div className="gradient-spot"></div>
      <div className="lg:flex lg:justify-between lg:gap-10 lg:h-screen">
        <div className="lg:w-1/2 lg:py-24 pt-12 lg:sticky lg:top-0">
          <main>
            <div className="flex flex-col pb-4 relative min-w-[300px]">
              <div className="text-layer">
                <h1 className="text-[#FFFFFF] text-6xl font-bold">Eryn Seo</h1>
                <h2 className="text-[#FFFFFF] text-xl">
                  Tech Lead at MarinaChain
                </h2>
                <h3 className="text-[#d7dde680] text-sm font-light">
                  Inventive, elegant solutions for the web.
                </h3>
              </div>
            </div>

            <nav className="pt-8 hidden lg:block">
              <ul className="flex flex-col space-y-4">
                <Tab
                  to="#about"
                  text="about"
                  isActive={activeTab === "about"}
                  setActiveTab={setActiveTab}
                />
                <Tab
                  to="#experience"
                  text="experience"
                  isActive={activeTab === "experience"}
                  setActiveTab={setActiveTab}
                />
                {/* <Tab
                  to="#projects"
                  text="projects"
                  isActive={activeTab === "projects"}
                  setActiveTab={setActiveTab}
                /> */}
              </ul>
            </nav>

            <Socials />
          </main>
        </div>
        <div className="overflow-auto lg:w-1/2">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
