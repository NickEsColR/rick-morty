import './DropdownMenu.css'

export const DropdownMenu = ({labelText, options}) => {
  return (
    <div className='dropdown-menu'>
      <label>{labelText}: </label>
      <select defaultValue={''}>
        <option value='' disabled hidden>Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}
