import "./Characters.css";
import { CharacterList } from "../../feature/character/components/character-list/CharacterList";
import { CharacterContextProvider } from "../../feature/character/contexts/CharacterContext";
import { PaginationContextProvider } from "../../contexts/PaginationContext";
import { CharacterFilterContextProvider } from "../../feature/character/contexts/CharacterFilterContext";

/**
 * Component that renders characters page
 * @returns {JSX.Element}
 */
export const Characters = () => {
  return (
    <PaginationContextProvider>
      <CharacterContextProvider>
        <CharacterFilterContextProvider>
          <div className="characters">
            <h1 className="title">Characters</h1>
            <CharacterList />
          </div>
        </CharacterFilterContextProvider>
      </CharacterContextProvider>
    </PaginationContextProvider>
  );
};
