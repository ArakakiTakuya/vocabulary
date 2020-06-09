import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import WordList from "./WordList";

const MainScreen = () => {
  const [words, setWords] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const prom = await fetch("/api/words");
    const data = await prom.json();
    setWords(data.words);
  }

  return (
    <>
      <Navbar />
      <WordList words={words} />
    </>
  );
};

export default MainScreen;
