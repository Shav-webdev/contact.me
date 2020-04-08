import {
    GET_USER_BY_ID_REQUEST,
    GET_USER_BY_ID_SUCCESS,
    GET_USER_BY_ID_FAILURE,
} from "../actions/constants";

export const getUserByIdRequest = () => ({
    type: GET_USER_BY_ID_REQUEST,
});
export const getUserByIdSuccess = data => ({
    type: GET_USER_BY_ID_SUCCESS,
    payload: data,
});
export const getUserByIdFailure = () => ({
    type: GET_USER_BY_ID_FAILURE,
});
