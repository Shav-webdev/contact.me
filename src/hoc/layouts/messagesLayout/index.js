import React, { useEffect } from "react";
import Aside from "../../sections/aside";
import classes from "./index.module.scss";
import Header from "../../sections/header";
import NavBar from "../../../containers/navbar/navbar";
import Main from "../../sections/main";
import Footer from "../../sections/footer";
import { connect } from "react-redux";
import { getAllUsersThunk } from "../../../redux/thunks";
import UsersList from "../../../pages/messages/components/usersList";
import AppSpinner from "../../../components/spinners/appSpinner/appSpinner";
import queryString from "query-string";
import io from "socket.io-client";
import { ENDPOINT } from "../../../utils/constants";

/**
 * @component TODO MessagesLayout add userList to create chat */
function MessagesLayout(props) {
    const { getAllUsers, allUsers, gettingAllUsers, children } = props;
    let socket;
    useEffect(() => {
        getAllUsers();
    }, [getAllUsers]);

    useEffect(() => {
        const { id } = queryString.parse(children?.props?.location?.search);
        socket = io(ENDPOINT);
        socket.emit("join", { id });
        console.log(socket);

        return () => {
            socket.emit("disconnect");
            socket.off();
        };
    }, [ENDPOINT, children?.props?.location?.search]);

    const userListProps = () => {
        return {
            allUsers,
            gettingAllUsers,
        };
    };

    if (gettingAllUsers) {
        return <AppSpinner />;
    }

    return (
        <>
            <Header>
                <NavBar />
            </Header>
            <div className={classes.wrapper}>
                <Aside>
                    <UsersList {...userListProps()} />
                </Aside>
                <Main>{props.children}</Main>
            </div>
            <Footer />
        </>
    );
}

const mapStateToProps = state => {
    const { users } = state;
    const { allUsers, gettingAllUsers } = users;
    return {
        allUsers,
        gettingAllUsers,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllUsers: () => dispatch(getAllUsersThunk()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(MessagesLayout));
