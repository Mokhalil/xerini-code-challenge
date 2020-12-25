import { observer } from 'mobx-react-lite';
import React, {useContext} from 'react';
import { Route, Redirect,RouteComponentProps,RouteProps } from 'react-router-dom';
import {StateStore, StoreContext} from "../stores/_root_store";


interface IProps extends RouteProps {
    component: React.ComponentType<RouteComponentProps<any>>
}
const PrivateRoute:React.FC<IProps> = ({component: Component, ...rest}) => {

    const store = useContext(StoreContext);
console.log(store.Users.IsLoggedIn)
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={(props:any) => (
            store.Users.IsLoggedIn ?
                <Component {...props} />
                : <Redirect to="/signin" />
        )} />
    );
};

export default observer(PrivateRoute);