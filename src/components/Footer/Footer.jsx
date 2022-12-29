import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <p className="title">Follow me!</p>
      <footer>
        <a href="https://github.com/LucaCuello" target="_blank">
          My github
          <i className="nes-icon github is-medium"></i>
        </a>
        <a href="https://www.linkedin.com/in/luca-cuello41/" target="_blank">
          My linkedin
          <i className="nes-icon linkedin is-medium"></i>
        </a>
      </footer>
    </>
  );
};
