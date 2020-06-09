import React from "react";

import "../styles/countDown.css";

const CountDown = (props) => {
  const timer = props.timer;
  return (
    <div>
      <div className="circle">{timer}</div>
    </div>
  );
};

export default CountDown;
