import React from "react";
import "./Utility.scss";
import {GiTap} from "react-icons/all";
import {UtilityInterface} from "../../d";

export default function Utility(props: { utility: UtilityInterface }) {
    const utility = props.utility;
    const words = utility.name.split(" ");
    return (
        <div className={"utility"}>
            <div className={"utility-icon"}>
                <utility.icon />
            </div>
            <div className={"utility-name"}>
                {words.map((word, index) => {
                    return <p key={index}>{word}</p>
                })}
            </div>
        </div>
    );
}