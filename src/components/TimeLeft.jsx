import React from "react";
import "react-circular-progressbar/dist/styles.css";

function TimeLeft(props) {
  const {
    secsLeft,
    minsLeft,
    currentSeshType,
    isStarted,
    handleStartStopClick
  } = props;

  return (
    <div className="flex flex-col items-center">
      <p>{currentSeshType}</p>
      <p className="text-5xl">
        {minsLeft}:{secsLeft < 10 ? `0${secsLeft}` : secsLeft}
      </p>
      <button
        onClick={handleStartStopClick}
        className="button bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        {isStarted ? "Stop" : "Start"}
      </button>
    </div>
  );
}

export default TimeLeft;
