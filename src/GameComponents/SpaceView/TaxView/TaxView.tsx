import React from "react";
import {TaxInterface} from "../../../d";
import {TbReceiptTax} from "react-icons/all";

export default function TaxView(props: { tax: TaxInterface }) {
    return (
        <div className={"property-view"}>
            <div className={"tax-icon"}>
                <TbReceiptTax />
            </div>
            <div className={"header"}>
                <hr className={"long-hr"}/>
                <div className={"name"}>
                    <p>{props.tax.name}</p>
                </div>
                <hr className={"long-hr"}/>
            </div>
            <div className={"tax-desciption"}>
                Pay ${props.tax.amount}
            </div>
        </div>
    )

}