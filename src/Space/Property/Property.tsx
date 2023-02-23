import React from "react";
import {ColorStripe} from "../../ColorStripe/ColorStripe";
import {PropertyInterface} from "../../d";

export const Property = (props: { property: PropertyInterface, children: React.ReactNode }) => {
    return (
        <>
            <ColorStripe color={props.property.color}/>
            {props.children}
        </>
    );
}