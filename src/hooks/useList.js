
import { useContext } from "react";
import { ListContext } from "../contexts/ListContext";

/**
 * This function is a hook to use the list from the ListContext
 * @returns {Object}
 */
export const useList = () => {
  const [
    loading,
    setLoading,
    hasFilterError,
    setHasFilterError,
  ] = useContext(ListContext);

  return {
    loading,
    setLoading,
    hasFilterError,
    setHasFilterError,
  };
};
