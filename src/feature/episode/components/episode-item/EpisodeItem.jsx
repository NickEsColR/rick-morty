import "./EpisodeItem.css";
import genericEpisodeImage from "../../../../assets/img/rick-and-morty-episodes.jpg";
import { Card } from "../../../../components/card/Card";
import PropTypes from "prop-types";

/**
 * Component that renders an episode item
 * @param {Object} episode - Prop with the episode to render
 * @returns {JSX.Element}
 */
export const EpisodeItem = ({ episode }) => {
  const Image = () => <img src={genericEpisodeImage} alt={episode.name} />;
  const Info = () => (
    <div className="Episode-container">
      <h3>{episode.name}</h3>
      <p>
        <span className="text-grey">Episode: </span>
        <span>{episode.episode}</span>
      </p>
      <p>
        <span className="text-grey">Air Date: </span>
        <span>{episode.air_date}</span>
      </p>
    </div>
  );

  return <Card Image={Image} Info={Info} />;
};

EpisodeItem.propTypes = {
  episode: PropTypes.shape({
    name: PropTypes.string,
    episode: PropTypes.string,
    air_date: PropTypes.string,
  }).isRequired,
};
