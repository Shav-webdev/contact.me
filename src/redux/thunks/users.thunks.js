import api from "../../services/axiosEndpoints";
import {
    getUserByIdFailure,
    getUserByIdRequest,
    getUserByIdSuccess,
    uploadAvatarRequest,
    uploadAvatarSuccess,
    uploadAvatarFailure,
    showRequestMessage,
    hideAuthMessage,
    hideRequestMessage,
    getAllUsersRequest,
    getAllUsersSuccess,
    getAllUsersFailure,
} from "../actions";
import config from "../../utils/config";
import { queryMessages } from "../../utils/constants";
const { CLOUDINARY_UPLOAD_AVATAR_PRESET } = config;

export const getUserThunk = id => async dispatch => {
    try {
        dispatch(getUserByIdRequest());
        const response = await api.getUserById(id).get();
        if (response.status !== 200) {
            throw new Error(response.data.message);
        }
        dispatch(getUserByIdSuccess(response.data.user));
    } catch (e) {
        console.log(e);
        dispatch(getUserByIdFailure());
    }
};

export const getAllUsersThunk = () => async dispatch => {
    try {
        dispatch(getAllUsersRequest());
        const response = await api.getAllUser().get();
        if (response.status !== 200) {
            throw new Error(response.data.message);
        }
        dispatch(getAllUsersSuccess(response.data.users));
    } catch (e) {
        console.log(e);
        dispatch(getAllUsersFailure());
    }
};

export const uploadUserAvatarThunk = (id, file) => async dispatch => {
    try {
        dispatch(uploadAvatarRequest());
        if (file.name && file.size > 0) {
            const formData = new FormData();
            formData.append("upload_preset", CLOUDINARY_UPLOAD_AVATAR_PRESET);
            formData.append("file", file);
            const response = await api.uploadAvatar.post(formData);
            if (response && response.data.url) {
                const res = await api
                    .updateUserData(id)
                    .put({ avatar: response.data.url });
                if (res.status !== 200) {
                    throw new Error(response.data.message);
                }
                dispatch(uploadAvatarSuccess(res.data.avatar));
                dispatch(
                    showRequestMessage({
                        msg: res.data.message,
                        msgType: "success",
                    })
                );
                setTimeout(() => dispatch(hideRequestMessage()), 4000);
            }
        }
    } catch (error) {
        console.log("catch err", error);
        console.log("catch err", error.message);
        dispatch(uploadAvatarFailure());
        if (error.response && error.response.data.message) {
            console.log(error.response);
            dispatch(
                showRequestMessage({
                    msg: error.response.data.message,
                    msgType: "error",
                })
            );
            setTimeout(() => dispatch(hideAuthMessage()), 4000);
        } else if (error.message) {
            dispatch(
                showRequestMessage({
                    msg: error.message,
                    msgType: "error",
                })
            );
            setTimeout(() => dispatch(hideRequestMessage()), 4000);
        } else {
            dispatch(
                showRequestMessage({
                    msg: queryMessages.errorWentWrong,
                    msgType: "error",
                })
            );
            setTimeout(() => dispatch(hideRequestMessage()), 4000);
        }
    }
};
