import React, { useState } from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import "./NewGame.css";

const NewGame = ({ onCancel }) => {
  const [name, setName] = useState("");

  const handleKeyClick = (key) => {
    setName((prev) => prev + key);
  };

  const handleBackspace = () => {
    setName((prev) => prev.slice(0, -1));
  };

  return (
    <div className="new-game center-page">
      <h2>Enter Your Name</h2>
      <div className="name-box">{name}</div>
      <div className="keyboard">
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
          <button key={letter} onClick={() => handleKeyClick(letter)}>
            {letter}
          </button>
        ))}
        <button onClick={handleBackspace}>
          <KeyboardBackspaceIcon />
        </button>
      </div>
      <div className="actions">
        <button onClick={onCancel}>Cancel</button>
        <button>Confirm</button>
      </div>
    </div>
  );
};

export default NewGame;
