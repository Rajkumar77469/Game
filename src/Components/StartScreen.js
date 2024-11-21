import React from "react";
import "./StartScreen.css";

const StartScreen = ({ onStart }) => (
   
  <div className="start-screen center-page" onClick={onStart}>
    <h1>Touch to Start</h1>
  </div>
);

export default StartScreen;
