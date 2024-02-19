import "./App.css";
import { Characters } from "../../Pages/Characters/Characters";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
      </header>
      <main className="main">
        <Characters />
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
