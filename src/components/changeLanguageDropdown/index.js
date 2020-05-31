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

function ChangeLanguageDropdown({ t }) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const changeLanguage = async lng => {
        await i18n.changeLanguage(lng);
    };

    return (
        <div>
            <div>
                <Button
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                >
                    {t("Language")}
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
