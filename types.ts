export interface Evet{
    event: string;
    date: Date;
    roles: Array<string>;
    location: Place
}

export interface Place{
    Plant: string;
    country: string;
    provice: string;
    street : string;
}