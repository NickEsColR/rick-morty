import "./CharacterList.css";
import { CharacterItem } from "../character-item/CharacterItem";
import { useCharacters } from "../../hooks/useCharacters";
import { Pagination } from "../../../../components/pagination/Pagination";
import { PaginationContextProvider } from "../../../../contexts/PaginationContext";
import { CHARACTERS } from "../../../../Constants/ResourcesAPI";
import { CharacterFilter } from "../character-filter/CharacterFilter";

/**
 * Component that renders the list of characters
 * @returns {JSX.Element}
 */
export const CharacterList = () => {
  const { characters, setCharacters, loading, setLoading } = useCharacters();

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <CharacterFilter>
          <div className="container-characters">
            {characters.map((character) => (
              <CharacterItem key={character.id} character={character} />
            ))}
          </div>
        </CharacterFilter>
      )}
        <Pagination
          resource={CHARACTERS}
          setLoading={setLoading}
          setItems={setCharacters}
        />
    </>
  );
};
