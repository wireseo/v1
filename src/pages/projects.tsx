import * as React from "react";
import ProjectCard from "../components/ProjectCard";
import flooringLabThumbnail from "../assets/flooring_lab.png";
import webPortfolioThumbnail from "../assets/web_portfolio.png";
import floorProtocolThumbnail from "../assets/floor_protocol.jpeg";

import HoverTitle from "../components/HoverTitle";

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <HoverTitle sectionId="projects" title="PROJECTS" />
      <ProjectCard
        imageSrc={flooringLabThumbnail}
        title="Flooring Lab"
        description="The landing page of Flooring Lab, which hosts a protocol to bridge fractional NFT ownership to popular centralized venues."
        link="https://flooringlab.com/"
        techStack={["Next.js", "React", "Tailwind", "Vercel"]}
      />
      <ProjectCard
        imageSrc={floorProtocolThumbnail}
        title="Floor Protocol"
        description="UI/UX improvements and front-end components for aforementioned protocol."
        link="https://fp.io/"
        techStack={["Umi.js", "React", "Styled Components", "Vercel"]}
      />
      <ProjectCard
        imageSrc={webPortfolioThumbnail}
        title="Web Portfolio"
        description="Portfolio-ception."
        link="https://erynseo.netlify.app/"
        techStack={["Gatsby.js", "React", "Tailwind", "Netlify"]}
      />
    </section>
  );
};

export default Projects;
