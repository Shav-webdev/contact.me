import {
    CREATE_COURSE_REQUEST,
    CREATE_COURSE_SUCCESS,
    CREATE_COURSE_FAILURE,
    SHOW_REQUEST_MESSAGE,
    HIDE_REQUEST_MESSAGE,
} from "../actions/constants";

const initialState = {
    creatingCourse: false,
    courses: [],
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
