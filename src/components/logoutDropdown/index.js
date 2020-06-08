import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { makeStyles } from "@material-ui/styles";
import MenuItem from "@material-ui/core/MenuItem";
import ProfileAvatar from "../avatar/profileAvatar";
import { authLogoutThunk } from "../../redux/thunks";
import { connect } from "react-redux";
import history from "../../routes/history";
import userAvatar from "../../assets/images/avatar.png";

const useStyles = makeStyles({
    root: {
        top: "64px!important",
    },
});

function LogoutDropdown(props) {
    const { logout, avatar, firstName, t } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        logout();
    };

    const handleEditAccountClick = () => {
        history.push("/edit");
    };

    const classes = useStyles();

    return (
        <div>
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <ProfileAvatar
                    url={avatar ? avatar : userAvatar}
                    alt={`${firstName ? firstName : "User"} avatar`}
                    avatarClassName="small"
                />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                classes={{ paper: classes.root }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>{t("Profile")}</MenuItem>
                <MenuItem onClick={handleEditAccountClick}>
                    {t("Edit account")}
                </MenuItem>
                <MenuItem onClick={handleLogout}>{t("Logout")}</MenuItem>
            </Menu>
        </div>
    );
}

const mapStateToProps = state => {
    const { users } = state;
    const { userData } = users;
    const { avatar, firstName } = userData;
    return { avatar, firstName };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(authLogoutThunk()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutDropdown);
