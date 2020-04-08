import React from "react";
import { Link } from "react-router-dom";
import styles from "./navItem.module.css";
import MenuItem from "@material-ui/core/MenuItem";

export default function NavItem(props) {
    return (
        <MenuItem>
            <Link
                to={props.href ? props.href : null}
                className={`${styles.navItem} ${styles[props.addStyle]}`}
            >
                {props.children}
            </Link>
        </MenuItem>
    );
}
