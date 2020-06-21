import React, { useEffect } from "react";
import classes from "../messages.module.scss";
import ProfileAvatar from "../../../components/avatar/profileAvatar";
import history from "../../../routes/history";
import { connect } from "react-redux";
import {
    createMessageThunk,
    getMessagesByRoomIdThunk,
} from "../../../redux/thunks";

function UsersList({ allUsers, gettingAllUsers, userId, getMessages }) {
    useEffect(() => {}, [gettingAllUsers, allUsers]);

    const handleUserClick = id => {
        history.push(`/messages?roomId=${id}${userId}`);
        getMessages(`${id}${userId}`);
    };

    return (
        <div className={classes.usersMessagesWrapper}>
            <ul className={classes.usersList}>
                {allUsers && allUsers.length > 0 ? (
                    allUsers.map(user => {
                        return (
                            <li
                                onClick={() => handleUserClick(user._id)}
                                key={user._id}
                                className={classes.usersListItem}
                            >
                                <div className={classes.avatarWrapper}>
                                    <ProfileAvatar
                                        avatarClassName="small"
                                        url={user?.avatar}
                                        alt={`${user?.firstName} avatar`}
                                    />
                                </div>
                                <div className={classes.usersMsgSection}>
                                    <span
                                        className={classes.userFullName}
                                    >{`${user?.firstName} ${user?.lastName}`}</span>
                                </div>
                            </li>
                        );
                    })
                ) : (
                    <li className={classes.usersListItem}>No user founded</li>
                )}
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    const { auth } = state;
    const { authData } = auth;
    const { userId } = authData;
    return {
        userId,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onMessageSend: message => dispatch(createMessageThunk(message)),
        getMessages: roomId => dispatch(getMessagesByRoomIdThunk(roomId)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(UsersList));
