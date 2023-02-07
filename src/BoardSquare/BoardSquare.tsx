import React from "react";
import "./BoardSquare.scss";

export default function BoardSquare(props: { children: React.ReactNode }) {
    return (
        <div className={"board-square"}>
            {props.children}
        </div>
    );
}