import React from "react";
import "./BoardSquare.scss";

export default function BoardSquare() {
    return (
        <div className={"board-square"}>
            <div className={"community-chest"} >Community Chest</div>
            <h1>Business</h1>
            <div className={"chance"} >Chance</div>
        </div>
    );
}