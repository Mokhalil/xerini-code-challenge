import {observer} from 'mobx-react-lite';
import React, {Fragment, useContext, useEffect, useState} from 'react';
import {StoreContext} from '../stores/_root_store';
import {Route, Switch, withRouter} from 'react-router-dom';
import LoginPage from "../../features/login/login-page";
import PrivateRoute from "./private-route";
import DashboardPage from "../../features/dashboard/dashboard-page";
import ProjectsPage from "../../features/projects/projects-page";
import PublicRoute from "./public-route";
import PageNotFound from './page-not-found';
import TeamPage from "../../features/team/team-page";
import ProfileViewPage from "../../features/profile/view/profile-page";
import ProfileEditPage from "../../features/profile/form/profile-edit-page";

function App() {

    const store = useContext(StoreContext);
    const [hasError, setError] = useState();


    useEffect(()=>{
        store.Users.GetUser().then(()=>{}).catch((err)=>setError(err));
    })

    return (
        <Fragment>
            <Switch>
                <PublicRoute exact path={'/signin'} restricted={true} component={LoginPage}/>
                <PrivateRoute exact path={'/'} component={DashboardPage}/>
                <Route
                    path={'/(.+)'}
                    render={() => (
                        <Fragment>
                            <Switch>
                                <PrivateRoute exact path={'/dashboard'} component={DashboardPage}/>
                                <PrivateRoute exact path={'/projects'} component={ProjectsPage}/>
                                <PrivateRoute exact path={'/team'} component={TeamPage}/>
                                <PrivateRoute exact path={'/profile'} component={ProfileViewPage}/>
                                <PrivateRoute exact path={'/edit/:id'} component={ProfileEditPage}/>
                                <Route component={PageNotFound}/>
                            </Switch>
                        </Fragment>
                    )}/>
            </Switch>
            {/* <ApplicationShell></ApplicationShell>*/}
        </Fragment>
    );
}

export default withRouter(observer(App));
