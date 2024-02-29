import "./SocialNetworks.css";
import githubImage from "../../assets/icons8-github.svg";
import linkedinImage from "../../assets/icons8-linkedin.svg";

export const SocialNetworks = () => {
  return (
    <div className="social-networks-container">
      <h1>Contact me</h1>
      <a href="https://github.com/NickEsColR" target="_blank" rel="noreferrer">
        <img src={githubImage} alt="github" />
      </a>
      <a
        href="https://linkedin.com/in/nicolascolmenaressoftwareengineer/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedinImage} alt="linkedin" />
      </a>
    </div>
  );
};
