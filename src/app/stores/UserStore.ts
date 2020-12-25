import {StateStore} from "./_root_store";
import {makeAutoObservable, runInAction} from "mobx";
import {IUser} from "../models/user";
import {UserService} from '../services/UserService'
import {LoginRquest} from "../models/requests/login-request";

export class UserStore {

    Parent: StateStore;
    User: IUser | undefined = undefined;
    Service: UserService = new UserService();

    constructor(root: StateStore) {
        makeAutoObservable(this, {Parent: false});
        this.Parent = root;
        //this.UserService = new UserService();
    }

    async GetUser() {
        let fromServer: IUser;
        try {
            fromServer = await this.Service.Current(this.Parent.Common.Token!);
            runInAction(() => {
                this.User = fromServer;
                this.Parent.Common.SetToken(fromServer.token);
            })
        } catch (error) {
            console.log('Unable to authenticate user');
            throw  error;
        }
        return fromServer;
    }

    async Login(request: LoginRquest) {
        let fromServer: IUser;
        try {
            console.log(this);
            fromServer = await this.Service?.Login(request);
            runInAction(() => {
                this.User = fromServer;
                this.Parent.Common.SetToken(fromServer.token);
            })
        } catch (error) {
            console.log('Unable to authenticate user');
            throw  error;
        }
        return fromServer;
    }

    get IsLoggedIn() {
        return !!this.User;
    }
}