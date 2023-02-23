import React from "react";
import { UtilityInterface } from "../../d";

export default function UtilityView(props: { utility: UtilityInterface }) {
    const utility = props.utility;
    return (
        <div className={"property-view"}>
            <div className={"railroad-icon"}>
                <utility.icon />
            </div>
            <div className={"header"}>
                <hr className={"long-hr"}/>
                <div className={"name"}>
                    <p>{props.utility.name}</p>
                </div>
                <hr className={"long-hr"}/>
            </div>
            <div className={"utilitydescription"}>
                <p>
                    If one Utility is owned, rent is 4 times amount shown on dice.
                </p>
                <p>
                    If both Utilities are owned, rent is 10 times amount shown on dice.
                </p>
                <table className={"property-view-table"}>
                    <tbody>
                    <tr>
                        <td className={"left"}>Mortgage value</td>
                        <td className={"right"}>${props.utility.mortgage}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}