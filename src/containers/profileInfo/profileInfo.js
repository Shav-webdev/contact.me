import React, { useEffect } from "react";
import classes from "./profileInfo.module.css";
import ProfileAvatar from "../../components/avatar/profileAvatar";
import { connect } from "react-redux";
import ImageUpload from "../imageUpload/imageUpload";

function ProfileInfo(props) {
    const { users } = props;
    const { userData } = users;
    const { approved, avatar, firstName, lastName, phoneNumber } = userData;

    useEffect(() => {}, [approved, avatar, firstName, lastName, phoneNumber]);
    return (
        <div className={classes.wrapper}>
            <div className={classes.avatarSection}>
                <ProfileAvatar
                    url={avatar}
                    alt={`${firstName} avatar`}
                    avatarClassName="large"
                />
                <ImageUpload />
            </div>
            <div className={classes.infoWrapper}>
                <p>
                    <span>
                        <strong>Name </strong>
                        {firstName}
                    </span>
                </p>
                <p>
                    <span>
                        <strong>Last name </strong>
                        {lastName}
                    </span>
                </p>
                <p>
                    <span>
                        <strong>Phone number </strong>
                        {phoneNumber}
                    </span>
                </p>
                <p>
                    <span>
                        <strong>Status </strong>
                        {approved}
                    </span>
                </p>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    const { users } = state;
    return {
        users,
    };
};

export default connect(mapStateToProps, null)(ProfileInfo);
