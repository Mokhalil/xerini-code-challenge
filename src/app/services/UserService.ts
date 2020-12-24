import {requests} from "./agent";
import {users} from "./data/users";
import {IUser} from "../models/user";
import {LoginRquest} from "../models/requests/login-request";
import {delay} from "../utils/delay";


export const ActualUserService = {
    list: () => requests.get('/user/all'),
    current: (): Promise<any> => requests.get('/user/current'),
    login: (loginRequest: LoginRquest): Promise<IUser> => requests.post('user/login', loginRequest),
}

export class UserService {
    async Login(loginRequest: LoginRquest): Promise<IUser> {
        let user: any = undefined;

        await delay(3000);

        const found: IUser[] = users.filter((item: IUser) => {
            return ((item.username === loginRequest.username) || (item.email === loginRequest.username))
        });

        console.log(found);
        if (found && found[0]) {
            if (found[0].password === loginRequest.password)
                user = found[0];
            else
                throw Error('Incorrect password');
        } else {
            throw Error('Unable to find user in the db.')
        }

        return new Promise((resolve) => {
            resolve(user);
        })
    }
}
