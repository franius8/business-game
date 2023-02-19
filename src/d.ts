export interface PropertyInterface {
    color: PropertyType;
    name: string;
    price: number;
    rentnohouse: number;
    rent1house: number;
    rent2house: number;
    rent3house: number;
    rent4house: number;
    renthotel: number;
    mortgage: number;
    housecost: number;
    hotelcost: number;
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