import { createContext, useState } from "react";

export const LocationContext = createContext([null, () => {}]);

/**
 * This function is a provider for the LocationContext
 * @param {JSX.Element} children - elements that are wrapped by the provider
 * @returns {JSX.Element}
 */
export const LocationContextProvider = ({ children }) => {
  const [locations, setLocations] = useState(null);

  return (
    <LocationContext.Provider
      value={[
        locations,
        setLocations,
      ]}
    >
      {children}
    </LocationContext.Provider>
  );
};
