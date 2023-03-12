import React, {ReactNode, useEffect, useState} from "react";
import "./Space.scss";
import {PlayerInterface, SpaceInterface, SpaceType} from "../../d";
import {Property} from "./Property/Property";
import {Chance} from "./Chance/Chance";
import Railroad from "./Railroad/Railroad";
import Utility from "./Utility/Utility";
import Tax from "./Tax/Tax";
import {CommunityChest} from "./CommunityChest/CommunityChest";
import {IconType} from "react-icons";
import Pawn from "../Pawn/Pawn";
import GenerateIcon from "../../GenerateIcon/GenerateIcon";

interface SpaceProps {
    space: SpaceInterface,
    updateSelectedProperty: (space: SpaceInterface) => void
    players: PlayerInterface[],
    turnCount: number
}

export default function Space( { space, updateSelectedProperty, players, turnCount }: SpaceProps ) {

    const [positions, setPositions] = useState<number[]>([]);

    const handleClick = () => {
        updateSelectedProperty(space);
    }

    useEffect(() => {
        const newPositions: number[] = [];
        players.forEach((player) => {
            newPositions.push(player.position)
        })
        setPositions(newPositions);
    }, [turnCount])

    let spaceElement: ReactNode;

    switch (space.type) {
        case SpaceType.Property:
            spaceElement = <Property property={space.property!} />;
            break;
        case SpaceType.Chance:
            spaceElement = <Chance />;
            break;
        case SpaceType.Railroad:
            spaceElement = <Railroad railroad={space.railroad!} />
            break;
        case SpaceType.Utility:
            spaceElement = <Utility utility={space.utility!} />
            break;
        case SpaceType.Tax:
            spaceElement = <Tax tax={space.tax!}/>
            break;
        case SpaceType.CommunityChest:
            spaceElement = <CommunityChest />
            break;
        default:
            spaceElement = <div />;
    }

    let border = "";
    if (space.property?.owner || space.railroad?.owner || space.utility?.owner) {
        const owner = space.property?.owner || space.railroad?.owner || space.utility?.owner;
        border = `2px solid ${owner!.color}`;
    }

    return (
        <div onClick={handleClick} className={"space-outer-container"} style={{border: border}}>
            <div className={"space"} >
                {spaceElement}
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