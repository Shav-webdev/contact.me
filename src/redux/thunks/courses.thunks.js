import api from "../../services/axiosEndpoints";
import {
    createCourseRequest,
    createCourseSuccess,
    createCourseFailure,
    showRequestMessage,
    hideRequestMessage,
} from "../actions";
import { queryMessages } from "../../services/constants";

export const createCourseThunk = course => async dispatch => {
    try {
        dispatch(createCourseRequest());
        const response = await api.createCourse.post(course);
        console.log("response", response);
        if (response.status !== 201) {
            throw new Error(response.data.message);
        }
        //ToDo create get course functionality dispatch(createCourseSuccess(response.data));
        dispatch(
            showRequestMessage({
                msg: response.data.message,
                msgType: "success",
            })
        );
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
