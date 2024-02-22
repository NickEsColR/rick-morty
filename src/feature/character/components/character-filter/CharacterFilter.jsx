import { DropdownMenu } from "../../../../components/dropdown-menu/DropdownMenu";
import { SearchBar } from "../../../../components/search-bar/SearchBar";
import { GENDER, STATUS } from "../../constants/CharacterFilterOptions";
import "./CharacterFilter.css";

export const CharacterFilter = ({ children }) => {
  return (
    <>
      <div className="filter-container">
        <SearchBar labelText="name" />
        <DropdownMenu labelText="status" options={STATUS} />
        <SearchBar labelText="species" />
        <DropdownMenu labelText="gender" options={GENDER} />
        <SearchBar labelText="type" />
        <div className="btn-container">
          <button>Filter</button>
          <button>Clear</button>
        </div>
      </div>
      {children}
    </>
  );
};
