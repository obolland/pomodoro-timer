import React from "react";

function Session(props) {
  const {
    decSeshLengthOneMin,
    incSeshLengthOneMin,
    seshMinutes,
    seshSeconds
  } = props;

  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl">Session</p>
      <p className="text-2xl">
        {seshMinutes}:{seshSeconds < 10 ? `0${seshSeconds}` : seshSeconds}
      </p>
      <div>
        <button
          onClick={incSeshLengthOneMin}
          className="button bg-transparent hover:bg-blue-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          ↑
        </button>
        <button
          onClick={decSeshLengthOneMin}
          className="button bg-transparent hover:bg-blue-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          ↓
        </button>
      </div>
    </div>
  );
}

export default Session;