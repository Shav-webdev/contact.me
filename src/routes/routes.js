import React, { useEffect, useState } from "react";
import AppRoute from "./appRoute";
import { Router, Switch } from "react-router-dom";
import Home from "../pages/home/home";
import About from "../pages/about/about";
import Contacts from "../pages/contacts/contacts";
import ContactsLayout from "../hoc/layouts/contactLayout/contactLayout";
import CoursesLayout from "../hoc/layouts/coursesLayout/coursesLayout";
import CoursesPage from "../pages/courses";
import AboutLayout from "../hoc/layouts/aboutLayout/aboutLayout";
import HomeLayout from "../hoc/layouts/homeLayout";
import history from "./history.js";
import Register from "../containers/register/register";
import ProfileLayout from "../hoc/layouts/profileLayout";
import Profile from "../pages/profile";
import { connect } from "react-redux";
import EditProfileLayout from "../hoc/layouts/editProfileLayout/EditProfileLayout";

function Routes(props) {
    const { isLogin, userId } = props;

    const [userID, setUserID] = useState(userId ? userId : null);

    useEffect(() => {
        setUserID(userId ? userId : null);
    }, [userId, userID, setUserID]);

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
                            path="/profile/:id"
                            layout={ProfileLayout}
                            component={Profile}
                        />
                    )}
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
                    {isLogin && (
                        <AppRoute
                            path="/courses"
                            layout={CoursesLayout}
                            component={CoursesPage}
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
    const { isLogin, authData } = auth;
    const { userId } = authData;
    return { isLogin, userId };
};

export default connect(mapStateToProps, null)(React.memo(Routes));
