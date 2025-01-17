import { useState } from "react";
import "./App.css";

export default function Square({value,onclickSquare, XisNext, gameEnded, isWinningSquare}){

    return(
        <button className = {`
                              square 
                              ${ (XisNext && !gameEnded) ? 'forX' : 'forO' }
                              ${ isWinningSquare ? `winning${!XisNext ? 'X' : 'O'}` : ''}
                              `
                            } 
                              onClick={onclickSquare}>
            {value}
        </button>
    );
}