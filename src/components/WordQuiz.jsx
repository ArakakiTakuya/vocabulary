import React from "react";

import "../styles/wordQuiz.css";

const WordQuiz = () => {
  return (
    <div className="wordQuizContainer">
      <div className="wordQuiz">
        <p>初級レベル / Basic Level</p>
        <button>テストする</button>
        <button>収録単語一覧</button>
      </div>
      <div className="wordQuiz">
        <p>上級レベル / Advance Level</p>
        <button>テストする</button>
        <button>収録単語一覧</button>
      </div>
    </div>
  );
};

export default WordQuiz;
