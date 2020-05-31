import React from "react";
import Header from "../../sections/header";
import Main from "../../sections/main";
import Footer from "../../sections/footer";
import NavBar from "../../../containers/navbar/navbar";

export default function CoursesLayout(props) {
    return (
        <>
            <Header>
                <NavBar />
            </Header>
            <Main>{props.children}</Main>
            <Footer></Footer>
        </>
    );
}
