import "./App.css";
import { Characters } from "../../Pages/Characters/Characters";
import { Header } from "../Header/Header";
import { Footer } from "../footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Characters />
      </main>
      <Footer />
    </div>
  );
}

export default App;
