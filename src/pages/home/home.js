import React, { useEffect } from "react";
import Login from "../../containers/login/login";
import classes from "./home.module.css";
import { connect } from "react-redux";
import AppSpinner from "../../components/spinners/appSpinner/appSpinner";
import QueryMessage from "../../components/queryMessage/queryMessage";
import history from "../../routes/history";
import { autoLoginThunk } from "../../redux/thunks";
import { withNamespaces } from "react-i18next";

function Home(props) {
    const {
        showMessage,
        signing,
        isLogin,
        authMessage,
        authMessageType,
        autoLogin,
        userId,
        t,
    } = props;

    useEffect(() => {
        const checkAuth = () => {
            autoLogin();
            if (isLogin) {
                history.push("/profile/" + userId);
            }
        };
        checkAuth();
        return () => checkAuth();
    }, [isLogin, userId, autoLogin]);

    if (signing) {
        return <AppSpinner />;
    }

    return (
        <>
            <div className={classes.homePage}>
                <div className={classes.textWrapper}>
                    <p className={classes.presentText}>
                        <strong>Contact.me</strong>{" "}
                        {t("Contact.me is a global")}
                    </p>
                </div>
                <Login t={t} />
            </div>
            {showMessage && authMessage && (
                <QueryMessage
                    variant={authMessageType}
                    showMessage={showMessage}
                    textMessage={authMessage}
                />
            )}
        </>
    );
}

const mapStateToProps = state => {
    const { auth } = state;
    const {
        signing,
        showMessage,
        isLogin,
        authMessage,
        authMessageType,
        authData,
    } = auth;
    const { userId } = authData;
    return {
        showMessage,
        signing,
        isLogin,
        authMessage,
        authMessageType,
        userId,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        autoLogin: () => dispatch(autoLoginThunk()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withNamespaces()(Home));
