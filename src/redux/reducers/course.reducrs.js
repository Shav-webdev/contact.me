import {
    CREATE_COURSE_REQUEST,
    CREATE_COURSE_SUCCESS,
    CREATE_COURSE_FAILURE,
    SHOW_REQUEST_MESSAGE,
    HIDE_REQUEST_MESSAGE,
    GET_ALL_COURSES_REQUEST,
    GET_ALL_COURSES_SUCCESS,
    GET_ALL_COURSES_FAILURE,
    GET_USER_ALL_COURSES_REQUEST,
    GET_USER_ALL_COURSES_SUCCESS,
    GET_USER_ALL_COURSES_FAILURE,
} from "../actions/constants";

const initialState = {
    creatingCourse: false,
    gettingCourses: false,
    gettingUserCourses: false,
    allCourses: [],
    userCourses: [],
    requestMessage: "",
    msgType: null,
    showReqMessage: false,
};

export default function coursesReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_COURSE_REQUEST:
            return {
                ...state,
                creatingCourse: true,
            };
        case CREATE_COURSE_SUCCESS:
            return {
                ...state,
                creatingCourse: false,
                courses: [...action.payload],
            };
        case CREATE_COURSE_FAILURE:
            return {
                ...state,
                creatingCourse: false,
            };
        case GET_ALL_COURSES_REQUEST:
            return {
                ...state,
                gettingCourses: true,
            };
        case GET_ALL_COURSES_SUCCESS:
            return {
                ...state,
                gettingCourses: false,
                allCourses: [...action.payload],
            };
        case GET_ALL_COURSES_FAILURE:
            return {
                ...state,
                gettingCourses: false,
            };
        case GET_USER_ALL_COURSES_REQUEST:
            return {
                ...state,
                gettingUserCourses: true,
            };
        case GET_USER_ALL_COURSES_SUCCESS:
            return {
                ...state,
                gettingUserCourses: false,
                userCourses: [...action.payload],
            };
        case GET_USER_ALL_COURSES_FAILURE:
            return {
                ...state,
                gettingUserCourses: false,
            };
        case SHOW_REQUEST_MESSAGE:
            return {
                ...state,
                showReqMessage: true,
                requestMessage: action.payload.msg,
                msgType: action.payload.msgType,
            };
        case HIDE_REQUEST_MESSAGE:
            return {
                ...state,
                showReqMessage: false,
                requestMessage: "",
                msgType: null,
            };
        default:
            return state;
    }
}
