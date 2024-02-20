import "./Characters.css";
import { CharacterList } from "../../feature/character/components/character-list/CharacterList";
import { CharacterContextProvider } from "../../feature/character/contexts/CharacterContext";
import { Pagination } from "../../components/pagination/Pagination";

export const Characters = () => {
  return (
    <CharacterContextProvider>
      <div className="characters">
        <h1>Characters</h1>
        <CharacterList />
        <Pagination />
      </div>
    </CharacterContextProvider>
  );
};
