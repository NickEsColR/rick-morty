import { memo, useEffect } from "react";
import { usePagination } from "../../hooks/usePagination";
import "./Pagination.css";

/**
 * Component that renders the pagination buttons
 * @param {Object} props - Component props
 * @param {string} props.resource - Resource of API to request
 * @param {Function} props.setItems - Function to set the items of the list
 * @param {Function} props.getFilter - Function to get the filter string to apply to the request
 * @returns {JSX.Element}
 */
export const Pagination = memo(({ resource, setItems, getFilter }) => {
  const {
    actualPage,
    totalPages,
    pagesList,
    isFirtsPage,
    isLastPage,
    changeListPage,
    getShowPages,
    getFirstItems,
  } = usePagination();

  /**
   * Function to change the page of the list
   * @param {string} page 
   */
  const changePage = (page) => {
    changeListPage(page, resource, setItems, getFilter());
  };

  /**
   * Pagination is mount, get the first page of the list
   */
  useEffect(() => {
    getFirstItems(resource, setItems);
  },[getFirstItems, resource, setItems]);

  /**
   * Page is changed, get the new list
   */
  useEffect(() => {
    getShowPages(actualPage, totalPages);
  }, [
    getShowPages,
    actualPage,
    totalPages,
  ]);

  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      {isFirtsPage ? (
        ""
      ) : (
        <>
          <span className="pagination-btn" onClick={() => changePage(1)}>
            &lt;&lt;
          </span>
          <span
            className="pagination-btn"
            onClick={() => changePage(actualPage - 1)}
          >
            &lt;
          </span>
        </>
      )}
      <ul className="pagination-list">
        {pagesList.map((page) => (
          <li key={page}>
            <span
              className={`pagination-btn ${
                actualPage === page ? "active" : ""
              }`}
              onClick={() => changePage(page)}
            >
              {page}
            </span>
          </li>
        ))}
      </ul>
      {isLastPage ? (
        ""
      ) : (
        <>
          <span
            className="pagination-btn"
            onClick={() => changePage(actualPage + 1)}
          >
            &gt;
          </span>
          <span
            className="pagination-btn"
            onClick={() => changePage(totalPages)}
          >
            &gt;&gt;
          </span>
        </>
      )}
    </nav>
  );
});
