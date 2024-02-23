import { createContext, useState } from "react";

export const EpisodeFilterContext = createContext([
  "",
  () => {},
  "",
  () => {},
]);

/**
 * This function is a provider for the EpisodeFilterContext
 * @param {JSX.Element} children
 * @returns {JSX.Element}
 */
export const EpisodeFilterContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [episode, setEpisode] = useState("");

  return (
    <EpisodeFilterContext.Provider
      value={{
        name,
        setName,
        episode,
        setEpisode,
      }}
    >
      {children}
    </EpisodeFilterContext.Provider>
  );
};
