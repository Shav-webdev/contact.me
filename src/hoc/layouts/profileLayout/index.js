import React, { useEffect } from "react";
import Header from "../../sections/header";
import Main from "../../sections/main";
import Footer from "../../sections/footer";
import NavBar from "../../../containers/navbar/navbar";
import Aside from "../../sections/aside";
import ProfileInfo from "../../../containers/profileInfo/profileInfo";
import { makeStyles } from "@material-ui/styles";
import queryString from "query-string";
import io from "socket.io-client";
import { ENDPOINT } from "../../../utils/constants";
import { connect } from "react-redux";
import { isUserOnlineThunk } from "../../../redux/thunks";

const useStyles = makeStyles({
    main: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ccc",
    },
    mainWrapper: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        padding: "110px 25px 0",
    },
    greyBg: {
        backgroundColor: "#ccc",
        overflowX: "hidden",
    },
});

function ProfileLayout(props) {
    const { isUserOnline } = props;
    const classes = useStyles();
    let socket;
    useEffect(() => {
        document.body.classList.add(classes.greyBg);
    }, [classes.greyBg]);

    useEffect(() => {
        const { id } = queryString.parse(props?.location?.search);
        socket = io(ENDPOINT);
        socket.emit("join", { id });
        socket.on("isUserOnline", data => {
            isUserOnline(data);
        });

        return () => {
            socket.emit("disconnect", { id });
            socket.off();
        };
    }, [ENDPOINT, props?.location?.search]);

    return (
        <>
            <Header>
                <NavBar />
            </Header>
            <div className={classes.mainWrapper}>
                <Aside>
                    <ProfileInfo />
                </Aside>
                <Main classname={classes.main}>{props.children}</Main>
            </div>
            <Footer />
        </>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        isUserOnline: data => dispatch(isUserOnlineThunk(data)),
    };
};

export default connect(null, mapDispatchToProps)(React.memo(ProfileLayout));
