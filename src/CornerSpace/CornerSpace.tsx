import React from "react";
import "./CornerSpace.scss";

export default function CornerSpace(props: { children: React.ReactNode, corner: number }) {
    return (
        <div className={"corner-space corner-space-" + props.corner}>
            {props.children}
        </div>
    );
}