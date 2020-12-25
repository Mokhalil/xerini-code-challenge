import React from 'react';
import ApplicationShell from "../../../app/layout/application-shell";
import ProfileForm from "./profile-form";

const ProfileEditPage = () => {
    return (
        <ApplicationShell>
            <ProfileForm/>
        </ApplicationShell>
    );
};

export default ProfileEditPage;