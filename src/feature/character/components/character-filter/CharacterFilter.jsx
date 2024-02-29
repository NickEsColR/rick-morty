import { DropdownMenu } from "../../../../components/dropdown-menu/DropdownMenu";
import { SearchBar } from "../../../../components/search-bar/SearchBar";
import { GENDER, STATUS } from "../../constants/CharacterFilterOptions";
import { useCharacterFilter } from "../../hooks/useCharacterFilter";
import "./CharacterFilter.css";

/**
 * Component that renders the character filter
 * @param {Object} children - Elemnts inside the component
 * @returns {JSX.Element}
 */
export const CharacterFilter = ({ children }) => {
  const {
    name,
    status,
    species,
    type,
    gender,
    onChangeName,
    onChangeSpecies,
    onChangeType,
    onChangeGender,
    onChangeStatus,
    filter,
    clear,
  } = useCharacterFilter();

  return (
    <>
      <div className="filter-container">
        <SearchBar labelText="Name" value={name} onChange={onChangeName} />
        <DropdownMenu
          labelText="Status"
          options={STATUS}
          value={status}
          onChange={onChangeStatus}
        />
        <SearchBar
          labelText="Specie"
          value={species}
          onChange={onChangeSpecies}
        />
        <DropdownMenu
          labelText="Gender"
          options={GENDER}
          value={gender}
          onChange={onChangeGender}
        />
        <SearchBar labelText="Type" value={type} onChange={onChangeType} />
        <div className="btn-container">
          <button onClick={filter}>Filter</button>
          <button onClick={clear}>Clear</button>
        </div>
      </div>
      {children}
    </>
  );
};
