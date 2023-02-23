import React from "react";
import "./ColorStripe.scss";

export function ColorStripe(props: { color: string }) {
    return (
        <div className={"color-stripe"} style={{backgroundColor: props.color}}>
        </div>
    );
}