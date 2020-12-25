import React, {useContext} from 'react';
import {Route, Redirect, RouteProps, RouteComponentProps} from 'react-router-dom';
import {StoreContext} from "../stores/_root_store";
import {observer} from "mobx-react-lite";


interface IProps extends RouteProps {
    component: React.ComponentType<RouteComponentProps<any>>,
    restricted : boolean
}

const PublicRoute:React.FC<IProps> = ({component: Component, restricted, ...rest}) => {
    const store = useContext(StoreContext);

    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            store.Users.IsLoggedIn && restricted ?
                <Redirect to="/" />
                : <Component {...props} />
        )} />
    );
};

export default observer(PublicRoute);