import { Card } from "../../components/card/Card";
import "./Home.css";

/**
 * Component that represents the home page
 * @returns {JSX.Element}
 */
export const Home = () => {
  return (
    <>
      <div className="welcome-background">
        <div className="welcome-message">
          <h3>Rick And Morty Wiki</h3>
          <p>This web gives information about rick and morty</p>
          <p>
            An animated science fiction sitcom created by Justin Roiland and Dan
            Harmon
          </p>
        </div>
      </div>
      <h3>Explore the rick and morty universe</h3>
      <div className="features-container">
        <div className="feature">
          <Card
            Image={
              <img
                src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                alt="rick"
              />
            }
            Info={
              <>
                <h4>Characters</h4>
                <p>Get to know the characters of the show</p>
              </>
            }
          />
        </div>
        <div className="feature">
          <Card
            Image={
              <img
                src="../../assets/img/rick-and-morty-locations.png"
                alt="location"
              />
            }
            Info={
              <>
                <h4>Locations</h4>
                <p>Explore the different locations in the show</p>
              </>
            }
          />
        </div>
        <div className="feature">
          <Card
            Image={
              <img
                src="../../assets/img/rick-and-morty-episodes.jpg"
                alt="episode"
                Info={
                  <>
                    <h4>Episodes</h4>
                    <p>Get information about the episodes of the show</p>
                  </>
                }
              />
            }
          />
        </div>
      </div>
      <h3>Technologies Used</h3>
      <p>This website is built with the following technologies</p>
      <span className="btn">View on GitHub</span>
      <div className="technologies-container">
        <div className="technology">
          <h4>React</h4>
          <p>
            A JavaScript library for building user interfaces. It is maintained
            by Facebook and a community of individual developers and companies.
          </p>
        </div>
        <div className="technology">
          <h4>React Router</h4>
          <p>
            A collection of navigational components that compose declaratively
            with your application.
          </p>
        </div>
        <div className="technology">
          <h4>Rick and Morty API</h4>
          <p>
            An open API for the tv show Rick and Morty, which provides data
            about the characters, locations and episodes.
          </p>
        </div>
        <div className="technology">
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
