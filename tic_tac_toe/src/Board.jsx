
import { useState } from "react";
import Square from "./Square";

export default function Board({squares, XisNext, onPlay, count}) {

    const {winner, winningSquares} = calculateWinner(squares);
    let status;
    let tie = false;
    
    if(count === 9 && !winner) {
        tie = true;
        status = "IT'S A TIE 🙌";
    } else if(winner) {
        status = "WINNER: " + (XisNext ? "❌" : "⭕");
    } else {
        status = "NEXT PLAYER: " + (XisNext ? "❌" : "⭕");
    }

    function handleSquareClick(i) {
        const nextSquares = squares.slice();
        if(winner || nextSquares[i]) return;
        nextSquares[i] = (XisNext ? "X" : "O");
        onPlay(nextSquares);
    }

    function calculateWinner(squares) {
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
    
        for(let i=0; i < lines.length ; i++)
        {
            const [a, b, c] = lines[i];
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
                return {winner : squares[a], winningSquares : lines[i]};
        }
        return {winner : null, winningSquares : []};
    }

    return(
        <div className="board">
            <h2 className="status">{status}</h2>
            <div className="board-row">
                <Square value={squares[0]} onclickSquare={() => handleSquareClick(0)} XisNext={XisNext} winner={winner} gameTied={tie} isWinningSquare={winningSquares.includes(0)} />
                <Square value={squares[1]} onclickSquare={() => handleSquareClick(1)} XisNext={XisNext} winner={winner} gameTied={tie} isWinningSquare={winningSquares.includes(1)} />
                <Square value={squares[2]} onclickSquare={() => handleSquareClick(2)} XisNext={XisNext} winner={winner} gameTied={tie} isWinningSquare={winningSquares.includes(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onclickSquare={() => handleSquareClick(3)} XisNext={XisNext} winner={winner} gameTied={tie} isWinningSquare={winningSquares.includes(3)} />
                <Square value={squares[4]} onclickSquare={() => handleSquareClick(4)} XisNext={XisNext} winner={winner} gameTied={tie} isWinningSquare={winningSquares.includes(4)} />
                <Square value={squares[5]} onclickSquare={() => handleSquareClick(5)} XisNext={XisNext} winner={winner} gameTied={tie} isWinningSquare={winningSquares.includes(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onclickSquare={() => handleSquareClick(6)} XisNext={XisNext} winner={winner} gameTied={tie} isWinningSquare={winningSquares.includes(6)} />
                <Square value={squares[7]} onclickSquare={() => handleSquareClick(7)} XisNext={XisNext} winner={winner} gameTied={tie} isWinningSquare={winningSquares.includes(7)} />
                <Square value={squares[8]} onclickSquare={() => handleSquareClick(8)} XisNext={XisNext} winner={winner} gameTied={tie} isWinningSquare={winningSquares.includes(8)} />
            </div>
        </div>
    );

}