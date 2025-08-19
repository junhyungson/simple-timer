import { useRef, useState } from "react";
import TimerControls from "./components/TimerControls";
import TimerDisplay from "./components/TimerDisplay";

const Timer = () => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const clearTimerInterval = () => {
    if (timerRef.current) {
      // if so, clearin terval with its id
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const toggleTimer = () => {
    // before start, clear stuff
    // check if isrunning
    if (isRunning) {
      // if so, check there is timerref.current
      clearTimerInterval();
      setIsRunning(false);
      return;
    }
    // start interval and keep it tracked timerref.current
    timerRef.current = setInterval(() => {
      // increment a counter during
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    // timer is now running
    setIsRunning(true);
  };

  const resetTimer = () => {
    // clear  timer using cleaninterfal(timerref)
    // set is running to false
    // set time to 0
    clearTimerInterval();
    setIsRunning(false);
    setTime(0);
  };
  return (
    <>
      <TimerDisplay time={time} />
      <TimerControls
        onToggle={toggleTimer}
        onReset={resetTimer}
        isRunning={isRunning}
      />
    </>
  );
};

export default Timer;
