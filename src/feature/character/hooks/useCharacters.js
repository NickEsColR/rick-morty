import { useContext } from "react";
import { CharacterContext } from "../contexts/CharacterContext";

export const useCharacters = () => {
  const [characters, setCharacters] = useContext(CharacterContext);

  const backHome = () => {
    setCharacters(null);
  };

  return {
    hasCharacters: characters === null,
    backHome,
  }
};