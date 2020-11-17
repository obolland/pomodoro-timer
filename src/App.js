import React, { useState, useEffect } from "react";
import "./styles.css";
import TimeLeft from "./components/TimeLeft";
import Break from "./components/Break";
import Session from "./components/Session";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function App() {
  const [seshLength, setSeshLength] = useState(1500);
  const seshMinutes = Math.floor(seshLength / 60);
  const seshSeconds = seshLength - seshMinutes * 60;
  const [breakLength, setBreakLength] = useState(300);
  const breakMinutes = Math.floor(breakLength / 60);
  const breakSeconds = breakLength - breakMinutes * 60;
  const [currentSeshType, setCurrentSeshType] = useState("session");
  const [intervalId, setIntervalId] = useState(null);
  const [timeLeft, setTimeLeft] = useState(seshLength);
  const minsLeft = Math.floor(timeLeft / 60);
  const secsLeft = timeLeft - minsLeft * 60;

  const incSeshLengthOneMin = () => {
    const newIncSeshLength = seshLength + 60;
    if (newIncSeshLength <= 60 * 60) {
      setSeshLength(newIncSeshLength);
    }
  };

  const decSeshLengthOneMin = () => {
    const newDecSeshLength = seshLength - 60;
    if (newDecSeshLength > 0) {
      setSeshLength(newDecSeshLength);
    }
  };

  const incBreakLengthOneMin = () => {
    const newIncBreakLength = breakLength + 60;
    if (newIncBreakLength <= 60 * 60) {
      setBreakLength(newIncBreakLength);
    }
  };

  const decBreakLengthOneMin = () => {
    const newDecBreakLength = breakLength - 60;
    if (newDecBreakLength > 0) {
      setBreakLength(newDecBreakLength);
    }
  };

  const handleResetClick = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setCurrentSeshType("session");
    setSeshLength(1500);
    setBreakLength(60 * 5);
    setTimeLeft(60 * 25);
  };

  const isStarted = intervalId != null;
  const handleStartStopClick = () => {
    if (isStarted) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      const newIntervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
      setIntervalId(newIntervalId);
    }
  };

  //I want to change timeLeft when session length changes.
  //useEffect takes a callback that is called whenever a variable
  //I'm listening for changes. In this case, I'm listening for session length.
  useEffect(() => {
    setTimeLeft(seshLength); //run this function when variable in dependency list changes
  }, [seshLength]); //subscribe to variables here

  //listen to timeLeft changes.
  //when timeLeft (the timer) is 0...
  useEffect(() => {
    const audioElement = new Audio(
      "https://freesound.org/data/previews/250/250629_4486188-lq.mp3"
    );
    if (timeLeft === 0) {
      audioElement.play();
      if (currentSeshType === "session") {
        setCurrentSeshType("break");
        setTimeLeft(breakLength);
      } else if (currentSeshType === "break") {
        setCurrentSeshType("session");
        setTimeLeft(seshLength);
      }
    }
  }, [timeLeft, currentSeshType, breakLength, seshLength]);

  //React-circular-progressbar logic for converting...
  //sesh and break times to a percentage
  const percentageSesh = (timeLeft / seshLength) * 100;
  const percentageBreak = (timeLeft / breakLength) * 100;
  const percentage = () => {
    if (currentSeshType === "session") {
      return percentageSesh;
    } else if (currentSeshType === "break") {
      return percentageBreak;
    }
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full justify-around">
        <Session
          decSeshLengthOneMin={decSeshLengthOneMin}
          incSeshLengthOneMin={incSeshLengthOneMin}
          seshMinutes={seshMinutes}
          seshSeconds={seshSeconds}
        />
        <CircularProgressbarWithChildren value={percentage()}>
          <TimeLeft
            seshLength={seshLength}
            breakLength={breakLength}
            secsLeft={secsLeft}
            minsLeft={minsLeft}
            currentSeshType={currentSeshType}
            isStarted={isStarted}
            handleStartStopClick={handleStartStopClick}
          />
          <button
            onClick={handleResetClick}
            className="button bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Reset
          </button>
        </CircularProgressbarWithChildren>
        <Break
          decBreakLengthOneMin={decBreakLengthOneMin}
          incBreakLengthOneMin={incBreakLengthOneMin}
          breakMinutes={breakMinutes}
          breakSeconds={breakSeconds}
        />
      </div>
    </div>
  );
}