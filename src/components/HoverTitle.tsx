import React from "react";
import useSectionHover from "../hooks/useSectionHover";

const HoverTitle: React.FC<{ sectionId: string; title: string }> = ({
  sectionId,
  title,
}) => {
  const isHovered = useSectionHover(sectionId);

  return (
    <span
      className={`lg:hidden before:block before:absolute before:-inset-1 before:-skew-y-3 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-bright-blue/[0.5] relative inline-block mb-10 transition-transform duration-300 ${
        isHovered ? "translate-x-5" : ""
      }`}
    >
      <span
        className="tracking-widest relative font-medium font-mono text-blue-white pl-1.5"
        style={{ textShadow: "2px 2px 3px rgba(0, 0, 0, 0.25)" }}
      >
        {title}
      </span>
    </span>
  );
};

export default HoverTitle;
