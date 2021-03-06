import React from "react";

import "../styles/firstScreen.css";

const firstScreen = (props) => {
  const changeScreen = props.changeScreen;

  return (
    <div className="container">
      <h1>Vocabulary</h1>
      <h2>ソフトウェアエンジニアのための英単語学習アプリ</h2>
      <button
        onClick={() => {
          changeScreen("main");
        }}
      >
        はじめる
      </button>
    </div>
  );
};

export default firstScreen;
