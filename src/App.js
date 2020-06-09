import React, { useState } from "react";
import FirstScreen from "./components/FirstScreen";

function App() {
  const [start, changeScreen] = useState(false);

  return (
    <div className="App">
      {!start ? <FirstScreen changeScreen={changeScreen} /> : <p>Start!!</p>}
    </div>
  );
}

export default App;
