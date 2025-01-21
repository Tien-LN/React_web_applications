import {useState} from 'react';

export function CountDownWatch({onGameOver, onGameStart}) {
  const [selectedTime, setSelectedTime] = useState(60);
  const [currentTime, setCurrentTime] = useState(null);
  const [timerId, setTimerId] = useState(null);

  const formatTime = (seconds) => {
    if(seconds === 'infinity') return 'No Time Limit';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2,'0')}`;
  }

  const startTimer = () => {
    if(timerId) clearInterval(timerId);
    
    if(selectedTime === 'infinity') {
      setCurrentTime('infinity');
      onGameStart();
      return;
    }

    const timeInSeconds = parseInt(selectedTime, 10);
    setCurrentTime(timeInSeconds);
    onGameStart();

    const newTimerId = setInterval(() => {
      setCurrentTime((prevTime) => {
        if(prevTime <= 1) {
          clearInterval(newTimerId);
          onGameOver();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    setTimerId(newTimerId);
  };
  
  
  return (
    <div className='countdown-watch'>
      <h1>Count Down Watch</h1>
      <div className = "countdown-watch-display">
        {currentTime !== null ? (
          <span className='TimerDisplay'>{formatTime(currentTime)}</span>
        ) : (
          <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
            <select
              className="countdown-watch-selections"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              <option value="60">1 minute</option>
              <option value="120">2 minutes</option>
              <option value="180">3 minutes</option>
              <option value="240">4 minutes</option>
              <option value="300">5 minutes</option>
              <option value="360">6 minutes</option>
              <option value="420">7 minutes</option>
              <option value="480">8 minutes</option>
              <option value="540">9 minutes</option>
              <option value="600">10 minutes</option>
              <option value="infinity">No Time Limit</option>
            </select>
            <button style={{width : '30%', height: '30px', borderRadius: '5px', border: 'none'}} onClick={startTimer}>Start</button>
          </div>
        )}
      </div>    
    </div>
  )
}