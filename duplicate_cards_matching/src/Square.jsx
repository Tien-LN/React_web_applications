export default function Square({matrix, index, onSquareClick, isSelected}) {
    return (
        <div className={`square ${isSelected ? 'selected' : ''}`} 
             onClick={onSquareClick}
            >
             <img className={matrix[index] ? '' : 'hide'} src={`./pictures/p${matrix[index]}.png`} alt=""></img>
        </div>
    )
}