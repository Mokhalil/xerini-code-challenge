import React from 'react';
import ApplicationShell from '../../app/layout/application-shell';
import {observer} from "mobx-react-lite";

const DashboardPage = () => {
    return (
        <ApplicationShell>
            <div className={'max-w-5xl mx-auto flex justify-center'}>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={'w-64 h-64' +
                ' text-gray-600 border-4 border-dashed rounded-full border-gray-400'}>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
            </div>
        </ApplicationShell>
    );
};

export default observer(DashboardPage);