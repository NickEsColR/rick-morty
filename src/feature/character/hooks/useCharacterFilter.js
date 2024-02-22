import { useContext } from "react";
import { usePagination } from "../../../hooks/usePagination";
import { CHARACTERS } from "../../../Constants/ResourcesAPI";
import { useCharacters } from "./useCharacters";
import { CharacterFilterContext } from "../contexts/CharacterFilterContext";

export const useCharacterFilter = () => {
  const {
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
  } = useContext(CharacterFilterContext);

  const { changeListPage } = usePagination();

  const { setCharacters, setLoading } = useCharacters();

  const filter = () => {
    setLoading(true);
    const filter = `name=${name}&status=${status}&species=${species}&type=${type}&gender${gender}`;
    changeListPage(1, CHARACTERS, setLoading, setCharacters, filter);
  };

  const clear = () => {
    setName("");
    setStatus("");
    setSpecies("");
    setType("");
    setGender("");
    setLoading(true);
    changeListPage(1, CHARACTERS, setLoading, setCharacters);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeSpecies = (e) => {
    setSpecies(e.target.value);
  };

  const onChangeType = (e) => {
    setType(e.target.value);
  };

  const onChangeGender = (e) => {
    setGender(e.target.value);
  };

  const onChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  return {
    name,
    status,
    species,
    type,
    gender,
    onChangeName,
    onChangeSpecies,
    onChangeType,
    onChangeGender,
    onChangeStatus,
    filter,
    clear,
  };
};
