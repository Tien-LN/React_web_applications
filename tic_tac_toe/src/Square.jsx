import { useState } from "react";

export default function Square({value,onclickSquare}){

    return(
        <button className = "square" onClick={onclickSquare}>{value}</button>
    );
}