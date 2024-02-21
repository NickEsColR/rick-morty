import "./SearchBar.css";

/**
 * Component that renders a search bar.
 * @param {string} labelText - The label text for the search bar 
 * @returns {JSX.Element}
 */
export const SearchBar = ({ labelText }) => {
  return (
    <div className="search-bar-container">
      <label>{labelText}: </label>
      <input className="search-bar" type="text" name={labelText}/>
    </div>
  );
};
