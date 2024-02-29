import { createContext, useState } from "react";

export const LocationFilterContext = createContext([
  "",
  () => {},
  "",
  () => {},
  "",
  () => {},
]);

/**
 * This function is a provider for the LocationFilterContext
 * @param {JSX.Element} children
 * @returns {JSX.Element}
 */
export const LocationFilterContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [dimension, setDimension] = useState("");

  return (
    <LocationFilterContext.Provider
      value={{
        name,
        setName,
        type,
        setType,
        dimension,
        setDimension,
      }}
    >
      {children}
    </LocationFilterContext.Provider>
  );
};
