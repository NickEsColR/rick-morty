import "./Home.css";
import genericLocationImage from "../../assets/img/rick-and-morty-locations.png";
import genericEpisodeImage from "../../assets/img/rick-and-morty-episodes.jpg";
import { Card } from "../../components/card/Card";
import { useCustomNav } from "../../routes/useCustomNav";

/**
 * Function to create the character image
 * @returns {JSX.Element}
 */
const characterImage = () => (
  <img
    src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    alt="rick"
  />
);

/**
 * Function to create the character information
 * @returns {JSX.Element}
 */
const characterInfo = () => (
  <>
    <h4>Characters</h4>
    <p>Get to know the characters of the show</p>
  </>
);

/**
 * Function to create the location image
 * @returns {JSX.Element}
 */
const locationImage = () => <img src={genericLocationImage} alt="location" />;

/**
 * Function to create the location information
 * @returns {JSX.Element}
 */
const locationInfo = () => (
  <>
    <h4>Locations</h4>
    <p>Explore the different locations in the show</p>
  </>
);

/**
 * Function to create the episode image
 * @returns {JSX.Element}
 */
const episodeImage = () => <img src={genericEpisodeImage} alt="episode" />;

/**
 * Function to create the episode information
 * @returns {JSX.Element}
 */
const episodeInfo = () => (
  <>
    <h4>Episodes</h4>
    <p>Get information about the episodes of the show</p>
  </>
);

/**
 * Component that represents the home page
 * @returns {JSX.Element}
 */
export const Home = () => {
  const { navigateCharacters, navigateLocations, navigateEpisodes } =
    useCustomNav();

  /**
   * Function to redirect to the repository
   */
  const redirectRepository = () => {
    window.open("https://github.com/NickEsColR/rick-morty", "_blank");
  };

  /**
   * Function to redirect to the React documentation
   */
  const redirectReact = () => {
    window.open("https://reactjs.org/", "_blank");
  };

  /**
   * Function to redirect to the React Router documentation
   */
  const redirectReactRouter = () => {
    window.open("https://reactrouter.com/", "_blank");
  };

  /**
   * Function to redirect to the Rick and Morty API documentation
   */
  const redirectRickAndMortyApi = () => {
    window.open("https://rickandmortyapi.com/", "_blank");
  };

  /**
   * Function to redirect to the Netlify documentation
   */
  const redirectNetlify = () => {
    window.open("https://www.netlify.com/", "_blank");
  };

  return (
    <>
      <div className="welcome-background">
        <div className="welcome-message">
          <h1>Rick And Morty Wiki</h1>
          <p>This web gives information about rick and morty</p>
          <p>
            An animated science fiction sitcom created by Justin Roiland and Dan
            Harmon
          </p>
        </div>
      </div>
      <h2 className="title">Explore the rick and morty universe</h2>
      <div className="features-container">
        <div className="feature" onClick={navigateCharacters}>
          <Card Image={characterImage} Info={characterInfo} />
        </div>
        <div className="feature" onClick={navigateLocations}>
          <Card Image={locationImage} Info={locationInfo} />
        </div>
        <div className="feature" onClick={navigateEpisodes}>
          <Card Image={episodeImage} Info={episodeInfo} />
        </div>
      </div>
      <h2 className="title">Technologies Used</h2>
      <div className="technologies-message">
        <p>This website is built with the following technologies</p>
        <span className="btn" onClick={redirectRepository}>
          View on GitHub
        </span>
      </div>
      <div className="technologies-container">
        <div className="technology" onClick={redirectReact}>
          <h4>React</h4>
          <p>
            A JavaScript library for building user interfaces. It is maintained
            by Facebook and a community of individual developers and companies.
          </p>
        </div>
        <div className="technology" onClick={redirectReactRouter}>
          <h4>React Router</h4>
          <p>
            A collection of navigational components that compose declaratively
            with your application.
          </p>
        </div>
        <div className="technology" onClick={redirectRickAndMortyApi}>
          <h4>Rick and Morty API</h4>
          <p>
            An open API for the tv show Rick and Morty, which provides data
            about the characters, locations and episodes.
          </p>
        </div>
        <div className="technology" onClick={redirectNetlify}>
          <h4>Netlify</h4>
          <p>
            A cloud computing company that offers hosting and serverless backend
            services
          </p>
        </div>
      </div>
    </>
  );
};
