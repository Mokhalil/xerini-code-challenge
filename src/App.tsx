import {observer} from 'mobx-react-lite';
import React, {useContext, useState} from 'react';
import './App.css';
import {StoreContext} from './app/stores/_root_store';
import ApplicationShell from "./app/layout/application-shell";

function App() {

    const store = useContext(StoreContext);
    const [hasError, setError]= useState();

    return (
        <div>
            {/*<LoginPage/>*/}
            <ApplicationShell></ApplicationShell>
        </div>
    );
}

export default observer(App);
