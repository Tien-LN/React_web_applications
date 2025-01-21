  import { useState, useEffect } from 'react'
  import './App.css'
  import Square from './Square'

  function App() {
    const [imgIndex, setImgIndex] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);
    
    useEffect(() => {
      const newImgIndex = Array.from({length:100}, (_,i) => (Math.floor(i/2) + 1));
      for(let i = newImgIndex.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newImgIndex[i], newImgIndex[j]] = [newImgIndex[j], newImgIndex[i]];
      }
      setImgIndex(newImgIndex);
    }, []);

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
        } 
        setSelectedIndex(null);
      }
    }

    return (
      <div className='Board'>
        {imgIndex.map((value, i) => (
          <Square 
            key={i} 
            matrix={imgIndex} 
            index={i} 
            onSquareClick={() => handleSquareClick(i)}
            isSelected={(i === selectedIndex)}
          />
        ))}
      </div>
    )
  }

  export default App
