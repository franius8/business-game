import {CommunityChestCardActionType, CommunityChestCardInterface} from "../d";

export const CommunityChestCards: CommunityChestCardInterface[] = [
    {
        id: 1,
        text: "Advance to Go (Collect $200)",
        action: CommunityChestCardActionType.AdvanceToGo,
    },
    {
        id: 2,
        text: "Go to Jail. Go directly to jail. Do not pass Go, do not collect $200",
        action:CommunityChestCardActionType.GoToJail,
    },
    {
        id: 3,
        text: "Bank error in your favor. Collect $200",
        action: CommunityChestCardActionType.CollectFromBank,
    },
    {
        id: 4,
        text: "Doctor's fees. Pay $50",
        action: CommunityChestCardActionType.PayBank,
        amount: 50,
    },
    {
        id: 5,
        text: "From sale of stock you get $50",
        action: CommunityChestCardActionType.PayBank,
    },
    {
        id: 6,
        text: "Get Out of Jail Free. This card may be kept until needed, or sold",
        action: CommunityChestCardActionType.GetOutOfJailFree,
    }]