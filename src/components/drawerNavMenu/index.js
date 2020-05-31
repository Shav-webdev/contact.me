import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import ListItemText from "@material-ui/core/ListItemText";
import InfoIcon from "@material-ui/icons/Info";
import ContactsIcon from "@material-ui/icons/Contacts";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

export default function DrawerNavMenu(props) {
    const menuItems = [
        {
            item: "Home",
            icon: <HomeIcon />,
        },
        {
            item: "Courses",
            icon: <LibraryBooksIcon />,
        },
        {
            item: "About",
            icon: <InfoIcon />,
        },
        {
            item: "Contacts",
            icon: <ContactsIcon />,
        },
    ];
    return (
        <>
            {menuItems.map(el => (
                <ListItem button key={el.item}>
                    <ListItemIcon>{el.icon}</ListItemIcon>
                    <ListItemText primary={el.item} />
                </ListItem>
            ))}
        </>
    );
}
