import React from 'react';
import ApplicationShell from '../../app/layout/application-shell';
import {observer} from "mobx-react-lite";

const DashboardPage = () => {
    return (
        <ApplicationShell>
            Dashboard Page
        </ApplicationShell>
    );
};

export default observer(DashboardPage);