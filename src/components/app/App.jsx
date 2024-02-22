import "./App.css";
import { Footer } from "../footer/Footer";
import { Router } from "../../routes/Router";

function App() {
  return (
    <div className="App">
      <Router />
      <Footer />
    </div>
  );
}

export default App;
