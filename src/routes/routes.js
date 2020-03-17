import React from 'react';
import AppRoute from './appRoute';
import { Router, Switch } from 'react-router-dom';
// import defaultLayout from '../hoc/layout/defaultLayout/defaultLayout';
import PageNotFound from '../pages/404/pageNotFound';
import Home from '../pages/home/home';
import NotFoundLayout from '../hoc/layouts/notFoundLayout';
import HomeLayout from '../hoc/layouts/homeLayout';
// import registerLayout from '../hoc/layout/registerLayout/registerLayout';
import history from './history.js';

export default function Routes() {
    return (
        <>
            <Router history={history}>
                <Switch>
                    <AppRoute
                        exact
                        path="/"
                        layout={HomeLayout}
                        component={Home}
                    />
                    <AppRoute
                        path="*"
                        layout={NotFoundLayout}
                        component={PageNotFound}
                    />
                    {/* <AppRoute
                        path="/register/company"
                        layout={registerLayout}
                        component={RegisterAsCompany}
                    />
                    <AppRoute
                        path="/register/courier"
                        layout={registerLayout}
                        component={RegisterAsCourier}
                    /> */}
                </Switch>
            </Router>
        </>
    );
}
