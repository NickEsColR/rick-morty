import "./LocationItem.css";
import genericLocationImage from "../../../../assets/img/rick-and-morty-locations.png";
import { Card } from "../../../../components/card/Card";
import PropTypes from "prop-types";

/**
 * Component that renders a Location item
 * @param {Object} Location - Prop with the Location to render
 * @returns {JSX.Element}
 */
export const LocationItem = ({ location }) => {
  const Image = () => <img src={genericLocationImage} alt={location.name} />;
  const Info = () => (
    <div className="location-container">
      <h3>{location.name}</h3>
      <p>
        <span className="text-grey">Type: </span>
        <span>{location.type}</span>
      </p>
      <p>
        <span className="text-grey">Dimension: </span>
        <span>{location.dimension}</span>
      </p>
    </div>
  );

  return <Card Image={Image} Info={Info} />;
};

LocationItem.propTypes = {
  Location: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    dimension: PropTypes.string,
  }).isRequired,
};
