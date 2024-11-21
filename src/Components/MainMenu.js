import React, { useState } from "react";
import "./MainMenu.css";
import Credit from "./Credit";

const MainMenu = ({ onNewGame, onBackToStart }) => {
  const [showCredits, setShowCredits] = useState(false);

  if (showCredits) {
    return <Credit onBack={() => setShowCredits(false)} />;
  }

  return (
    <div className="main-menu center-page">
      <button>Continue to Game</button>
      <button>Load Game</button>
      <button onClick={onNewGame}>New Game</button>
      <button>Settings</button>
      <button>Achievements</button>
      <button onClick={() => setShowCredits(true)}>Credits</button>
      <button className="back-btn" onClick={onBackToStart}>Back</button>

    </div>
  );
};

export default MainMenu;
