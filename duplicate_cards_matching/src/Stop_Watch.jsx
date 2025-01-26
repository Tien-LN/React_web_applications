
import { useState, useEffect } from "react"

export default function StopWatch({GameOver , onGameStart}) {

  const [currentTime, setCurrentTime] = useState(0);
  const [timerId, setTimerId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const formatTime = (second) => {
    const minutes = Math.floor(second / 60);
    const seconds = second % 60;
    return `${minutes}:${seconds.toString().padStart(2,'0')}`;
  }  

  useEffect(() => {
    if(GameOver) {
      handlePause();
    }
  }, [GameOver])
  
  const handleplay = () => {
    setIsPlaying(true);
    onGameStart();
    const newTimerId = setInterval(() => {
      setCurrentTime(prevTime => prevTime + 1);
    }, 1000);

    setTimerId(newTimerId);
  }

  const handlePause = () => {
    setIsPlaying(false);
    clearInterval(timerId);
  }

  const handleReset = () => {
    if(timerId) {
      onGameStart();
      clearInterval(timerId);
      setCurrentTime(0);
      handleplay();
    }
  }

  const check = () => {console.log(currentTime);}
    return (
        <div className='stop-watch'>
          <h1>Stop Watch ⏱️</h1>
          <span className="TimerDisplay" style={{width: '80%'}}>{formatTime(currentTime)}</span>
          <div className="buttons">
            <button className="btn" onClick={ isPlaying ? handlePause : handleplay}>{ isPlaying ? "⏸️" : "▶️" }</button>
            <button className="btn" onClick={handleReset}>🔄️</button>
          </div>
        </div>
    )
}

