import * as React from "react";
import { useState } from "react";
import github from "../assets/icons/github-mark-white.svg";
import linkedin from "../assets/icons/icons8-linkedin.svg";
import email from "../assets/icons/mail-256.ico";
import useGithubStreak from "../hooks/useGithubStreak";
import flameIcon from "../assets/icons/flame.svg";

const SocialIcon = ({ iconSrc, altText, profileLink, onHover, onLeave }) => {
  const openProfile = () => {
    if (profileLink.startsWith("mailto:")) {
      window.location.href = profileLink;
    } else {
      window.open(profileLink, "_blank");
    }
  };

  return (
    <img
      src={iconSrc}
      alt={altText}
      className="w-7 h-7 lg:w-5 lg:h-5 icon cursor-pointer fill-current text-white hover:text-bright-blue transition-transform transform-gpu hover:scale-125"
      onClick={openProfile}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    />
  );
};

const Socials = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { streak, loading } = useGithubStreak("wireseo");

  return (
    <div
      className="flex items-center space-x-5 lg:flex-col lg:ml-0 lg:space-x-0 lg:space-y-3 lg:absolute lg:bottom-0 lg:left-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative text-[#FFFFFF]">
        <SocialIcon
          iconSrc={github}
          altText="GitHub"
          profileLink="https://github.com/wireseo"
        />
        {!loading && (
          <div
            className="absolute left-full flex items-center ml-2 top-1/2 transform -translate-y-1/2"
            onMouseEnter={(e) => e.stopPropagation()}
            onMouseLeave={(e) => e.stopPropagation()}
          >
            <img src={flameIcon} alt="Streak Flame" className="w-4 h-4 mr-1" />{" "}
            <span>{streak}</span>
          </div>
        )}
      </div>

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
