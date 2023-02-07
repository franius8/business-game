import React from "react";
import "./Space.scss";

export default function Space(props: { children: React.ReactNode }) {
    return (
        <div className={"space"}>
            <p>{props.children}</p>
        </div>
    );
}