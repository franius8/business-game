import React from "react";
import "./Railroad.scss";
import {WiTrain} from "react-icons/all";
import {RailroadInterface} from "../../d";

export default function Railroad(props: { railroad: RailroadInterface }) {
    let index = props.railroad.name.indexOf("Railroad");
    if (index === -1) {
        index = props.railroad.name.indexOf("Line");
    }
    const words = [props.railroad.name.substring(0, index), props.railroad.name.substring(index)];
    words[0] = words[0].length > 6 ? words[0].substring(0, 5) + "." : words[0];
    return (
        <div className={"railroad"}>
            <div className={"railroad-name"}>
                {words.map((word, index) => {
                    return <p key={index}>{word}</p>
                })}
            </div>
            <div className={"railroad-icon"}>
                <WiTrain />
            </div>
            <div className={"railroad-price"}>
                <p>${props.railroad.price}</p>
            </div>
        </div>
    );
}