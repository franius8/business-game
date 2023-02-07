import React from "react";
import "./SpaceContainer.scss";

export default function SpaceContainer(props: { children: React.ReactNode, x: "left" | "right", y: "vertical" | "horizontal" }) {
    return (
        <div className={"space-container space-container-" + props.y + " space-container-" + props.x + "-" + props.y}>
            {props.children}
        </div>
    );
}