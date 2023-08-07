import * as React from "react";
import { useState } from "react";
import github from "../assets/icons/github-mark-white.svg";
import linkedin from "../assets/icons/icons8-linkedin.svg";

const SocialIcon = ({ iconSrc, altText, profileLink }) => {
  const openProfile = () => {
    window.open(profileLink, "_blank");
  };

  //   TODO: Fix hover color for social icon
  return (
    <img
      src={iconSrc}
      alt={altText}
      className="w-5 h-5 icon cursor-pointer"
      onClick={openProfile}
    />
  );
};

const Socials = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center p-10 space-y-3 absolute bottom-0 left-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <SocialIcon
        iconSrc={github}
        altText="GitHub"
        profileLink="https://github.com/wireseo"
      />
      <SocialIcon
        iconSrc={linkedin}
        altText="LinkedIn"
        profileLink="https://www.linkedin.com/in/yeryeon-seo/"
      />
      <div
        className={`${
          isHovered ? "h-24" : "h-10"
        } mb-4 w-px bg-bright-gray transition-height duration-300 ease-in-out`}
      ></div>
    </div>
  );
};

export default Socials;
