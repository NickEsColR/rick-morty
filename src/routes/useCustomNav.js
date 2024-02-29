import { useNavigate } from "react-router-dom";
import { PATHS } from "../Constants/Paths";
import { useContext, useEffect } from "react";
import { PathContext } from "./PathContext";

/**
 * This hook is used to navigate through the app
 * @returns {Object}
 */
export const useCustomNav = () => {
  const [activeItem, setActiveItem] = useContext(PathContext);

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate(PATHS.HOME);
  };

  const navigateCharacters = () => {
    navigate(PATHS.CHARACTERS);
  };

  const navigateLocations = () => {
    navigate(PATHS.LOCATIONS);
  };

  const navigateEpisodes = () => {

    navigate(PATHS.EPISODES);
  };

  useEffect(() => {
    setActiveItem(window.location.pathname);
  })

  return {
    activeItem,
    navigateHome,
    navigateCharacters,
    navigateLocations,
    navigateEpisodes,
  };
};
