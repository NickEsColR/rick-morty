import { useContext, useEffect } from "react";
import { PaginationContext } from "../contexts/PaginationContext";
import { ReqApi } from "../utils/API/ReqApi";

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

  const getShowPages = (actualPage, totalPages) => {
    const after = (totalPages - actualPage) > 4 ? 4 : (totalPages - actualPage);
    let before = 5 - (after + 1);
    const pages = [];
    while (before > 0) {
      pages.push(actualPage - before);
      before--;
    }
    pages.push(actualPage);
    for (let i = 1; i <= after; i++) {
      pages.push(actualPage + i);
    }
    console.log("pages", pages);
    return pages;
  };

  const changeListPage = async (page, resource, filters = "") => {
    const options = `?page=${page}${filters}`;
    const response = await ReqApi(resource, options);
    setActualPage(page);
    setTotalPages(response.info.pages);
    return response.results;
  };

  useEffect(() => {
    setPagesList(getShowPages(actualPage, totalPages));
    setIsFirtsPage(actualPage === 1);
    setIsLastPage(actualPage === totalPages);
  }, [actualPage, totalPages, setPagesList, setIsFirtsPage, setIsLastPage]);

  return {
    actualPage,
    totalPages,
    pagesList,
    isFirtsPage,
    isLastPage,
    setTotalPages,
    changeListPage,
  }
};
