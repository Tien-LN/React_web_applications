export default function Square({matrix, index, onSquareClick, isSelected}) {
    return (
        <div className={`square ${isSelected ? 'selected' : ''}`} 
             onClick={onSquareClick}
            >
             <img className={matrix[index] ? 'show' : 'hide'} src={`./pictures/p${matrix[index]}.png`}></img>
        </div>
    )
}