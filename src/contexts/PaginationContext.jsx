import { createContext, useState } from "react";

export const PaginationContext = createContext([1, () => {}, 1, () => {}]);

/**
 * Function that creates a provider for the PaginationContext
 * @param {JSX.Element} children - elements that are wrapped by the provider 
 * @returns {JSX.Element}
 */

export const PaginationContextProvider = ({ children }) => {
  const [actualPage, setActualPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  return (
    <PaginationContext.Provider
      value={[actualPage, setActualPage, totalPages, setTotalPages]}
    >
      {children}
    </PaginationContext.Provider>
  );
};
