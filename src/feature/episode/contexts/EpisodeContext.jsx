import { createContext, useState } from "react";

export const EpisodeContext = createContext([null, () => {}]);

/**
 * This function is a provider for the EpisodeContext
 * @param {JSX.Element} children - elements that are wrapped by the provider
 * @returns {JSX.Element}
 */
export const EpisodeContextProvider = ({ children }) => {
  const [Episodes, setEpisodes] = useState(null);

  return (
    <EpisodeContext.Provider
      value={[
        Episodes,
        setEpisodes,
      ]}
    >
      {children}
    </EpisodeContext.Provider>
  );
};
