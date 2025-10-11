import React from "react";

export default function ModeSwitcher({ mode, onSwitch }) {
  return (
    <button onClick={onSwitch} className="mt-6 text-sm text-blue-600 underline">
      Switch to {mode === "work" ? "Break" : "Work"} Mode
    </button>
  );
}
