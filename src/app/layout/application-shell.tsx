import React from 'react';

const ApplicationShell = (props:any) => {
    return (
        <div>
            <nav className={'max-w-7xl mx-auto px-10 bg-purple-800'}>
                <div className={'flex flex-row items-center'}>
                    <div>
                        <img className={'h-12 w-64 fill-current text-gray-500'} src={'Xerini-logo-lock-up.svg'}/>
                    </div>
                    <div className={'ml-10'}>
                        <div className={'space-x-4 items-baseline'}>
                            <a href="#" className="bg-purple-700 text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                            <a href="#" className="text-white hover:bg-purple-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium">Project</a>
                            <a href="#" className="text-white hover:bg-purple-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium">Team</a>
                            <a href="#" className="text-white hover:bg-purple-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium">Reports</a>
                        </div>
                    </div>
                </div>
            </nav>
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