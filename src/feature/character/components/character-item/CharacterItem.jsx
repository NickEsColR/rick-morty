import "./CharacterItem.css";
import { Card } from "../../../../components/card/Card";

export const CharacterItem = ({ character }) => {
  const Image = () => <img src={character.image} alt={character.name} />;
  const Info = () => (
    <div className="character-container">
      <h3>{character.name}</h3>
      <h6>
        {character.status === "Alive" ? (
          <>
            <span className="alive" />
            Alive
          </>
        ) : character.status === "Dead" ? (
          <>
            <span className="dead" />
            Dead
          </>
        ) : (
          <>
            <span className="unknown" />
            Unknown
          </>
        )}
      </h6>
      <p>
        <span className="text-grey">Specie: </span>
        <span>{character.species}</span>
      </p>
      <p>
        <span className="text-grey">Gender: </span>
        <span>{character.gender}</span>
      </p>
      <p>
        <span className="text-grey">Type: </span>
        {character.type === "" ? (
          <span>unknown</span>
        ) : (
          <span>{character.type}</span>
        )}
      </p>
      <p>
        <span className="text-grey">Episodes: </span>
        <span>{character.episode.length}</span>
      </p>
    </div>
  );

  return <Card Image={Image} Info={Info} size={'md'}/>;
};
