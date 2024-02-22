import "./SearchBar.css";
import PropTypes from "prop-types";

/**
 * Component that renders a search bar.
 * @param {string} labelText - The label text for the search bar 
 * @param {string} value - The value of the search bar
 * @param {function} onChange - The function to handle the change event
 * @returns {JSX.Element}
 */
export const SearchBar = ({ labelText, value, onChange }) => {
  return (
    <div className="search-bar-container">
      <label>{labelText}: </label>
      <input className="search-bar" type="text" name={labelText} value={value} onChange={onChange}/>
    </div>
  );
};

SearchBar.propTypes = {
  labelText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
