import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const PathContext = createContext(["", () => {}]);

/**
 * Component that represents the provider for the PathContext
 * @param {JSX.Element} children - elements that are wrapped by the provider 
 * @returns {JSX.Element}
 */
export const PathContextProvider = ({ children }) => {
  const currentPath = useLocation().pathname;
  const [activeItem, setActiveItem] = useState(currentPath);

  return (
    <PathContext.Provider value={[activeItem, setActiveItem]}>
      {children}
    </PathContext.Provider>
  );
};