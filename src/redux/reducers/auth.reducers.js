import {
    SIGN_IN_SUCCESS,
    SIGN_IN_REQUEST,
    SIGN_IN_FAILURE,
    SIGN_OUT_REQUEST,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_FAILURE,
    AUTH_SUCCESS,
    AUTH_FAILURE,
    AUTH_REQUEST,
    AUTH_SUCCESS_MESSAGE,
    AUTH_FAILURE_MESSAGE,
    HIDE_AUTH_MESSAGE,
    SIGN_UP_REQUEST,
    SIGN_UP_FAILURE,
    SIGN_UP_MESSAGE,
} from "../actions/constants";

const initialState = {
    signing: false,
    showMessage: false,
    token: "",
    isLogin: false,
    authMessage: "",
    authData: {},
    authMessageType: null,
    signOuting: false,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SIGN_IN_REQUEST:
            return {
                ...state,
                signing: true,
            };
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                signing: false,
                authData: { ...action.payload },
                showMessage: true,
            };
        case SIGN_IN_FAILURE:
            return {
                ...state,
                signing: false,
                showMessage: false,
            };
        case SIGN_UP_REQUEST:
            return {
                ...state,
                signing: true,
            };
        case SIGN_UP_MESSAGE:
            return {
                ...state,
                showMessage: true,
                authMessage: action.payload.msg,
                authMessageType: action.payload.messageType,
            };
        case SIGN_UP_FAILURE:
            return {
                ...state,
                signing: false,
                showMessage: false,
            };
        case AUTH_REQUEST:
            return {
                ...state,
                signing: true,
            };
        case AUTH_SUCCESS:
            return {
                ...state,
                signing: false,
                token: action.payload,
                isLogin: true,
                showMessage: true,
            };
        case AUTH_FAILURE:
            return {
                ...state,
                isLogin: false,
                signing: false,
                showMessage: false,
            };
        case AUTH_SUCCESS_MESSAGE:
            return {
                ...state,
                authMessage: action.payload.msg,
                authMessageType: action.payload.authMessageType,
            };
        case AUTH_FAILURE_MESSAGE:
            return {
                ...state,
                authMessage: action.payload.msg,
                authMessageType: action.payload.authMessageType,
                isLogin: false,
                showMessage: true,
            };
        case HIDE_AUTH_MESSAGE:
            return {
                ...state,
                showMessage: false,
            };
        case SIGN_OUT_REQUEST:
            return {
                ...state,
                signOuting: true,
                showMessage: false,
            };
        case SIGN_OUT_SUCCESS:
            return {
                ...state,
                signOuting: false,
                authData: {},
                isLogin: false,
            };
        case SIGN_OUT_FAILURE:
            return {
                ...state,
                signOuting: false,
                showMessage: false,
            };
        default:
            return state;
    }
}
