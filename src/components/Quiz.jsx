import React from "react";

const Quiz = (props) => {
  const changeScreen = props.changeScreen;
  return (
    <>
      <button
        onClick={() => {
          changeScreen("main");
        }}
      >
        戻る
      </button>
    </>
  );
};

export default Quiz;
