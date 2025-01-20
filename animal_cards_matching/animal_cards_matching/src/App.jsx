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
    setIndexImg[imgArray];
    setSquares(Array(100).fill(null));
  }, []);

  return (
    <>
      {/* Add your JSX content here */}
    </>
  )
}

export default App
