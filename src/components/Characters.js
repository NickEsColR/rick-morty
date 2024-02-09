import React from "react";

export const Characters = ({ characters, setCharacters }) => {

  const backHome = () => {
    setCharacters(null);
  }

  return (
    <div className="characters">
      <h1>Characters</h1>
      <span className="back-home" onClick={backHome}>Back home</span>
      <div className="container-characters">
        {characters.map((character) => (
          <div key={character.id} className="character-container">
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive" />
                    Alive
                  </>
                ) : (
                  <>
                    <span className="dead" />
                    Dead
                  </>
                )}
              </h6>
              <p>
                <span className="text-grey">Episodes: </span>
                <span>{character.episode.length}</span>
              </p>
              <p>
                <span className="text-grey">Specie: </span>
                <span>{character.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <span className="back-home" onClick={backHome}>Back home</span>
    </div>
  );
};
