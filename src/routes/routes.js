import React from "react";
import AppRoute from "./appRoute";
import { Router, Switch } from "react-router-dom";
import Home from "../pages/home/home";
import About from "../pages/about/about";
import Contacts from "../pages/contacts/contacts";
import ContactsLayout from "../hoc/layouts/contactLayout/contactLayout";
import AboutLayout from "../hoc/layouts/aboutLayout/aboutLayout";
import HomeLayout from "../hoc/layouts/homeLayout";
import history from "./history.js";
import Register from "../containers/register/register";
import ProfileLayout from "../hoc/layouts/profileLayout";
import Profile from "../pages/profile/profile";
import { connect } from "react-redux";
import EditProfileLayout from "../hoc/layouts/editProfileLayout/EditProfileLayout";

function Routes(props) {
    const { isLogin } = props;
    return (
        <>
            <Router history={history}>
                <Switch>
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
                    {isLogin && (
                        <AppRoute
                            path="/profile"
                            layout={ProfileLayout}
                            component={Profile}
                        />
                    )}
                    {isLogin && (
                        <AppRoute
                            path="/edit"
                            layout={EditProfileLayout}
                            component={Profile}
                        />
                    )}
                    <AppRoute
                        exact
                        path="*"
                        layout={HomeLayout}
                        component={Home}
                    />
                </Switch>
            </Router>
        </>
    );
}

const mapStateToProps = state => {
    const { auth } = state;
    const { isLogin } = auth;
    return { isLogin };
};

export default connect(mapStateToProps, null)(Routes);
