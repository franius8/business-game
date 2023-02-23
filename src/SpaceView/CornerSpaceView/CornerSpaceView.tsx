import React from "react";
import {TbArrowLeftTail} from "react-icons/all";
import {CornertSpaceInterface} from "../../d";

export default function CornerSpaceView( props: { cornerSpace: CornertSpaceInterface}) {
    return (
        <div className={"property-view"}>
            <div className={"corner-space-icon"}>
                <props.cornerSpace.icon />
            </div>
            <div className={"header"}>
                <hr className={"long-hr"}/>
                <div className={"name"}>
                    <p>{props.cornerSpace.name}</p>
                </div>
                <hr className={"long-hr"}/>
            </div>
            <div className={"go-description"}>
                <p>{props.cornerSpace.description}</p>
            </div>
        </div>
    )
}