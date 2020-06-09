import React, { useState } from "react";
import FirstScreen from "./components/FirstScreen";
import MainScreen from "./components/MainScreen";

function App() {
  const [screenStatus, changeScreen] = useState("first");

  return (
    <div className="App">
      {screenStatus === "first" ? (
        <FirstScreen changeScreen={changeScreen} />
      ) : screenStatus === "main" ? (
        <MainScreen changeScreen={changeScreen} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
