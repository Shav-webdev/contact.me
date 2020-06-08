import React, { useEffect, useState } from "react";
import QueryMessage from "../../components/queryMessage/queryMessage";
import { connect } from "react-redux";
import { createCourseThunk, getAllCoursesThunk } from "../../redux/thunks";
import ModalDialog from "../../components/modal/modal";
import CreateCourse from "./components/createCourse";
import CoursesTabs from "./components/coursesTabs";

function CoursesPage(props) {
    const {
        createCourse,
        autoLogin,
        isLogin,
        showReqMessage,
        requestMessage,
        msgType,
        userId,
        getAllCourses,
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
        // autoLogin();
        getAllCourses();
    }, [autoLogin, isLogin, getAllCourses]);

    // useEffect(() => {
    //     const userId = JSON.parse(localStorage.getItem("auth")).userId;
    //     getUserById(userId);
    // }, [getUserById]);

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
            <CoursesTabs />
        </>
    );
}

const mapStateToProps = state => {
    const { auth, users } = state;
    const { showMessage, isLogin, authData } = auth;
    const { showReqMessage, requestMessage, msgType } = users;
    const { userId } = authData;
    return {
        showMessage,
        isLogin,
        showReqMessage,
        requestMessage,
        msgType,
        userId,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // getUserById: id => dispatch(getUserThunk(id)),
        getAllCourses: () => dispatch(getAllCoursesThunk()),
        createCourse: course => dispatch(createCourseThunk(course)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
