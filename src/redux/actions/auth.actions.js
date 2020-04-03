import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from "./constants";

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
