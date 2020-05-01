import React, { useEffect, useState } from "react";
import QueryMessage from "../../components/queryMessage/queryMessage";
import { connect } from "react-redux";
import {
    autoLoginThunk,
    createCourseThunk,
    getUserThunk,
} from "../../redux/thunks";
import ModalDialog from "../../components/modal/modal";
import CreateCourse from "./components/createCourse";

function Profile(props) {
    const {
        showMessage,
        authMessage,
        authMessageType,
        createCourse,
        getUserById,
        autoLogin,
        isLogin,
        showReqMessage,
        requestMessage,
        msgType,
        userId,
    } = props;

    const [course, setCourse] = useState("");
    const [description, setDescription] = useState("");
    const [showDescriptionValidText, setShowDescriptionValidText] = useState(
        false
    );
    const [showCourseValidText, setShowCourseValidText] = useState(false);
    const [isDescValid, setIsDescValid] = useState(false);
    const [isCourseValid, setIsCourseValid] = useState(false);

    useEffect(() => {
        autoLogin();
    }, [autoLogin, isLogin]);

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem("auth")).userId;
        getUserById(userId);
    }, [getUserById]);

    const handleCreateCourse = () => {
        if (isDescValid && isCourseValid) {
            createCourse({ course, description, userId });
        }
    };

    const isTitleValid = v => {
        setIsCourseValid(v);
    };
    const isDescriptionValid = v => {
        setIsDescValid(v);
    };

    const getCourseName = name => {
        setShowCourseValidText(false);
        setCourse(name);
    };

    const getDescription = description => {
        setShowDescriptionValidText(false);
        setDescription(description);
    };

    return (
        <>
            {showReqMessage && requestMessage && (
                <QueryMessage
                    variant={msgType}
                    showMessage={showReqMessage}
                    textMessage={requestMessage}
                />
            )}
            {showMessage && authMessage && (
                <QueryMessage
                    variant={authMessageType}
                    showMessage={showMessage}
                    textMessage={authMessage}
                />
            )}
            <ModalDialog
                title="Create new course"
                okBtnClick={handleCreateCourse}
                cancelBtnText="Close"
                okBtnText="Create"
                openBtnText="New course"
                content={
                    <CreateCourse
                        description={description}
                        course={course}
                        getCourseDesc={getDescription}
                        getCourseTitle={getCourseName}
                        isCourseDescriptionValid={isDescriptionValid}
                        isCourseTitleValid={isTitleValid}
                        showCourseDescriptionValidText={
                            showDescriptionValidText
                        }
                        showCourseNameValidText={showCourseValidText}
                    />
                }
            />
        </>
    );
}

const mapStateToProps = state => {
    const { auth, users } = state;
    const {
        showMessage,
        authMessage,
        authMessageType,
        isLogin,
        authData,
    } = auth;
    const { showReqMessage, requestMessage, msgType } = users;
    const { userId } = authData;
    return {
        showMessage,
        authMessage,
        authMessageType,
        isLogin,
        showReqMessage,
        requestMessage,
        msgType,
        userId,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUserById: id => dispatch(getUserThunk(id)),
        autoLogin: () => dispatch(autoLoginThunk()),
        createCourse: course => {
            dispatch(createCourseThunk(course));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
