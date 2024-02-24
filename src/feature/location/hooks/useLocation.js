import { LocationContext } from "../contexts/LocationContext";
import { useContext } from "react";

/**
 * This function is a hook to use the Locations from the LocationContext
 * @returns {Object}
 */
export const useLocation = () => {
  const [
    locations,
    setLocations,
  ] = useContext(LocationContext);

  return {
    locations,
    setLocations,
  };
};
