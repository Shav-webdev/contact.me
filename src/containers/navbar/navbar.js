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
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ContactsIcon from "@material-ui/icons/Contacts";
import Drawer from "@material-ui/core/Drawer";
import { useStyles } from "./navbarMUI";

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const [menuBtnVisible, setMenuBtnVisible] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        if (windowWidth > 690) {
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

    const classes = useStyles();

    return (
        <>
            <div className={styles.navbarWrapper}>
                <div>
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
                            <NavItem href="/">Home</NavItem>
                            <NavItem href="/about">About</NavItem>
                            <NavItem href="/contacts">Contacts</NavItem>
                        </List>
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
                        <ListItem button key={"Home"}>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Home"} />
                        </ListItem>
                        <ListItem button key={"About"}>
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary={"About"} />
                        </ListItem>
                        <ListItem button key={"Contacts"}>
                            <ListItemIcon>
                                <ContactsIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Contacts"} />
                        </ListItem>
                    </List>
                </Drawer>
            )}
        </>
    );
}
