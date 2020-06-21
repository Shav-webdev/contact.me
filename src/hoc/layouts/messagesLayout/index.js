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

/**
 * @component TODO MessagesLayout add userList to create chat */
function MessagesLayout(props) {
    const { getAllUsers, allUsers, gettingAllUsers } = props;
    useEffect(() => {
        getAllUsers();
    }, [getAllUsers]);

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
                <UsersList {...userListProps()} />
                <Main>{props.children}</Main>
            </div>
            <Footer />
        </>
    );
}

const mapStateToProps = state => {
    const { users, messages } = state;
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
