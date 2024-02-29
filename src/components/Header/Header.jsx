import "./Header.css";
import iconRick from "../../assets/img/rick-sanchez-100.png";
import { useCustomNav } from "../../routes/useCustomNav";
import { PATHS } from "../../Constants/Paths";

/**
 * Component Header that contains the logo and the navigation menu.
 * Uses the useCustomNav hook to handle the navigation.
 * @returns {JSX.Element}
 */
export const Header = () => {
  const {
    activeItem,
    navigateHome,
    navigateCharacters,
    navigateLocations,
    navigateEpisodes,
  } = useCustomNav();

  return (
    <header className="app-header">
      <div className="logo-container" onClick={navigateHome}>
        <img src={iconRick} alt="Logo" />
        <h1 className="title">Rick & Morty</h1>
      </div>
      <div className="menu">
        <span
          className={`menu-item 
          ${activeItem === PATHS.CHARACTERS ? "active" : ""}`}
          onClick={navigateCharacters}
        >
          Characters
        </span>
        <span
          className={`menu-item 
          ${activeItem === PATHS.LOCATIONS ? "active" : ""}`}
          onClick={navigateLocations}
        >
          Locations
        </span>
        <span
          className={`menu-item 
          ${activeItem === PATHS.EPISODES ? "active" : ""}`}
          onClick={navigateEpisodes}
        >
          Episodes
        </span>
      </div>
    </header>
  );
};
