import React from "react";
import "./CornerSpace.scss";
import {SpaceInterface} from "../../d";
import {IconType} from "react-icons";

interface CornerSpaceProps {
    corner: number,
    space: SpaceInterface,
    clickHandler: (space: SpaceInterface) => void,
    pawns?: IconType[]
}

export default function CornerSpace( { corner, space, clickHandler, pawns = []}: CornerSpaceProps ) {

    const handleClick = () => {
        clickHandler(space);
    }

    const cornerSpace = space.cornerSpace!;

    return (
        <div onClick={handleClick} className={"corner-space corner-space-" + corner}>
            <div className={"corner-space-main"}>
                <div className={"corner-space-icon"}>
                    <cornerSpace.icon />
                </div>
                <div className={"corner-space-name"}>
                    {cornerSpace.name}
                </div>
            </div>
            <div className={"pawn-container"}>
                <div className={"pawn-grid"}>
                </div>
            </div>
        </div>
    );
}