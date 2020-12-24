import { IAddress } from "./address";

export interface IUser {
    id : string,
    username:string,
    first_name : string,
    other_names : string,
    address : IAddress,
    mobile : string,
    email : string,
    company : string,
    token : string,
    preferences : string [],
    password: string
}

