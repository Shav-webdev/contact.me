import {
    GET_USER_BY_ID_REQUEST,
    GET_USER_BY_ID_SUCCESS,
    GET_USER_BY_ID_FAILURE,
    UPLOAD_AVATAR_REQUEST,
    UPLOAD_AVATAR_SUCCESS,
    UPLOAD_AVATAR_FAILURE,
    HIDE_REQUEST_MESSAGE,
    SHOW_REQUEST_MESSAGE,
    GET_ALL_USERS_REQUEST,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAILURE,
    USER_IS_ONLINE,
} from "../actions/constants";

const initialState = {
    gettingUser: false,
    userData: {},
    uploadingAvatar: false,
    requestMessage: "",
    msgType: null,
    showReqMessage: false,
    allUsers: [],
    gettingAllUsers: false,
};

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_BY_ID_REQUEST:
            return {
                ...state,
                gettingUser: true,
            };
        case GET_USER_BY_ID_SUCCESS:
            return {
                ...state,
                gettingUser: false,
                userData: { ...action.payload },
            };
        case GET_USER_BY_ID_FAILURE:
            return {
                ...state,
                gettingUser: false,
            };
        case GET_ALL_USERS_REQUEST:
            return {
                ...state,
                gettingAllUsers: true,
            };
        case GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                gettingAllUsers: false,
                allUsers: [...action.payload],
            };
        case GET_ALL_USERS_FAILURE:
            return {
                ...state,
                gettingAllUsers: false,
            };
        case UPLOAD_AVATAR_REQUEST:
            return {
                ...state,
                uploadingAvatar: true,
            };
        case UPLOAD_AVATAR_SUCCESS:
            return {
                ...state,
                uploadingAvatar: false,
                userData: { ...state.userData, avatar: action.payload },
            };
        case UPLOAD_AVATAR_FAILURE:
            return {
                ...state,
                gettingUser: false,
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
        case USER_IS_ONLINE:
            return {
                ...state,
                userData: { ...state.userData, ...action.payload },
            };
        default:
            return state;
    }
}
