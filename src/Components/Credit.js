

import React from "react";
import "./Credit.css";

const Credit = ({ onBack }) => {
  const creditsData =  [
    { heading: "CREATOR+DESIGN+ART", value: "ALEXPRESTON" },
    { heading: "ANIMATION", value: "SEARAWARD" },
    { heading: "ASSISTANT ART", value: "COSIMOGALLUZZI" },
    { heading: "DESIGN+CODE", value: "BEAUBLYTH" },
    { heading: "MUSIC", value: "DISASTERPEACE" },
    { heading: "ASSISTANT DESIGN", value: "LISA BROWN" },
    { heading: "DESIGN+CODE", value: "TEDDY DIEF" },
    { heading: "SOUND", value: "AKASH THAKKRR" },
    { heading: "ADDITIONAL CODE", value: "AARON MELCHER" },
    { heading: "DESIGN+STORY", value: "CASEY HUNT" },
  ];

  return (
    <div className="credits-page">
      
      <h1>Credits</h1>
      <div className="credits-grid">
        {creditsData.map((item, index) => (
          <div key={index} className="credits-item">
            <div className="credits-heading">{item.heading}</div>
            <div className="credits-value">{item.value}</div>
          </div>
        ))}
      </div>
      <div className="credits-links">
        <a href="https://HEART_MACHINE.com" target="_blank" rel="noopener noreferrer">
        HEART_MACHINE.com
        </a>
        <a href="https://raHEARTMACHINEZ" target="_blank" rel="noopener noreferrer">
        raHEARTMACHINEZ
        </a>
        
      </div>
      <button onClick={onBack} className="back-button">Back</button>
    </div>
  );
};

export default Credit;

