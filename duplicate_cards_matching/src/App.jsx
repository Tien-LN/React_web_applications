    import { useState } from 'react'
    import './App.css'
    import Square from './Square'
    import {CountDownWatch} from './Count_down_watch'
    import StopWatch from './Stop_Watch'
    import WinningBoard from './WinningBoard'
    import LosingBoard from './LosingBoard'
    
    function App() {
      const [imgIndex, setImgIndex] = useState([]);
      const [selectedIndex, setSelectedIndex] = useState(null);
      const [squaresLeft, setSquaresLeft] = useState(10);
      const [isGameOver, setIsGameOver] = useState(false);
      const [runningWatch, setRunningWatch] = useState(0); // 0 : both enable, 1 : only stopwatch, 2 : only cdwatch, 3 : both disabled
      const [isWinning, setIsWinning] = useState(null);
      
      const handleGameStart = (val) => {
        setSquaresLeft(10);
        setRunningWatch(val);
        const newImgIndex = Array.from({length:10}, (_,i) => (Math.floor(i/2) + 1));
        for(let i = newImgIndex.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newImgIndex[i], newImgIndex[j]] = [newImgIndex[j], newImgIndex[i]];
        }
        setImgIndex(newImgIndex);
      };

      function handleSquareClick(index) {
        if(selectedIndex === index) {
          setSelectedIndex(null);
          return;
        }
        if(selectedIndex === null) {
          setSelectedIndex(index);
        } else {
          if(imgIndex[selectedIndex] === imgIndex[index]) {
            const newImgIndex = [...imgIndex];
            newImgIndex[selectedIndex] = null;
            newImgIndex[index] = null;
            setImgIndex(newImgIndex);
            const newSquaresLeft = squaresLeft - 2;
            setSquaresLeft(newSquaresLeft);
            if(newSquaresLeft === 0) {
              handleGameOver(true);
            }
          } 
          setSelectedIndex(null);
        }
      }

      const handleGameOver = (val) => {
        setIsWinning(val);
        setIsGameOver(true);
        setRunningWatch(3);
      }

      return (
        <div className='App'>
          <div className='Board'>
            {isGameOver ? (
              isWinning ? <WinningBoard /> : <LosingBoard />
            ) : (
              imgIndex.map((value, i) => (
                <Square
                  key={i}
                  matrix={imgIndex}
                  index={i}
                  onSquareClick={() => handleSquareClick(i)}
                  isSelected={(i === selectedIndex)}
                />
              ))
            )}
          </div>
          <div className='game-mode'>
            <h1 style={{textAlign: 'center', color: '#4635B1'}}>GAME MODE</h1>
            <CountDownWatch GameOver={isGameOver} onGameOver={handleGameOver} onGameStart={handleGameStart} runningWatch={runningWatch != 2 && runningWatch != 0} />
            <StopWatch GameOver={isGameOver} onGameStart={handleGameStart} runningWatch={runningWatch != 1 && runningWatch != 0} />
          </div>
        </div>
      )
    }

    export default App
