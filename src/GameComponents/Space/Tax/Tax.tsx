import React from "react";
import "./Tax.scss";
import {TbReceiptTax} from "react-icons/all";
import {TaxInterface} from "../../../d";

export default function Tax(props: { tax: TaxInterface }) {
    const words = props.tax.name.split(" ");
    return (
        <div className={"tax"}>
            <div className={"tax-icon"}>
                <TbReceiptTax />
            </div>
            <div className={"tax-name"}>
                {words.map((word, index) => {
                    return <p key={index}>{word}</p>
                })
                }
            </div>
        </div>
    );
}