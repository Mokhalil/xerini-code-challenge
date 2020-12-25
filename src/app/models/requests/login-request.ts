export class LoginRquest{
    username : string = '';
    password : string ='';
    rememberUser : boolean=false

    constructor(username?:string, password?: string,rememberMe?:boolean) {
        this.username = (username)?username:'';
        this.password = (password)?password:'';
        this.rememberUser = (rememberMe)?rememberMe:false;
    }
}

