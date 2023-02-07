import React from "react";
import "./Board.scss";

export default function Board(props: { children: React.ReactNode }) {
    return (
        <div className={"board"}>
            {props.children}
        </div>
    );
}