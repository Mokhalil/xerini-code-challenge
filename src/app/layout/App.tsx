import {observer} from 'mobx-react-lite';
import React, {Fragment, useContext, useState} from 'react';
import {StoreContext} from '../stores/_root_store';
import {Route, Switch, withRouter} from 'react-router-dom';
import LoginPage from "../../features/login/login-page";
import PrivateRoute from "./private-route";
import DashboardPage from "../../features/dashboard/dashboard-page";
import ProjectsPage from "../../features/projects/projects-page";
import PublicRoute from "./public-route";
import PageNotFound from './page-not-found';
import TeamPage from "../../features/team/team-page";
import ReportsPage from "../../features/reports/reports-page";

function App() {

    const store = useContext(StoreContext);
    const [hasError, setError] = useState();

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
                                <PrivateRoute exact path={'/reports'} component={ReportsPage}/>
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
