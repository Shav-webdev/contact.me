import React from "react";
import QueryMessage from "../../components/queryMessage/queryMessage";
import { connect } from "react-redux";

function ProfilePage(props) {
    const { showReqMessage, requestMessage, msgType } = props;

    return (
        <>
            {showReqMessage && requestMessage && (
                <QueryMessage
                    variant={msgType}
                    showMessage={showReqMessage}
                    textMessage={requestMessage}
                />
            )}
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

export default connect(mapStateToProps, null)(React.memo(ProfilePage));
