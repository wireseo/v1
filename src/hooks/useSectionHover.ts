import { useState, useEffect } from "react";

const useSectionHover = (sectionId: string) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const section = document.getElementById(sectionId);
      if (!section) return;

      const boundingBox = section.getBoundingClientRect();
      const isOverSection =
        e.clientX >= boundingBox.left &&
        e.clientX <= boundingBox.right &&
        e.clientY >= boundingBox.top &&
        e.clientY <= boundingBox.bottom;

      setIsHovered(isOverSection);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [sectionId]);

  return isHovered;
};

export default useSectionHover;
