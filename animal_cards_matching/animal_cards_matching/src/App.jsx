import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [indexImg, setIndexImg] = useState([]);
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [squares, setSquares] = useState([]);
  
  useEffect(() => {
    const imgArray = Array.from({length: 100}, (_, index) => Math.floor(index/2));
    for( let i = imgArray.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    setIndexImg(imgArray);
    setSquares(Array(100).fill(null));
  }, []);

  function handleSquareClick(index){
    if(squares[index]) return; // if the square is already selected, do nothing

    if(selectedSquare === null){ 
      setSelectedSquare(index);
    } else {
      if(selectedSquare === index) {
        setSelectedSquare(null);
      } else {
        if(indexImg[selectedSquare] === indexImg[index]) {
          const newSquares = [...squares];
          newSquares[index] = indexImg[index];
          newSquares[selectedSquare] = indexImg[selectedSquare];
          setSquares(newSquares);
        }
        setSelectedSquare(null);
      }
    }
  }

  return (
    <>
      <div className='board'>
        {
          squares.map((_,index) => (
            <div key = {index} className='square' onClick = {() => handleSquareClick(index)}>
              {squares[index] && <img src={`/pictures/p${squares[index]}.png`} alt={`Animal ${squares[index]}`} />}
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
