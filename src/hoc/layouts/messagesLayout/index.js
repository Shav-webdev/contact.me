import React from "react";
import classes from "./index.module.less";
import Aside from "../../sections/aside";
import Header from "../../sections/header";
import NavBar from "../../../containers/navbar/navbar";
import ProfileInfo from "../../../containers/profileInfo/profileInfo";
import Main from "../../sections/main";
import Footer from "../../sections/footer";

/**
 * @component TODO MessagesLayout add userList to create chat */
function MessagesLayout(props) {
    return (
        <>
            <Header>
                <NavBar />
            </Header>
            <div>
                <Aside>{/*TODO add usersList to chat*/}</Aside>
                <Main>{props.children}</Main>
            </div>
            <Footer />
        </>
    );
}

export default React.memo(MessagesLayout);
