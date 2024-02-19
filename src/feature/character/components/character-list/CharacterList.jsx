import './CharacterList.css';
import { CharacterItem } from "../character-item/CharacterItem";
import { useCharacters } from '../../hooks/useCharacters';

export const CharacterList = () => {
  const {characters, loading} = useCharacters();
  if(loading){
    return <h1>Loading...</h1>
  }else if(!characters){
    <h1>Error ocurred, characters not found</h1>
  }
  
  return (
    <div className="container-characters">
      {characters.map((character) => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </div>
  );
};
