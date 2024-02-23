import { useContext } from "react";
import { usePagination } from "../../../hooks/usePagination";
import { CHARACTERS } from "../../../Constants/ResourcesAPI";
import { useCharacters } from "./useCharacters";
import { CharacterFilterContext } from "../contexts/CharacterFilterContext";

/**
 * Hook to filter the characters
 * @returns {Object} - Object with the properties and methods to filter the characters
 */
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

  const { setCharacters } = useCharacters();

  /**
   * Method to filter the characters
   */
  const filter = () => {
    const filter = `&name=${name}&status=${status}&species=${species}&type=${type}&gender${gender}`;
    changeListPage(1, CHARACTERS, setCharacters, filter);
  };

  /**
   * Method to clear the filters
   */
  const clear = () => {
    setName("");
    setStatus("");
    setSpecies("");
    setType("");
    setGender("");
    changeListPage(1, CHARACTERS, setCharacters);
  };

  /**
   * Function to handle the name input change
   * @param {Object} e - Event object
   */
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  /**
   * Function to handle the species input change
   * @param {Object} e - Event object
   */
  const onChangeSpecies = (e) => {
    setSpecies(e.target.value);
  };

  /**
   * Function to handle the type input change
   * @param {Object} e - Event object
   */
  const onChangeType = (e) => {
    setType(e.target.value);
  };

  /**
   * Function to handle the gender input change
   * @param {Object} e - Event object
   */
  const onChangeGender = (e) => {
    setGender(e.target.value);
  };

  /**
   * Function to handle the status input change
   * @param {Object} e - Event object
   */
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
