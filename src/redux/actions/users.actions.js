import {
    GET_USER_BY_ID_REQUEST,
    GET_USER_BY_ID_SUCCESS,
    GET_USER_BY_ID_FAILURE,
    UPLOAD_AVATAR_REQUEST,
    UPLOAD_AVATAR_SUCCESS,
    UPLOAD_AVATAR_FAILURE,
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
