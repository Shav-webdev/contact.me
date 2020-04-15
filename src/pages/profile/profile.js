import React, { useEffect } from "react";
import QueryMessage from "../../components/queryMessage/queryMessage";
import { connect } from "react-redux";
import { autoLoginThunk, getUserThunk } from "../../redux/thunks";

function Profile(props) {
    const {
        showMessage,
        authMessage,
        authMessageType,
        getUserById,
        autoLogin,
        isLogin,
    } = props;

    useEffect(() => {
        autoLogin();
        // eslint-disable-next-line
    }, [isLogin]);

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem("auth")).userId;
        getUserById(userId);
        // eslint-disable-next-line
    }, []);

    return (
        <>
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
    const { showMessage, authMessage, authMessageType, isLogin } = auth;
    return {
        showMessage,
        authMessage,
        authMessageType,
        isLogin,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUserById: id => dispatch(getUserThunk(id)),
        autoLogin: () => dispatch(autoLoginThunk()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
