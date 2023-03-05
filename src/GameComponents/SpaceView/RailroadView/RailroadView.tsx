import React from "react";
import {RailroadInterface} from "../../../d";
import {WiTrain} from "react-icons/all";

export default function RailroadView(props: { railroad: RailroadInterface}) {
    return (
        <div className={"property-view"}>
            <div className={"railroad-icon"}>
                <WiTrain/>
            </div>
            <div className={"header"}>
                <hr className={"long-hr"}/>
                <div className={"name"}>
                    <p>{props.railroad.name}</p>
                </div>
                <hr className={"long-hr"}/>
            </div>
            <table className={"property-view-table"}>
                <tbody>
                <tr>
                    <td className={"left"}>Rent</td>
                    <td className={"right"}>${props.railroad.rent}</td>
                </tr>
                <tr>
                    <td className={"left"}>Rent with 2 railroads</td>
                    <td className={"right"}>${props.railroad.rent * 2}</td>
                </tr>
                <tr>
                    <td className={"left"}>Rent with 3 railroads</td>
                    <td className={"right"}>${props.railroad.rent * 4}</td>
                </tr>
                <tr>
                    <td className={"left"}>Rent with 4 railroads</td>
                    <td className={"right"}>${props.railroad.rent * 8}</td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <hr className={"long-hr"}/>
                    </td>
                </tr>
                <tr>
                    <td className={"left"}>Mortgage value</td>
                    <td className={"right"}>${props.railroad.mortgage}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )

}