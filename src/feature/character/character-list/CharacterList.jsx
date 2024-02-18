import './CharacterList.css';
import { CharacterItem } from "../character-item/CharacterItem";

export const CharacterList = ({characters}) => {
  return (
    <div className="container-characters">
      {characters.map((character) => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </div>
  );
};
