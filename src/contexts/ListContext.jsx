import { createContext, useState } from "react";

export const ListContext = createContext([true, () => {}, false, () => {}]);

/**
 * This function is a provider for the ListContext
 * @param {JSX.Element} children - elements that are wrapped by the provider
 * @returns {JSX.Element}
 */
export const ListContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [hasFilterError, setHasFilterError] = useState(false);

  return (
    <ListContext.Provider
      value={[
        loading,
        setLoading,
        hasFilterError,
        setHasFilterError,
      ]}
    >
      {children}
    </ListContext.Provider>
  );
};
