import {CornerSpaceType, SpaceInterface, SpaceType} from "../../d";
import {
    brownProperties,
    darkBlueProperties,
    greenProperties,
    lightBlueProperties,
    orangeProperties,
    pinkProperties,
    redProperties,
    yellowProperties
} from "../Properties/properties";
import {GiTap, GiWindowBars, GrUserPolice, ImPower, TbArrowLeftTail, TbParking} from "react-icons/all";

export const topSpaces: SpaceInterface[] = [
    {
        id: 29,
        type: SpaceType.Property,
        property: yellowProperties[2],
    },
    {
        id: 28,
        type: SpaceType.Utility,
        utility: {
            name: "Water Works",
            price: 150,
            mortgage: 75,
            icon: GiTap,
        }
    },
    {
        id: 27,
        type: SpaceType.Property,
        property: yellowProperties[1],
    },
    {
        id: 26,
        type: SpaceType.Property,
        property: yellowProperties[2],
    },
    {
        id: 25,
        type: SpaceType.Railroad,
        railroad: {
            name: "B & O. Railroad",
            price: 200,
            mortgage: 100,
            rent: 25,
        }
    },
    {
        id: 24,
        type: SpaceType.Property,
        property: redProperties[2],
    },
    {
        id: 23,
        type: SpaceType.Property,
        property: redProperties[1],
    },
    {
        id: 22,
        type: SpaceType.Chance,
    },
    {
        id: 21,
        type: SpaceType.Property,
        property: redProperties[0],
    },
];

export const rightSpaces: SpaceInterface[] = [
    {
        id: 31,
        type: SpaceType.Property,
        property: greenProperties[0],
    },
    {
        id: 32,
        type: SpaceType.Property,
        property: greenProperties[1],
    },
    {
        id: 33,
        type: SpaceType.CommunityChest,
    },
    {
        id: 34,
        type: SpaceType.Property,
        property: greenProperties[2],
    },
    {
        id: 35,
        type: SpaceType.Railroad,
        railroad: {
            name: "Short Line",
            price: 200,
            mortgage: 100,
            rent: 25,
        }
    },
    {
        id: 36,
        type: SpaceType.Chance,
    },
    {
        id: 37,
        type: SpaceType.Property,
        property: darkBlueProperties[1],
    },
    {
        id: 38,
        type: SpaceType.Tax,
        tax: {
            name: "Luxury Tax",
            amount: 100,
        }
    },
    {
        id: 39,
        type: SpaceType.Property,
        property: darkBlueProperties[0],
    }
];

export const bottomSpaces: SpaceInterface[] = [
    {
        id: 9,
        type: SpaceType.Property,
        property: lightBlueProperties[2],
    },
    {
        id: 8,
        type: SpaceType.Property,
        property: lightBlueProperties[1],
    },
    {
        id: 7,
        type: SpaceType.Chance
    },
    {
        id: 6,
        type: SpaceType.Property,
        property: lightBlueProperties[0],
    },
    {
        id: 5,
        type: SpaceType.Railroad,
        railroad: {
            name: "Pennsylvania Railroad",
            price: 200,
            mortgage: 100,
            rent: 25,
        }
    },
    {
        id: 4,
        type: SpaceType.Tax,
        tax: {
            name: "Income Tax",
            amount: 200,
        }
    },
    {
        id: 3,
        type: SpaceType.Property,
        property: brownProperties[1],
    },
    {
        id: 2,
        type: SpaceType.CommunityChest,
    },
    {
        id: 1,
        type: SpaceType.Property,
        property: brownProperties[0],
    }
];

export const leftSpaces: SpaceInterface[] = [
    {
        id: 19,
        type: SpaceType.Property,
        property: orangeProperties[2],
    },
    {
        id: 18,
        type: SpaceType.Property,
        property: orangeProperties[1],
    },
    {
        id: 17,
        type: SpaceType.CommunityChest,
    },
    {
        id: 16,
        type: SpaceType.Property,
        property: orangeProperties[0],
    },
    {
        id: 15,
        type: SpaceType.Railroad,
        railroad: {
            name: "Reading Railroad",
            price: 200,
            mortgage: 100,
            rent: 25,
        }
    },
    {
        id: 14,
        type: SpaceType.Property,
        property: pinkProperties[2],
    },
    {
        id: 13,
        type: SpaceType.Property,
        property: pinkProperties[1],
    },
    {
        id: 12,
        type: SpaceType.Utility,
        utility: {
            name: "Electric Company",
            price: 150,
            mortgage: 75,
            icon: ImPower,
        }
    },
    {
        id: 11,
        type: SpaceType.Property,
        property: pinkProperties[0],
    }
];

export const cornerSpaces: SpaceInterface[] = [
    {
        id: 20,
        type: SpaceType.CornerSpace,
        cornerSpace: {
            name: "Free Parking",
            icon: TbParking,
            type: CornerSpaceType.FreeParking,
            description: "Free Parking"
        }
    },
    {
        id: 30,
        type: SpaceType.CornerSpace,
        cornerSpace: {
            name: "Go To Jail",
            icon: GrUserPolice,
            type: CornerSpaceType.GoToJail,
            description: "Go directly to Jail. Do not pass Go, do not collect $200"
        }
    },
    {
        id: 10,
        type: SpaceType.CornerSpace,
        cornerSpace: {
            name: "Jail",
            icon: GiWindowBars,
            type: CornerSpaceType.Jail,
            description: "Just visiting"
        }
    },
    {
        id: 0,
        type: SpaceType.CornerSpace,
        cornerSpace: {
            name: "Go",
            icon: TbArrowLeftTail,
            type: CornerSpaceType.Go,
            amount: 200,
            description: "Collect $200 as you pass Go"
        }
    },
    ]

export const allSpaces: SpaceInterface[] = [
    ...topSpaces,
    ...rightSpaces,
    ...bottomSpaces,
    ...leftSpaces,
    ...cornerSpaces,
];