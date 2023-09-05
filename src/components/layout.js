import * as React from "react";
import Tab from "./tab";
import Socials from "./socials";
import gsap from "gsap";
import { useEffect, useState } from "react";
import "../styles/cursorEffect.css";
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
    document.body.addEventListener("mousemove", (evt) => {
      const mouseX = evt.pageX;
      const mouseY = evt.pageY;

      gsap.set(".cursor", {
        x: mouseX,
        y: mouseY,
      });

      gsap.to(".shape", {
        x: mouseX,
        y: mouseY,
        ease: "power4.out",
        stagger: -0.02,
      });
    });
  }, []);

  useEffect(() => {
    const textLayer = document.querySelector(".text-layer");
    const orb = document.querySelector(".orb");

    if (textLayer && orb) {
      const radius = textLayer.offsetWidth / 3;

      gsap.to(orb, {
        rotation: 360,
        x: `+=${radius}`,
        transformOrigin: `-${radius}px center`,
        repeat: -1, // Infinite repetition
        duration: 5, // Duration of a full circle
        ease: "linear",
      });
    }
  }, []);

  return (
    <div className="bg-blue-black h-screen w-screen relative flex flex-col md:flex-row">
      <div className="cursor"></div>
      <div className="shapes absolute top-0 left-0 z-0">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className=" md:basis-1/3">
        <main>
          <div className="flex flex-col pb-0 md:pb-16 p-16 relative min-w-[400px]">
            <div className="text-layer">
              <div className="orb"></div>
              <h1 className="text-[#FFFFFF] text-6xl font-bold">Eryn Seo</h1>
              <h2 className="text-[#FFFFFF] text-xl">
                Tech Lead at MarinaChain
              </h2>
              <h3 className="text-[#d7dde680] text-sm font-light">
                Inventive, elegant solutions for the web.
              </h3>
            </div>
          </div>

          <nav className="pl-16 pt-8 hidden md:block">
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
              <Tab
                to="#projects"
                text="projects"
                isActive={activeTab === "projects"}
                setActiveTab={setActiveTab}
              />
            </ul>
          </nav>

          <Socials />
        </main>
      </div>

      <div className="overflow-auto md:basis-2/3">{children}</div>
    </div>
  );
};

export default Layout;
