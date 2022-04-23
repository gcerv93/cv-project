import "../styles/main.css";
import github from "../images/github.svg";

const Footer = () => {
  return (
    <footer>
      <p>
        Created by{" "}
        <a href="https://github.com/gcerv93" target="_blank" rel="noreferrer">
          gcerv93
          <img src={github} alt="github" height="16" width="16" />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
