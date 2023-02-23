import React from "react";
import "./CornerSpace.scss";
import {SpaceInterface} from "../d";

export default function CornerSpace(props: { children: React.ReactNode, corner: number,
    space: SpaceInterface, clickHandler: (space: SpaceInterface) => void }) {

    const handleClick = () => {
        props.clickHandler(props.space);
    }

    return (
        <div onClick={handleClick} className={"corner-space corner-space-" + props.corner}>
            {props.children}
        </div>
    );
}