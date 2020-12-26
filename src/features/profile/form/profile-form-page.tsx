import {observer} from 'mobx-react-lite';
import React, {useContext} from 'react';
import ApplicationShell from "../../../app/layout/application-shell";
import {StoreContext} from '../../../app/stores/_root_store';
import ProfileForm from "./profile-form";
import {IUser} from "../../../app/models/user";
import { useHistory } from 'react-router-dom';


const ProfileFormPage = () => {
    const store = useContext(StoreContext);
    const history = useHistory();
    const onSubmit = (user: IUser) => {
        console.log('Object to save :', user);
        store.Users.Save(user);
        history.push('/confirm');
    }
    return (
        <ApplicationShell>
            <div>
                <ProfileForm user={store.Users.User!} onSubmit={onSubmit}/>
            </div>
        </ApplicationShell>
    );
};

export default observer(ProfileFormPage);