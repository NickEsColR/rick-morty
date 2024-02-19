import "./Header.css";
import iconRick from "../../assets/img/rick-sanchez-100.png";

export const Header = () => {
  return (
    <header className="App-header">
      <img src={iconRick} alt="Logo" />
      <h1 className="title">Rick & Morty</h1>
      <div className="menu">
        <span className="menu-item">Characters</span>
        <span className="menu-item">Locations</span>
        <span className="menu-item">Episodes</span>
      </div>
    </header>
  );
};