import {
    GET_USER_BY_ID_REQUEST,
    GET_USER_BY_ID_SUCCESS,
    GET_USER_BY_ID_FAILURE,
    UPLOAD_AVATAR_REQUEST,
    UPLOAD_AVATAR_SUCCESS,
    UPLOAD_AVATAR_FAILURE,
    HIDE_REQUEST_MESSAGE,
    SHOW_REQUEST_MESSAGE,
} from "./constants";

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
export const uploadAvatarRequest = () => ({
    type: UPLOAD_AVATAR_REQUEST,
});
export const uploadAvatarSuccess = data => ({
    type: UPLOAD_AVATAR_SUCCESS,
    payload: data,
});
export const uploadAvatarFailure = () => ({
    type: UPLOAD_AVATAR_FAILURE,
});

export const showRequestMessage = data => ({
    type: SHOW_REQUEST_MESSAGE,
    payload: data,
});
export const hideRequestMessage = () => ({
    type: HIDE_REQUEST_MESSAGE,
});
