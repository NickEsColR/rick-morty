import { useContext } from "react";
import { usePagination } from "../../../hooks/usePagination";
import { EPISODES } from "../../../Constants/ResourcesAPI";
import { useEpisode } from "./useEpisode";
import { EpisodeFilterContext } from "../contexts/EpisodeFilterContext";

/**
 * Hook to filter the Episode
 * @returns {Object} - Object with the properties and methods to filter the Episode
 */
export const useEpisodeFilter = () => {
  const {
    name,
    setName,
    episode,
    setEpisode,
  } = useContext(EpisodeFilterContext);
  
  const { changeListPage } = usePagination();

  const { setEpisodes } = useEpisode();

  /**
   * Function to get the filter string to apply to the request
   */
  const getFilter = () => {
    return `&name=${name}&episode=${episode}`;
  }
  /**
   * Method to filter the Episode
   */
  const filter = () => {
    const filter = getFilter();
    changeListPage(1, EPISODES, setEpisodes, filter);
  };

  /**
   * Method to clear the filters
   */
  const clear = () => {
    setName("");
    setEpisode("");
    changeListPage(1, EPISODES, setEpisodes);
  };

  /**
   * Function to handle the name input change
   * @param {Object} e - Event object
   */
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  /**
   * Function to handle the episode input change
   * @param {Object} e - Event object
   */
  const onChangeEpisode = (e) => {
    setEpisode(e.target.value);
  }

  return {
    name,
    episode,
    onChangeName,
    onChangeEpisode,
    getFilter,
    filter,
    clear,
  };
};
