import api from "../../services/axiosEndpoints";
import {
    getUserByIdFailure,
    getUserByIdRequest,
    getUserByIdSuccess,
    uploadAvatarRequest,
    uploadAvatarSuccess,
    uploadAvatarFailure,
} from "../actions/users.actions";
import config from "../../services/config";
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
            }
        }
    } catch (e) {
        console.log("catch err", e);
        console.log("catch err", e.message);
    }
};
