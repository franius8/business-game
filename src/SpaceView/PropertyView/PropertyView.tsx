import React from "react";
import {PropertyInterface} from "../../d";
import {BsFillHouseFill} from "react-icons/all";

export default function PropertyView(props: { property: PropertyInterface}) {
    return (
        <div className={"property-view"}>
            <div className={"color-stripe"} style={{backgroundColor: props.property.color}}>
                <p>{props.property.name}</p>
            </div>
            <div>
                <table className={"property-view-table"}>
                    <tbody>
                    <tr>
                        <td className={"left"}>Price</td>
                        <td className={"right"}>${props.property.price}</td>
                    </tr>
                    <tr>
                        <td className={"left"}>Rent</td>
                        <td className={"right"}>${props.property.rentnohouse}</td>
                    </tr>
                    <tr>
                        <td className={"left"}>Rent with color set</td>
                        <td className={"right"}>${props.property.rentnohouse * 2}</td>
                    </tr>
                    <tr>
                        <td className={"left"}>Rent with 1x<BsFillHouseFill/></td>
                        <td className={"right"}>${props.property!.rent1house}</td>
                    </tr>
                    <tr>
                        <td className={"left"}>Rent with 2x<BsFillHouseFill/></td>
                        <td className={"right"}>${props.property!.rent2house}</td>
                    </tr>
                    <tr>
                        <td className={"left"}>Rent with 3x<BsFillHouseFill/></td>
                        <td className={"right"}>${props.property!.rent3house}</td>
                    </tr>
                    <tr>
                        <td className={"left"}>Rent with 4x<BsFillHouseFill/></td>
                        <td className={"right"}>${props.property!.rent4house}</td>
                    </tr>
                    <tr>
                        <td className={"left"}>Rent with hotel</td>
                        <td className={"right"}>${props.property!.renthotel}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <hr className={"long-hr"}/>
                        </td>
                    </tr>
                    <tr>
                        <td className={"left"}>House cost</td>
                        <td className={"right"}>${props.property!.housecost}</td>
                    </tr>
                    <tr>
                        <td className={"left"}>Hotel cost</td>
                        <td className={"right"}>${props.property!.hotelcost}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}