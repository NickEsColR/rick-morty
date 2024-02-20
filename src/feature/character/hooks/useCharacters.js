import { useCallback, useContext, useEffect } from "react";
import { CharacterContext } from "../contexts/CharacterContext";
import { ReqApi } from "../../../utils/API/ReqApi";

/**
 * This function is a hook to use the characters from the CharacterContext
 * @returns {Object}
 */
export const useCharacters = () => {
  const [characters, setCharacters, loading, setLoading] =
    useContext(CharacterContext);

  const reqApi = useCallback(async () => {
    const characterApi = await ReqApi("character");
    setCharacters(characterApi.results);
    setLoading(false);
  },[setCharacters, setLoading]);

  useEffect(() => {
    reqApi();
  }, [reqApi]);

  return {
    characters,
    loading,
  };
};
