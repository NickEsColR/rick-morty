import { createContext, useState } from "react";

export const CharacterContext = createContext([null, () => {}, true, () => {}]);

/**
 * This function is a provider for the CharacterContext
 * @param {JSX.Element} children - elements that are wrapped by the provider
 * @returns {JSX.Element}
 */
export const CharacterContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasFilterError, setHasFilterError] = useState(false);

  return (
    <CharacterContext.Provider
      value={[
        characters,
        setCharacters,
        loading,
        setLoading,
        hasFilterError,
        setHasFilterError,
      ]}
    >
      {children}
    </CharacterContext.Provider>
  );
};
