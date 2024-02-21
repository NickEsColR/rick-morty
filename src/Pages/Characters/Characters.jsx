import "./Characters.css";
import { CharacterList } from "../../feature/character/components/character-list/CharacterList";
import { CharacterContextProvider } from "../../feature/character/contexts/CharacterContext";
import { Pagination } from "../../components/pagination/Pagination";
import { PaginationContextProvider } from "../../contexts/PaginationContext";
import { CHARACTERS } from "../../Constants/ResourcesAPI";

export const Characters = () => {
  return (
    <CharacterContextProvider>
      <div className="characters">
        <h1>Characters</h1>
        <CharacterList />
        <PaginationContextProvider>
        <Pagination resource={CHARACTERS}/>
        </PaginationContextProvider>
      </div>
    </CharacterContextProvider>
  );
};
