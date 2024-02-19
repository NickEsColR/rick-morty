import { SocialNetworks } from "../social-networks/SocialNetworks";
import "./Footer.css";

/**
 * Component Footer that contains the social networks and the developer's information.
 * @returns {JSX.Element}
 */
export const Footer = () => {
  return (
    <footer>
      <SocialNetworks />
      <p>
        Developed by <a href="https://github.com/NickEsColR">NickEsColR</a> 
        <span>&copy;</span> 2024
      </p>
    </footer>
  );
};
