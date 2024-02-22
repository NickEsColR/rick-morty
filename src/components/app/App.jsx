import "./App.css";
import { Footer } from "../footer/Footer";
import { Router } from "../../routes/Router";
import { CharacterFilter } from "../../feature/character/components/character-filter/CharacterFilter";

function App() {
  return (
    <div className="App">
      <Router />
      <CharacterFilter />
      <Footer />
    </div>
  );
}

export default App;
