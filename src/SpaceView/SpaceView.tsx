import React from "react";
import "./SpaceView.scss";
import { SpaceInterface, SpaceType } from "../d";
import PropertyView from "./PropertyView/PropertyView";
import RailroadView from "./RailroadView/RailroadView";
import UtilityView from "./UtilityView/UtilityView";
import ChanceView from "./ChanceView/ChanceView";
import TaxView from "./TaxView/TaxView";
import CornerSpaceView from "./CornerSpaceView/CornerSpaceView";

export default function SpaceView(props: { space: SpaceInterface | null }) {
    if (props.space?.type === SpaceType.Property) {
        return (
           <PropertyView property={props.space.property!} />
        );
    } else if (props.space?.type === SpaceType.Railroad) {
        return (
            <RailroadView railroad={props.space.railroad!} />
            )
    } else if (props.space?.type === SpaceType.Utility) {
        return (
            <UtilityView utility={props.space.utility!} />
            )
    } else if (props.space?.type === SpaceType.Chance || props.space?.type === SpaceType.CommunityChest) {
        return (
            <ChanceView type={props.space.type} />
        )
    } else if (props.space?.type === SpaceType.Tax) {
        return (
            <TaxView tax={props.space.tax!} />
        )
    } else if (props.space?.type === SpaceType.CornerSpace) {
        return (
            <CornerSpaceView cornerSpace={props.space.cornerSpace!}/>
        )
    } else {
            return (
                <div className={"property-view"}>
                    No property selected
                </div>
            );
        }
}