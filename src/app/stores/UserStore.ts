import {StateStore} from "./_root_store";
import {makeAutoObservable} from "mobx";
import {IUser} from "../models/user";
import { UserService} from '../services/UserService'
import {LoginRquest} from "../models/requests/login-request";

export class UserStore {

    Parent: StateStore;
    User : IUser|undefined = undefined;
    UserService : UserService|undefined= undefined;

    constructor(root: StateStore) {
        makeAutoObservable(this);
        this.Parent = root;
        this.UserService = new UserService();
    }

    public async Login (request : LoginRquest){
        let fromServer : IUser;

        try {
            fromServer= await this.UserService?.Login(request)!;
        }
        catch (error){
            console.log('Unable to authenticate user');
            throw  error;
        }
        return fromServer;
    }
}