import React from "react";
import "./Space.scss";
import { ColorStripe } from "../ColorStripe/ColorStripe";

export default function Space(props: { children: React.ReactNode }) {
    return (
        <div className={"space"}>
            <ColorStripe color={"red"}/>
            <p>{props.children}</p>
        </div>
    );
}