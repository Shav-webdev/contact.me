import React from "react";
import Header from "../../sections/header";
import Main from "../../sections/main";
import Footer from "../../sections/footer";
import NavBar from "../../../containers/navbar/navbar";

export default function HomeLayout(props) {
    const style = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#7F7FD5",
        background: "linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)",
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
