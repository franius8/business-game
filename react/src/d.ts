import {IconType} from "react-icons";

export interface SpaceInterface {
    type: SpaceType;
    property?: PropertyInterface;
    railroad?: RailroadInterface;
    utility?: UtilityInterface;
    tax?: TaxInterface;
    cornerSpace?: CornertSpaceInterface | GoInterface;
}

export interface PurchaseableInterface {
    name: string;
    price: number;
    mortgage: number;
}

export interface CornertSpaceInterface {
    name: string;
    icon: IconType;
    description: string;
    type: CornerSpaceType;
}

export interface PropertyInterface extends PurchaseableInterface {
    color: PropertyType;
    rentnohouse: number;
    rent1house: number;
    rent2house: number;
    rent3house: number;
    rent4house: number;
    renthotel: number;
    housecost: number;
    hotelcost: number;
}

export interface RailroadInterface extends PurchaseableInterface {
    rent: number;
}

export interface UtilityInterface extends PurchaseableInterface {
    icon: IconType
}

export interface TaxInterface {
    name: string;
    amount: number;
}

export interface GoInterface extends CornertSpaceInterface {
    amount: number;
}

export interface PlayerInterface {
    name: string;
    color: string;
    pawn: IconType;
    position: number;
    money: number;
    properties: PurchaseableInterface[];
}

export enum SpaceType {
    Property = "Property",
    Railroad = "Railroad",
    Utility = "Utility",
    Chance = "Chance",
    CommunityChest = "Community Chest",
    Tax = "Tax",
    CornerSpace = "CornerSpace",
}

export enum CornerSpaceType {
    Go = "Go",
    Jail = "Jail",
    FreeParking = "Free Parking",
    GoToJail = "Go To Jail",
}

export enum PropertyType {
    Brown = "#7e4f3c",
    LightBlue = "#b5dbed",
    Pink = "#b54481",
    Orange = "#df8f43",
    Red = "#ce0d1e",
    Yellow = "#fcf851",
    Green = "#4da560",
    DarkBlue = "#2b659f",
    Railroad = "#000000",
    Utility = "#000000",
}