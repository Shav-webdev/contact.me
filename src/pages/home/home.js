import React from "react";
import Login from "../../containers/login/login";
import classes from "./home.module.css";
import { connect } from "react-redux";
import AppSpinner from "../../components/spinners/appSpinner/appSpinner";
import QueryMessage from "../../components/queryMessage/queryMessage";

function Home(props) {
    console.log("home props", props);
    const { showMessage, signing } = props;

    if (signing) {
        return <AppSpinner />;
    }

    return (
        <>
            <div className={classes.homePage}>
                <div className={classes.textWrapper}>
                    <p className={classes.presentText}>
                        <strong>Contact.me</strong> is a global freelancing
                        platform and social networking where businesses and
                        independent professionals connect and collaborate
                        remotely.
                    </p>
                </div>
                <Login />
            </div>
            {showMessage && <QueryMessage />}
        </>
    );
}

const mapStateToProps = state => {
    const { auth } = state;
    const { signing, showMessage, currentUserData } = auth;
    return {
        currentUserData,
        showMessage,
        signing,
    };
};

export default connect(mapStateToProps, null)(Home);
