import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../sections/header";
import NavBar from "../../../containers/navbar/navbar";
import Main from "../../sections/main";
import Footer from "../../sections/footer";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    main: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ccc",
    },
    greyBg: {
        backgroundColor: "#ccc",
    },
});
function EditProfileLayout(props) {
    const classes = useStyles();

    useEffect(() => {
        document.body.classList.add(classes.greyBg);
    }, [classes.greyBg]);

    return (
        <>
            <Header>
                <NavBar />
            </Header>
            <Main classname={classes.main}>{props.children}</Main>
            <Footer></Footer>
        </>
    );
}

const mapStateToProps = state => {
    return state;
};
// const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, null)(EditProfileLayout);
