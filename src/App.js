import React, { useState } from "react";
import FirstScreen from "./components/FirstScreen";

function App() {
  const [screenStatus, changeScreen] = useState("first");

  return (
    <div className="App">
      {screenStatus === "first" ? (
        <FirstScreen changeScreen={changeScreen} />
      ) : (
        <p>Start!</p>
      )}
    </div>
  );
}

export default App;
