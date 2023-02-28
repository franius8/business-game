import React from "react";
import "./CommunityChest.scss";
import {GiOpenTreasureChest} from "react-icons/all";

export const CommunityChest = () => {
    return (
        <div className={"community-chest"}>
            <div className={"community-chest-icon"}>
                <GiOpenTreasureChest />
            </div>
        </div>
    );
}
