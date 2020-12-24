import {UserStore} from "./UserStore";
import {CommonStore} from "./CommonStore";
import {makeAutoObservable} from "mobx";
import {UserService} from "../services/UserService";
import { createContext } from "react";

export class StateStore {
    Users : UserStore;
    Common : CommonStore;

    constructor() {
        makeAutoObservable(this);
        this.Users = new UserStore(this);
        this.Common = new CommonStore(this);
    }
}

export const StoreContext =createContext(new StateStore());