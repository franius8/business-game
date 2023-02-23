import React from "react";
import {SpaceInterface, SpaceType} from "../d";
import {
    redProperties,
    greenProperties,
    darkBlueProperties,
    yellowProperties,
    lightBlueProperties,
    brownProperties,
    orangeProperties,
    pinkProperties
} from "../Properties/properties";
import {GiTap, ImPower} from "react-icons/all";

export const topSpaces: SpaceInterface[] = [
    {
        type: SpaceType.Property,
        property: yellowProperties[2],
    },
    {
        type: SpaceType.Utility,
        utility: {
            name: "Water Works",
            price: 150,
            mortgage: 75,
            icon: GiTap,
        }
    },
    {
        type: SpaceType.Property,
        property: yellowProperties[1],
    },
    {
        type: SpaceType.Property,
        property: yellowProperties[2],
    },
    {
        type: SpaceType.Railroad,
        railroad: {
            name: "B & O. Railroad",
            price: 200,
            mortgage: 100,
            rent: 25,
        }
    },
    {
        type: SpaceType.Property,
        property: redProperties[2],
    },
    {
        type: SpaceType.Property,
        property: redProperties[1],
    },
    {
        type: SpaceType.Chance,
    },
    {
        type: SpaceType.Property,
        property: redProperties[0],
    },
];

export const rightSpaces: SpaceInterface[] = [
    {
        type: SpaceType.Property,
        property: greenProperties[0],
    },
    {
        type: SpaceType.Property,
        property: greenProperties[1],
    },
    {
        type: SpaceType.CommunityChest,
    },
    {
        type: SpaceType.Property,
        property: greenProperties[2],
    },
    {
        type: SpaceType.Railroad,
        railroad: {
            name: "Short Line",
            price: 200,
            mortgage: 100,
            rent: 25,
        }
    },
    {
        type: SpaceType.Chance,
    },
    {
        type: SpaceType.Property,
        property: darkBlueProperties[1],
    },
    {
        type: SpaceType.Tax,
        tax: {
            name: "Luxury Tax",
            amount: 100,
        }
    },
    {
        type: SpaceType.Property,
        property: darkBlueProperties[0],
    }
];

export const bottomSpaces: SpaceInterface[] = [
    {
        type: SpaceType.Property,
        property: lightBlueProperties[2],
    },
    {
        type: SpaceType.Property,
        property: lightBlueProperties[1],
    },
    {
        type: SpaceType.Chance
    },
    {
        type: SpaceType.Property,
        property: lightBlueProperties[0],
    },
    {
        type: SpaceType.Railroad,
        railroad: {
            name: "Pennsylvania Railroad",
            price: 200,
            mortgage: 100,
            rent: 25,
        }
    },
    {
        type: SpaceType.Tax,
        tax: {
            name: "Income Tax",
            amount: 200,
        }
    },
    {
        type: SpaceType.Property,
        property: brownProperties[1],
    },
    {
        type: SpaceType.CommunityChest,
    },
    {
        type: SpaceType.Property,
        property: brownProperties[0],
    }
];

export const leftSpaces: SpaceInterface[] = [
    {
        type: SpaceType.Property,
        property: orangeProperties[2],
    },
    {
        type: SpaceType.Property,
        property: orangeProperties[1],
    },
    {
        type: SpaceType.CommunityChest,
    },
    {
        type: SpaceType.Property,
        property: orangeProperties[0],
    },
    {
        type: SpaceType.Railroad,
        railroad: {
            name: "Reading Railroad",
            price: 200,
            mortgage: 100,
            rent: 25,
        }
    },
    {
        type: SpaceType.Property,
        property: pinkProperties[2],
    },
    {
        type: SpaceType.Property,
        property: pinkProperties[1],
    },
    {
        type: SpaceType.Utility,
        utility: {
            name: "Electric Company",
            price: 150,
            mortgage: 75,
            icon: ImPower,
        }
    },
    {
        type: SpaceType.Property,
        property: pinkProperties[0],
    }
];