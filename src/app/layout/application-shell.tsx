import React, {useContext} from 'react';
import NavigationBar from "../common/navigation-bar";
import {observer} from "mobx-react-lite";
import {StoreContext} from "../stores/_root_store";

const ApplicationShell = (props:any) => {
    const store = useContext(StoreContext);
    return (
        <div className={'max-w-screen'}>
            <NavigationBar/>
            <header className={'bg-white shadow'}>
                <div className={'max-w-7xl flex px-10 py-4 mx-auto'}>
                    <h1 className={'ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate'}>
                        Good Morning {`${store.Users.User?.first_name} ${store.Users.User?.other_names}`}
                    </h1>
                </div>
            </header>
            <main className={'bg-gray-100'}>
                <div className={'mx-auto max-w-7xl h-full px-10 py-4'}>
                    {props.children}
                </div>
            </main>
        </div>
    );
};

export default observer(ApplicationShell);