import * as React from "react";
import Tab from "./tab";
import Socials from "./socials";
import gsap from "gsap";
import { useEffect } from "react";
import "../styles/cursorEffect.css";

const Layout = ({ pageTitle, children }) => {
  useEffect(() => {
    // The existing mousemove listener
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
        stagger: -0.1,
      });
    });
  }, []);

  return (
    <div className="bg-blue-black h-screen w-screen relative flex">
      <div className="basis-1/3">
        <main>
          <div className="cursor"></div>

          <div className="flex flex-col p-16 relative overflow-hidden">
            <div className="shapes absolute top-0 left-0 z-0">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>

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
