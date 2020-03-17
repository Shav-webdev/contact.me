import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navItem.module.css';
import MenuItem from '@material-ui/core/MenuItem';

export default function NavItem(props) {
    return (
        <MenuItem>
            <Link to={props.href} className={styles.navItem}>
                {props.children}
            </Link>
        </MenuItem>
    );
}
