import React from "react";
import "./WelcomeMessage.css";

export const WelcomeMessage = () => {
  return (
    <>
      <p className="title">About</p>
      <div className="bubble-container">
        <i className="nes-octocat animate"></i>
        <div className="nes-balloon from-left">
          <p>Welcome to my to-do app!</p>
        </div>
      </div>
    </>
  );
};
