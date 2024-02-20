import { useContext } from "react";
import { PaginationContext } from "../contexts/PaginationContext";

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
    const after = totalPages - actualPage;
    const before = totalPages - (after + 1);
    const pages = [];
    while (before > 0) {
      pages.push(actualPage - before);
      before--;
    }
    pages.push(actualPage);
    for (let i = 1; i <= after; i++) {
      pages.push(actualPage + i);
    }
    return pages;
  };

  useEffect(() => {
    setPagesList(getShowPages(actualPage, totalPages));
    setIsFirtsPage(actualPage === 1);
    setIsLastPage(actualPage === totalPages);
  }, [actualPage, totalPages]);

  return {
    pagesList,
    isFirtsPage,
    isLastPage,
  }
};
