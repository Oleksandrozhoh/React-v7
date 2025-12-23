import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";

const Timer = ({ time, isRunning, toggleTimer, resetTimer }) => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center">
      <TimerDisplay time={time} />
      <TimerControls
        isRunning={isRunning}
        toggleTimer={toggleTimer}
        resetTimer={resetTimer}
      />
    </div>
  );
};

export default Timer;
