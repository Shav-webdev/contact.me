import {
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_FAILURE,
    SIGN_OUT_REQUEST,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_FAILURE,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAILURE,
    AUTH_SUCCESS_MESSAGE,
    AUTH_FAILURE_MESSAGE,
    HIDE_AUTH_MESSAGE,
    SIGN_UP_MESSAGE,
} from "./constants";

export const signInRequest = () => ({
    type: SIGN_IN_REQUEST,
});
export const signInSuccess = data => ({
    type: SIGN_IN_SUCCESS,
    payload: data,
});
export const signInFailure = () => ({
    type: SIGN_IN_FAILURE,
});
export const signUpRequest = () => ({
    type: SIGN_UP_REQUEST,
});
export const signUpMessage = data => ({
    type: SIGN_UP_MESSAGE,
    payload: data,
});
export const signUpFailure = () => ({
    type: SIGN_UP_FAILURE,
});

export const authRequest = () => ({
    type: AUTH_REQUEST,
});
export const authSuccess = data => ({
    type: AUTH_SUCCESS,
    payload: data,
});
export const authFailure = () => ({
    type: AUTH_FAILURE,
});

export const hideAuthMessage = () => ({
    type: HIDE_AUTH_MESSAGE,
});
export const authSuccessMessage = data => ({
    type: AUTH_SUCCESS_MESSAGE,
    payload: data,
});
export const authFailureMessage = data => ({
    type: AUTH_FAILURE_MESSAGE,
    payload: data,
});

export const signOutRequest = () => ({
    type: SIGN_OUT_REQUEST,
});
export const signOutSuccess = data => ({
    type: SIGN_OUT_SUCCESS,
    payload: data,
});
export const signOutFailure = () => ({
    type: SIGN_OUT_FAILURE,
});
