import { EpisodeContext } from "../contexts/EpisodeContext";
import { useContext } from "react";

/**
 * This function is a hook to use the Episodes from the EpisodeContext
 * @returns {Object}
 */
export const useEpisodes = () => {
  const [
    Episodes,
    setEpisodes,
  ] = useContext(EpisodeContext);

  return {
    Episodes,
    setEpisodes,
  };
};
