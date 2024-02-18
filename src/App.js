import imageRickMorty from "./assets/img/rick-morty.png";
import "./App.css";
import { useState } from "react";
import { Characters } from "./components/Characters";
import { ReqApi } from "./utils/API/ReqApi";

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const characterApi = await ReqApi("character");

    setCharacters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
      </header>
      <main className="main">
      {characters ? (
        <Characters characters={characters} setCharacters={setCharacters}/>
      ) : (
        <>
          <img src={imageRickMorty} alt="Rick & Morty" className="img-home" />
          <button onClick={reqApi} className="btn-search">
            Buscar Personajes
          </button>
        </>
      )}
      </main>
      <footer>
        <p>
          Developed by <a href="https://github.com/NickEsColR">NickEsColR</a>
        </p>
        <p>&copy; 2024</p>
      </footer>
    </div>
  );
}

export default App;
