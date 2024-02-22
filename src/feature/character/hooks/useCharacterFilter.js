import { useContext } from "react";

export const useCharacterFilter = () => {
  const [
    name,
    setName,
    status,
    setStatus,
    species,
    setSpecies,
    type,
    setType,
    gender,
    setGender,
  ] = useContext(CharacterFilterContext);

  const filter = (newName, newStatus, newSpecies, newType, newGender) => {
    setName(newName);
    setStatus(newStatus);
    setSpecies(newSpecies);
    setType(newType);
    setGender(newGender);
  };

  const clear = () => {
    setName("");
    setStatus("");
    setSpecies("");
    setType("");
    setGender("");
  };

  return {
    name,
    status,
    species,
    type,
    gender,
    filter,
    clear,
  };
};
