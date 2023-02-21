import React from "react";
import {ColorStripe} from "../../ColorStripe/ColorStripe";
import {PropertyInterface} from "../../d";

export const Property = (props: { property: PropertyInterface }) => {
    return (
        <div className={"space"}>
            <ColorStripe color={"red"}/>
        </div>
    );
}