import React from "react";

import "../styles/wordList.css";

const WordList = (props) => {
  const wordsArray = props.words;
  const level = props.level;

  return (
    <>
      <h1>{level === "basic" ? <p>レベル　★</p> : <p>レベル　★★★</p>}</h1>
      {wordsArray.map((word, i) => (
        <div className="word" key={i}>
          <p>{word.en_meaning}</p>
          <p>{word.ja_meaning}</p>
        </div>
      ))}
    </>
  );
};

export default WordList;
