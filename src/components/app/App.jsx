import "./App.css";
import { Header } from "../Header/Header";
import { Footer } from "../footer/Footer";
import { Router } from "../../routes/Router";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;
