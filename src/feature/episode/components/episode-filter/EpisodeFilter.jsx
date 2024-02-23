import { SearchBar } from "../../../../components/search-bar/SearchBar";
import { useEpisodeFilter } from "../../hooks/useEpisodeFilter";
import "./EpisodeFilter.css";

/**
 * Component that renders the Episode filter
 * @param {Object} children - Elemnts inside the component
 * @returns {JSX.Element}
 */
export const EpisodeFilter = ({ children }) => {
  const {
    name,
    episode,
    onChangeName,
    onChangeEpisode,
    filter,
    clear,
  } = useEpisodeFilter();

  return (
    <>
      <div className="filter-container">
        <SearchBar labelText="Name" value={name} onChange={onChangeName} />
        <SearchBar
          labelText="Episode"
          value={episode}
          onChange={onChangeEpisode}
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
