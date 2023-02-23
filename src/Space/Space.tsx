import React, {ReactNode} from "react";
import "./Space.scss";
import {SpaceInterface, SpaceType} from "../d";
import {Property} from "./Property/Property";
import {Chance} from "./Chance/Chance";
import Railroad from "./Railroad/Railroad";
import Utility from "./Utility/Utility";
import Tax from "./Tax/Tax";
import {CommunityChest} from "./CommunityChest/CommunityChest";

export default function Space(props: { children: React.ReactNode, space: SpaceInterface,
    updateSelectedProperty: (space: SpaceInterface) => void }) {

    const handleClick = () => {
        props.updateSelectedProperty(props.space);
    }

    let spaceElement: ReactNode;

    switch (props.space.type) {
        case SpaceType.Property:
            spaceElement = <Property property={props.space.property!}>
                <p>{props.children}</p>
            </Property>;
            break;
        case SpaceType.Chance:
            spaceElement = <Chance />;
            break;
        case SpaceType.Railroad:
            spaceElement = <Railroad />
            break;
        case SpaceType.Utility:
            spaceElement = <Utility />
            break;
        case SpaceType.Tax:
            spaceElement = <Tax />
            break;
        case SpaceType.CommunityChest:
            spaceElement = <CommunityChest />
            break;
        default:
            spaceElement = <div />;
    }

    return (
        <div onClick={handleClick}>
            <div className={"space"}>
                {spaceElement}
            </div>
        </div>
    );
}