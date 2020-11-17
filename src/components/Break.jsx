import React from "react";

function Break(props) {
  const {
    decBreakLengthOneMin,
    incBreakLengthOneMin,
    breakMinutes,
    breakSeconds
  } = props;

  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl">Break</p>
      <p className="text-2xl">
        {breakMinutes}:{breakSeconds < 10 ? `0${breakSeconds}` : breakSeconds}
      </p>
      <div>
        <button
          onClick={incBreakLengthOneMin}
          className="button bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          ↑
        </button>
        <button
          onClick={decBreakLengthOneMin}
          className="button bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          ↓
        </button>
      </div>
    </div>
  );
}

export default Break;
