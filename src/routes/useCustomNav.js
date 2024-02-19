import { useNavigate } from "react-router-dom";
import { PATHS } from "../Constants/Paths";
import { useState } from "react";

/**
 * This hook is used to navigate through the app
 * @returns {Object}
 */
export const useCustomNav = () => {
  const [activeItem, setActiveItem] = useState(PATHS.HOME);

  const navigate = useNavigate();

  const navigateHome = () => {
    setActiveItem(PATHS.HOME);
    navigate(PATHS.HOME);
  };

  const navigateCharacters = () => {
    setActiveItem(PATHS.CHARACTERS);
    navigate(PATHS.CHARACTERS);
  };

  const navigateLocations = () => {
    setActiveItem(PATHS.LOCATIONS);
    navigate(PATHS.LOCATIONS);
  };

  const navigateEpisodes = () => {
    setActiveItem(PATHS.EPISODES);
    navigate(PATHS.EPISODES);
  };

  return {
    activeItem,
    navigateHome,
    navigateCharacters,
    navigateLocations,
    navigateEpisodes,
  };
};
