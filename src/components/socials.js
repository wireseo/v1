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
      className="w-7 h-7 md:w-5 md:h-5 icon cursor-pointer fill-current text-white hover:text-bright-blue transition-transform transform-gpu hover:scale-125"
      onClick={openProfile}
    />
  );
};

const Socials = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex md:flex-col ml-7 md:ml-0 items-center p-10 space-x-5 md:space-x-0 md:space-y-3 md:absolute md:bottom-0 md:left-0"
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
        } mb-4 w-px bg-bright-gray transition-height duration-300 ease-in-out hidden md:block`}
      ></div>
    </div>
  );
};

export default Socials;
