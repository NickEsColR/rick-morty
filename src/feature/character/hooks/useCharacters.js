import { CharacterContext } from "../contexts/CharacterContext";
import { useContext } from "react";

/**
 * This function is a hook to use the characters from the CharacterContext
 * @returns {Object}
 */
export const useCharacters = () => {
  const [characters, setCharacters, loading, setLoading] =
    useContext(CharacterContext);

  return {
    characters,
    setCharacters,
    loading,
    setLoading,
  };
};
