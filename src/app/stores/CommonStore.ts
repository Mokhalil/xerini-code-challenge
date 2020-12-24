import {StateStore} from "./_root_store";
import {makeAutoObservable} from 'mobx';
import { reaction } from "mobx";

export class CommonStore{
    Parent : StateStore;
    Token :string| null = null;
    AppLoaded : boolean = false;

    constructor(root:StateStore) {
        makeAutoObservable(this);
        this.Parent = root;
        this.Token = window.localStorage.getItem('jwt');

        reaction(
            () => this.Token,
            token => {
                if (token) {
                    window.localStorage.setItem('jwt', token);
                } else {
                    window.localStorage.removeItem('jwt')
                }
            }
        )
    }

    SetToken(token: string){
        this.Token = token;
    }

    SetAppLoaded(){
        this.AppLoaded=true;
    }
}