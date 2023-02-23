import React from "react";
import {SpaceType} from "../../d";
import {FaQuestion, GiOpenTreasureChest} from "react-icons/all";

export default function ChanceView(props: { type: SpaceType }) {
    return (
        <div className={"property-view chance-view"}>
            <div className={"chance-icon"}>
                {props.type === SpaceType.Chance ? <FaQuestion /> : <GiOpenTreasureChest />}
            </div>
            <div className={"header"}>
                <hr className={"long-hr"}/>
                <div className={"name"}>
                    <p>{props.type === SpaceType.Chance ? "Chance" : "Community chest"}</p>
                </div>
                <hr className={"long-hr"}/>
            </div>
            <div className={"chance-icon reversed"}>
                {props.type === SpaceType.Chance ? <FaQuestion /> : <GiOpenTreasureChest />}
            </div>
        </div>
    )
}