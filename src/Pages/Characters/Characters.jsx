import "./Characters.css";
import { CharacterList } from "../../feature/character/components/character-list/CharacterList";
import { CharacterContextProvider } from "../../feature/character/contexts/CharacterContext";

/**
 * Component that renders characters page
 * @returns {JSX.Element}
 */
export const Characters = () => {
  return (
    <CharacterContextProvider>
      <div className="characters">
        <h1>Characters</h1>
        <CharacterList />
      </div>
    </CharacterContextProvider>
  );
};
