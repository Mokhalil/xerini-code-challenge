import {observer} from 'mobx-react-lite';
import React, {useContext, useEffect, useState} from 'react';
import './App.css';
import {StoreContext} from './app/stores/_root_store';
import LoginPage from "./features/login/login-page";

function App() {

    const store = useContext(StoreContext);
    const [hasError, setError]= useState();

    return (
        <div>
            <LoginPage/>
        </div>
    );
}

export default observer(App);
