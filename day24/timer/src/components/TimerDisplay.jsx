import React from "react";

export default function TimerDisplay({ seconds, mode }) {
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (timeInSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  return (
    <div>
      <h2
        className={`text-lg font-semibold mb-2 ${
          mode === "work" ? "text-red-600" : "text-green-600"
        }`}
      >
        {mode === "work" ? "Work Session" : "Break Time"}
      </h2>
      <p className="text-5xl font-mono mb-6">{formatTime(seconds)}</p>
    </div>
  );
}
