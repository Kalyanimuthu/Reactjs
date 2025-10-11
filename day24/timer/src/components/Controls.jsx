import React from "react";

export default function Controls({
  isRunning,
  onStart,
  onPause,
  onReset,
  mode,
}) {
  return (
    <div className="flex justify-center gap-3">
      <button
        onClick={onStart}
        disabled={isRunning}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        Start
      </button>

      <button
        onClick={onPause}
        className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
      >
        Pause
      </button>

      <button
        onClick={onReset}
        className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
      >
        Reset
      </button>
    </div>
  );
}
