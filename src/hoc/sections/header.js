import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

export default function Header(props) {
    return (
        <AppBar position="fixed" style={{ height: "64px" }}>
            <Toolbar>{props.children}</Toolbar>
        </AppBar>
    );
}
