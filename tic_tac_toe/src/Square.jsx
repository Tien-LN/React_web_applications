import { useState } from "react";
import "./App.css";

export default function Square({value,onclickSquare, XisNext, winner, gameTied, isWinningSquare}){

    return(
        <button className = {`
                              square 
                              ${ (!winner && !gameTied) ? `${(XisNext) ? 'forX' : 'forO'}` : ''}
                              ${ isWinningSquare ? `winning${!XisNext ? 'X' : 'O'}` : ''}
                              ${ gameTied ? 'tieCase' : ''}
                              `
                            } 
                              onClick={onclickSquare}>
            {value}
        </button>
    );
}