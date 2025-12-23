import { useState, useEffect, useRef } from "react";
import Timer from "./components/Timer";

const App = () => {
  // Refs to hold interval ID and button element
  const timerRef = useRef(null);

  const [time, setTime] = useState(() => {
    return Number(localStorage.getItem("time")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("time", JSON.stringify(time));
  }, [time]);

  const [isRunning, setIsRunning] = useState(false);

  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    } else {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTime(0);
    setIsRunning(false);
  };

  return (
    <Timer
      time={time}
      isRunning={isRunning}
      toggleTimer={toggleTimer}
      resetTimer={resetTimer}
    />
  );
};

export default App;
