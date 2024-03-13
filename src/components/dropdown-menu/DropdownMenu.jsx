import './DropdownMenu.css'
import PropTypes from 'prop-types'

/**
 * Generic component that renders a dropdown menu
 * @param {string} labelText - The label text for the dropdown menu
 * @param {array} options - The options for the dropdown menu
 * @param {string} value - The value of the dropdown menu
 * @param {function} onChange - The function to handle the change event
 * @returns 
 */
export const DropdownMenu = ({labelText, options, value, onChange}) => {
  return (
    <div className={`dropdown-menu ${labelText}`}>
      <label>{labelText}: </label>
      <select value={value} onChange={onChange}>
        <option value='' disabled hidden>Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

DropdownMenu.propTypes = {
  labelText: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
