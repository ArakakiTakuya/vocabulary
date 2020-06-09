import React from "react";

const WordList = (props) => {
  const wordsArray = props.words;

  return (
    <>
      <h1>単語</h1>
      {wordsArray.map((word, i) => (
        <div key={i}>
          <p>{word.en_meaning}</p>
          <p>{word.ja_meaning}</p>
        </div>
      ))}
    </>
  );
};

export default WordList;
