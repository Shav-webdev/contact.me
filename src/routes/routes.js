import React from "react";
import AppRoute from "./appRoute";
import { Router, Switch } from "react-router-dom";
import PageNotFound from "../pages/404/pageNotFound";
import Home from "../pages/home/home";
import About from "../pages/about/about";
import Contacts from "../pages/contacts/contacts";
import ContactsLayout from "../hoc/layouts/contactLayout/contactLayout";
import AboutLayout from "../hoc/layouts/aboutLayout/aboutLayout";
import NotFoundLayout from "../hoc/layouts/notFoundLayout";
import HomeLayout from "../hoc/layouts/homeLayout";
import history from "./history.js";
import Register from "../containers/register/register";
import ProfileLayout from "../hoc/layouts/profileLayout";
import Profile from "../pages/profile/profile";

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
                        exact
                        path="/register"
                        layout={HomeLayout}
                        component={Register}
                    />
                    <AppRoute
                        path="/about"
                        layout={AboutLayout}
                        component={About}
                    />
                    <AppRoute
                        path="/contacts"
                        layout={ContactsLayout}
                        component={Contacts}
                    />
                    <AppRoute
                        path="/profile"
                        layout={ProfileLayout}
                        component={Profile}
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
