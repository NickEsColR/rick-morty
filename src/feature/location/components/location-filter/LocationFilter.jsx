import { SearchBar } from "../../../../components/search-bar/SearchBar";
import { useLocationFilter } from "../../hooks/useLocationFilter";
import "./LocationFilter.css";

/**
 * Component that renders the Location filter
 * @param {Object} children - Elemnts inside the component
 * @returns {JSX.Element}
 */
export const LocationFilter = ({ children }) => {
  const {
    name,
    type,
    dimension,
    onChangeName,
    onChangeType,
    onChangeDimension,
    filter,
    clear,
  } = useLocationFilter();

  return (
    <>
      <div className="filter-container">
          <SearchBar labelText="Name" value={name} onChange={onChangeName} />
          <SearchBar labelText="Type" value={type} onChange={onChangeType} />
          <SearchBar
            labelText="Dimension"
            value={dimension}
            onChange={onChangeDimension}
          />
        <div className="btn-container">
          <button onClick={filter}>Filter</button>
          <button onClick={clear}>Clear</button>
        </div>
      </div>
      {children}
    </>
  );
};
