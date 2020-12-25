export class LoginRquest{
    username : string = '';
    password : string ='';

    constructor(username?:string, password?: string,rememberMe?:boolean) {
        this.username = (username)?username:'';
        this.password = (password)?password:'';
        this.rememberUser = (rememberMe)?rememberMe:false;
    }
}

