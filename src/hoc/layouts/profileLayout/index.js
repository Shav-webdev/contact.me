import React from "react";
import Header from "../../sections/header";
import Main from "../../sections/main";
import Footer from "../../sections/footer";
import NavBar from "../../../containers/navbar/navbar";

export default function ProfileLayout(props) {
    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ccc",
    };

    return (
        <>
            <Header>
                <NavBar />
            </Header>
            <Main style={style}>{props.children}</Main>
            <Footer></Footer>
        </>
    );
}
