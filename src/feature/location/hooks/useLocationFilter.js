import { useContext } from "react";
import { usePagination } from "../../../hooks/usePagination";
import { LOCATIONS } from "../../../Constants/ResourcesAPI";
import { useLocation } from "./useLocation";
import { LocationFilterContext } from "../contexts/LocationFilterContext";

/**
 * Hook to filter the Location
 * @returns {Object} - Object with the properties and methods to filter the Location
 */
export const useLocationFilter = () => {
  const {
    name,
    setName,
    type,
    setType,
    dimension,
    setDimension,
  } = useContext(LocationFilterContext);
  
  const { changeListPage } = usePagination();

  const { setLocations } = useLocation();

  /**
   * Function to get the filter string to apply to the request
   */
  const getFilter = () => {
    return `&name=${name}&type=${type}&dimension=${dimension}`;
  }
  /**
   * Method to filter the Location
   */
  const filter = () => {
    const filter = getFilter();
    changeListPage(1, LOCATIONS, setLocations, filter);
  };

  /**
   * Method to clear the filters
   */
  const clear = () => {
    setName("");
    setType("");
    setDimension("");
    changeListPage(1, LOCATIONS, setLocations);
  };

  /**
   * Function to handle the name input change
   * @param {Object} e - Event object
   */
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  /**
   * Function to handle the Location input change
   * @param {Object} e - Event object
   */
  const onChangeType = (e) => {
    setType(e.target.value);
  }

  /**
   * Function to handle the dimension input change
   * @param {Object} e - Event object
   */
  const onChangeDimension = (e) => {
    setDimension(e.target.value);
  }

  return {
    name,
    type,
    dimension,
    onChangeName,
    onChangeType,
    onChangeDimension,
    getFilter,
    filter,
    clear,
  };
};
