import React from "react";
import "./CornerSpace.scss";
import {SpaceInterface} from "../d";

export default function CornerSpace(props: { corner: number,
    space: SpaceInterface, clickHandler: (space: SpaceInterface) => void }) {

    const handleClick = () => {
        props.clickHandler(props.space);
    }

    const cornerSpace = props.space.cornerSpace!;

    return (
        <div onClick={handleClick} className={"corner-space corner-space-" + props.corner}>
            <div className={"corner-space-icon"}>
                <cornerSpace.icon />
            </div>
            <div className={"corner-space-name"}>
                {cornerSpace.name}
            </div>
        </div>
    );
}