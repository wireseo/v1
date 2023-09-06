import * as React from "react";
import { useState } from "react";
import github from "../assets/icons/github-mark-white.svg";
import linkedin from "../assets/icons/icons8-linkedin.svg";
import email from "../assets/icons/mail-256.ico";

const SocialIcon = ({ iconSrc, altText, profileLink }) => {
  const openProfile = () => {
    if (profileLink.startsWith("mailto:")) {
      window.location.href = profileLink;
    } else {
      window.open(profileLink, "_blank");
    }
  };

  //   TODO: Fix hover color for social icon
  return (
    <img
      src={iconSrc}
      alt={altText}
      className="w-7 h-7 lg:w-5 lg:h-5 icon cursor-pointer fill-current text-white hover:text-bright-blue transition-transform transform-gpu hover:scale-125"
      onClick={openProfile}
    />
  );
};

const Socials = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center space-x-5 lg:flex-col lg:ml-0 lg:space-x-0 lg:space-y-3 lg:absolute lg:bottom-0 lg:left-0"
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
      <SocialIcon
        iconSrc={email}
        altText="Email"
        profileLink="mailto:yeryeon@gmail.com"
      />

      <div
        className={`${
          isHovered ? "h-24" : "h-10"
        } mb-4 w-px bg-bright-gray transition-height duration-300 ease-in-out hidden lg:block`}
      ></div>
    </div>
  );
};

export default Socials;
