import React, { useEffect, useState } from "react";
import QueryMessage from "../../components/queryMessage/queryMessage";
import { connect } from "react-redux";
import {
    autoLoginThunk,
    createCourseThunk,
    getUserThunk,
} from "../../redux/thunks";
import ModalDialog from "../../components/modal/modal";
import CreateCourse from "../courses/components/createCourse";

function ProfilePage(props) {
    const {
        showMessage,
        authMessage,
        authMessageType,
        getUserById,
        autoLogin,
        isLogin,
        showReqMessage,
        requestMessage,
        msgType,
    } = props;

    useEffect(() => {
        autoLogin();
    }, [autoLogin, isLogin]);

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem("auth")).userId;
        getUserById(userId);
    }, [getUserById]);

    return (
        <>
            {showReqMessage && requestMessage && (
                <QueryMessage
                    variant={msgType}
                    showMessage={showReqMessage}
                    textMessage={requestMessage}
                />
            )}
            {/*{showMessage && authMessage && (*/}
            {/*    <QueryMessage*/}
            {/*        variant={authMessageType}*/}
            {/*        showMessage={showMessage}*/}
            {/*        textMessage={authMessage}*/}
            {/*    />*/}
            {/*)}*/}
        </>
    );
}

const mapStateToProps = state => {
    const { auth, users } = state;
    const {
        showMessage,
        authMessage,
        authMessageType,
        isLogin,
        authData,
    } = auth;
    const { showReqMessage, requestMessage, msgType } = users;
    const { userId } = authData;
    return {
        showMessage,
        authMessage,
        authMessageType,
        isLogin,
        showReqMessage,
        requestMessage,
        msgType,
        userId,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUserById: id => dispatch(getUserThunk(id)),
        autoLogin: () => dispatch(autoLoginThunk()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
