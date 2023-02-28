import React from "react";
import {ColorStripe} from "../../ColorStripe/ColorStripe";
import {PropertyInterface} from "../../d";
import "./Property.scss";

export const Property = (props: { property: PropertyInterface }) => {
    const words = props.property.name.split(" ");
    words[0] = words[0].length > 10 ? words[0].substring(0, 9) + "." : words[0];
    return (
        <>
            <ColorStripe color={props.property.color}/>
            <div className={"property-name"}>
                {words.map((word, index) => {
                    return <p key={index}>{word}</p>
                })}
            </div>
            <div className={"property-price"}>
                <p>${props.property.price}</p>
            </div>
        </>
    );
}