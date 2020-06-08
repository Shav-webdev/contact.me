import React from "react";
import i18n from "../../i18n";
import { withNamespaces } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import armeniaSvg from "../../assets/images/armenia.svg";
import americaSvg from "../../assets/images/america.svg";
import LanguageIcon from "@material-ui/icons/Language";
import classes from "./index.module.css";
import { changeMomentLocale } from "../../utils/moment";
import { momentConstants } from "../../utils/constants";

const StyledMenu = withStyles({
    paper: {
        border: "1px solid #d3d4d5",
    },
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "center",
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles(theme => ({
    root: {
        "&:focus": {
            backgroundColor: theme.palette.primary.main,
            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

function ChangeLanguageDropdown(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const changeLanguage = async lng => {
        console.log("changeLanguage", lng);
        changeMomentLocale(momentConstants[lng]);
        await i18n.changeLanguage(lng);
    };

    return (
        <div className={classes.center}>
            <div>
                <Button
                    style={{ color: props.isDrawer ? "#3f51b4" : "#fff" }}
                    onClick={handleClick}
                >
                    <LanguageIcon />
                </Button>
                <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <StyledMenuItem onClick={() => changeLanguage("en")}>
                        <ListItemIcon>
                            <img
                                style={{ width: 25, height: 15 }}
                                src={americaSvg}
                                alt="English"
                            />
                        </ListItemIcon>
                        <ListItemText primary="English" />
                    </StyledMenuItem>
                    <StyledMenuItem onClick={() => changeLanguage("hy")}>
                        <ListItemIcon>
                            <img
                                style={{ width: 25, height: 15 }}
                                src={armeniaSvg}
                                alt="Armenian"
                            />
                        </ListItemIcon>
                        <ListItemText primary="Armenian" />
                    </StyledMenuItem>
                </StyledMenu>
            </div>
        </div>
    );
}

export default withNamespaces()(React.memo(ChangeLanguageDropdown));
