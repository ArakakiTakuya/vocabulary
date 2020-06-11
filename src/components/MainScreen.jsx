import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import WordQuiz from "./WordQuiz";
import WordList from "./WordList";

const MainScreen = (props) => {
  const changeScreen = props.changeScreen;
  const [words, setWords] = useState([]);
  const [displayStatus, toggleDisplay] = useState(false);
  const [level, setLevel] = useState("");

  function displayQuiz(level) {
    fetchData(level);
    toggleDisplay(!displayStatus);
  }

  function startQuiz() {
    changeScreen("start");
  }

  async function fetchData(level) {
    const prom = await fetch(`/api/words/${level}`);
    console.log(prom);
    const data = await prom.json();
    console.log(data);
    setWords(data.words);
    setLevel(level);
  }

  return (
    <>
      <Navbar />
      <WordQuiz displayQuiz={displayQuiz} startQuiz={startQuiz} />
      {displayStatus ? <WordList words={words} level={level} /> : null}
    </>
  );
};

export default MainScreen;
