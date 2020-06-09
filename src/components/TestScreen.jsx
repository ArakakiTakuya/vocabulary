import React, { useState, useEffect } from "react";

import CountDown from "./CountDown.jsx";
import Quiz from "./Quiz.jsx";

const TestScreen = (props) => {
  const changeScreen = props.changeScreen;
  const [timer, setTimer] = useState(3);

  useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
  }, [timer]);

  return (
    <>
      {timer > 0 ? (
        <CountDown timer={timer} />
      ) : (
        <Quiz changeScreen={changeScreen} />
      )}
    </>
  );
};

export default TestScreen;
