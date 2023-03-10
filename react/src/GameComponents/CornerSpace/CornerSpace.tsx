import React, {useEffect, useState} from "react";
import "./CornerSpace.scss";
import {PlayerInterface, SpaceInterface} from "../../d";
import GenerateIcon from "../../GenerateIcon/GenerateIcon";

interface CornerSpaceProps {
    corner: number,
    space: SpaceInterface,
    clickHandler: (space: SpaceInterface) => void,
    players: PlayerInterface[],
    turnCount: number
}

export default function CornerSpace( { corner, space, clickHandler, players, turnCount}: CornerSpaceProps ) {

    const [positions, setPositions] = useState<number[]>([]);

    const handleClick = () => {
        clickHandler(space);
    }

    useEffect(() => {
        const newPositions: number[] = [];
        players.forEach((player) => {
            newPositions.push(player.position)
        })
        setPositions(newPositions);
    }, [turnCount])

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
                    {positions.map((position, index) => (
                        position == space.id ?
                        <div style={{color: players[index].color}} key={index}>
                            <GenerateIcon icon={players[index].pawn} />
                        </div>
                            : null
                    ))}
                </div>
            </div>
        </div>
    );
}