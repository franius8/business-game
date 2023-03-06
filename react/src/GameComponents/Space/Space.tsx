import React, {ReactNode} from "react";
import "./Space.scss";
import {SpaceInterface, SpaceType} from "../../d";
import {Property} from "./Property/Property";
import {Chance} from "./Chance/Chance";
import Railroad from "./Railroad/Railroad";
import Utility from "./Utility/Utility";
import Tax from "./Tax/Tax";
import {CommunityChest} from "./CommunityChest/CommunityChest";
import {IconType} from "react-icons";
import Pawn from "../Pawn/Pawn";

interface SpaceProps {
    space: SpaceInterface,
    updateSelectedProperty: (space: SpaceInterface) => void
    pawns?: IconType[],
    owner?: number
}

export default function Space( { space, updateSelectedProperty, pawns = [] }: SpaceProps ) {

    const handleClick = () => {
        updateSelectedProperty(space);
    }

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

    return (
        <div onClick={handleClick} className={"space-outer-container"}>
            <div className={"space"}>
                {spaceElement}
            </div>
            <div className={"pawn-container"}>
                <div className={"pawn-grid"}>
                    {pawns.map((pawn, index) => {
                        return <Pawn pawn={pawn} key={index} />
                    })
                    }
                </div>
            </div>
        </div>
    );
}