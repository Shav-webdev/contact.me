import React, { useEffect } from "react";
import classes from "../messages.module.scss";
import ProfileAvatar from "../../../components/avatar/profileAvatar";

function UsersList({ allUsers, gettingAllUsers }) {
    useEffect(() => {}, [gettingAllUsers, allUsers]);

    return (
        <div className={classes.usersMessagesWrapper}>
            <ul className={classes.usersList}>
                {allUsers && allUsers.length > 0 ? (
                    allUsers.map(user => {
                        return (
                            <li
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

export default React.memo(UsersList);
