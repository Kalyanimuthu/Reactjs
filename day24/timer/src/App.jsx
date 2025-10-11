import React, { useState, useEffect } from "react";
import TimerDisplay from "./components/TimerDisplay";
import Controls from "./components/Controls";
import ModeSwitcher from "./components/ModeSwitcher";

export default function App() {
  // Timer states
  const [seconds, setSeconds] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("work");

  const WORK_TIME = 25 * 60;
  const BREAK_TIME = 5 * 60;

  // Timer effect
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            switchMode();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, mode]);

  // Switch between work/break modes
  const switchMode = () => {
    setMode((prev) => {
      const next = prev === "work" ? "break" : "work";
      setSeconds(next === "work" ? WORK_TIME : BREAK_TIME);
      setIsRunning(false);
      return next;
    });
  };

  // Reset current mode timer
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(mode === "work" ? WORK_TIME : BREAK_TIME);
  };

  // Dynamic background
  const bgColor = mode === "work" ? "bg-red-500" : "bg-green-500";

  return (
    <div
      className={`w-full h-screen flex flex-col items-center justify-center ${bgColor} transition-colors duration-700`}
    >
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-80 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-700">
          ⏳ Pomodoro Timer
        </h1>

        <TimerDisplay seconds={seconds} mode={mode} />

        <Controls
          isRunning={isRunning}
          onStart={() => setIsRunning(true)}
          onPause={() => setIsRunning(false)}
          onReset={handleReset}
          mode={mode}
        />

        <ModeSwitcher mode={mode} onSwitch={switchMode} />
      </div>
    </div>
  );
}
