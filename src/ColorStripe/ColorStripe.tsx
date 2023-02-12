import React from "react";
import "./ColorStripe.scss";

export function ColorStripe(props: { color: string }) {
    return (
        <div className={"color-stripe color-stripe-" + props.color}>
        </div>
    );
}