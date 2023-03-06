import React from 'react'
import './GenerateIcon.scss';
import {
    FaCat,
    FaDog,
    FaTractor,
    GiImperialCrown,
    GiPopeCrown,
    GiSeaTurtle,
    GiShrimp,
    GiTopHat,
    SlPlane
} from "react-icons/all";

export default function GenerateIcon (props: {icon: string}) {
    let icon;

    switch (props.icon) {
        case "GiTopHat":
            icon = <GiTopHat />
            break;
        case "GiSeaTurtle":
            icon = <GiSeaTurtle />
            break;
        case "SlPlane":
                icon = <SlPlane />
                break;
        case "FaDog":
                icon = <FaDog />
                break;
        case "FaCat":
                icon = <FaCat />
                break;
        case "GiShrimp":
                icon = <GiShrimp />
                break;
        case "GiPopeCrown":
                icon = <GiPopeCrown />
                break;
        case "FaTractor":
                icon = <FaTractor />
                break;
        case "GiImperialCrown":
                icon = <GiImperialCrown />
                break;
        default:
            icon = <GiTopHat />
    }
    return icon;
}

