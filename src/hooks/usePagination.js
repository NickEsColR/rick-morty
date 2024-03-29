import { useCallback, useContext } from "react";
import { PaginationContext } from "../contexts/PaginationContext";
import { ReqApi } from "../utils/API/ReqApi";
import { useList } from "./useList";

/**
 * Hook to manage the pagination of a list
 * @returns {Object} - Object with the pagination functions
 */
export const usePagination = () => {
  const [
    actualPage,
    setActualPage,
    totalPages,
    setTotalPages,
    pagesList,
    setPagesList,
    isFirtsPage,
    setIsFirtsPage,
    isLastPage,
    setIsLastPage,
  ] = useContext(PaginationContext);

  const { setLoading, setHasFilterError } = useList();

  /**
   * Function to change the page of the list
   * @param {string} page - page to request from the API
   * @param {string} resource - Resource of API to request
   * @param {function} setItems - Function to set the items of the list
   * @param {string} filters - Filters to apply to the request
   * @returns {Promise<void>}
   */
  const changeListPage = useCallback(
    async (page, resource, setItems, filters = "") => {
      setLoading(true);
      setHasFilterError(false);
      const options = `?page=${page}${filters}`;
      const response = await ReqApi(resource, options);
      setActualPage(page);
      if (response.error) {
        setLoading(false);
        setHasFilterError(true);
        return;
      }
      setTotalPages(response.info.pages);
      setItems(response.results);
      setLoading(false);
    },
    [setActualPage, setTotalPages, setLoading, setHasFilterError]
  );

  /**
   * Function to get the pages to show in the pagination
   */
  const getShowPages = useCallback(
    (actualPage, totalPages) => {
      const after = totalPages - actualPage > 4 ? 4 : totalPages - actualPage;
      let before = totalPages < 5 ? totalPages - (after + 1) : 5 - (after + 1);
      const pages = [];
      while (before > 0) {
        pages.push(actualPage - before);
        before--;
      }
      pages.push(actualPage);
      for (let i = 1; i <= after; i++) {
        pages.push(actualPage + i);
      }
      setPagesList(pages);
      setIsFirtsPage(actualPage === 1);
      setIsLastPage(actualPage === totalPages);
    },
    [setPagesList, setIsFirtsPage, setIsLastPage]
  );
  
  /**
   * Function to get the first page of the list
   */
  const getFirstItems = useCallback(
    (resource, setItems) => {
      changeListPage(1, resource, setItems);
    },
    [changeListPage]
  );

  return {
    actualPage,
    totalPages,
    pagesList,
    isFirtsPage,
    isLastPage,
    setTotalPages,
    changeListPage,
    getShowPages,
    getFirstItems,
  };
};
