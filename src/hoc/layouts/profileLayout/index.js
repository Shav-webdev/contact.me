import React, { useEffect } from "react";
import Header from "../../sections/header";
import Main from "../../sections/main";
import Footer from "../../sections/footer";
import NavBar from "../../../containers/navbar/navbar";
import Aside from "../../sections/aside";
import ProfileInfo from "../../../containers/profileInfo/profileInfo";
import { makeStyles } from "@material-ui/styles";

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
        marginTop: 95,
    },
    greyBg: {
        backgroundColor: "#ccc",
    },
});

export default function ProfileLayout(props) {
    const classes = useStyles();

    useEffect(() => {
        document.body.classList.add(classes.greyBg);
    }, [classes.greyBg]);

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
