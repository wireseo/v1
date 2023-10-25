import * as React from "react";
import ProjectCard from "../components/ProjectCard";
import flooringLabThumbnail from "../assets/flooring_lab.png";
import webPortfolioThumbnail from "../assets/web_portfolio.png";
import HoverTitle from "../components/HoverTitle";

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <HoverTitle sectionId="projects" title="PROJECTS" />

      <ProjectCard
        imageSrc={flooringLabThumbnail}
        title="Flooring Lab"
        description="The landing page of Flooring Lab, which hosts a protocol to bridge fractional NFT ownership to popular centralized venues."
        link="https://flooringlab-com.vercel.app/"
        techStack={["Next.js", "React", "Tailwind", "Vercel"]}
      />
      <ProjectCard
        imageSrc={webPortfolioThumbnail}
        title="Web Portfolio"
        description="Portfolio-ception."
        link="https://erynseo.netlify.app/"
        techStack={["Gatsby", "React", "Tailwind", "Netlify"]}
      />
    </section>
  );
};

export default Projects;
