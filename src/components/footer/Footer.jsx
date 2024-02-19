import { SocialNetworks } from "../social-networks/SocialNetworks";
import "./Footer.css";

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
