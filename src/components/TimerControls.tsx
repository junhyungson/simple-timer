interface TimerControsProps {
  onToggle: () => void;
  isRunning: boolean;
  onReset: () => void;
}
const TimerControls = ({ onToggle, isRunning, onReset }: TimerControsProps) => {
  return (
    <div>
      <button
        onClick={onToggle}
        className="mt-3 mr-3  bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        {isRunning ? "Pause" : "Start"}
      </button>
      <button
        onClick={onReset}
        className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        reset
      </button>
    </div>
  );
};

export default TimerControls;
