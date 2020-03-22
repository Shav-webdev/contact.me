import React from "react";
import Login from "../../containers/login/login";
import classes from "./home.module.css";

export default function Home() {
    return (
        <div className={classes.homePage}>
            <div className={classes.textWrapper}>
                <p className={classes.presentText}>
                    <strong>Contact.me</strong> is a global freelancing platform
                    and social networking where businesses and independent
                    professionals connect and collaborate remotely.
                </p>
            </div>
            <Login />
        </div>
    );
}
