    import { useState } from 'react'
    import './App.css'
    import Square from './Square'
    import {CountDownWatch} from './Count_down_watch'
    import StopWatch from './Stop_Watch'
    
    function App() {
      const [imgIndex, setImgIndex] = useState([]);
      const [selectedIndex, setSelectedIndex] = useState(null);
      const [squaresLeft, setSquaresLeft] = useState(10);
      const [isGameOver, setIsGameOver] = useState(false);

      
      const handleGameStart = () => {
        setSquaresLeft(10);
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
              handleGameOver();
            }
          } 
          setSelectedIndex(null);
        }
      }

      const handleGameOver = () => {
        setIsGameOver(true);
      }

      return (
        <div className='App'>
          <div className='Board'>
            {isGameOver ? (
              <h1 className='game-over'>Game Over</h1>
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
            <CountDownWatch GameOver={isGameOver} onGameOver={handleGameOver} onGameStart={handleGameStart} />
            <StopWatch GameOver={isGameOver} onGameStart={handleGameStart}/>
          </div>
        </div>
      )
    }

    export default App
