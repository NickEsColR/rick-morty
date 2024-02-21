import { usePagination } from "../../hooks/usePagination";
import "./Pagination.css";

export const Pagination = ({ resource }) => {
  const {
    actualPage,
    totalPages,
    pagesList,
    isFirtsPage,
    isLastPage,
    changeListPage,
  } = usePagination();

  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      {isFirtsPage ? (
        ""
      ) : (
        <>
          <span
            className="pagination-btn"
            onClick={() => changeListPage(1, resource)}
          >
            &lt;&lt;
          </span>
          <span
            className="pagination-btn"
            onClick={() => changeListPage(actualPage - 1, resource)}
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
              onClick={() => changeListPage(page, resource)}
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
            onClick={() => changeListPage(actualPage + 1, resource)}
          >
            &gt;
          </span>
          <span
            className="pagination-btn"
            onClick={() => changeListPage(totalPages, resource)}
          >
            &gt;&gt;
          </span>
        </>
      )}
    </nav>
  );
};
