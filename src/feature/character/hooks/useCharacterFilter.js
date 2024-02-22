import { useContext } from "react";
import { usePagination } from "../../../hooks/usePagination";
import { CHARACTERS } from "../../../Constants/ResourcesAPI";
import { useCharacters } from "./useCharacters";

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

  const [changeListPage] = usePagination();

  const [setCharacters, setLoading] = useCharacters();

  const filter = (newName, newStatus, newSpecies, newType, newGender) => {
    setLoading(true);
    setName(newName);
    setStatus(newStatus);
    setSpecies(newSpecies);
    setType(newType);
    setGender(newGender);
    const filters = `&name=${newName}&status=${newStatus}&species=${newSpecies}&type=${newType}&gender=${newGender}`;
    changeListPage(1, CHARACTERS, setLoading, setCharacters, filters);
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
