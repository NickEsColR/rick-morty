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
        <SearchBar labelText="name" value={name} onChange={onChangeName}/>
        <DropdownMenu
          labelText="status"
          options={STATUS}
          value={status}
          onChange={onChangeStatus}
        />
        <SearchBar
          labelText="specie"
          value={species}
          onChange={onChangeSpecies}
        />
        <DropdownMenu
          labelText="gender"
          options={GENDER}
          value={gender}
          onChange={onChangeGender}
        />
        <SearchBar labelText="type" value={type} onChange={onChangeType} />
        <div className="btn-container">
          <button onClick={filter}>Filter</button>
          <button onClick={clear}>Clear</button>
        </div>
      </div>
      {children}
    </>
  );
};
