import {ChanceCardActionType, ChanceCardInterface} from "../d";

export const ChanceCards: ChanceCardInterface[] = [
    {
        id: 1,
        text: "Advance to Go (Collect $200)",
        action: ChanceCardActionType.AdvanceToGo,
    },
    {
        id: 2,
        text: "Go to Jail. Go directly to jail. Do not pass Go, do not collect $200",
        action: ChanceCardActionType.GoToJail,
    },
    {
        id: 3,
        text: "Make general repairs on all your property: For each house pay $25, For each hotel $100",
        action: ChanceCardActionType.MakeGeneralRepairs,
    },
    {
        id: 4,
        text: "You are assessed for street repairs: $40 per house, $115 per hotel",
        action: ChanceCardActionType.MakeStreetRepairs
    },
    {
        id: 5,
        text: "Pay poor tax of $15",
        action: ChanceCardActionType.PayBank,
        amount: 15,
    },
    {
        id: 6,
        text: "Take a trip to Reading Railroad. If you pass Go, collect $200",
        action: ChanceCardActionType.AdvanceToReadingRailroad,
    },
    {
        id: 7,
        text: "Take a walk on the Boardwalk. Advance token to Boardwalk",
        action: ChanceCardActionType.AdvanceToBoardwalk,
    },
    {
        id: 8,
        text: "You have been elected Chairman of the Board. Pay each player $50",
        action: ChanceCardActionType.PayEachPlayer,
        amount: 50,
    },
    {
        id: 9,
        text: "Your building loan matures. Collect $150",
        action: ChanceCardActionType.CollectFromBank,
        amount: 150,
    },
    {
        id: 10,
        text: "You have won a crossword competition. Collect $100",
        action: ChanceCardActionType.CollectFromBank,
        amount: 100,
    },
];