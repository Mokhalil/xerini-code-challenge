import React from 'react';
import NavigationBar from "../common/navigation-bar";

const ApplicationShell = (props:any) => {
    return (
        <div className={'max-w-screen'}>
            <NavigationBar/>
            <header className={'bg-white shadow'}>
                <div className={'max-w-7xl px-10 py-4 mx-auto'}>
                    <h1 className={'text-3xl font-bold leading-tight text-gray-900'}>
                        Dashboard
                    </h1>
                </div>
            </header>
            <main className={'bg-gray-100'}>
                <div className={'mx-auto max-w-7xl h-screen px-10 py-4'}>
                    {props.children}
                </div>
            </main>
        </div>
    );
};

export default ApplicationShell;