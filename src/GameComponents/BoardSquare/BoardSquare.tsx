import React from "react";
import "./BoardSquare.scss";
import {FaQuestion, GiOpenTreasureChest} from "react-icons/all";

export default function BoardSquare() {
    return (
        <div className={"board-square"}>
            <div className={"community-chest-stripe board-square-stripe"} ><GiOpenTreasureChest /></div>
            <h1>TEST</h1>
            <div className={"chance-stripe board-square-stripe"} ><FaQuestion/></div>
        </div>
    );
}