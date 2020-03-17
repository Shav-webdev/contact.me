import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import NavItem from '../../components/navItem/navItem';
import List from '@material-ui/core/List';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
        },
    })
);

export default function PersistentDrawerLeft() {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <NavItem href="/home">Home</NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/contacts">Contacts</NavItem>
        </List>
    );
}
