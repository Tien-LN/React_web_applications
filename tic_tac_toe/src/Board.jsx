
import { useState } from "react";
import Square from "./Square";

export default function Board({squares, XisNext, onPlay}) {

    const winner = calculateWinner(squares);
    let status;
    if(winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (XisNext ? "X" : "O");
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
            [3,4,6]
        ]
    
        for(let i=0; i < lines.length ; i++)
        {
            const [a, b, c] = lines[i];
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
                return squares[a];
        }
        return null;
    }

    return(
        <div className="board">
            <h2 className="status">{status}</h2>
            <div className="board-row">
                <Square value={squares[0]} onclickSquare={(e) => handleSquareClick(0,e)}/>
                <Square value={squares[1]} onclickSquare={(e) => handleSquareClick(1,e)}/>
                <Square value={squares[2]} onclickSquare={(e) => handleSquareClick(2,e)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onclickSquare={(e) => handleSquareClick(3,e)}/>
                <Square value={squares[4]} onclickSquare={(e) => handleSquareClick(4,e)}/>
                <Square value={squares[5]} onclickSquare={(e) => handleSquareClick(5,e)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onclickSquare={(e) => handleSquareClick(6,e)}/>
                <Square value={squares[7]} onclickSquare={(e) => handleSquareClick(7,e)}/>
                <Square value={squares[8]} onclickSquare={(e) => handleSquareClick(8,e)}/>
            </div>
        </div>
    );

}