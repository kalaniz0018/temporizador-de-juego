import React from "react";

const TimerChallenge = ({title, targetTime}) => {
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button>Start Challenge</button>
      </p>
      <p>Time is runnings.../Timer inactive</p>
    </section>
  );
};

export default TimerChallenge;