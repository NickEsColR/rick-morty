import './Card.css';
import PropTypes from "prop-types";

/**
 * This is a card component that receives two props: Image and Info.
 * @param {function} Image - This is a function that returns an image.
 * @param {function} Info - This is a function that returns the information of the card.
 * @returns {JSX.Element}
 */
export const Card = ({ Image, Info }) => {
  return (
    <div className="card">
      <div className="image-container">
        <Image />
      </div>
      <div className="info-container">
        <Info />
      </div>
    </div>
  );
};

Card.propTypes = {
  Image: PropTypes.func.isRequired,
  Info: PropTypes.func.isRequired,
};