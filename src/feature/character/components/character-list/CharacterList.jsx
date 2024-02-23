import "./CharacterList.css";
import { CharacterItem } from "../character-item/CharacterItem";
import { useCharacters } from "../../hooks/useCharacters";
import { Pagination } from "../../../../components/pagination/Pagination";
import { CHARACTERS } from "../../../../Constants/ResourcesAPI";
import { FilterError } from "../../../../components/filter-error/FilterError";
import { useList } from "../../../../hooks/useList";
import { useCharacterFilter } from "../../hooks/useCharacterFilter";

/**
 * Component that renders the list of characters
 * @returns {JSX.Element}
 */
export const CharacterList = () => {
  const { characters, setCharacters } = useCharacters();

  const { loading, hasFilterError } = useList();

  const { getFilter } = useCharacterFilter();

  if (hasFilterError) {
    return <FilterError />;
  }

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container-characters">
          {characters.map((character) => (
            <CharacterItem key={character.id} character={character} />
          ))}
        </div>
      )}
      <Pagination
        resource={CHARACTERS}
        setItems={setCharacters}
        getFilter={getFilter}
      />
    </>
  );
};
