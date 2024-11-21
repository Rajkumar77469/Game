import React, { useState } from "react";
import StartScreen from "./Components/StartScreen.js";
import MainMenu from "./Components/MainMenu";
import NewGame from "./Components/NewGame";

function App() {
  const [currentScreen, setCurrentScreen] = useState("start");

  const renderScreen = () => {
    switch (currentScreen) {
      case "start":
        return <StartScreen onStart={() => setCurrentScreen("menu")} />;
      case "menu":
        return <MainMenu onNewGame={() => setCurrentScreen("newGame")} onBackToStart={() => setCurrentScreen("start")} />;
      case "newGame":
        return <NewGame onCancel={() => setCurrentScreen("menu")} />;
      default:
        return <StartScreen onStart={() => setCurrentScreen("menu")} />;
    }
  };

  return <div className="app">{renderScreen()}</div>;
}

export default App;
