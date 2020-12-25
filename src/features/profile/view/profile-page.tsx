import React, {useContext} from 'react';
import ApplicationShell from "../../../app/layout/application-shell";
import ProfileViewSection from './profile-view-section'
import {observer} from "mobx-react-lite";
import {StoreContext} from "../../../app/stores/_root_store";

const ProfileViewPage = () => {
    const store = useContext(StoreContext);
    return (
        <ApplicationShell>
            <ProfileViewSection user={store.Users.User!}/>
        </ApplicationShell>
    );
};

export default observer(ProfileViewPage);