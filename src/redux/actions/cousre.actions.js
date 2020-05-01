import {
    CREATE_COURSE_REQUEST,
    CREATE_COURSE_SUCCESS,
    CREATE_COURSE_FAILURE,
    HIDE_REQUEST_MESSAGE,
    SHOW_REQUEST_MESSAGE,
} from "./constants";

export const createCourseRequest = () => ({
    type: CREATE_COURSE_REQUEST,
});
export const createCourseSuccess = data => ({
    type: CREATE_COURSE_SUCCESS,
    payload: data,
});
export const createCourseFailure = () => ({
    type: CREATE_COURSE_FAILURE,
});
export const showRequestMessage = data => ({
    type: SHOW_REQUEST_MESSAGE,
    payload: data,
});
export const hideRequestMessage = () => ({
    type: HIDE_REQUEST_MESSAGE,
});
