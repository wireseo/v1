import React, { createContext, useState, useContext } from "react";

const ExperienceContext = createContext();

export const ExperienceProvider = ({ children }) => {
  const [isAnyCardHovered, setIsAnyCardHovered] = useState(false);

  return (
    <ExperienceContext.Provider
      value={{ isAnyCardHovered, setIsAnyCardHovered }}
    >
      {children}
    </ExperienceContext.Provider>
  );
};

export const useExperienceContext = () => {
  return useContext(ExperienceContext);
};
