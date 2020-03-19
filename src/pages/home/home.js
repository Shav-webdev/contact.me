import React from 'react';
import Login from '../../containers/login/login';
import classes from './home.module.css';

export default function Home() {
    return (
        <div className={classes.homePage}>
            <Login />
        </div>
    );
}
