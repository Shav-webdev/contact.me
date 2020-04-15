import React, { useEffect } from "react";
import Login from "../../containers/login/login";
import classes from "./home.module.css";
import { connect } from "react-redux";
import AppSpinner from "../../components/spinners/appSpinner/appSpinner";
import QueryMessage from "../../components/queryMessage/queryMessage";
import history from "../../routes/history";
import { autoLoginThunk } from "../../redux/thunks";

function Home(props) {
    const {
        showMessage,
        signing,
        isLogin,
        authMessage,
        authMessageType,
        autoLogin,
    } = props;

    useEffect(() => {
        autoLogin();
        if (isLogin) {
            history.push("/profile");
        }
    });

    if (signing) {
        return <AppSpinner />;
    }

    return (
        <>
            <div className={classes.homePage}>
                <div className={classes.textWrapper}>
                    <p className={classes.presentText}>
                        <strong>Contact.me</strong> is a global freelancing
                        platform and social networking where businesses and
                        independent professionals connect and collaborate
                        remotely.
                    </p>
                </div>
                <Login />
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
    } = auth;
    return {
        showMessage,
        signing,
        isLogin,
        authMessage,
        authMessageType,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        autoLogin: () => dispatch(autoLoginThunk()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
