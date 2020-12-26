import React, {useContext} from 'react';
import {StoreContext} from "../../../app/stores/_root_store";
import {useHistory} from "react-router-dom";
import ApplicationShell from "../../../app/layout/application-shell";
import ProfileForm from "./profile-form";
import {observer} from "mobx-react-lite";

const ProfileConfirmPage = () => {

    const store = useContext(StoreContext);
    const history = useHistory();

    return (
        <ApplicationShell>
            <div>
                <ProfileForm user={store.Users.User!} readonly={true}/>
            </div>
        </ApplicationShell>
    );
}
export default observer(ProfileConfirmPage);