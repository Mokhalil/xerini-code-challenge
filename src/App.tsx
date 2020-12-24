import {observer} from 'mobx-react-lite';
import React, {useContext, useEffect, useState} from 'react';
import './App.css';
import {StoreContext} from './app/stores/_root_store';

function App() {

    const store = useContext(StoreContext);
    const [hasError, setError]= useState();

    useEffect( () => {

        store.Users.Login({password: 'password12', username: 'mk'}).then((res: any) => {
            console.log(res);
        }).catch(err=>{
            console.log(err.message);
            setError(err)
        })


    }, [store.Users])

    return (
        <div className="text-6xl text-gray-900">
            Welcome
        </div>
    );
}

export default observer(App);
