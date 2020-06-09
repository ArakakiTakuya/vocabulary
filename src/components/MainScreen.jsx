import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import WordQuiz from "./WordQuiz";
import WordList from "./WordList";

const MainScreen = () => {
  const [words, setWords] = useState([]);
  const [displayStatus, toggleDisplay] = useState(false);

  function displayQuiz(level) {
    fetchData(level);
    toggleDisplay(!displayStatus);
  }

  async function fetchData(level) {
    const prom = await fetch(`/api/words/${level}`);
    const data = await prom.json();
    setWords(data.words);
  }

  return (
    <>
      <Navbar />
      <WordQuiz displayQuiz={displayQuiz} />
      {displayStatus ? <WordList words={words} /> : null}
    </>
  );
};

export default MainScreen;
