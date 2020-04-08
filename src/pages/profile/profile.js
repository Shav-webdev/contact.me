import React, { useEffect } from "react";
import QueryMessage from "../../components/queryMessage/queryMessage";
import { connect } from "react-redux";
import { getUserThunk } from "../../redux/thunks";

function Profile(props) {
    const { showMessage, authMessage, authMessageType, getUserById } = props;

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem("auth")).userId;
        getUserById(userId);
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {showMessage && (
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
    const { showMessage, authMessage, authMessageType } = auth;
    return {
        showMessage,
        authMessage,
        authMessageType,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUserById: id => dispatch(getUserThunk(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
