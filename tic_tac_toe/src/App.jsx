import { useState } from 'react'
import './App.css'
import Board from './Board'

function App() {

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const XisNext = currentMove % 2 === 0;
  const currentSquare = history[currentMove];

  function handlePlay(nextSquare) {
    const nextHistory = [...history.slice(0,currentMove+1),nextSquare];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    const resetedHistory = history.slice(0,nextMove+1);
    setHistory(resetedHistory);
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if(move > 0) {
      description = "Move to #" + move;
    } else {
      description = "Restart the game";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  })
  return (
    <>
      <div className='game'>
        <div>
          <Board squares={currentSquare} XisNext={XisNext} onPlay={handlePlay} count={history.length - 1}/>
        </div>
        <div className='game-info'>
            <ol>
              {moves}
            </ol>
        </div>
      </div>
    </>
  )
}

export default App
