import React, { useEffect } from "react";
import classes from "./profileInfo.module.css";
import ProfileAvatar from "../../components/avatar/profileAvatar";
import { connect } from "react-redux";
import ImageUpload from "../imageUpload/imageUpload";
import { withNamespaces } from "react-i18next";

function ProfileInfo(props) {
    const { users, t } = props;
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
                <ImageUpload t={t} />
            </div>
            <div className={classes.infoWrapper}>
                <p>
                    <span>
                        <strong>{t("Name")} </strong>
                        {firstName}
                    </span>
                </p>
                <p>
                    <span>
                        <strong>{t("LastName")}</strong>
                        {lastName}
                    </span>
                </p>
                <p>
                    <span>
                        <strong>{t("PhoneNumber")} </strong>
                        {phoneNumber}
                    </span>
                </p>
                <p>
                    <span>
                        <strong>{t("Status")} </strong>
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

export default connect(
    mapStateToProps,
    null
)(withNamespaces()(React.memo(ProfileInfo)));
