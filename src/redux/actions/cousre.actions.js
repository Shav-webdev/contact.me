import {
    CREATE_COURSE_REQUEST,
    CREATE_COURSE_SUCCESS,
    CREATE_COURSE_FAILURE,
    HIDE_REQUEST_MESSAGE,
    SHOW_REQUEST_MESSAGE,
    GET_ALL_COURSES_REQUEST,
    GET_ALL_COURSES_SUCCESS,
    GET_ALL_COURSES_FAILURE,
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
export const getAllCoursesRequest = () => ({
    type: GET_ALL_COURSES_REQUEST,
});
export const getAllCoursesSuccess = data => ({
    type: GET_ALL_COURSES_SUCCESS,
    payload: data,
});
export const getAllCoursesFailure = () => ({
    type: GET_ALL_COURSES_FAILURE,
});
export const showRequestMessage = data => ({
    type: SHOW_REQUEST_MESSAGE,
    payload: data,
});
export const hideRequestMessage = () => ({
    type: HIDE_REQUEST_MESSAGE,
});
