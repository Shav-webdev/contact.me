import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import styles from "./navbar.module.css";
import NavItem from "../../components/navItem/navItem";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../assets/images/logo.svg";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InfoIcon from "@material-ui/icons/Info";
import ContactsIcon from "@material-ui/icons/Contacts";
import Drawer from "@material-ui/core/Drawer";
import { useStyles } from "./navbarMUI";
import { connect } from "react-redux";
import { authLogoutThunk } from "../../redux/thunks";
import StyledButton from "../../components/styledButton/styledButton";
import Divider from "@material-ui/core/Divider";
import DrawerNavMenu from "../../components/drawerNavMenu";
import LogoutDropdown from "../../components/logoutDropdown";
import { withNamespaces } from "react-i18next";
import ChangeLanguageDropdown from "../../components/changeLanguageDropdown";

function NavBar(props) {
    const { logout, isLogin, isRegister, t, userId } = props;
    const [open, setOpen] = useState(false);
    const [menuBtnVisible, setMenuBtnVisible] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        if (windowWidth > 764) {
            setMenuBtnVisible(false);
        } else {
            setMenuBtnVisible(true);
        }
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [windowWidth]);

    const theme = useTheme();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleLogout = () => {
        logout();
    };

    const classes = useStyles();

    return (
        <>
            <div className={styles.navbarWrapper}>
                <div className={styles.logoWrapper}>
                    <NavItem href="/">
                        <img
                            className={styles.logo}
                            src={logo}
                            alt="Contact.me"
                        />
                    </NavItem>
                </div>
                {!menuBtnVisible && (
                    <>
                        <List className={styles.navbar}>
                            {isLogin ? (
                                <>
                                    <NavItem href="/">{t("Home")}</NavItem>
                                    <NavItem href="/courses">
                                        {t("Courses")}
                                    </NavItem>
                                    <NavItem href={`/messages?id=${userId}`}>
                                        {t("Messages")}
                                    </NavItem>
                                    <NavItem href="/contacts">
                                        {t("Contacts")}
                                    </NavItem>
                                    <ChangeLanguageDropdown />
                                </>
                            ) : (
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                        width: "100%",
                                    }}
                                >
                                    {isRegister && (
                                        <NavItem addStyle="navButton" href="/">
                                            {t("Login")}
                                        </NavItem>
                                    )}
                                    {!isRegister && (
                                        <NavItem
                                            addStyle="navButton"
                                            href="/register"
                                        >
                                            {t("Register")}
                                        </NavItem>
                                    )}
                                    <ChangeLanguageDropdown />
                                </div>
                            )}
                        </List>
                        {isLogin && <LogoutDropdown t={t} />}
                    </>
                )}
                {menuBtnVisible && (
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        className={clsx(styles.menu_btn, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                )}
            </div>
            <>
                {menuBtnVisible && (
                    <Drawer
                        className={classes.drawer}
                        variant="persistent"
                        anchor="right"
                        open={open}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.drawerHeader}>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === "rtl" ? (
                                    <ChevronLeftIcon />
                                ) : (
                                    <ChevronRightIcon />
                                )}
                            </IconButton>
                        </div>
                        <List>
                            {isLogin ? (
                                <>
                                    <DrawerNavMenu />
                                    <Divider />
                                    <StyledButton
                                        handleBtnClick={handleLogout}
                                        btnClassName="btnAccentBlue"
                                    >
                                        {t("Logout")}
                                    </StyledButton>
                                </>
                            ) : (
                                <>
                                    <ListItem
                                        classes={{
                                            button: classes.menuListItem,
                                        }}
                                        button
                                        key={"Login"}
                                    >
                                        <ListItemIcon>
                                            <InfoIcon />
                                        </ListItemIcon>
                                        <NavItem
                                            addStyle="sidebarItem"
                                            href="/"
                                        >
                                            {t("Login")}
                                        </NavItem>
                                    </ListItem>
                                    <ListItem
                                        classes={{
                                            button: classes.menuListItem,
                                        }}
                                        button
                                        key={"Register"}
                                    >
                                        <ListItemIcon>
                                            <ContactsIcon />
                                        </ListItemIcon>
                                        <NavItem
                                            addStyle="sidebarItem"
                                            href="/register"
                                        >
                                            {t("Register")}
                                        </NavItem>
                                    </ListItem>
                                </>
                            )}
                            <ChangeLanguageDropdown isDrawer={true} />
                        </List>
                    </Drawer>
                )}
            </>
        </>
    );
}

const mapStateToProps = state => {
    const { auth } = state;
    const { isLogin, authData } = auth;
    const { userId } = authData;

    return { isLogin, userId };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(authLogoutThunk()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withNamespaces()(NavBar));
