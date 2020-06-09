import React, { useState, useEffect } from "react";

import CountDown from "./CountDown.jsx";
import Quiz from "./Quiz.jsx";

const TestScreen = () => {
  const [timer, setTimer] = useState(3);

  useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
  }, [timer]);

  return <>{timer > 0 ? <CountDown timer={timer} /> : <Quiz />}</>;
};

export default TestScreen;
