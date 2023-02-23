import React from "react";
import "./PropertyView.scss";
import {SpaceInterface, SpaceType} from "../d";
import {BsFillHouseFill, FaQuestion, GiOpenTreasureChest, WiTrain} from "react-icons/all";

export default function PropertyView(props: { space: SpaceInterface | null }) {
    if (props.space?.type === SpaceType.Property) {
        return (
            <div className={"property-view"}>
                <div className={"color-stripe"} style={{backgroundColor: props.space.property!.color}}>
                    <p>{props.space.property!.name}</p>
                </div>
                <div>
                    <table className={"property-view-table"}>
                        <tbody>
                            <tr>
                                <td className={"left"}>Price</td>
                                <td className={"right"}>${props.space.property!.price}</td>
                            </tr>
                            <tr>
                                <td className={"left"}>Rent</td>
                                <td className={"right"}>${props.space.property!.rentnohouse}</td>
                            </tr>
                            <tr>
                                <td className={"left"}>Rent with color set</td>
                                <td className={"right"}>${props.space.property!.rentnohouse * 2}</td>
                            </tr>
                            <tr>
                                <td className={"left"}>Rent with 1x<BsFillHouseFill/></td>
                                <td className={"right"}>${props.space.property!.rent1house}</td>
                            </tr>
                            <tr>
                                <td className={"left"}>Rent with 2x<BsFillHouseFill/></td>
                                <td className={"right"}>${props.space.property!.rent2house}</td>
                            </tr>
                            <tr>
                                <td className={"left"}>Rent with 3x<BsFillHouseFill/></td>
                                <td className={"right"}>${props.space.property!.rent3house}</td>
                            </tr>
                            <tr>
                                <td className={"left"}>Rent with 4x<BsFillHouseFill/></td>
                                <td className={"right"}>${props.space.property!.rent4house}</td>
                            </tr>
                            <tr>
                                <td className={"left"}>Rent with hotel</td>
                                <td className={"right"}>${props.space.property!.renthotel}</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <hr className={"long-hr"}/>
                                </td>
                            </tr>
                            <tr>
                                <td className={"left"}>House cost</td>
                                <td className={"right"}>${props.space.property!.housecost}</td>
                            </tr>
                            <tr>
                                <td className={"left"}>Hotel cost</td>
                                <td className={"right"}>${props.space.property!.hotelcost}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    } else if (props.space?.type === SpaceType.Railroad) {
        return (
                <div className={"property-view"}>
                    <div className={"railroad-icon"}>
                        <WiTrain/>
                    </div>
                    <div className={"header"}>
                        <hr className={"long-hr"}/>
                        <div className={"name"}>
                            <p>{props.space.railroad!.name}</p>
                        </div>
                        <hr className={"long-hr"}/>
                    </div>
                    <table className={"property-view-table"}>
                        <tbody>
                            <tr>
                                <td className={"left"}>Rent</td>
                                <td className={"right"}>${props.space.railroad!.rent}</td>
                            </tr>
                            <tr>
                                <td className={"left"}>Rent with 2 railroads</td>
                                <td className={"right"}>${props.space.railroad!.rent * 2}</td>
                            </tr>
                            <tr>
                                <td className={"left"}>Rent with 3 railroads</td>
                                <td className={"right"}>${props.space.railroad!.rent * 4}</td>
                            </tr>
                            <tr>
                                <td className={"left"}>Rent with 4 railroads</td>
                                <td className={"right"}>${props.space.railroad!.rent * 8}</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <hr className={"long-hr"}/>
                                </td>
                            </tr>
                            <tr>
                                <td className={"left"}>Mortgage value</td>
                                <td className={"right"}>${props.space.railroad!.mortgage}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
    } else if (props.space?.type === SpaceType.Utility) {
        const utility = props.space.utility!;
        return (
            <div className={"property-view"}>
                <div className={"railroad-icon"}>
                    <utility.icon />
                </div>
                <div className={"header"}>
                    <hr className={"long-hr"}/>
                    <div className={"name"}>
                        <p>{props.space.utility!.name}</p>
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
                            <td className={"right"}>${props.space.utility!.mortgage}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            )
    } else if (props.space?.type === SpaceType.Chance || props.space?.type === SpaceType.CommunityChest) {
        return (
            <div className={"property-view chance-view"}>
                <div className={"chance-icon"}>
                    {props.space?.type === SpaceType.Chance ? <FaQuestion /> : <GiOpenTreasureChest />}
                </div>
                <div className={"header"}>
                    <hr className={"long-hr"}/>
                        <div className={"name"}>
                            <p>{props.space?.type === SpaceType.Chance ? "Chance" : "Community chest"}</p>
                        </div>
                    <hr className={"long-hr"}/>
                </div>
                <div className={"chance-icon reversed"}>
                    <FaQuestion />
                </div>
            </div>
        )
    } else {
            return (
                <div className={"property-view"}>
                    No property selected
                </div>
            );
        }
}