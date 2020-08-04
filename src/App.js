import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Toppage from "./components/Toppage";
{
  /*
import FirstScreen from "./components/FirstScreen";
import MainScreen from "./components/MainScreen";
import TestScreen from "./components/TestScreen";
*/
}

function App() {
  //const [screenStatus, changeScreen] = useState("first");

  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact>
              <Toppage />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
      {/*
      {screenStatus === "first" ? (
        <FirstScreen changeScreen={changeScreen} />
      ) : screenStatus === "main" ? (
        <MainScreen changeScreen={changeScreen} />
      ) : (
        <TestScreen changeScreen={changeScreen} />
      )}
      */}
    </div>
  );
}

export default App;
