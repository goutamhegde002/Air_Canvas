import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [detectedText, setDetectedText] = useState("");

  const runAirCanvas = async () => {
    try {
      const response = await axios.post("http://localhost:5000/run-aircanvas");
      setDetectedText(response.data.detected_text);
    } catch (error) {
      console.error("There was an error running the AirCanvas program!", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>AirCanvas</h1>
        <button onClick={runAirCanvas}>Run AirCanvas</button>
        {detectedText && (
          <div className="output">
            <h2>Detected Text:</h2>
            <p>{detectedText}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
