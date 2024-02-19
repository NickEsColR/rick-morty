import "./App.css";
import { Characters } from "../../Pages/Characters/Characters";
import { Header } from "../Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
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
