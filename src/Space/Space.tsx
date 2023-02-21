import React, {ReactNode} from "react";
import "./Space.scss";
import {ColorStripe} from "../ColorStripe/ColorStripe";
import {SpaceInterface, SpaceType} from "../d";
import {Property} from "./Property/Property";
import {Chance} from "./Chance/Chance";

export default function Space(props: { children: React.ReactNode, space: SpaceInterface,
    updateSelectedProperty: (space: SpaceInterface) => void }) {

    const handleClick = () => {
        props.updateSelectedProperty(props.space);
    }

    let spaceElement: ReactNode;

    switch (props.space.type) {
        case SpaceType.Property:
            spaceElement = <Property property={props.space.property!}/>;
            break;
        case SpaceType.Chance:
            spaceElement = <Chance/>;
            break;
        default:
            spaceElement = <div/>;
    }

    return (
        <div onClick={handleClick}>
            <div className={"space"} >
                <ColorStripe color={"red"}/>
                <p>{props.children}</p>
            </div>
        </div>
    );
}