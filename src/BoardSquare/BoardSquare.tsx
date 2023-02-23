import React from "react";
import "./BoardSquare.scss";

export default function BoardSquare() {
    return (
        <div className={"board-square"}>
            <div className={"community-chest-stripe"} >Community Chest</div>
            <h1>TEST</h1>
            <div className={"chance-stripe"} >Chance</div>
        </div>
    );
}