import React from "react";

import "../styles/wordQuiz.css";

const WordQuiz = (props) => {
  const displayQuiz = props.displayQuiz;
  const startQuiz = props.startQuiz;
  return (
    <div className="wordQuizContainer">
      <div className="wordQuiz">
        <p>初級レベル / Basic Level</p>
        <button
          onClick={() => {
            startQuiz();
          }}
        >
          テストする
        </button>
        <button
          onClick={() => {
            displayQuiz("basic");
          }}
        >
          収録単語一覧
        </button>
      </div>
      <div className="wordQuiz">
        <p>上級レベル / Advance Level</p>
        <button
          onClick={() => {
            startQuiz();
          }}
        >
          テストする
        </button>
        <button
          onClick={() => {
            displayQuiz("advance");
          }}
        >
          収録単語一覧
        </button>
      </div>
    </div>
  );
};

export default WordQuiz;
