import api from "../../services/axiosEndpoints";
import {
    createCourseRequest,
    createCourseFailure,
    showRequestMessage,
    hideRequestMessage,
    getAllCoursesRequest,
    getAllCoursesSuccess,
    getAllCoursesFailure,
    getUserAllCoursesRequest,
    getUserAllCoursesSuccess,
    getUserAllCoursesFailure,
} from "../actions";
import { queryMessages } from "../../utils/constants";

export const createCourseThunk = course => async dispatch => {
    try {
        dispatch(createCourseRequest());
        const response = await api.createCourse.post(course);
        if (response.status !== 201) {
            throw new Error(response.data.message);
        }
        dispatch(
            showRequestMessage({
                msg: response.data.message,
                msgType: "success",
            })
        );
        dispatch(getUserAllCoursesThunk(course.userId));
        setTimeout(() => dispatch(hideRequestMessage()), 4000);
    } catch (error) {
        console.log("catch err", error);
        dispatch(createCourseFailure());
        if (
            error.response &&
            error.response.data &&
            error.response.data.message
        ) {
            console.log(error.response);
            dispatch(
                showRequestMessage({
                    msg: error.response.data.message,
                    msgType: "error",
                })
            );
            setTimeout(() => dispatch(hideRequestMessage()), 4000);
        } else if (error.message) {
            dispatch(
                showRequestMessage({
                    msg: error.message,
                    msgType: "error",
                })
            );
            setTimeout(() => dispatch(hideRequestMessage()), 4000);
        } else {
            dispatch(
                showRequestMessage({
                    msg: queryMessages.errorWentWrong,
                    msgType: "error",
                })
            );
            setTimeout(() => dispatch(hideRequestMessage()), 4000);
        }
    }
};

export const getAllCoursesThunk = () => async dispatch => {
    try {
        dispatch(getAllCoursesRequest());
        const response = await api.getCourses.get();
        if (response.status !== 200) {
            throw new Error(response.data.message);
        }
        dispatch(getAllCoursesSuccess(response.data.courses));
    } catch (error) {
        console.log(error);
        dispatch(getAllCoursesFailure());
        if (
            error.response &&
            error.response.data &&
            error.response.data.message
        ) {
            console.log(error.response);
            dispatch(
                showRequestMessage({
                    msg: error.response.data.message,
                    msgType: "error",
                })
            );
            setTimeout(() => dispatch(hideRequestMessage()), 4000);
        } else if (error.message) {
            dispatch(
                showRequestMessage({
                    msg: error.message,
                    msgType: "error",
                })
            );
            setTimeout(() => dispatch(hideRequestMessage()), 4000);
        } else {
            dispatch(
                showRequestMessage({
                    msg: queryMessages.errorWentWrong,
                    msgType: "error",
                })
            );
            setTimeout(() => dispatch(hideRequestMessage()), 4000);
        }
    }
};

export const getUserAllCoursesThunk = id => async dispatch => {
    try {
        dispatch(getUserAllCoursesRequest());
        const response = await api.getUserCourses(id).get();
        if (response.status !== 200) {
            throw new Error(response.data.message);
        }
        dispatch(getUserAllCoursesSuccess(response.data.courses));
    } catch (error) {
        console.log(error);
        dispatch(getUserAllCoursesFailure());
        if (
            error.response &&
            error.response.data &&
            error.response.data.message
        ) {
            console.log(error.response);
            dispatch(
                showRequestMessage({
                    msg: error.response.data.message,
                    msgType: "error",
                })
            );
            setTimeout(() => dispatch(hideRequestMessage()), 4000);
        } else if (error.message) {
            dispatch(
                showRequestMessage({
                    msg: error.message,
                    msgType: "error",
                })
            );
            setTimeout(() => dispatch(hideRequestMessage()), 4000);
        } else {
            dispatch(
                showRequestMessage({
                    msg: queryMessages.errorWentWrong,
                    msgType: "error",
                })
            );
            setTimeout(() => dispatch(hideRequestMessage()), 4000);
        }
    }
};
